class scientificNotation {
  convertToScientificNotation(input) {
    const value = parseFloat(input);
    return isNaN(value) ? "Invalid input" : value.toExponential(2);
  }
}

module.exports = scientificNotation;
