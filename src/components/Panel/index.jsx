import React, { useContext } from 'react';

import SapperContext from '../../context';

import Timer from '../Timer';
import Button from '../Button';
import SadFace from '../../resources/icons/SadFace';
import GlassesFace from '../../resources/icons/GlassesFace';
import SmilingFace from '../../resources/icons/SmilingFace';
import ImpressedFace from '../../resources/icons/ImpressedFace';
import css from './index.module.css';

const Panel = () => {

  // context data
  let { userBombs, isGameEnded, isWin, holdMouseClick } = useContext(SapperContext)

  return (
    <section className={css.Panel}>
      <div className={css.BombsCounter}>
        {userBombs}
      </div>

      <div className={css.ReloadGame}>
        <Button>

          {!isGameEnded && !holdMouseClick &&
            <SmilingFace
              svgSize={45}
            />
          }

          {isWin && !holdMouseClick &&
            <GlassesFace
              svgSize={45}
            />
          }

          {isGameEnded && !isWin && !holdMouseClick &&
            <SadFace
              svgSize={45}
            />
          }

          {holdMouseClick && !isGameEnded && !isWin &&
            <ImpressedFace
              svgSize={45}
            />
          }

        </Button>
      </div>

      <Timer />
    </section>
  );
}

export default Panel;