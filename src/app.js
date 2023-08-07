const { App } = require('@slack/bolt');
const dotenv = require('dotenv');
const { registerListeners } = require('./listeners');

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

registerListeners(app);

(async () => {
  await app.start(process.env.PORT || 3000);

  // eslint-disable-next-line no-console
  console.log('⚡️ Bolt app is running!');
})();
