let bioMachine = {
  name: "defName",
  purpose: false,
  greet: function () {
    console.log(`Hi, it' s ${this.name}, purpose: ${this.purpose}`);
  },
};

bioMachine.greet();
