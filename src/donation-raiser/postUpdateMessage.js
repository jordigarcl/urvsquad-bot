'use strict';

const moneyRaisedAccessor = require('./service/MoneyRaisedAccessor')
const messageBuilder = require('./service/TelegramMessageBuilder')
const telegramClient = require('../util/telegram-client')
const { telegramConfig } = require('../util/config')


module.exports.handler = async (event) => {
	console.log('avc')
  // Retrieve raised money as of now
  let raisedMoney = await moneyRaisedAccessor.getRaisedMoney()
	
	// Build update message
	let message = messageBuilder.buildDailyUpdateMessage(raisedMoney)
	
	// Send message
	let response = await telegramClient.sendMessage(
		telegramConfig.donationRaiser.channelId,
		message
	)

  return { 
    message: 'Your function executed successfully!', 
    event 
  };
};
