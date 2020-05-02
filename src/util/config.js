'use strict';

const telegramConfig = {
	botToken: process.env.USB_TELEGRAM_BOT_TOKEN,
	donationRaiser: {
		channelId: -1001178690114
		// channelId: -445605234 //  Test
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
