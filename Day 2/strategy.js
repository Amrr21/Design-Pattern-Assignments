class League {
  match(plan) {
    this.plan = plan;
  }
  schedule() {
    this.plan.showPlan();
  }
}

class Home {
  constructor(plan) {
    this.plan = plan;
  }
  showPlane() {
    alert("defence");
  }
}
class Away {
  constructor(plan) {
    this.plan = plan;
  }
  showPlane() {
    alert("attack");
  }
}
const attack = new Home();
const defence = new Away();

const newGame = new League();
newGame.match(defence);
newGame.schedule();
