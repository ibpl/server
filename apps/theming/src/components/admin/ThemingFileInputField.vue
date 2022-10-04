<!--
  - @copyright 2022 Christopher Ng <chrng8@gmail.com>
  -
  - @author Christopher Ng <chrng8@gmail.com>
  -
  - @license AGPL-3.0-or-later
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
-->

<template>
	<div class="field">
		<div class="field__row">
			<label :for="id">{{ displayName }}</label>
			<NcButton :id="id"
				type="tertiary"
				:aria-label="ariaLabel"
				@click="activateLocalFilePicker">
				<template #icon>
					<Upload :size="20" />
				</template>
				{{ t('theming', 'Upload') }}
			</NcButton>

			<div v-if="hasPreview" class="field__preview"
				:class="{
					'field__preview--logoheader': hasPreviewLogoHeader,
					'field__preview--favicon': hasPreviewFavicon,
				}" />

			<NcButton v-if="loginBackground !== defaultLoginBackground"
				type="tertiary"
				:aria-label="t('theming', 'Reset to default')">
				<template #icon>
					<Undo :size="20" />
				</template>
			</NcButton>

			<NcButton v-else-if="name === 'background'"
				type="tertiary"
				@click="removeBackground">
				<template #icon>
					<Delete :title="t('theming', 'Remove background image')" :size="20" />
				</template>
			</NcButton>
		</div>

		<NcNoteCard v-if="showSuccess"
			type="success">
			<p>{{ t('theming', 'Saved') }}</p>
		</NcNoteCard>

		<input ref="input"
			type="file"
			@change="onChange">
	</div>
</template>

<script>
import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import { showError } from '@nextcloud/dialogs'

import { NcButton, NcNoteCard } from '@nextcloud/vue'

import Delete from 'vue-material-design-icons/Delete.vue'
import Undo from 'vue-material-design-icons/UndoVariant.vue'
import Upload from 'vue-material-design-icons/Upload.vue'

import ThemingMixin from '../../mixins/admin/ThemingMixin.js'

export default {
	name: 'ThemingFileInputField',

	components: {
		Delete,
		NcButton,
		NcNoteCard,
		Undo,
		Upload,
	},

	mixins: [
		ThemingMixin,
	],

	props: {
		name: {
			type: String,
			required: true,
		},
		defaultValue: {
			type: String,
			required: true,
		},
		displayName: {
			type: String,
			required: true,
		},
		ariaLabel: {
			type: String,
			required: true,
		},
		hasPreview: {
			type: Boolean,
			required: true,
		},
	},

	methods: {
		activateLocalFilePicker() {
			// Set to null so that selecting the same file will trigger the change event
			this.$refs.input.value = null
			this.$refs.input.click()
		},

		async onChange(e) {
			const file = e.target.files[0]

			const formData = new FormData()
			formData.append('image', file)

			const url = generateUrl('/apps/theming/ajax/uploadImage')
			try {
				await axios.post(url, formData)
				this.showSuccess = true
				setTimeout(() => { this.showSuccess = false }, 2000)
				this.$emit('update:theming')
			} catch (e) {
				showError(e.message)
			}
		},

		async removeBackground() {
			const url = generateUrl('/apps/theming/ajax/updateStylesheet')
			try {
				await axios.post(url, { setting: 'backgroundMime', value: 'backgroundColor' })
				this.showSuccess = true
				setTimeout(() => { this.showSuccess = false }, 2000)
				this.$emit('update:theming')
			} catch (error) {
				showError(e.message)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.field {
	display: flex;
	flex-direction: column;
	gap: 10px 0;

	&__row {
		display: flex;
		gap: 0 6px;

		label {
			width: 180px;
			white-space: nowrap;
		}
	}

	&__preview {
		&--logoheader {
			background-image: var(--image-logoheader);
		}
		&--favicon {
			background-image: var(--image-favicon);
		}
	}
}

input[type="file"] {
	display: none;
}
</style>
