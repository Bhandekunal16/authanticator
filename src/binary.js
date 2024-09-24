const Response = require("robotic.js/src/class/response");

class Binary {
  #response;

  constructor() {
    this.#response = new Response();
  }

  convertToBinary(input) {
    try {
      if (input == undefined)
        return this.#response.badRequest("input not be undefined");

      if (typeof input !== "string")
        throw this.#response.badRequest("Input must be a string");

      let binary = "";
      for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i).toString(2);
        binary += this.#padLeft(charCode, 8);
      }
      return binary;
    } catch (error) {
      throw this.#response.error(error);
    }
  }

  convertToString = (input) => {
    try {
      let string = "";

      if (input == undefined)
        return this.#response.badRequest("input not be undefined");

      if (typeof input !== "string")
        throw this.#response.badRequest("Input must be a string");

      for (let i = 0; i < input.length; i += 8) {
        let binaryCode = input.substr(i, 8);
        let charCode = parseInt(binaryCode, 2);
        string += String.fromCharCode(charCode);
      }

      return string;
    } catch (error) {
      throw this.#response.error(error);
    }
  };

  #padLeft(str, length) {
    return "0".repeat(length - str.length) + str;
  }
}

module.exports = Binary;
