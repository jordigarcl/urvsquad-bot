'use strict';

// Given the current raised money, calculate how much more money has been raised by
// by each person given the number of messages they have sent.
const calculateRaisedMoney = (moneyRaised, messagesByUsername) => {

	for (let [username, numberOfMessages] of Object.entries(messagesByUsername)) {
		let index = moneyRaised.findIndex((item) => item.username == username)
		if (index >= 0) {
			moneyRaised[index].amount += (Math.floor(numberOfMessages / 2) + 1)
		}
	}

	console.log('Money raised after calculation:')
	console.log(moneyRaised)

	return moneyRaised
}

module.exports = {
	calculateRaisedMoney
}
