'use strict';

let dotenv = require('dotenv');
let Slack = require('slack-node');

let channel, message;
let slack = new Slack();

// Load environment variables so we can set the webhook URL for this Slack instance
dotenv.load();

slack.setWebhook(process.env.SLACK_WEBHOOK_URL);

if (process.argv.indexOf('-c') > -1) {
  channel = process.argv[process.argv.indexOf('-c') + 1];
}

if (process.argv.indexOf('-m') > -1) {
  message = process.argv[process.argv.indexOf('-m') + 1];
}

function post(channel, message) {
  if (!channel || !message) {
    throw new Error('missing input');
  }
  
  slack.webhook({
    channel: channel,
    username: "brobot",
    icon_emoji: ":robot_face:",
    text: message
  }, (err, response) => {
    if (err) {
      process.stdout.write('error: ', err);
    }
    process.stdout.write('success!');
  });
}

post(channel, message);
