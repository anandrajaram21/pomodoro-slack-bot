const PomodoroTimer = require('./pomodoro');

// Testing with 15 second work and 15 second break session
const timer = new PomodoroTimer(0.25, 0.25);

module.exports = timer;
