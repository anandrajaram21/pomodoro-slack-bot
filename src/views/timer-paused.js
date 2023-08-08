const { Blocks, HomeTab, Button } = require('slack-block-builder');

function getPausedTimerView(timerDuration) {
  const pauseButton = Button({
    text: 'Resume Pomodoro Timer',
    actionId: 'start_pomodoro'
  });

  const stopButton = Button({
    text: 'Stop Pomodoro Timer',
    actionId: 'stop_pomodoro'
  });

  const homeTabView = HomeTab()
    .blocks(
      Blocks.Section({
        text: `Pomodoro timer running for ${timerDuration} minutes.`
      }),
      Blocks.Divider(),
      Blocks.Actions().elements(pauseButton, stopButton)
    )
    .buildToJSON();

  return homeTabView;
}

module.exports = getPausedTimerView;
