class scientificNotation {
  convertToScientificNotation(input) {
    const value = parseFloat(input);
    if (typeof value != "number") {
      return "Invalid input";
    }
    const scientificNotation = value.toExponential(2);
    return scientificNotation;
  }
}

module.exports = scientificNotation;
