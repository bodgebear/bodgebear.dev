const missingProperty = (property, pointer) => ({
  source: {
    pointer
  },
  title: "Missing Attribute",
  detail: `${property} is missing`
})

const invalidProperty = (pointer, title, detail) => ({
  source: {
    pointer
  },
  title,
  detail
})

module.exports = {
  missingProperty,
  invalidProperty
}
