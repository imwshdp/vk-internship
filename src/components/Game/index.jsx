import React from 'react';
import Board from '../Board';
import Panel from '../Panel';

import css from './index.module.css';

const Game = () => {
  return (
    <main className={css.Wrapper}>
      <Panel />
      <Board />
    </main>
  );
}

export default Game;