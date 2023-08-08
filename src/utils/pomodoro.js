class PomodoroTimer {
  constructor(workDuration, breakDuration) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.sessionType = 'work';
    this.remainingTime = workDuration * 60;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.toggleSessionType();
      }
      callback(this.getRemainingTime());
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  stop() {
    clearInterval(this.intervalId);
    this.remainingTime = this.workDuration * 60;
    this.sessionType = 'work';
  }

  toggleSessionType() {
    if (this.sessionType === 'work') {
      this.sessionType = 'break';
      this.remainingTime = this.breakDuration * 60;
    } else {
      this.sessionType = 'work';
      this.remainingTime = this.workDuration * 60;
    }
  }

  setSessionType(sessionType) {
    this.sessionType = sessionType;
  }

  getSessionType() {
    return this.sessionType;
  }

  setRemainingTime(remainingTime) {
    this.remainingTime = remainingTime;
  }

  getRemainingTime() {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  setWorkDuration(workDuration) {
    this.workDuration = workDuration;
  }

  getWorkDuration() {
    return this.workDuration;
  }

  setBreakDuration(breakDuration) {
    this.breakDuration = breakDuration;
  }

  getBreakDuration() {
    return this.breakDuration;
  }
}

module.exports = PomodoroTimer;
