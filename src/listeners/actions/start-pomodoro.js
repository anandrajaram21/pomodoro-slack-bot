const timer = require('../../utils');
const { getRunningTimerView } = require('../../views');

const startPomodoroTimer = async ({ ack, body, client }) => {
  await ack();

  const result = await client.views.update({
    view_id: body.view.id,
    hash: body.view.hash,
    view: getRunningTimerView(timer.getRemainingTime())
  });

  timer.start(async (remainingTime) => {
    if (remainingTime <= 0) {
      clearInterval(timer.intervalId);
      return;
    }
    const updatedView = getRunningTimerView(remainingTime);
    await client.views.update({
      view_id: result.view.id,
      view: updatedView
    });
  });
};

module.exports = startPomodoroTimer;
