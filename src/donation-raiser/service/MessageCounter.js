'use strict';

const { telegramConfig } = require('../../util/config')

// Given a list of telegram updates, filters those that represent messages send in the 
// tracked channel, extracts the usernames of the senders and calculates the frequency 
// of each username. 
const countMessagesByUsername = (updates) => {
	let messagesByUsername = updates
		.filter(update => doesUpdateCount(update)) 
		.map(update => update.message.from.username) 
		.reduce(frequencyCounter, {}) 

	console.log('Messages by username:')
	console.log(messagesByUsername)

	return messagesByUsername
}

// Filters those updates that represent messages sent in a certain channel
function doesUpdateCount(update) {
  let isMessage = "message" in update
  let isFromDesiredChannel = telegramConfig.donationRaiser.channelId
  return isMessage && isFromDesiredChannel
}

// Reducer function that creates a map with the frequency of each item
function frequencyCounter(frequencyMap, currentItem) {
  if (!(currentItem in frequencyMap)) {
    frequencyMap[currentItem] = 0
  }
	frequencyMap[currentItem] += 1
	
  return frequencyMap;
}

module.exports = {
	countMessagesByUsername
}
