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
      throw error;
    }
  }

  hexStringToAscii(hexString) {
    try {
      const hexPairs = hexString.match(/.{1,2}/g);
      return hexPairs
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
    } catch (error) {
      throw error;
    }
  }

  hexToString(input) {
    try {
      const cleanedHexString = input.replace(/^0x/, "");
      return /^[0-9A-Fa-f]+$/.test(cleanedHexString)
        ? this.hexStringToAscii(cleanedHexString)
        : console.log("Invalid hexadecimal string.");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Hexadecimal;
