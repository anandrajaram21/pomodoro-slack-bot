/* eslint-disable no-console */
const { getInitialView } = require('../../views');

const publishInitialView = async ({ event, client }) => {
  try {
    const result = await client.views.publish({
      user_id: event.user,
      view: getInitialView()
    });
    console.log(`Published initial view to user ${event.user}: ${result.view.id}`);
  } catch (error) {
    console.error(`Error publishing initial view to user ${event.user}: ${error}`);
  }
};

module.exports = publishInitialView;
