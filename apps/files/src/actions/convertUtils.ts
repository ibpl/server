/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { AxiosResponse } from 'axios'

import { generateOcsUrl } from '@nextcloud/router'
import { showError, showMessage } from '@nextcloud/dialogs'
import { t } from '@nextcloud/l10n'
import axios from '@nextcloud/axios'
import PQueue from 'p-queue'

import logger from '../logger'

const queue = new PQueue({ concurrency: 5 })

const requestConversion = function(fileId: number, targetMimeType: string): Promise<AxiosResponse> {
	return axios.post(generateOcsUrl('/apps/files/api/v1/convert'), {
		fileId,
		targetMimeType,
	})
}

export const convertFiles = async function(fileIds: number[], targetMimeType: string) {
	const conversions = fileIds.map(fileId => queue.add(() => requestConversion(fileId, targetMimeType)))

	// Start conversion
	const toast = showMessage(t('files', 'Converting files…'))

	// Handle results
	try {
		const results = await Promise.allSettled(conversions)
		const failed = results.filter(result => result.status === 'rejected')
		if (failed.length) {
			const messages = failed.map(result => result.reason?.response?.data?.ocs?.meta?.message) as string[]

			// If all failed files have the same error message, show it
			if (new Set(messages).size === 1) {
				showError(t('files', 'Failed to convert files: {message}', { message: messages[0] }))
				return
			}

			if (failed.length === fileIds.length) {
				showError(t('files', 'Failed to convert files'))
				return
			}
			showError(t('files', 'Some files could not be converted'))
			return
		}

		// All files converted
		showMessage(t('files', 'Files successfully converted'))
	} catch (error) {
		// Should not happen as we use allSettled and handle errors above
		showError(t('files', 'Failed to convert files'))
		logger.error('Failed to convert files', { fileIds, targetMimeType, error })
	} finally {
		// Hide loader toast
		toast.hideToast()
	}
}

export const convertFile = async function(fileId: number, targetMimeType: string) {
	const toast = showMessage(t('files', 'Converting files…'))

	try {
		await queue.add(() => requestConversion(fileId, targetMimeType))
		showMessage(t('files', 'File successfully converted'))
	} catch (error) {
		// If the server returned an error message, show it
		if (error.response?.data?.ocs?.meta?.message) {
			showError(t('files', 'Failed to convert file: {message}', { message: error.response.data.ocs.meta.message }))
			return
		}

		logger.error('Failed to convert file', { fileId, targetMimeType, error })
		showError(t('files', 'Failed to convert file'))
	} finally {
		// Hide loader toast
		toast.hideToast()
	}
}
