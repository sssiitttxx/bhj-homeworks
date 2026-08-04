class Rotator {
  constructor(rotatorElement) {
    this.rotator = rotatorElement;
    this.cases = Array.from(this.rotator.querySelectorAll(".rotator__case"));
    this.currentIndex = 0;
    this.start();
  }

  getCurrentCase() {
    return this.cases[this.currentIndex];
  }
  getNextIndex() {
    return (this.currentIndex + 1) % this.cases.length;
  }
  getSpeed() {
    const speed = this.getCurrentCase().dataset.speed;
    return speed ? parseInt(speed) : 1000;
  }
  getColor() {
    return this.getCurrentCase().dataset.color;
  }
  rotate() {
    const currentCase = this.getCurrentCase();
    const nextIndex = this.getNextIndex();
    const nextCase = this.cases[nextIndex];
    currentCase.classList.remove("rotator__case_active");
    currentCase.style.color = "";
    nextCase.classList.add("rotator__case_active");
    nextCase.style.color = this.cases[nextIndex].dataset.color || "";
    this.currentIndex = nextIndex;
    this.timer = setTimeout(() => this.rotate(), this.getSpeed());
  }
  start() {
    const activeCase = this.rotator.querySelector(".rotator__case_active");
    if (activeCase && activeCase.dataset.color) {
      activeCase.style.color = activeCase.dataset.color;
    }
    this.timer = setTimeout(() => this.rotate(), this.getSpeed());
  }
}
document.querySelectorAll(".rotator").forEach((rotator) => {
  new Rotator(rotator);
});
