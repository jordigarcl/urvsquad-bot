'use strict';

const axios = require('axios');
const { telegramConfig } = require('./config')

const ROOT_URL = `https://api.telegram.org/bot${telegramConfig.botToken}`

const getUpdates = async (lastUpdateId) => 
	axios.get(ROOT_URL + '/getUpdates', {
		params: {
			offset: lastUpdateId
		}
	})

const sendMessage = async (chat_id, text) => 
	axios.post(ROOT_URL + '/sendMessage', {
		chat_id: chat_id,
		text: text,
		parse_mode: 'HTML'
	})

module.exports = {
	getUpdates, sendMessage
}
