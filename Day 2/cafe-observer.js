class Cafe {
  constructor() {
    this.product = "";
    this.loginUser = [];
    this.prodlist = [];
  }
  addNewPrd(prdName) {
    this.prd = prdName;
    this.prodlist.push(prdName);
    this.notifyAll();
  }
  deleteProd(prdName) {
    this.prodlist.filter((prd) => prd != prdName);
  }
  clientLogin(user) {
    this.loginUser.push(user);
  }
  notifyAll() {
    return this.loginUser.forEach((user) => user.updateContent(this));
  }

  getProd() {
    alert(this.prodlist);
  }
}

class Client {
  updateContent(newPrd) {
    alert(`${newPrd.prd}`);
  }
}

let cafe = new Cafe();
let client = new Client();
cafe.clientLogin(client);
cafe.addNewPrd("Tea");
cafe.addNewPrd("Iced Coffee");
cafe.addNewPrd("Hot Coffee");
