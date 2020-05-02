'use strict';

const telegramClient = require('../../util/telegram-client')

// Retrieves telegram updates in batch. As telegram limits updates to 100 per call, this method 
// hides the successive calls to get all updates.
const retrieveAllUpdates = async () => {

	let updates = []
	let latestUpdateId = null
	let lastCallWasNotEmpty = false
	do {
		let response = await telegramClient.getUpdates(latestUpdateId + 1)
		let retrievedUpdates = response.data.result

		if (retrievedUpdates.length > 0) {
			console.log('Retrieved updates:')
			console.log(retrievedUpdates)

			updates = updates.concat(retrievedUpdates)
			latestUpdateId = updates[updates.length - 1]['update_id']
			lastCallWasNotEmpty = true
		} else lastCallWasNotEmpty = false
	} while (lastCallWasNotEmpty)

	return updates
}

module.exports = {
	retrieveAllUpdates
}

