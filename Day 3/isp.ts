interface emplyee {
  interviwe(): void;
  hire?(): void;
  subervise(): void;
}

interface Semplyee {
  Sinterviwe(): void;
  Shire(): void;
  Ssubervise(): void;
}

class manger implements emplyee {
  interviwe(): void {}
  subervise(): void {}
}

class CEO implements Semplyee {
  Sinterviwe(): void {}
  Shire(): void {}
  Ssubervise(): void {}
}
