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
	<section>
		<input ref="input"
			type="file"
			@change="onChange">

		<NcSettingsSection :title="t('theming', 'Theming')"
			:description="t('theming', 'Theming makes it possible to easily customize the look and feel of your instance and supported clients. This will be visible for all users.')"
			:doc-url="docUrl">

			<div class="admin-theming">
				<NcNoteCard v-if="!isThemable"
					type="error"
					:show-alert="true">
					<p>{{ notThemableErrorMessage }}</p>
				</NcNoteCard>

				<NcLoadingIcon v-if="showLoading"
					:size="20"
					:title="t('theming', 'Loading theming settings')" />

				<NcNoteCard v-if="showSuccess"
					type="success">
					<p>{{ t('theming', 'Saved') }}</p>
				</NcNoteCard>


				<div class="admin-theming__field">
					<label for="admin-theming-name">{{ t('theming', 'Name') }}</label>
					<NcTextField id="admin-theming-name"
						:value.sync="name"
						:label-outside="true"
						maxlength="250"
						:placeholder="t('theming', 'Name')"
						:show-trailing-button="name !== 'Nextcloud'"
						@trailing-button-click="undo"
						@keydown.enter=""
					>

						<!-- PENDING custom trailing-button-icon requires https://github.com/nextcloud/nextcloud-vue/pull/3323 -->

						<template #trailing-button-icon>
							<Undo :title="t('theming', 'Reset to default')" :size="20" />
						</template>
					</NcTextField>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-url">{{ t('theming', 'Web link') }}</label>
					<NcTextField id="admin-theming-url"
						:value.sync="url"
						:label-outside="true"
						maxlength="500"
						placeholder="https://…"
						type="url"
						:show-trailing-button="url !== 'https://nextcloud.com'"
						@trailing-button-click="undo"
						@keydown.enter=""
					>
						<template #trailing-button-icon>
							<Undo :title="t('theming', 'Reset to default')" :size="20" />
						</template>
					</NcTextField>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-slogan">{{ t('theming', 'Slogan') }}</label>
					<NcTextField id="admin-theming-slogan"
						:value.sync="slogan"
						:label-outside="true"
						maxlength="500"
						:placeholder="t('theming', 'Slogan')"
						:show-trailing-button="slogan !== t('theming', 'a safe home for all your data')"
						@trailing-button-click="undo"
						@keydown.enter=""
					>
						<template #trailing-button-icon>
							<Undo :title="t('theming', 'Reset to default')" :size="20" />
						</template>
					</NcTextField>
				</div>


				<div class="admin-theming__field">

					<!-- PENDING advanced color picker fields requires https://github.com/nextcloud/nextcloud-vue/pull/3324 -->

					<label for="admin-theming-color">{{ t('theming', 'Color') }}</label>
					<NcColorPicker :value.sync="color"
						@update:value="updateTheming">
						<NcButton type="primary"
							id="admin-theming-color">
							{{ color }}
						</NcButton>
						<NcButton v-if="color !== '#0082c9'" type="tertiary">{{ t('theming', 'Reset to default') }}</NcButton>
					</NcColorPicker>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-logo">{{ t('theming', 'Logo') }}</label>
					<NcButton id="admin-theming-logo"
						type="tertiary"
						@click="activateLocalFilePicker('logo')">
						<template #icon>
							<Upload :size="20" />
						</template>
						{{ t('theming', 'Upload new logo') }}
					</NcButton>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-login-background">{{ t('theming', 'Login image') }}</label>
					<NcButton id="admin-theming-login-background"
						type="tertiary"
						@click="activateLocalFilePicker('background')">
						<template #icon>
							<Upload :size="20" />
						</template>
						{{ t('theming', 'Upload new login background') }}
					</NcButton>
					<NcButton v-if="loginBackground !== defaultLoginBackground" type="tertiary">{{ t('theming', 'Reset to default') }}</NcButton>
					<NcButton v-else
						type="tertiary"
						@click="">
						<template #icon>
							<Delete :title="t('theming', 'Remove background image')" :size="20" />
						</template>
					</NcButton>
				</div>

				<div class="admin-theming__preview">
					<div class ="admin-theming__preview-logo"/>
				</div>
			</div>
		</NcSettingsSection>

		<NcSettingsSection :title="t('theming', 'Advanced options')">
			<div class="admin-theming-advanced">
				<div class="admin-theming__field">
					<label for="admin-theming-legal-notice-url">{{ t('theming', 'Legal notice link') }}</label>
					<NcTextField id="admin-theming-legal-notice-url"
						:value.sync="legalNoticeUrl"
						:label-outside="true"
						maxlength="500"
						placeholder="https://…"
						type="url"
						:show-trailing-button="legalNoticeUrl !== ''"
						@trailing-button-click="undo"
						@keydown.enter=""
					>
						<template #trailing-button-icon>
							<Undo :title="t('theming', 'Reset to default')" :size="20" />
						</template>
					</NcTextField>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-privacy-policy-url">{{ t('theming', 'Privacy policy link') }}</label>
					<NcTextField id="admin-theming-privacy-policy-url"
						:value.sync="privacyPolicyUrl"
						:label-outside="true"
						maxlength="500"
						placeholder="https://…"
						type="url"
						:show-trailing-button="privacyPolicyUrl !== ''"
						@trailing-button-click="undo"
						@keydown.enter=""
					>
						<template #trailing-button-icon>
							<Undo :title="t('theming', 'Reset to default')" :size="20" />
						</template>
					</NcTextField>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-header-logo">{{ t('theming', 'Header logo') }}</label>
					<NcButton id="admin-theming-header-logo"
						type="tertiary"
						@click="activateLocalFilePicker('logoheader')">
						<template #icon>
							<Upload :size="20" />
						</template>
						{{ t('theming', 'Upload new header logo') }}
					</NcButton>
					<div class="admin-theming-header-logo-preview" />
					<NcButton v-if="loginBackground !== defaultLoginBackground" type="tertiary">{{ t('theming', 'Reset to default') }}</NcButton>
				</div>

				<div class="admin-theming__field">
					<label for="admin-theming-favicon">{{ t('theming', 'Favicon') }}</label>
					<NcButton id="admin-theming-favicon"
						type="tertiary"
						@click="activateLocalFilePicker('favicon')">
						<template #icon>
							<Upload :size="20" />
						</template>
						{{ t('theming', 'Upload new favicon') }}
					</NcButton>
					<div class="admin-theming-favicon-preview" />
					<NcButton v-if="loginBackground !== defaultLoginBackground" type="tertiary">{{ t('theming', 'Reset to default') }}</NcButton>
				</div>

				<a v-if="!canThemeIcons"
					:href="docUrlIcons"
					rel="noreferrer noopener">
					<em>{{ t('theming', 'Install the ImageMagick PHP extension with support for SVG images to automatically generate favicons based on the uploaded logo and color.') }}</em>
				</a>
			</div>
		</NcSettingsSection>
	</section>
