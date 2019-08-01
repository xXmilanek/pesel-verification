'use strict';

const {isValidPesel} = require('pesel-utils');

window.addEventListener('load', () => {
	const getData = () => {
		const formData = new FormData(form);
		const info1 = document.querySelector('#info1');
		const info2 = document.querySelector('#info2');
		const info3 = document.querySelector('#info3');
		const info4 = document.querySelector('#info4');

		for (const pair of formData.entries()) {
			const pesel = pair[1];
			const array = pesel.toString().split('').map(item => Number(item));

			const a = array[0];
			const b = array[1];
			const c = array[2];
			const d = array[3];
			const e = array[4];
			const f = array[5];
			const g = array[6];
			const h = array[7];
			const i = array[8];
			const j = array[9];
			const k = Number(`${c}${d}`);

			if (isValidPesel(pesel.toString()) === false) {
				info1.textContent = 'Podano nieprawidłowy numer PESEL';
			} else {
				info1.textContent = 'PESEL jest prawidłowy';

				if ((k >= 1) && (k <= 12)) {
					info2.textContent = `Data urodzenia to: 19${a}${b}.${k}.${e}${f}`;
				} else if ((k >= 21) && (k <= 32)) {
					const k2 = k - 20;

					if (k2 < 10) {
						info2.textContent = `Data urodzenia to: 20${a}${b}.0${k2}.${e}${f}`;
					} else {
						info2.textContent = `Data urodzenia to: 20${a}${b}.${k2}.${e}${f}`;
					}
				} else if ((k >= 41) && (k <= 52)) {
					const k2 = k - 40;

					if (k2 < 10) {
						info2.textContent = `Data urodzenia to: 21${a}${b}.0${k2}.${e}${f}`;
					} else {
						info2.textContent = `Data urodzenia to: 21${a}${b}.${k2}.${e}${f}`;
					}
				} else if ((k >= 61) && (k <= 72)) {
					const k2 = k - 60;

					if (k2 < 10) {
						info2.textContent = `Data urodzenia to: 22${a}${b}.0${k2}.${e}${f}`;
					} else {
						info2.textContent = `Data urodzenia to: 22${a}${b}.${k2}.${e}${f}`;
					}
				}

				if (j % 2 === 0) {
					info3.textContent = 'Płeć: kobieta';
				} else {
					info3.textContent = 'Płeć: Mężczyzna';
				}

				info4.textContent = `Numer seryjny: ${g}${h}${i}${j}`;
			}
		}
	};

	const form = document.querySelector('form');

	form.addEventListener('submit', e => {
		e.preventDefault();
		getData();
	});
});
