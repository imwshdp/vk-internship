import BOMB from "../bombs/bombValue"
import boardSize from "../bombs/bombsQuantity"
import { getCopyOfState } from "../../../utils/getCopyOfState"

export const setEndGame = (setIsGameEnded, setCells, cells, board) => {
  setIsGameEnded(true)

  // open all not founded bombs
  let array = getCopyOfState(cells)

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      // if cell with bomb is closed => open it
      if (board[i][j] === BOMB && cells[i][j] === 0) {
        array[i][j] = 1
      }

      // if cell without bomb was flagged => show it
      if (board[i][j] !== BOMB && cells[i][j] === 2) {
        array[i][j] = 5
      }
    }
  }

  setCells(array)
}