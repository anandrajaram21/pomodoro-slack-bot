const { Blocks, HomeTab, Button } = require('slack-block-builder');

function getRunningTimerView(timerDuration) {
  const pauseButton = Button({
    text: 'Pause Pomodoro Timer',
    actionId: 'pause_pomodoro'
  });

  const stopButton = Button({
    text: 'Stop Pomodoro Timer',
    actionId: 'stop_pomodoro'
  });

  const homeTabView = HomeTab()
    .blocks(
      Blocks.Section({
        text: `Pomodoro timer: ${timerDuration} minutes remaining.`
      }),
      Blocks.Divider(),
      Blocks.Actions().elements(pauseButton, stopButton)
    )
    .buildToJSON();

  return homeTabView;
}

module.exports = getRunningTimerView;
