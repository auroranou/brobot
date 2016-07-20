# brobots

## Set up

First install packages:
```
npm install
```

If you haven't already, create a Slack webhook integration and take note of your URL. Add it to a local .env file:
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/longstringofcharacters
```

This project uses the [Slack node SDK](https://github.com/clonn/slack-node-sdk) to trigger webhooks and [dotenv](https://github.com/motdotla/dotenv) to handle environment variables.

## Usage 
```
node slackbot.js -c "#channelName" -m "some words"
node slackbot.js -c "@somebody" -m "hey hello hi"
```
