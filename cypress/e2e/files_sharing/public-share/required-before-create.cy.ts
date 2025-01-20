/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import type { ShareContext } from './setup-public-share.ts'
import { setupData, createShare } from './setup-public-share.ts'

describe('files_sharing: Before create checks', () => {

	let shareContext: ShareContext

	before(() => {
		// Setup data for the shared folder once before all tests
		cy.createRandomUser().then((randomUser) => {
			shareContext = {
				user: randomUser,
			}
		})
	})

	afterEach(() => {
		cy.runOccCommand('config:app:delete core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:delete core shareapi_default_expire_date')
		cy.runOccCommand('config:app:delete core shareapi_enforce_expire_date')
		cy.runOccCommand('config:app:delete core shareapi_expire_after_n_days')
	})

	it('Checks if user can create share when both password and expiration date are enforced', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_expire_date')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')

		const shareName = 'passwordAndExpireEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforcePassword: true,
		  enforceExpirationDate: true,
		  defaultExpirationDateSet: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share when password is enforced and expiration date has a default set', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')

		const shareName = 'passwordEnforcedDefaultExpire'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforcePassword: true,
		  defaultExpirationDateSet: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share when password is optionally requested and expiration date is enforced', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_expire_date')

		const shareName = 'defaultPasswordExpireEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforceExpirationDate: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share when password is optionally requested and expiration date have defaults set', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')

		const shareName = 'defaultPasswordAndExpire'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  defaultExpirationDateSet: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with password enforced and expiration date set but not enforced', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_expire_date')

		const shareName = 'passwordEnforcedExpireSetNotEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforcePassword: true,
		  defaultExpirationDateSet: true,
		  enforceExpirationDate: false,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with both password and expiration date not enforced, but defaults set', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_expire_date')

		const shareName = 'defaultPasswordExpireNotEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  enforcePassword: false,
		  enforceExpirationDate: false,
		  defaultExpirationDateSet: true,
		  alwaysAskForPassword: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with password not enforced but expiration date enforced', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')
		cy.runOccCommand('config:app:set --value yes core shareapi_enforce_expire_date')

		const shareName = 'noPasswordExpireEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforcePassword: false,
		  defaultExpirationDateSet: true,
		  enforceExpirationDate: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with password not enforced and expiration date has a default set', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_links_password')

		const shareName = 'defaultExpireNoPasswordEnforced'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  enforcePassword: false,
		  defaultExpirationDateSet: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with expiration date set and password not enforced', () => {
		cy.runOccCommand('config:app:set --value yes core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value yes core shareapi_default_expire_date')
		cy.runOccCommand('config:app:set --value 2 core shareapi_expire_after_n_days')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_links_password')

		const shareName = 'noPasswordExpireDefault'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, {
		  alwaysAskForPassword: true,
		  enforcePassword: false,
		  defaultExpirationDateSet: true,
		}).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

	  it('Checks if user can create share with password not enforced, expiration date not enforced, and no defaults set', () => {
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_links_password')
		cy.runOccCommand('config:app:set --value no core shareapi_enforce_expire_date')
		cy.runOccCommand('config:app:set --value no core shareapi_enable_link_password_by_default')
		cy.runOccCommand('config:app:set --value no core shareapi_default_expire_date')

		const shareName = 'noPasswordNoExpireNoDefaults'
		setupData(shareContext, shareName)
		createShare(shareContext, shareName, null).then((shareUrl) => {
		  shareContext.url = shareUrl
		  cy.log(`Created share with URL: ${shareUrl}`)
		})
	  })

})
