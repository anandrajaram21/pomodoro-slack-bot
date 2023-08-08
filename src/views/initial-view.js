const { Blocks, HomeTab, Button } = require('slack-block-builder');

function getHomeTabView() {
  const startButton = Button({
    text: 'Start Pomodoro Timer',
    actionId: 'start_pomodoro'
  });

  const homeTabView = HomeTab()
    .blocks(
      Blocks.Section({
        text: 'Welcome to the Pomodoro Timer app!'
      }),
      Blocks.Divider(),
      Blocks.Section({
        text: 'Click the button below to start a Pomodoro timer.'
      }).accessory(startButton)
    )
    .buildToJSON();

  return homeTabView;
}

module.exports = getHomeTabView;
