import React, { useState, useEffect } from 'react';

import 'src/style/App.scss';
import Wheel from 'src/components/wheel';
import Table from 'src/components/table';
import Dashboard from 'src/components/dashboard';

function App() {
	var [winningNumber, setWinningNumber] = useState();
	var [bet, setBet] = useState(1);
	return (
		<div id='game_container'>
			<div id='wheel_and_table_container'>
				<Wheel getWinning={setWinningNumber} />
				<Table />
			</div>
			<div id='dashboard'>
				<Dashboard winningNumber={winningNumber} setBet={setBet} />
			</div>
		</div>
	);
}

export default App;
