import React from 'react';

import 'src/style/table.scss';
import { num_for_table } from 'src/setting';

const Table = () => {
	var render1to12 = num_for_table.slice(1, 13).map((number, index) => (
		<div className='number' key={index}>
			<span className={`${number.color}`}>{number.number}</span>
		</div>
	));
	var render13to24 = num_for_table.slice(13, 25).map((number, index) => (
		<div className='number' key={index}>
			<span className={`${number.color}`}>{number.number}</span>
		</div>
	));
	var render25to36 = num_for_table.slice(25, 37).map((number, index) => (
		<div className='number' key={index}>
			<span className={`${number.color}`}>{number.number}</span>
		</div>
	));
	return (
		<div id='table_container'>
			<div id='zero_column'>
				<div id='zero'>
					<span>0</span>
				</div>
			</div>
			<div id='first_number_column' className='number_column'>
				<div className='number_container'>{render1to12}</div>
				<div className='bonus_container'>
					<div className='bonus_12'>
						<span>1st 12</span>
					</div>
					<div className='bonus_mini_container'>
						<div className='bonus_mini'>
							<span>1 to 18</span>
						</div>
						<div className='bonus_mini'>
							<span>EVEN</span>
						</div>
					</div>
				</div>
			</div>
			<div id='second_number_column' className='number_column'>
				<div className='number_container'>{render13to24}</div>
				<div className='bonus_container'>
					<div className='bonus_12'>
						<span>2nd 12</span>
					</div>
					<div className='bonus_mini_container'>
						<div className='bonus_mini'>
							<span id='diamond_red'></span>
						</div>
						<div className='bonus_mini'>
							<span id='diamond_black'></span>
						</div>
					</div>
				</div>
			</div>
			<div id='third_number_column' className='number_column'>
				<div className='number_container'>{render25to36}</div>
				<div className='bonus_container'>
					<div className='bonus_12'>
						<span>3rd 12</span>
					</div>
					<div className='bonus_mini_container'>
						<div className='bonus_mini'>
							<span>ODD</span>
						</div>
						<div className='bonus_mini'>
							<span>19 to 36</span>
						</div>
					</div>
				</div>
			</div>
			<div id='last_column'>
				<div id='first_row' className='row'>
					<span>2 to 1</span>
				</div>
				<div id='first_row' className='row'>
					<span>2 to 1</span>
				</div>
				<div id='first_row' className='row'>
					<span>2 to 1</span>
				</div>
			</div>
		</div>
	);
};

export default Table;
