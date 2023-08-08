const timer = require('../../utils');
const { getPausedTimerView } = require('../../views');

const pausePomodoroTimer = async ({ ack, body, client }) => {
  await ack();

  timer.pause();

  await client.views.update({
    view_id: body.view.id,
    view: getPausedTimerView(timer.getRemainingTime())
  });
};

module.exports = pausePomodoroTimer;
