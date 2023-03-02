import React, { useState, useEffect, useContext } from 'react';
import SapperContext from '../../context';
import BOMB from '../../utils/bombValue';
import createNulledBivariateArray from '../../utils/createNulledBivariateArray';
import Cell from '../Cell';
import css from './index.module.css';

const Board = () => {

  // context data
  let {
    board, setBoard,
    cells, setCells,
    bombs,
    firstCellX,
    firstCellY,
    // clickFunction,
  } = useContext(SapperContext)

  // first click state
  const [firstClick, setFirstClick] = useState(false)

  // add bombs to board
  const setBombs = () => {

    let arr = createNulledBivariateArray()
    let counter = 0
    while (counter < bombs) {

      const bombX = Math.floor(Math.random() * 16);
      const bombY = Math.floor(Math.random() * 16);

      if (arr[bombX][bombY] !== BOMB) {
        if (bombX !== firstCellX && bombY !== firstCellY) {
          arr[bombX][bombY] = BOMB;
          counter++
        }
      }
    }

    // add numbers tot board
    addHints(arr)

    // refresh board state
    setBoard(arr)
  }

  const addHints = (arr) => {
    let number
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 16; y++) {

        // skip if cell contains bomb
        if (arr[x][y] === BOMB) {
          continue
        }

        // update bombs counter
        number = 0

        // check nearest cells and count bombs
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {

            // skip cell as itself
            if (i === 0 && j === 0) {
              continue
            }

            if (
              x + i >= 0 &&
              x + i < 16 &&
              y + j >= 0 &&
              y + j < 16 &&
              arr[(x + i)][(y + j)] === BOMB
            ) {
              number++;
            }
          }
        }

        // save number
        arr[x][y] = number
      }
    }
  }

  useEffect(() => {
    if (!firstClick) return;
    setBombs()
  }, [firstClick])

  return (
    <section className={css.Board}>
      {board.map((row, indexRow) =>
        <div
          key={indexRow + Date.now()}
          className={css.Row}
        >

          {row.map((cell, indexColumn) =>
            <Cell
              key={indexColumn + Date.now()}
              x={indexRow}
              y={indexColumn}

              firstClick={firstClick}
              setFirstClick={setFirstClick}
            />
          )}

        </div>
      )}
    </section>
  );
}

export default Board;