</template>

<script>
import axios from '@nextcloud/axios'
import { generateUrl } from '@nextcloud/router'
import { loadState } from '@nextcloud/initial-state'
import { showError } from '@nextcloud/dialogs'

import {
	NcButton,
	NcColorPicker,
	NcLoadingIcon,
	NcSettingsSection,
	NcTextField,
} from '@nextcloud/vue'
import Upload from 'vue-material-design-icons/Upload.vue'
import Undo from 'vue-material-design-icons/UndoVariant.vue'
import Delete from 'vue-material-design-icons/Delete.vue'

const {
	canThemeIcons,
	color,
	docUrl,
	docUrlIcons,
	isThemable,
	legalNoticeUrl,
	name,
	notThemableErrorMessage,
	privacyPolicyUrl,
	slogan,
	url,
} = loadState('theming', 'adminThemingParameters')

export default {
	name: 'AdminTheming',

	components: {
		Delete,
		NcButton,
		NcColorPicker,
		NcLoadingIcon,
		NcSettingsSection,
		NcTextField,
		Undo,
		Upload,
	},

	data() {
		return {
			canThemeIcons,
			color,
			docUrl,
			docUrlIcons,
			isThemable,
			legalNoticeUrl,
			name,
			notThemableErrorMessage,
			privacyPolicyUrl,
			slogan,
			url,

			currrentKey: null,

			showSuccess: false,
			showLoading: false,
		}
	},

	computed: {
	},

	methods: {
		async updateTheming(key, value) {
			const url = generateUrl('/apps/theming/ajax/updateStylesheet')
			try {
				await axios.post(url, { setting: key, value })
				this.$emit('update:theming')
			} catch (e) {
				showError(e.message)
			}
		},

		activateLocalFilePicker(key) {
			this.currrentKey = key
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
				this.$emit('update:theming')
			} catch (e) {
				showError(e.message)
			}
		},

		async undo(key) {
			const url = generateUrl('/apps/theming/ajax/undoChanges')
			try {
				await axios.post(url, { setting: key })
				this.$emit('update:theming')
			} catch (e) {
				showError(e.message)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.admin-theming,
.admin-theming-advanced {
	display: flex;
	flex-direction: column;
	gap: 14px 0;

	&__field {
		display: flex;

		label {
			width: 200px;
			white-space: nowrap;
		}
	}
}

.admin-theming {
	&__preview {
		width: 230px;
		height: 140px;
		background-size: cover;
		background-position: center center;
		text-align: center;
		margin-left: 178px;
		margin-top: 10px;
		margin-bottom: 20px;
		cursor: pointer;
		background-color: var(--color-primary);
		background-image: var(--image-background, var(--image-background-plain, url('../../../core/img/app-background.jpg'), linear-gradient(40deg, #0082c9 0%, #30b6ff 100%)));

		&-logo {
			cursor: pointer;
			width: 20%;
			height: 20%;
			margin-top: 20px;
			display: inline-block;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			background-image: var(--image-logo, url('../../../core/img/logo/logo.svg'));
		}
	}
}

input[type="file"] {
	display: none;
}
</style>
