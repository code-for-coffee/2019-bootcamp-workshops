const stopwatch = {
  seconds: 0,
  timerId: null,
  elements: {
    startButton: document.getElementById('start'),
    pauseButton: document.getElementById('pause'),
    resetButton: document.getElementById('reset'),
    h1: document.getElementsByTagName('h1')[0],
  },
  listen() {
    this.elements.startButton.addEventListener('click', () => {
      if (!this.timerId) {
        this.timerId = setInterval(() => {
          this.elements.h1.innerHTML = `Time Elapsed: ${this.seconds}`;
          this.seconds++; // seconds = seconds + 1
        }, 1000); // set interval
      }
    });

    this.elements.pauseButton.addEventListener('click', () => {
      this.timerId = clearInterval(this.timerId);
    });

    this.elements.resetButton.addEventListener('click', () => {
      this.timerId = clearInterval(this.timerId);
      this.elements.h1.innerHTML = 'Stop Watch';
      this.seconds = 0;
    });
  },
};
stopwatch.listen();
