class OctalDecimal {
  octal(input) {
    try {
      if (typeof input === "number") {
        input = input.toString();
      }
      let octalNumber = "";
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const octalChar = char.charCodeAt(0).toString(8);
        octalNumber += octalChar;
      }
      return octalNumber;
    } catch (error) {
      return error.message;
    }
  }

  octalToString(input) {
    try {
      const octalGroups = input.match(/.{1,3}/g);
      let resultString = "";
      octalGroups.forEach((octalGroup) => {
        const charCode = parseInt(octalGroup, 8);
        const char = String.fromCharCode(charCode);
        resultString += char;
      });
      return resultString;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = OctalDecimal;
