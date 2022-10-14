class webDeveloper {
  constructor(devName) {
    this.name = devName;
  }
}
class Back_end extends webDeveloper {
  generateAPI() {
    console.log(this.name + "APIs");
  }

  buildDataBase() {
    console.log(this.name + "MongoDB");
  }
}

class Front_end extends webDeveloper {
  stablishStructure() {
    console.log(this.name + "HTML");
  }
  design;
  designStructure() {
    console.log(this.name + "CSS & SASS & Bootstap");
  }
}

let newBackEnd = new Back_end("ali");
newBackEnd.generateAPI();

let newFrontEnd = new Front_end("amr");
newFrontEnd.desinStructure();
