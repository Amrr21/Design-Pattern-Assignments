class BarcaCoach {
  constructor(name, age, rank) {
    (this.name = name), (this.age = age), (this.rank = rank);
  }
  standings(rank) {
    this.rank = rank;
    return this;
  }
  start(year) {
    this.year = year;
    return this;
  }
  build() {
    return new BarcaCoach(this);
  }
}
const coachXavi = new BarcaCoach("Xavi", 41, 1)
  .standings(1)
  .start("2022")
  .build();
console.log(coachXavi);
