<?php

namespace OC\Metadata\Provider;

use OC\Metadata\FileMetadata;
use OC\Metadata\IMetadataProvider;
use OCP\Files\File;

class ExifProvider implements IMetadataProvider {
	public static function groupsProvided(): array {
		return ['size', 'gps'];
	}

	public static function isAvailable(): bool {
		return extension_loaded('exif');
	}

	public function execute(File $file): array {
		$exifData = [];
		$fileDescriptor = $file->fopen('rb');

		// Needed to make reading exif data reliable.
		// This is to trigger this condition: https://github.com/php/php-src/blob/d64aa6f646a7b5e58359dc79479860164239580a/main/streams/streams.c#L710
		// But I don't understand why 1 as a special meaning.
		$data = null;
		try {
			$oldBufferSize = stream_set_chunk_size($fileDescriptor, 1);
			$data = exif_read_data($fileDescriptor, 'ANY_TAG', true);
			stream_set_chunk_size($fileDescriptor, $oldBufferSize);
		} catch (\Exception $ex) {
		}

		$size = new FileMetadata();
		$size->setGroupName('size');
		$size->setId($file->getId());
		$size->setMetadata([]);

		if (!$data) {
			$sizeResult = getimagesizefromstring($file->getContent());
			if ($sizeResult !== false) {
				$size->setMetadata([
					'width' => $sizeResult[0],
					'height' => $sizeResult[1],
				]);

				$exifData['size'] = $size;
			}
		} elseif (array_key_exists('COMPUTED', $data)) {
			if (array_key_exists('Width', $data['COMPUTED']) && array_key_exists('Height', $data['COMPUTED'])) {
				$size->setMetadata([
					'width' => $data['COMPUTED']['Width'],
					'height' => $data['COMPUTED']['Height'],
				]);

				$exifData['size'] = $size;
			}
		}

		if ($data && array_key_exists('GPS', $data)
			&& array_key_exists('GPSLatitude', $data['GPS']) && array_key_exists('GPSLatitudeRef', $data['GPS'])
			&& array_key_exists('GPSLongitude', $data['GPS']) && array_key_exists('GPSLongitudeRef', $data['GPS'])
		) {
			$gps = new FileMetadata();
			$gps->setGroupName('gps');
			$gps->setId($file->getId());
			$gps->setMetadata([
				'latitude' => $this->gpsDegreesToDecimal($data['GPS']['GPSLatitude'], $data['GPS']['GPSLatitudeRef']),
				'longitude' => $this->gpsDegreesToDecimal($data['GPS']['GPSLongitude'], $data['GPS']['GPSLongitudeRef']),
			]);

			$exifData['gps'] = $gps;
		}

		return $exifData;
	}

	public static function getMimetypesSupported(): string {
		return '/image\/.*/';
	}

	/**
	 * @param array|string $coordinates
	 */
	private static function gpsDegreesToDecimal($coordinates, ?string $hemisphere): float {
		if (is_string($coordinates)) {
			$coordinates = array_map("trim", explode(",", $coordinates));
		}

		if (count($coordinates) !== 3) {
			throw new \Exception('Invalid coordinate format: ' . json_encode($coordinates));
		}

		[$degrees, $minutes, $seconds] = array_map(function (string $rawDegree) {
			$parts = explode('/', $rawDegree);

			if ($parts[1] === '0') {
				return 0;
			}

			return floatval($parts[0]) / floatval($parts[1] ?? 1);
		}, $coordinates);

		$sign = ($hemisphere === 'W' || $hemisphere === 'S') ? -1 : 1;
		return $sign * ($degrees + $minutes / 60 + $seconds / 3600);
	}
}
