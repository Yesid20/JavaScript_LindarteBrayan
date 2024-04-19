class A {
    constructor(value) {
      this.value = value;
    }
  }
  
  class B extends A {
    constructor(value, anotherValue) {
      super(value);
      this.anotherValue = anotherValue;
    }
  }
  
  class C extends B {
    constructor(value, anotherValue, yetAnotherValue) {
      super(value, anotherValue);
      this.yetAnotherValue = yetAnotherValue;
    }
  }
  
  const c = new C("A value", "B value", "C value");
  console.log(c.value); // "A value"
  console.log(c.anotherValue); // "B value"
  console.log(c.yetAnotherValue); // "C value"
  