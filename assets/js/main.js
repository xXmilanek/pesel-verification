'use strict';

window.addEventListener('load', () => {
	const getData = () => {
		const formData = new FormData(form);

		for (const pair of formData.entries()) {
			const pesel = pair[1];

			// Do something

			alert(`Podany pesel to: ${pesel}`);
		}
	};

	const form = document.querySelector('form');

	form.addEventListener('submit', event => {
		event.preventDefault();
		getData();
	});
});
