const [Hexadecimal, OctalDecimal, scientificNotation, Binary] = [
  require("./hexadecimal"),
  require("./octalDecimal"),
  require("./scientificNotation"),
  require("./binary"),
];

class Algorithm {
  encrypt(publicKey, data) {
    try {
      const [privateKey, tail] = [
        new Binary().convertToBinary("Robotic"),
        new Hexadecimal().hexadecimalConvert(publicKey),
      ];
      const head = new scientificNotation().convertToScientificNotation(
        parseInt(privateKey)
      );

      const body =
        data.length > 0 && typeof data == "object"
          ? new OctalDecimal().octalArray(data)
          : new OctalDecimal().octal(data);

      return `${head}${body}${tail}`;
    } catch (error) {
      return error;
    }
  }

  decrypt(publicKey, data) {
    const privateKey = new Binary().convertToBinary("Robotic");
    const head = new scientificNotation().convertToScientificNotation(
      parseInt(privateKey)
    );
    const tail = new Hexadecimal().hexadecimalConvert(publicKey);
    const part1 = data.split(head).join("");
    const part2 = part1.split(tail).join("");
    const Final = new OctalDecimal().octalToString(part2);
    return part2.includes(",") ? Final.split("").map(Number) : Final;
  }
}

module.exports = Algorithm;

console.log(
  new Algorithm().decrypt("172000", "1.01e+5461,62,63,64,65,66,67,70,7129fe0")
);

console.log(new Algorithm().encrypt("172000", [1, 2, 3, 4, 5, 6, 7, 8, 9]));
