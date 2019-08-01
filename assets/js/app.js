'use strict';

const {isValidPesel, checkGender, getDateOfBirth} = require('pesel-utils');

window.addEventListener('load', () => {
	const getData = () => {
		const formData = new FormData(form);
		const info1 = document.querySelector('#info1');
		const info2 = document.querySelector('#info2');
		const info3 = document.querySelector('#info3');
		const info4 = document.querySelector('#info4');

		for (const pair of formData.entries()) {
			const peselValue = pair[1];
			const pesel = peselValue.toString();
			const array = pesel.split('').map(item => Number(item));

			const serial = `${array[6]}${array[7]}${array[8]}${array[9]}`;

			if (isValidPesel(pesel.toString()) === false) {
				info1.textContent = 'Podano nieprawidłowy numer PESEL';
				info2.textContent = '';
				info3.textContent = '';
				info4.textContent = '';
			} else {
				info1.textContent = 'PESEL jest prawidłowy';

				info2.textContent = `Data urodzenia to: ${getDateOfBirth(pesel)}`;

				if (checkGender(pesel.toString()) === 'female') {
					info3.textContent = 'Płeć: kobieta';
				} else {
					info3.textContent = 'Płeć: Mężczyzna';
				}

				info4.textContent = `Numer seryjny: ${serial}`;
			}
		}
	};

	const form = document.querySelector('form');

	form.addEventListener('submit', e => {
		e.preventDefault();
		getData();
	});
});
