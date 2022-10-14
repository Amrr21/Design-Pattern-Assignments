class emplo {
  doTasks() {
    console.log("Keep Going");
  }
}

class emplomanger extends emplo {
  suberVisor() {
    console.log("Manage Tasks");
  }
}
class manger extends emplomanger {}

class DC extends emplo {}
