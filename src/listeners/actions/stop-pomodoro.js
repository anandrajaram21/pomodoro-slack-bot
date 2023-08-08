const timer = require('../../utils');
const { getInitialView } = require('../../views');

const stopPomodoroTimer = async ({ ack, body, client }) => {
  await ack();

  timer.stop();

  await client.views.update({
    view_id: body.view.id,
    view: getInitialView()
  });
};

module.exports = stopPomodoroTimer;
