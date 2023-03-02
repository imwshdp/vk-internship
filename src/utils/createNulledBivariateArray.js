const createNulledBivariateArray = () => {
  let arr = Array(16)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Array(16).fill(0)
  }
  return arr
}

export default createNulledBivariateArray;