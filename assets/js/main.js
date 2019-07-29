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

			if (k === l) {
				alert(`pesel jest poprawny`);
			}
			else {
				alert(`pesel jest niepoprawny`)
			}

		}
	};

	const form = document.querySelector('form');

	form.addEventListener('submit', event => {
		event.preventDefault();
		getData();
	});
});
