const [scientificNotation, Binary, Hexadecimal, OctalDecimal, Encryption] = [
  require("./src/scientificNotation"),
  require("./src/binary"),
  require("./src/hexadecimal"),
  require("./src/octalDecimal"),
  require("./src/algorithm"),
];

class Core {
  constructor() {
    this.error = "invalid method";
  }

  binary(method, input) {
    try {
      return new Binary()[method](...input);
    } catch (error) {
      return new Error(this.error);
    }
  }

  ScientificNotation(method, input) {
    try {
      return new scientificNotation()[method](...input);
    } catch (error) {
      return new Error(this.error);
    }
  }

  Hexadecimal(method, input) {
    try {
      return new Hexadecimal()[method](...input);
    } catch (error) {
      return new Error(this.error);
    }
  }

  OctalDecimal(method, input) {
    try {
      return new OctalDecimal()[method](...input);
    } catch (error) {
      return new Error(this.error);
    }
  }

  Encryption(method, input) {
    try {
      return new Encryption()[method](...input);
    } catch (error) {
      return new Error(this.error);
    }
  }
}

module.exports = Core;
