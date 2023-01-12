import React, { useEffect, useState } from 'react';

import 'src/style/wheel.scss';
import $ from 'jquery';
import { getRndInteger, checkWinningNumber, winningEffect, paid } from 'src/helper';
import Keyframes from '@keyframes/core';
import { time as timeSetting } from 'src/setting';
import sound from './audio/spin.mp3'

function Wheel({ getWinning, setBetTime, mute }) {
	var [time, setTime] = useState(timeSetting.bet_time);
	var [degree, setDegree] = useState(0);

	var [winning_number, setWinning_number] = useState({
		number: 0,
		color: 'green',
		deg: 0,
	});

	var supportedFlag = Keyframes.isSupported();

	useEffect(() => {
		var interval = setInterval(() => {
			if (time === 0) {
				setBetTime(false);
				clearInterval(interval);
				if (!mute) {
					var audio = new Audio(sound);
					audio.play();
				}
				$('#count_time').css('display', 'none');
				var rnd = getRndInteger(3600, 7200); // Get random degree
				var win_num = checkWinningNumber(rnd % 360);
				rnd = Math.floor(rnd / 360) * 360 + win_num.deg;

				/** Spin ball keyframes */
				const ball = new Keyframes(document.getElementById('ball_center'));
				Keyframes.define({
					name: 'ballMoving',
					'0%': {
						transform: `rotate(${degree}deg)`,
					},
					'90%': {
						transform: `rotate(${rnd + 2}deg)`,
					},
					'100%': {
						transform: `rotate(${rnd}deg)`,
					},
				});
				ball.play(`ballMoving ${timeSetting.spin_time_string} ease-out forwards`, {
					/**After spin done => show winning number */
					onEnd: () => {
						$('#winning_number').css('display', 'flex');
						winningEffect(win_num);
						setWinning_number(win_num);
						getWinning(win_num); // pass winning number to parent compoent
					},
				});

				setDegree(rnd % 360); // set current location for next round

				setTimeout(() => {
					$('#count_time').css('display', 'flex');
					$('#winning_number').css('display', 'none');
					setTime(timeSetting.bet_time);
					setBetTime(true);
					$('.bet_slot').removeClass('win_effect'); // clear win effect
					$('#won_container span').html(`0$`); // clear won credit
					$('.betChip').html(''); // clear chip on table
				}, timeSetting.spin_time + timeSetting.show_winning);
			} else {
				setTime(time - 1);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time]);

	const spin = () => {};

	return (
		<div id='wheel_container'>
			<div id='count_time'>
				<span>{time}</span>
			</div>
			<div id='trim'></div>
			<div id='center_tube'>
				<div></div>
			</div>
			<div id='plate'>
				<div id='ball_container'>
					<div id='ball_center'>
						<div id='ball'></div>
					</div>
				</div>
				<div className='number' id='number_0'>
					<span>0</span>
				</div>
				<div className='number' id='number_1'>
					<span>32</span>
				</div>
				<div className='number' id='number_2'>
					<span>15</span>
				</div>
				<div className='number' id='number_3'>
					<span>19</span>
				</div>
				<div className='number' id='number_4'>
					<span>4</span>
				</div>
				<div className='number' id='number_5'>
					<span>21</span>
				</div>
				<div className='number' id='number_6'>
					<span>2</span>
				</div>
				<div className='number' id='number_7'>
					<span>25</span>
				</div>
				<div className='number' id='number_8'>
					<span>17</span>
				</div>
				<div className='number' id='number_9'>
					<span>34</span>
				</div>
				<div className='number' id='number_10'>
					<span>6</span>
				</div>
				<div className='number' id='number_11'>
					<span>27</span>
				</div>
				<div className='number' id='number_12'>
					<span>13</span>
				</div>
				<div className='number' id='number_13'>
					<span>36</span>
				</div>
				<div className='number' id='number_14'>
					<span>11</span>
				</div>
				<div className='number' id='number_15'>
					<span>30</span>
				</div>
				<div className='number' id='number_16'>
					<span>8</span>
				</div>
				<div className='number' id='number_17'>
					<span>23</span>
				</div>
				<div className='number' id='number_18'>
					<span>10</span>
				</div>
				<div className='number' id='number_19'>
					<span>5</span>
				</div>
				<div className='number' id='number_20'>
					<span>24</span>
				</div>
				<div className='number' id='number_21'>
					<span>16</span>
				</div>
				<div className='number' id='number_22'>
					<span>33</span>
				</div>
				<div className='number' id='number_23'>
					<span>1</span>
				</div>
				<div className='number' id='number_24'>
					<span>20</span>
				</div>
				<div className='number' id='number_25'>
					<span>14</span>
				</div>
				<div className='number' id='number_26'>
					<span>31</span>
				</div>
				<div className='number' id='number_27'>
					<span>9</span>
				</div>
				<div className='number' id='number_28'>
					<span>22</span>
				</div>
				<div className='number' id='number_29'>
					<span>18</span>
				</div>
				<div className='number' id='number_30'>
					<span>29</span>
				</div>
				<div className='number' id='number_31'>
					<span>7</span>
				</div>
				<div className='number' id='number_32'>
					<span>28</span>
				</div>
				<div className='number' id='number_33'>
					<span>12</span>
				</div>
				<div className='number' id='number_34'>
					<span>35</span>
				</div>
				<div className='number' id='number_35'>
					<span>3</span>
				</div>
				<div className='number' id='number_36'>
					<span>26</span>
				</div>
			</div>
			<div id='winning_number' className={winning_number.color}>
				<div>
					<span>{winning_number.number}</span>
					<span>{winning_number.color.toString().toUpperCase()}</span>
				</div>
			</div>
		</div>
	);
}

export default Wheel;
