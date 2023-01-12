import React, { useState, useEffect } from 'react';

import 'src/style/dashboard.scss';
import { numbers } from 'src/setting';

const Dashboard = ({ winningNumber, setBet }) => {
	var [history, setHistory] = useState([
		{ number: 4, color: 'black', deg: 38.9188 },
		{ number: 20, color: 'black', deg: 233.51279999999997 },
		{ number: 21, color: 'red', deg: 48.6485 },
		{ number: 2, color: 'black', deg: 58.37819999999999 },
		{ number: 25, color: 'red', deg: 68.1079 },
		{ number: 1, color: 'red', deg: 223.7831 },
		{ number: 17, color: 'black', deg: 77.8376 },
		{ number: 20, color: 'black', deg: 233.51279999999997 },
		{ number: 16, color: 'red', deg: 204.32369999999997 },
		{ number: 33, color: 'black', deg: 214.05339999999998 },
		{ number: 20, color: 'black', deg: 233.51279999999997 },
	]);

	useEffect(() => {
		if (winningNumber) {
			let temp = [...history];
			temp.unshift(winningNumber);
			setHistory(temp);
		}
	}, [winningNumber]);

	var renderHistory = history.slice(0, 44).map((number, index) => {
		return (
			<div className={`history_number ${number.color}`} key={index}>
				<span>{number.number}</span>
			</div>
		);
	});

	const handleChips = (value) => {
		$('.chip').removeClass('active');
		$(`.chip[value=${value}]`).addClass('active');
		setBet(value);
	};

	return (
		<div id='dashboard_container'>
			<div id='credit_container' className='dashboard_item'>
				Credit: <span>1000$</span>
			</div>
			<div id='won_container' className='dashboard_item'>
				Win: <span>0$</span>
			</div>
			<div id='bet_container' className='dashboard_item'>
				Bet
				<div id='chips'>
					<div
						value={1}
						onClick={() => {
							handleChips(1);
						}}
						className='chip active'
					>
						1$
					</div>
					<div
						value={5}
						onClick={() => {
							handleChips(5);
						}}
						className='chip'
					>
						5$
					</div>
					<div
						value={10}
						onClick={() => {
							handleChips(10);
						}}
						className='chip'
					>
						10$
					</div>
				</div>
			</div>
			<div id='history_container' className='dashboard_item'>
				{renderHistory}
			</div>
		</div>
	);
};

export default Dashboard;
