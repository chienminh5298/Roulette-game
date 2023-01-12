import { numbers } from 'src/setting';

export const getRndInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

export const checkWinningNumber = (deg) => {
	for (let i = 0; i < numbers.length - 1; i++) {
		if (deg >= numbers[i].deg && deg <= numbers[i + 1].deg) return numbers[i];
		else if (deg >= 350.26919999999996) return numbers[numbers.length - 1];
	}
};

export const winningEffect = (number) => {
	switch (number.number) {
		case 1:
		case 4:
		case 7:
		case 10:
		case 13:
		case 16:
		case 19:
		case 22:
		case 25:
		case 28:
		case 31:
		case 34:
			$('.bet_slot[value=39]').addClass('win_effect');
			break;
		case 2:
		case 5:
		case 8:
		case 11:
		case 14:
		case 17:
		case 20:
		case 23:
		case 26:
		case 29:
		case 32:
		case 35:
			$('.bet_slot[value=38]').addClass('win_effect');
			break;
		case 3:
		case 6:
		case 9:
		case 12:
		case 15:
		case 18:
		case 21:
		case 24:
		case 27:
		case 30:
		case 33:
		case 36:
			$('.bet_slot[value=37]').addClass('win_effect');
			break;
		default:
			break;
	}

	switch (number.number) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			$('.bet_slot[value=40]').addClass('win_effect');
			break;
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			$('.bet_slot[value=41]').addClass('win_effect');
			break;
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
			$('.bet_slot[value=42]').addClass('win_effect');
			break;
		default:
			break;
	}

	if (number.color === 'black') {
		$('.bet_slot[value=46]').addClass('win_effect');
	} else if (number.color === 'red') {
		$('.bet_slot[value=45]').addClass('win_effect');
	}

	if (number.number >= 1 && number.number <= 18) {
		$('.bet_slot[value=43]').addClass('win_effect');
	} else if (number.number >= 19 && number.number <= 36) {
		$('.bet_slot[value=48]').addClass('win_effect');
	}

	if (number.number % 2 === 0 && number.number !== 0) {
		$('.bet_slot[value=44]').addClass('win_effect');
	} else if (number.number % 2 !== 0 && number.number !== 0) {
		$('.bet_slot[value=47]').addClass('win_effect');
	}

	$(`.bet_slot[value=${number.number}]`).addClass('win_effect');
};

export const paid = (betArr, winNum) => {
	if (winNum) {
		var win = 0;
		// Pay by number
		win += betArr[winNum.number] * 36;
		// Pay by color
		if (winNum.color === 'black') {
			win += betArr[46] * 2;
		} else if (winNum.color === 'red') {
			win += betArr[45] * 2;
		}
		// Pay by 1 to 18 or 19 to 36
		if (winNum.number >= 1 && winNum.number <= 18) {
			win += betArr[43] * 2;
		} else if (winNum.number >= 19 && winNum.number <= 36) {
			win += betArr[48] * 2;
		}
		// Pay by even or odd
		if (winNum.number % 2 === 0 && winNum.number !== 0) {
			win += betArr[44] * 2;
		} else if (winNum.number % 2 !== 0 && winNum.number !== 0) {
			win += betArr[47] * 2;
		}
		// Pay by 12
		if (winNum.number >= 1 && winNum.number <= 12) {
			win += betArr[40] * 3;
		} else if (winNum.number >= 13 && winNum.number <= 24) {
			win += betArr[41] * 3;
		} else if (winNum.number >= 25 && winNum.number <= 36) {
			win += betArr[42] * 3;
		}
		// Pay by row
		switch (winNum.number) {
			case 1:
			case 4:
			case 7:
			case 10:
			case 13:
			case 16:
			case 19:
			case 22:
			case 25:
			case 28:
			case 31:
			case 34:
				win += betArr[39] * 3;
				break;
			case 2:
			case 5:
			case 8:
			case 11:
			case 14:
			case 17:
			case 20:
			case 23:
			case 26:
			case 29:
			case 32:
			case 35:
				win += betArr[38] * 3;
				break;
			case 3:
			case 6:
			case 9:
			case 12:
			case 15:
			case 18:
			case 21:
			case 24:
			case 27:
			case 30:
			case 33:
			case 36:
				win += betArr[37] * 3;
				break;
			default:
				break;
		}
		return win;
	}
	return 0;
};
