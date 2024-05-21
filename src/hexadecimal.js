class Hexadecimal {
  hexadecimalConvert(input) {
    try {
      const decimalNumber = parseInt(input);
      if (!isNaN(decimalNumber)) return decimalNumber.toString(16);
      else {
        const stringAsHex = [...input]
          .map((char) => char.charCodeAt(0).toString(16))
          .join("");
        return stringAsHex;
      }
    } catch (error) {
      return error;
    }
  }

  hexStringToAscii(hexString) {
    try {
      const hexPairs = hexString.match(/.{1,2}/g);
      const asciiString = hexPairs
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
      return asciiString;
    } catch (error) {
      return error;
    }
  }

  hexToString(input) {
    try {
      const cleanedHexString = input.replace(/^0x/, "");
      if (/^[0-9A-Fa-f]+$/.test(cleanedHexString)) {
        const decodedString = this.hexStringToAscii(cleanedHexString);
        return decodedString;
      } else console.log("Invalid hexadecimal string.");
    } catch (error) {
      return error;
    }
  }
}

module.exports = Hexadecimal;
