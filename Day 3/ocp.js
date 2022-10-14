class WebDeveloper {
  constructor(question, options) {
    this.question = question;
    this.options = options;
  }
  printQuestion() {
    this.options.forEach((opt, i) => {
      alert(`${i + 1}-${opt}`);
    });
  }
}

class Accountant {
  constructor(question) {
    this.question = question;
  }
  printQuestion() {
    alert("1- Calc Salary");
    alert("2- Managment");
    alert("Other Question");
  }
}

class Doctor {
  constructor(question) {
    this.question = question;
  }
  printQuestion() {
    alert("Your Answer....");
  }
}

class Engneer {
  constructor(question) {
    this.question = question;
  }
  printQuestion() {
    alert("....Years");
  }
}

var jobTitle = [
  new Accountant("What is your Major"),
  new WebDeveloper("What is your Major?", [
    "Frontend",
    "Backend",
    "Full-stack",
  ]),
  new Doctor("What is your ٍSpecialty"),
  new Engneer("How many experiance years you have?"),
];

function intro(qes) {
  qes.forEach((question) => {
    alert(question.question);
    question.printQuestion();
  });
}

intro(jobTitle);
