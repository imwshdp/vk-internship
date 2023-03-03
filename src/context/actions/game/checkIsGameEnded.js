import createFilledState from "../../../utils/createFilledState"
import { getCopyOfState } from "../../../utils/getCopyOfState"
import boardSize from "../../actions/bombs/bombsQuantity"
import BOMB from "../../actions/bombs/bombValue"

export const checkIsGameEnded = (board, cells, bombs, setIsGameEnded, setCells) => {
  let openedCellsCounter = 0

  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {
      // if opened cell doen't contains bomb
      if (board[x][y] !== BOMB) {
        if (cells[x][y] === 1) {
          openedCellsCounter++
        } else {
          return
        }
      }
    }
  }

  if (openedCellsCounter === (boardSize * boardSize - bombs)) {
    setIsGameEnded(true)
    console.log('win!!!')

    // open all cells
    let arr = getCopyOfState(cells)
    arr = createFilledState(1)
    setCells(arr)
  }
}