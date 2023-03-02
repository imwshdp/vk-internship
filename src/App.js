import React, { useRef, useState } from 'react';
import SapperContext from './context'
import createNulledBivariateArray from './utils/createNulledBivariateArray';
import Game from './components/Game';
import './styles/index.css';

const App = () => {

  const [board, setBoard] = useState(createNulledBivariateArray())
  const [cells, setCells] = useState(createNulledBivariateArray())

  const [bombs, setBombs] = useState(40)

  const [firstCellX, setFirstCellX] = useState(null)
  const [firstCellY, setFirstCellY] = useState(null)

  const clickFunction = useRef(null)

  return (
    <SapperContext.Provider value={{

      // states
      board: board,
      cells: cells,
      bombs: bombs,
      firstCellX: firstCellX,
      firstCellY: firstCellY,

      // setters
      setBoard: setBoard,
      setCells: setCells,
      setBombsQuantity: setBombs,
      setFirstCellX: setFirstCellX,
      setFirstCellY: setFirstCellY,

      // refs
      // clickFunction: clickFunction,
    }}>
      <Game />
    </SapperContext.Provider>
  );
}

export default App;
