const [Scientific_Notation, BINARY, HEXADECIMAL, OCTAL_DECIMAL, ENCRYPTION] = [
  require("./src/scientificNotation"),
  require("./src/binary"),
  require("./src/hexadecimal"),
  require("./src/octalDecimal"),
  require("./src/algorithm"),
];

import scientificNotation from "./types/scientificNotation";
import Binary from "./types/binary";
import Hexadecimal from "./types/hexadecimal";
import OctalDecimal from "./types/octalDecimal";
import Encrypt from "./types/algorithm";

export const ScientificNotation: scientificNotation = new Scientific_Notation();
export const binary: Binary = new BINARY();
export const hexadecimal: Hexadecimal = new HEXADECIMAL();
export const Octal_decimal: OctalDecimal = new OCTAL_DECIMAL();
export const Encryption: Encrypt = new ENCRYPTION();
