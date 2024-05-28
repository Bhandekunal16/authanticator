const [scientificNotation, Binary, Hexadecimal, OctalDecimal, Encryption] = [
  require("./src/scientificNotation"),
  require("./src/binary"),
  require("./src/hexadecimal"),
  require("./src/octalDecimal"),
  require("./src/algorithm"),
];

class Main {
  constructor() {
    this.scientificNotation = new scientificNotation();
    this.binary = new Binary();
    this.hexadecimal = new Hexadecimal();
    this.octalDecimal = new OctalDecimal();
    this.encryption = new Encryption();
  }

  convertToScientificNotation(input) {
    return this.scientificNotation.convertToScientificNotation(input);
  }
}

module.exports = Main;

 console.log(new Main().convertToScientificNotation(11));
