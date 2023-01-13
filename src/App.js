import React, { useState, useEffect } from 'react';

import 'src/style/App.scss';
import Wheel from 'src/components/wheel';
import Table from 'src/components/table';
import Dashboard from 'src/components/dashboard';
import payout from 'src/components/image/payout.png';

function App() {
	var [winningNumber, setWinningNumber] = useState();
	var [bet, setBet] = useState(1);
	var [credit, setCredit] = useState(1000);
	var [betTime, setBetTime] = useState(true);
	var [mute, setMute] = useState(false);

	const handle_substract_credit = () => {
		setCredit(credit - bet);
	};

	function handle_mute() {
		setMute(!mute);
		$('#mute').toggleClass('unmute');
		if (!mute) {
			$('#mute').html('Unmute');
		} else {
			$('#mute').html('Mute');
		}
	}

	function handle_payout() {
		$('#payout_img').toggleClass('d-none');
	}

	return (
		<div id='game_container'>
			<div id='payout_img' className='d-none'>
				<img src={payout} href='Pay out' />
			</div>
			<div id='wheel_and_table_container'>
				<Wheel getWinning={setWinningNumber} setBetTime={setBetTime} mute={mute} />
				<Table currentBet={bet} handle_substract_credit={handle_substract_credit} betTime={betTime} winningNumber={winningNumber} credit={credit} setCredit={setCredit} />
			</div>
			<div id='how_to_play_and_sound_container'>
				<button id='pay_rule' onClick={handle_payout}>
					Pay out
				</button>
				<button id='mute' onClick={handle_mute}>
					Mute
				</button>
			</div>
			<div id='dashboard'>
				<Dashboard winningNumber={winningNumber} setBet={setBet} credit={credit} />
			</div>
		</div>
	);
}

export default App;
