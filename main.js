"use strict";
exports.__esModule = true;
exports.Octal_decimal = exports.hexadecimal = exports.binary = exports.ScientificNotation = void 0;
var _a = [
    require("./src/scientificNotation"),
    require("./src/binary"),
    require("./src/hexadecimal"),
    require("./src/octalDecimal"),
], Scientific_Notation = _a[0], BINARY = _a[1], HEXADECIMAL = _a[2], OCTAL_DECIMAL = _a[3];
exports.ScientificNotation = new Scientific_Notation();
exports.binary = new BINARY();
exports.hexadecimal = new HEXADECIMAL();
exports.Octal_decimal = new OCTAL_DECIMAL();
