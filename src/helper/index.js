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
