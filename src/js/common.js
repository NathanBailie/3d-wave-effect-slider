'use strict';

let items = document.querySelectorAll('.item');

for (let item of items) {
	item.addEventListener('click', () => {
		let active = item.classList.contains('active');

		resetClasses(items);

		if (active) {
			item.classList.remove('active');
		} else {
			item.classList.add('active');
		}
	});
}

function resetClasses(array) {
	for (let elem of array) {
		elem.classList.remove('active');
	}
}
