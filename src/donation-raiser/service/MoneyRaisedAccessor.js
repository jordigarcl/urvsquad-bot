'use strict';

const AWS = require('aws-sdk');
const { telegramConfig, dynamoDbConfig } = require('../../util/config')

const ddb = new AWS.DynamoDB.DocumentClient();

const getRaisedMoney = async () => {
	let params = {
		TableName: dynamoDbConfig.donationRaiser.tableName,
		KeyConditionExpression: 'chat_id = :chatId',
		ExpressionAttributeValues: {
			":chatId": telegramConfig.donationRaiser.channelId
		}
	}

	const { Items } = await ddb.query(params).promise();

	console.log('Raised money by username:')
  console.log(Items)
	return Items;
}

const putRaisedMoney = async (raisedMoney) => {
	let tableName = dynamoDbConfig.donationRaiser.tableName
	let params = {
		RequestItems: {
			[tableName]: []
		}
	}

	raisedMoney.forEach((item) => {
		params.RequestItems[tableName].push({
			PutRequest:{
				Item: {
					chat_id: item.chat_id,
					username: item.username,
					amount: item.amount,
				}
			}
		})
	})

	await ddb.batchWrite(params).promise();
}


module.exports = {
	getRaisedMoney, putRaisedMoney
}
