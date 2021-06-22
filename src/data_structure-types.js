const validateTitle = (value) => {
  if (typeof value !== "string") {
    return "Incorrect input data";
  }
  let firstChar = value.charAt(0);
  if ((value.length > 2) && (value.length < 20) && (firstChar === firstChar.toUpperCase()) && (firstChar.localeCompare("A") >= 0) && (firstChar.localeCompare("Z") <= 0)) {
    return "VALID";
  }
  return "INVALID";
}

const sum = (value1, value2) => {
  let strValue = typeof value1 === "string" ? value1 : value2;
  let numValue = typeof value1 === "number" ? value1 : value2;
  if (numValue % 15 === 0) { numValue = -numValue; }
  return Number(strValue) + numValue;
};

module.exports = {
  validateTitle,
  sum,
};
