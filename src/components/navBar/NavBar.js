import React from 'react';
import style from './navBar.less';
import PenIcon from '../shared/icons/PenIcon';
import EraserIcon from '../shared/icons/EraserIcon'


const NavBar = ({ activeTool, setActiveTool }) => (
    <div className={style.navBar}>
        <div
            className={style.navBarTool}
            onClick={() => setActiveTool('pen')}
            title='Pen'
        >
            <PenIcon />
        </div>
        <div
            className={style.navBarTool}
            onClick={() => setActiveTool('eraser')}
            title='Eraser'
        >
            <EraserIcon />
        </div>
    </div>
)


export default NavBar;