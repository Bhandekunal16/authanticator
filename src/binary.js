class Binary {
  convertToBinary(input) {
    try {
      let binary = "";
      for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i).toString(2);
        binary += this.padLeft(charCode, 8);
      }
      return binary;
    } catch (error) {
      return error;
    }
  }

  convertToString = (input) => {
    try {
      let string = "";

      for (let i = 0; i < input.length; i += 8) {
        let binaryCode = input.substr(i, 8);
        let charCode = parseInt(binaryCode, 2);
        string += String.fromCharCode(charCode);
      }

      return string;
    } catch (error) {
      return error;
    }
  };

  padLeft(str, length) {
    return "0".repeat(length - str.length) + str;
  }
}

module.exports = Binary;
