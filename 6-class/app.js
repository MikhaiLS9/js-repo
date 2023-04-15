class Car {
    #brand;
    #model;
    #run;
    constructor(brand, model, run) {
      this.#brand = brand;
      this.#model = model;
      this.#run = run;
    }
  
    info() {
      console.log(
        `brand: ${this.#brand}, model: ${this.#model}, run: ${this.run}`
      );
    }
    get run() {
      return this.#run;
    }
  
    set run(run) {
      this.#run = run;
    }
  }
  
  const car = new Car("Mazda", "3", "150000");
  
  car.run = 12000;
  car.info();