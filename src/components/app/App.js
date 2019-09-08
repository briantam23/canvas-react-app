import React, { useState } from 'react';
import style from './app.less';
import NavBar from '../navBar/NavBar';
import ToolPanel from '../toolPanel/ToolPanel';
import Canvas from '../canvas/Canvas';


const App = () => {
	const [activeTool, setActiveTool] = useState('pen');
	const [penOptions, setPenOptions] = useState({
		strokeWidth: 10,
		lineType: 'solid',
	});

	return(
		<div className={style.app}>
			<NavBar 
				activeTool={ activeTool } 
				setActiveTool={ setActiveTool }
			/>
			<ToolPanel
				activeTool={ activeTool }
				penOptions={ penOptions }
				setPenOptions={ setPenOptions }
			/>
			<Canvas
				activeTool={activeTool}
				penOptions={penOptions}
			/>
		</div>
	)
}

export default App;