'use strict';

const telegramUpdateRetriever = require('./service/TelegramUpdateRetriever')
const messageCounter = require('./service/MessageCounter')
const moneyRaisedAccessor = require('./service/MoneyRaisedAccessor')
const moneyRaisedCalculator = require('./service/MoneyRaisedCalculator')

module.exports.handler = async (event) => {

  // Retrieve all telegram updates
  let updates = await telegramUpdateRetriever.retrieveAllUpdates()

  // Count messages per user
  let messagesByUsername = messageCounter.countMessagesByUsername(updates)

  // Retrieved raised money as of now
  let raisedMoney = await moneyRaisedAccessor.getRaisedMoney()

  // Calculate raised money by new messages
  raisedMoney = moneyRaisedCalculator.calculateRaisedMoney(raisedMoney, messagesByUsername)

  // Persist raised money into db
  await moneyRaisedAccessor.putRaisedMoney(raisedMoney)

  return { 
    message: 'Your function executed successfully!', 
    event 
  };
};
