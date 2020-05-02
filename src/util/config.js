'use strict';

const telegramConfig = {
	botToken: process.env.USB_TELEGRAM_BOT_TOKEN,
	donationRaiser: {
		channelId: -394787604
		// channelId: -1001178690114 //  Test
	}
} 

const dynamoDbConfig = {
	donationRaiser: {
		tableName: 'URVSquatBot-DonationRaiser' 
	}
}

module.exports = {
	telegramConfig,
	dynamoDbConfig
}
