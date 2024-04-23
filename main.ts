const Scientific_Notation = require("./src/scientificNotation");
const BINARY = require("./src/binary");
const HEXADECIMAL = require("./src/hexadecimal");
const OCTAL_DECIMAL = require("./src/octalDecimal");

import scientificNotation from "./types/scientificNotation";
import Binary from "./types/binary";
import Hexadecimal from "./types/hexadecimal";
import OctalDecimal from "./types/octalDecimal";

export const ScientificNotation: scientificNotation = new Scientific_Notation();
export const binary: Binary = new BINARY();
export const hexadecimal: Hexadecimal = new HEXADECIMAL();
export const Octal_decimal: OctalDecimal = new OCTAL_DECIMAL();
