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

module.exports = {
	getUpdates
}
