class Test {
  constructor() {
    this.str = "hello world";
  }

  say() {
    console.log(this.str);
  }
}

const t1 = new Test();
t1.say();
