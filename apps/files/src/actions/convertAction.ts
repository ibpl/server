/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import type { Node, View } from '@nextcloud/files'

import { FileAction, registerFileAction } from '@nextcloud/files'
import { generateUrl } from '@nextcloud/router'
import { getCapabilities } from '@nextcloud/capabilities'
import { t } from '@nextcloud/l10n'

import AutoRenewSvg from '@mdi/svg/svg/autorenew.svg?raw'

import logger from '../logger'

type ConversionsProvider = {
	from: string,
	to: string[],
}

export const ACTION_CONVERT = 'convert'

export const registerConvertActions = () => {
	// Generate sub actions
	const convertProviders = getCapabilities()?.core?.conversions as ConversionsProvider[] ?? []
	const actions = convertProviders.map(provider => {
		return provider.to.map(to => new FileAction({
			id: `convert-${provider.from}-${to}`,
			displayName: () => t('files', 'Save as {to}', { to }),
			iconSvgInline: () => generateIconSvg(to),
			enabled: (nodes: Node[]) => {
				// Check if some of the nodes are not of the right type
				return !nodes.some(node => provider.from !== node.mime)
			},

			async exec(node: Node) {
				logger.debug(`Convert to ${provider.from}`, { node })
				return null
			},

			parent: ACTION_CONVERT,
		}))
	}).flat()

	// Register main action
	registerFileAction(new FileAction({
		id: ACTION_CONVERT,
		displayName: () => t('files', 'Save as …'),
		iconSvgInline: () => AutoRenewSvg,
		enabled: (nodes: Node[], view: View) => {
			return actions.some(action => action.enabled!(nodes, view))
		},
		async exec() {
			return null
		},
		order: 25,
	}))

	// Register sub actions
	actions.forEach(registerFileAction)
}

export const generateIconSvg = (mime: string) => {
	// Generate icon based on mime type
	const url = generateUrl('/core/mimeicon?mime=' + encodeURIComponent(mime))
	return `<svg width="32" height="32" viewBox="0 0 32 32"
		xmlns="http://www.w3.org/2000/svg">
		<image href="${url}" height="32" width="32" />
	</svg>`
}
