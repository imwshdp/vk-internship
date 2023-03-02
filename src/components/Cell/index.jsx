import React, { useContext, useEffect } from 'react';
import SapperContext from '../../context';
import BOMB from '../../utils/bombValue';
import css from './index.module.css';

const Cell = ({ x, y, firstClick, setFirstClick }) => {

  // context data
  let {
    board,
    cells, setCells,
    firstCellX, setFirstCellX,
    firstCellY, setFirstCellY,
    clickFunction,
  } = useContext(SapperContext)

  // cell state
  // 0 - closed
  // 1 - opened
  // 2 - flagged
  // 3 - questioned (?)
  const cellState = cells[x][y]

  // get cell from board
  const getCell = (x, y) => board[x][y]

  // open near empty cells after opening one cell
  const openNearestCells = (x, y) => {

    // get copy of state
    let arr = JSON.stringify(cells)
    arr = JSON.parse(arr)

    // initialize stack and candidates list
    const stack = [{ x, y }]
    let candidates

    // passing near cells
    while (stack.length !== 0) {

      // pop element
      const element = stack.pop()
      const curX = element.x, curY = element.y

      // open cell if cell doesn't contains bomb
      if (getCell(curX, curY) !== BOMB) {
        arr[curX][curY] = 1

        // break if cell isn't empty
        if (getCell(curX, curY) !== 0) {
          break;
        }
      }

      // collect near cells
      candidates = []
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

          if (i === 0 && j === 0) {
            continue;
          }

          // push nearest cell to candidates list if cell exists
          if (
            curX + i >= 0 &&
            curX + i < 16 &&
            curY + j >= 0 &&
            curY + j < 16
          ) {
            candidates.push({ x: curX + i, y: curY + j })
          }
        }
      }

      // check candidates
      for (let candidate of candidates) {

        // if cell is empty and closed
        if (getCell(candidate.x, candidate.y) === 0 && arr[candidate.x][candidate.y] === 0) {

          // push cell to stack
          stack.push({ ...candidate })

        } else {

          // else open cell if it doesn't contains bomb
          if (getCell(candidate.x, candidate.y) !== BOMB)
            arr[candidate.x][candidate.y] = 1
        }
      }
    }

    // refresh state
    setCells(arr)
  }

  const configureNewCellsState = (x, y, newState) => {
    let arr = JSON.stringify(cells)
    arr = JSON.parse(arr)

    arr[x][y] = newState
    setCells(arr)
  }

  const leftClick = (e) => {

    if (!firstClick) {
      setFirstClick(true)

      setFirstCellX(x)
      setFirstCellY(y)

    } else {
      if (board[x][y] === BOMB) {
        console.log("тык по бомбе!")
        // ENDGAME
      } else {
        // open near empty cells
        openNearestCells(x, y)
      }
    }
  }

  const rightClick = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (cellState === 0) { configureNewCellsState(x, y, 2) }
    if (cellState === 2) { configureNewCellsState(x, y, 3) }
    if (cellState === 3) { configureNewCellsState(x, y, 0) }
  }

  const doubleClick = () => {
    console.log(firstCellX, firstCellY)

    if (firstClick && x === firstCellX && y === firstCellY) {
      openNearestCells(firstCellX, firstCellY)
    }
  }

  useEffect(() => {
    if (!firstClick) return
    doubleClick()
  }, [])

  return (
    <div
      className={css.Cell}
      onClick={(e) => leftClick(e)}
      onContextMenu={(e) => rightClick(e)}
      style={cellState === 1 ? { backgroundColor: 'pink' } : {}}
    // style={board[x][y] === BOMB ? { backgroundColor: 'red' } : {}}
    >
      {cellState === 0 ? board[x][y] : ""}
      {cellState === 1 && board[x][y]}
      {cellState === 2 && 'Ф'}
      {cellState === 3 && '?'}
    </div>
  );
}

export default Cell;