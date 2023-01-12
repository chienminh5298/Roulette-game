import React, { useState, Fragment, useEffect } from 'react';
import $ from 'jquery';

import 'src/style/table.scss';
import { num_for_table } from 'src/setting';
import chip1 from './image/chip1.png';
import chip2 from './image/chip2.png';
import chip3 from './image/chip3.png';
import { paid } from 'src/helper';

const Table = ({ currentBet, handle_substract_credit, betTime, winningNumber, credit, setCredit }) => {
	var [bet, setBet] = useState(new Array(49).fill(0));

	var render1to12 = num_for_table.slice(1, 13).map((number, index) => (
		<div
			className='number bet_slot'
			key={index}
			onClick={() => {
				handle_bet(number.number);
			}}
			value={number.number}
		>
			<span className={`${number.color}`}>{number.number}</span>
			<div className='betChip' id={`bet_slot_${number.number}`}></div>
		</div>
	));
	var render13to24 = num_for_table.slice(13, 25).map((number, index) => (
		<div
			className='number bet_slot'
			key={index}
			onClick={() => {
				handle_bet(number.number);
			}}
			value={number.number}
		>
			<span className={`${number.color}`}>{number.number}</span>
			<div className='betChip' id={`bet_slot_${number.number}`}></div>
		</div>
	));
	var render25to36 = num_for_table.slice(25, 37).map((number, index) => (
		<div
			className='number bet_slot'
			key={index}
			onClick={() => {
				handle_bet(number.number);
			}}
			value={number.number}
		>
			<span className={`${number.color}`}>{number.number}</span>
			<div className='betChip' id={`bet_slot_${number.number}`}></div>
		</div>
	));

	useEffect(() => {
		let won = paid(bet, winningNumber);
		$('#won_container span').html(`${won}$`);
		setBet(new Array(49).fill(0)); // Reset bet for new spin
		setCredit(credit + won);
	}, [winningNumber]);

	const handle_bet = (slot) => {
		if (betTime && credit >= currentBet) {
			handle_substract_credit();
			let temp = [...bet];
			temp[slot] += currentBet;
			if (temp[slot] >= 10) {
				$(`#bet_slot_${slot}`).html(
					`<Fragment>
						<img src='${chip3}' alt='bet' />
						<span>${temp[slot]}</span>
					</Fragment>`
				);
			} else if (temp[slot] < 5) {
				$(`#bet_slot_${slot}`).html(
					`<Fragment>
						<img src='${chip1}' alt='bet' />
						<span>${temp[slot]}</span>
					</Fragment>`
				);
			} else {
				$(`#bet_slot_${slot}`).html(
					`<Fragment>
						<img src='${chip2}' alt='bet' />
						<span>${temp[slot]}</span>
					</Fragment>`
				);
			}
			setBet(temp);
		}
	};

	return (
		<div id='table_container'>
			<div
				id='zero_column'
				onClick={() => {
					handle_bet(0);
				}}
				value={0}
				className='bet_slot'
			>
				<div id='zero'>
					<span>0</span>
				</div>
				<div className='betChip' id={`bet_slot_0`}></div>
			</div>
			<div id='first_number_column' className='number_column'>
				<div className='number_container'>{render1to12}</div>
				<div className='bonus_container'>
					<div
						className='bonus_12 bet_slot'
						onClick={() => {
							handle_bet(40);
						}}
						value={40}
					>
						<span>1st 12</span>
						<div className='betChip' id={`bet_slot_40`}></div>
					</div>
					<div className='bonus_mini_container'>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(43);
							}}
							value={43}
						>
							<span>1 to 18</span>
							<div className='betChip' id={`bet_slot_43`}></div>
						</div>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(44);
							}}
							value={44}
						>
							<span>EVEN</span>
							<div className='betChip' id={`bet_slot_44`}></div>
						</div>
					</div>
				</div>
			</div>
			<div id='second_number_column' className='number_column'>
				<div className='number_container'>{render13to24}</div>
				<div className='bonus_container'>
					<div
						className='bonus_12 bet_slot'
						onClick={() => {
							handle_bet(41);
						}}
						value={41}
					>
						<span>2nd 12</span>
						<div className='betChip' id={`bet_slot_41`}></div>
					</div>
					<div className='bonus_mini_container'>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(45);
							}}
							value={45}
						>
							<span id='diamond_red'></span>
							<div className='betChip' id={`bet_slot_45`}></div>
						</div>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(46);
							}}
							value={46}
						>
							<span id='diamond_black'></span>
							<div className='betChip' id={`bet_slot_46`}></div>
						</div>
					</div>
				</div>
			</div>
			<div id='third_number_column' className='number_column'>
				<div className='number_container'>{render25to36}</div>
				<div className='bonus_container'>
					<div
						className='bonus_12 bet_slot'
						onClick={() => {
							handle_bet(42);
						}}
						value={42}
					>
						<span>3rd 12</span>
						<div className='betChip' id={`bet_slot_42`}></div>
					</div>
					<div className='bonus_mini_container'>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(47);
							}}
							value={47}
						>
							<span>ODD</span>
							<div className='betChip' id={`bet_slot_47`}></div>
						</div>
						<div
							className='bonus_mini bet_slot'
							onClick={() => {
								handle_bet(48);
							}}
							value={48}
						>
							<span>19 to 36</span>
							<div className='betChip' id={`bet_slot_48`}></div>
						</div>
					</div>
				</div>
			</div>
			<div id='last_column'>
				<div
					id='first_row'
					className='row bet_slot'
					onClick={() => {
						handle_bet(37);
					}}
					value={37}
				>
					<p>2 to 1</p>
					<div className='betChip' id={`bet_slot_37`}></div>
				</div>
				<div
					id='first_row'
					className='row bet_slot'
					onClick={() => {
						handle_bet(38);
					}}
					value={38}
				>
					<p>2 to 1</p>
					<div className='betChip' id={`bet_slot_38`}></div>
				</div>
				<div
					id='first_row'
					className='row bet_slot'
					onClick={() => {
						handle_bet(39);
					}}
					value={39}
				>
					<p>2 to 1</p>
					<div className='betChip' id={`bet_slot_39`}></div>
				</div>
			</div>
		</div>
	);
};

export default Table;
