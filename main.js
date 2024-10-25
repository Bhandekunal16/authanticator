const [scientificNotation, Binary, Hexadecimal, OctalDecimal, Encryption] = [
  require("./src/scientificNotation"),
  require("./src/binary"),
  require("./src/hexadecimal"),
  require("./src/octalDecimal"),
  require("./src/algorithm"),
];

class Core {
  #Error;

  constructor() {
    this.#Error = new Error("internal server error");
  }

  binary(method, input) {
    try {
      return new Binary()[method](...input);
    } catch (error) {
      return this.#Error;
    }
  }

  ScientificNotation(method, input) {
    try {
      return new scientificNotation()[method](...input);
    } catch (error) {
      return this.#Error;
    }
  }

  Hexadecimal(method, input) {
    try {
      return new Hexadecimal()[method](...input);
    } catch (error) {
      return this.#Error;
    }
  }

  OctalDecimal(method, input) {
    try {
      return new OctalDecimal()[method](...input);
    } catch (error) {
      return this.#Error;
    }
  }

  Encryption(method, input) {
    try {
      return new Encryption()[method](...input);
    } catch (error) {
      return this.#Error;
    }
  }
}

module.exports = Core;
