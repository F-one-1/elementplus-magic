export const mergeEvents = function (target, events) {
  const results = { ...target }
  for (const key in events) {
    if (results[key]) {
      results[key] = [events[key], results[key]]
    } else {
      results[key] = events[key]
    }
  }
  return results
}
