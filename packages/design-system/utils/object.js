const isEmptyObject = (obj) => {
  if (obj instanceof Object) {
    return Object.keys(obj).length === 0
  }

  return false
}

module.exports = {
  isEmptyObject,
}
