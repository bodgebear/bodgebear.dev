const valuesOrNull = (...values) => values.reduce((prev, curr) => {
  if (prev !== null) {
    return prev;
  }

  if (curr) {
    return curr;
  }

  return null;
}, null);

module.exports = valuesOrNull;
