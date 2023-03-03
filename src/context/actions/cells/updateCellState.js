import { getCopyOfState } from '../../../utils/getCopyOfState'

export const updateCellsState = (x, y, state, value) => {
  let array = getCopyOfState(state)
  array[x][y] = value
  return array
}