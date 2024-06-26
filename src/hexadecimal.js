class Hexadecimal {
  hexadecimalConvert(input) {
    try {
      const decimalNumber = parseInt(input);
      if (!isNaN(decimalNumber)) return decimalNumber.toString(16);
      else
        return [...input]
          .map((char) => char.charCodeAt(0).toString(16))
          .join("");
    } catch (error) {
      return error;
    }
  }

  hexStringToAscii(hexString) {
    try {
      const hexPairs = hexString.match(/.{1,2}/g);
      return hexPairs
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
    } catch (error) {
      return error;
    }
  }

  hexToString(input) {
    try {
      const cleanedHexString = input.replace(/^0x/, "");
      if (/^[0-9A-Fa-f]+$/.test(cleanedHexString))
        return this.hexStringToAscii(cleanedHexString);
      else console.log("Invalid hexadecimal string.");
    } catch (error) {
      return error;
    }
  }
}

module.exports = Hexadecimal;
