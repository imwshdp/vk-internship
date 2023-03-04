import BOMB from "../../actions/bombs/bombValue"
import boardSize from "../../actions/bombs/bombsQuantity"
import { getCopyOfState } from "../../../utils/getCopyOfState"

export const openNearestCells = (x, y, cells, board) => {

  // get copy of cells state
  let array = getCopyOfState(cells)

  // initialize stack and stack's candidates list
  const stack = [{ x, y }]
  let candidates

  // passing near cells
  while (stack.length !== 0) {

    // pop element
    const element = stack.pop()
    const curX = element.x, curY = element.y

    // if cell doesn't contains bomb => open it
    if (board[curX][curY] !== BOMB) {
      array[curX][curY] = 1

      // break if cell isn't empty
      if (board[curX][curY] !== 0)
        break
    }

    // collect near cells
    candidates = []
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {

        // skip cell itself
        if (i === 0 && j === 0)
          continue

        // push nearest cell to candidates list if cell exists
        if (
          curX + i >= 0 &&
          curX + i < boardSize &&
          curY + j >= 0 &&
          curY + j < boardSize
        ) {
          candidates.push({ x: curX + i, y: curY + j })
        }
      }
    }

    // check candidates
    for (let candidate of candidates) {

      // if cell is empty and closed => push it to stack
      if (board[candidate.x][candidate.y] === 0 && array[candidate.x][candidate.y] === 0) {
        stack.push({ ...candidate })
      } else {

        // else if it doesn't contains bomb => open
        if (board[candidate.x][candidate.y] !== BOMB)
          array[candidate.x][candidate.y] = 1
      }
    }
  }

  return array
}