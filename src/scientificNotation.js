class scientificNotation {
  convertToScientificNotation(input) {
    const value = parseFloat(input);
    if (typeof value != "number") return "Invalid input";
    return value.toExponential(2);
  }
}

module.exports = scientificNotation;
