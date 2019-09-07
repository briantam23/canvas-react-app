import React, { useState, Fragment } from 'react';
import style from './app.less';
import NavBar from '../navBar/NavBar';


const App = () => {
	const [activeTool, setActiveTool] = useState('pen');

	return(
		<Fragment>
			<NavBar activeTool={ activeTool } setActiveTool={ setActiveTool }/>
		</Fragment>
	)
}

export default App;