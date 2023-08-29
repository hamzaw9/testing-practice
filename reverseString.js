const reverseString = (string) => {
  if (string === "") {
    throw new Error("String should not be empty");
  }
  return string.split("").reverse().join("");
};

reverseString("");

module.exports = reverseString;
