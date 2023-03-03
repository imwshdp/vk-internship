import createFilledState from "../../../utils/createFilledState"
import { getCopyOfState } from "../../../utils/getCopyOfState"

export const setEndGame = (setIsGameEnded, setCells, cells) => {
  setIsGameEnded(true)

  // open all cells
  let arr = getCopyOfState(cells)
  arr = createFilledState(1)
  setCells(arr)
}