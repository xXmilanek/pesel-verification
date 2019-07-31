'use strict';

window.addEventListener('load', () => {
	const getData = () => {
		const formData = new FormData(form);

		for (const pair of formData.entries()) {
			const pesel = pair[1];

			var array = pesel.toString().split('').map((item, index) => parseInt(item));
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
			const k = array[10];

			var l = (9*a + 7*b + 3*c + 1*d + 9*e + 7*f + 3*g + 1*h + 9*i + 7*j) % 10;
			const m = c.toString() + d.toString();
			Number(m);

			if (k === l) {

				info1.textContent = 'PESEL jest prawidłowy';

				if  ((m >=1)&&(m <=12)){

						info2.textContent = `Data urodzenia to: 19${a}${b}.${m}.${e}${f}`;

				}

				else if  ((m >=21)&&(m <=32)){
					const m2 = m-20;

					if (m2 < 10){
						info2.textContent = `Data urodzenia to: 20${a}${b}.0${m2}.${e}${f}`;
					}
					else {
						info2.textContent = `Data urodzenia to: 20${a}${b}.${m2}.${e}${f}`;
					}
				}
				else if  ((m >=41)&&(m <=52)){
					const m2 = m-40;

					if (m2 < 10){
						info2.textContent = `Data urodzenia to: 21${a}${b}.0${m2}.${e}${f}`;
					}
					else {
						info2.textContent = `Data urodzenia to: 21${a}${b}.${m2}.${e}${f}`;
					}
				}
				else if  ((m >=61)&&(m <=72)){
					const m2 = m-60;

					if (m2 < 10){
						info2.textContent = `Data urodzenia to: 22${a}${b}.0${m2}.${e}${f}`;
					}
					else {
						info2.textContent = `Data urodzenia to: 22${a}${b}.${m2}.${e}${f}`;
					}
				}
				if (j%2==0){
					info3.textContent = `Płeć: kobieta`;
				}
				else {
					info3.textContent = `Płeć: Mężczyzna`;
				}

				info4.textContent = `Numer seryjny: ${g}${h}${i}${j}`;

			}
			else {
				info1.textContent = 'PESEL nie jest prawidłowy';
				info2.textContent = ``;
				info3.textContent = ``;
				info4.textContent = ``;

			}




		}
	};

	const form = document.querySelector('form');

	form.addEventListener('submit', event => {
		event.preventDefault();
		getData();
	});
});
