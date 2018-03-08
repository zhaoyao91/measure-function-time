function measure (fn, ...args) {
  const startTime = new Date()
  fn(...args)
  return new Date() - startTime
}

async function measureAsync (fn, ...args) {
  const startTime = new Date()
  await fn(...args)
  return new Date() - startTime
}

module.exports = measure

module.exports.async = measureAsync