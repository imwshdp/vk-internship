export const getCopyOfState = state => {
  const copy = []
  for (let array of state) {
    copy.push(array)
  }
  return copy
}