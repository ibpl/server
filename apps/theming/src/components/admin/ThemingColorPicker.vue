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
			<label :for="id">{{ t('theming', 'Color') }}</label>
			<NcColorPicker :value.sync="value"
				:advanced-fields="true"
				@update:value="save">
				<!-- PENDING advanced color picker fields requires https://github.com/nextcloud/nextcloud-vue/pull/3324 -->
				<NcButton class="field__button"
					type="primary"
					:id="id">
					{{ value }}
				</NcButton>
			</NcColorPicker>
			<NcButton v-if="value !== '#0082c9'"
				type="tertiary"
				:aria-label="t('theming', 'Reset to default')">
				<template #icon>
					<Undo :size="20" />
				</template>
			</NcButton>
		</div>

		<NcNoteCard v-if="showSuccess"
			type="success">
			<p>{{ t('theming', 'Saved') }}</p>
		</NcNoteCard>
	</div>
</template>

<script>
import { loadState } from '@nextcloud/initial-state'

import { NcButton, NcColorPicker, NcNoteCard } from '@nextcloud/vue'
import Undo from 'vue-material-design-icons/UndoVariant.vue'

import ThemingMixin from '../../mixins/admin/ThemingMixin.js'

const { color } = loadState('theming', 'adminThemingParameters')

export default {
	name: 'ThemingColorPicker',

	components: {
		NcButton,
		NcColorPicker,
		NcNoteCard,
		Undo,
	},

	mixins: [
		ThemingMixin,
	],

	data() {
		return {
			name: 'color',
			value: color,
		}
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

	&__button {
		width: 230px !important;
		border-radius: var(--border-radius-large) !important;
	}
}
</style>
