import React, { useContext } from 'react';
import SapperContext from '../../context';
import Button from '../Button';
import Timer from '../Timer';
import css from './index.module.css';

const Panel = () => {

  // context data
  let { bombs, setBombs } = useContext(SapperContext)

  return (
    <section className={css.Panel}>
      <div className={css.BombsCounter}>
        {bombs}
      </div>

      <div className={css.ReloadGame}>
        <Button>
          Новая игра
        </Button>
      </div>

      <Timer />
    </section>
  );
}

export default Panel;