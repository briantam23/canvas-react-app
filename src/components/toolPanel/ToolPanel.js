import React from 'react';
import style from './toolPanel.less';
import Pen from '../shared/panels/Pen';


const ToolPanel = ({ activeTool, penOptions, setPenOptions }) => (
    <div className={style.toolPanel}>
        <Pen penOptions={ penOptions } setPenOptions={ setPenOptions }/>
    </div>
)


export default ToolPanel;