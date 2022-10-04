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
		<NcSettingsSection :title="t('theming', 'Theming')"
			:description="t('theming', 'Theming makes it possible to easily customize the look and feel of your instance and supported clients. This will be visible for all users.')"
			:doc-url="docUrl">
			<div class="admin-theming">
				<NcNoteCard v-if="!isThemable"
					type="error"
					:show-alert="true">
					<p>{{ notThemableErrorMessage }}</p>
				</NcNoteCard>
				<ThemingTextField v-for="setting in textFieldSettings"
					:key="setting.name"
					:name="setting.name"
					:value="setting.value"
					:default-value="setting.defaultValue"
					:type="setting.type"
					:display-name="setting.displayName"
					:placeholder="setting.placeholder"
					:maxlength="setting.maxlength"
					@update:theming="updateTheming" />
				<ThemingColorPicker @update:theming="updateTheming" />
				<ThemingFileInputField v-for="setting in fileInputSettings"
					:key="setting.name"
					:name="setting.name"
					:default-value="setting.defaultValue"
					:display-name="setting.displayName"
					:aria-label="setting.ariaLabel"
					:has-preview="setting.hasPreview"
					@update:theming="updateTheming" />
				<div class="admin-theming__preview">
					<div class ="admin-theming__preview-logo"/>
				</div>
			</div>
		</NcSettingsSection>
		<NcSettingsSection :title="t('theming', 'Advanced options')">
			<div class="admin-theming-advanced">
				<ThemingTextField v-for="setting in advancedTextFieldSettings"
					:key="setting.name"
					:name="setting.name"
					:value="setting.value"
					:default-value="setting.defaultValue"
					:type="setting.type"
					:display-name="setting.displayName"
					:placeholder="setting.placeholder"
					:maxlength="setting.maxlength"
					@update:theming="updateTheming" />
				<ThemingFileInputField v-for="setting in advancedFileInputSettings"
					:key="setting.name"
					:name="setting.name"
					:default-value="setting.defaultValue"
					:display-name="setting.displayName"
					:aria-label="setting.ariaLabel"
					:has-preview="setting.hasPreview"
					@update:theming="updateTheming" />
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
import { loadState } from '@nextcloud/initial-state'

import { NcNoteCard, NcSettingsSection } from '@nextcloud/vue'

import ThemingColorPicker from './components/admin/ThemingColorPicker.vue'
import ThemingFileInputField from './components/admin/ThemingFileInputField.vue'
import ThemingTextField from './components/admin/ThemingTextField.vue'

const {
	canThemeIcons,
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
		NcNoteCard,
		NcSettingsSection,
		ThemingColorPicker,
		ThemingFileInputField,
		ThemingTextField,
	},

	data() {
		return {
			textFieldSettings: [
				{
					name: 'name',
					value: name,
					defaultValue: 'Nextcloud',
					type: 'text',
					displayName: t('theming', 'Name'),
					placeholder: t('theming', 'Name'),
					maxlength: 250,
				},
				{
					name: 'url',
					value: url,
					defaultValue: 'https://nextcloud.com',
					type: 'url',
					displayName: t('theming', 'Web link'),
					placeholder: 'https://…',
					maxlength: 500,
				},
				{
					name: 'slogan',
					value: slogan,
					defaultValue: t('theming', 'a safe home for all your data'),
					type: 'text',
					displayName: t('theming', 'Slogan'),
					placeholder: t('theming', 'Slogan'),
					maxlength: 500,
				},
			],
			fileInputSettings: [
				{
					name: 'logo',
					defaultValue: '',
					displayName: t('theming', 'Logo'),
					ariaLabel: t('theming', 'Upload new logo'),
					hasPreview: false,
				},
				{
					name: 'background',
					defaultValue: '',
					displayName: t('theming', 'Login image'),
					ariaLabel: t('theming', 'Upload new login background'),
					hasPreview: false,
				},
			],
			advancedTextFieldSettings: [
				{
					name: 'imprintUrl',
					value: legalNoticeUrl,
					defaultValue: '',
					type: 'url',
					displayName: t('theming', 'Legal notice link'),
					placeholder: 'https://…',
					maxlength: 500,
				},
				{
					name: 'privacyUrl',
					value: privacyPolicyUrl,
					defaultValue: '',
					type: 'url',
					displayName: t('theming', 'Privacy policy link'),
					placeholder: 'https://…',
					maxlength: 500,
				},
			],
			advancedFileInputSettings: [
				{
					name: 'logoheader',
					defaultValue: '',
					displayName: t('theming', 'Header logo'),
					ariaLabel: t('theming', 'Upload new header logo'),
					hasPreview: true,
				},
				{
					name: 'favicon',
					defaultValue: '',
					displayName: t('theming', 'Favicon'),
					ariaLabel: t('theming', 'Upload new favicon'),
					hasPreview: true,
				},
			],

			canThemeIcons,
			docUrl,
			docUrlIcons,
			isThemable,
			notThemableErrorMessage,
		}
	},

	methods: {
		updateTheming() {
			this.$emit('update:theming')
		},
	},
}
</script>

<style lang="scss" scoped>
.admin-theming,
.admin-theming-advanced {
	display: flex;
	flex-direction: column;
	gap: 10px 0;
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
</style>
