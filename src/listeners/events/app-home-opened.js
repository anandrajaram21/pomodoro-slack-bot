const home = require('../../user-interface/home');

const appHomeOpened = async ({ event, client }) => {
  await client.views.publish({
    user_id: event.user,
    view: home()
  });
};

module.exports = { appHomeOpened };
