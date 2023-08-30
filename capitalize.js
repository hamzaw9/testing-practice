const capitalize = (string) => {
  if (Number.isInteger(string)) {
    throw new Error("Integers are not allowed!");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

capitalize("world");

module.exports = capitalize;
