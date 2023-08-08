const startPomodoroTimer = require('./start-pomodoro');
const pausePomodoroTimer = require('./pause-pomodoro');
const stopPomodoroTimer = require('./stop-pomodoro');

module.exports.register = (app) => {
  app.action('start_pomodoro', startPomodoroTimer);
  app.action('pause_pomodoro', pausePomodoroTimer);
  app.action('stop_pomodoro', stopPomodoroTimer);
};
