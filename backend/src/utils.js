const valuesOrNull = (...values) => values.reduce((prev, curr) => {
  if (prev === null || curr === null) {
    return null;
  }

  return curr;
})

module.exports = {
  valuesOrNull
}
