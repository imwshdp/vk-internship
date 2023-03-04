import BOMB from './bombValue';
import boardSize from './bombsQuantity';
import createFilledState from '../../../utils/createFilledState'

const addHints = (array) => {
  let number
  for (let x = 0; x < boardSize; x++) {
    for (let y = 0; y < boardSize; y++) {

      // skip if cell contains bomb
      if (array[x][y] === BOMB)
        continue

      // update bombs counter
      number = 0

      // check the nearest cells for bombs and count it
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

          // skip cell as itself
          if (i === 0 && j === 0)
            continue

          // if cell exist and contains bomb => count it
          if (
            x + i >= 0 &&
            x + i < boardSize &&
            y + j >= 0 &&
            y + j < boardSize &&
            array[(x + i)][(y + j)] === BOMB
          ) {
            number++;
          }
        }
      }

      // save the number of bombs to array
      array[x][y] = number
    }
  }
}

export const setBombs = (x, y, bombsQuantity) => {

  let array = createFilledState(0)
  let counter = 0
  while (counter < bombsQuantity) {

    const bombX = Math.floor(Math.random() * boardSize);
    const bombY = Math.floor(Math.random() * boardSize);

    if (array[bombX][bombY] !== BOMB) {
      // avoid positioning into first clicked cell
      if (bombX !== x || bombY !== y) {
        array[bombX][bombY] = BOMB;
        counter++
      }
    }
  }

  // add numbers to board
  addHints(array)

  return array
}