'use strict';

// Given the current raised money, calculate how much more money has been raised by
// by each person given the number of messages they have sent.
const buildDailyUpdateMessage = (moneyRaised) => {
	let message = '<b>Daily Fundraiser Update</b> 📈😉'

	moneyRaised.forEach((item) => {
		let formattedAmount = (item.amount / 100).toLocaleString("es-ES", {style:"currency", currency:"EUR"});
		message += `\n- @${item.username}: ${formattedAmount}`
	})

	return message
}

module.exports = {
	buildDailyUpdateMessage
}
