import boardSize from "../context/actions/bombs/bombsQuantity";

const createFilledState = (content) => {
  let array = Array(boardSize)
  for (let i = 0; i < array.length; i++) {
    array[i] = Array(boardSize).fill(content)
  }

  return array
}

export default createFilledState;