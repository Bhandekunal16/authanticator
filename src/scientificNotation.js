class scientificNotation {
  convertToScientificNotation(input) {
    const value = parseFloat(input);
    return typeof value != "number" ? "Invalid input" : value.toExponential(2);
  }
}

module.exports = scientificNotation;
