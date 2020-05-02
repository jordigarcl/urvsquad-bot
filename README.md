# URVSquadBot
A Telegram Bot for my friends group.

## Context
This is a [Serverless Framework](https://github.com/serverless/serverless) project implementing a [Telegram Bot](https://core.telegram.org/bots/api#sendmessage). The project uses [Node.js](https://nodejs.org/en/).

## Running Locally
You can clone this project and test in your local machine.

Once your system fulfills the requirements described below, you'll be able to start this by doing:
```bash
serverless offline
```

### Requirements
#### Serverless CLI
As this is a Serverless project, you'll need to install the Serverless CLI, which in time depends on Node. Find detailed instructions [here](https://serverless.com/framework/docs/providers/aws/guide/installation/).

#### Dependencies
Once you have the Serverless CLI installed, you will need to locally install the project dependencies. These are already defined in `package.json`, so you just need to run:

```bash
npm install
```

#### Environment Variables
You will need to setup the following environment variables in your system.
- `USB_TELEGRAM_BOT_TOKEN`: Token of the Telegram Bot. 

## Deploying to AWS
Once you finish testing your changes locally you may want to deploy the application into AWS. You'll be able to do so by simply running:
```bash
serverless deploy
```
> Beware, this will use the local AWS credentials in your machine to create all kinds of resources and configurations in your AWS account.
