let submenus = document.getElementsByClassName('submenu');

function closeOtherSubmenus(openDropdown) {
	for (let i = 0; i < submenus.length; i++) {
		let isToggled = submenus[i].classList.contains('show-submenu');

		if (isToggled && openDropdown.id != submenus[i].id) {
			submenus[i].classList.toggle('show-submenu');
		}
	}
}

function dropdownMenu() {
	let mainMenuDropdown = document.getElementById('main-menu');
	mainMenuDropdown.classList.toggle('show-menu');
	mainMenuDropdown.addEventListener(
		'click',
		closeOtherSubmenus(mainMenuDropdown)
	);
}

function dropdownBootcamp() {
	const bootcampDropdown = document.getElementById('bootcamp');
	bootcampDropdown.classList.toggle('show-submenu');
	bootcampDropdown.addEventListener(
		'click',
		closeOtherSubmenus(bootcampDropdown)
	);
}

function dropdownPD() {
	let professionalDevDropdown = document.getElementById(
		'professional-development'
	);
	professionalDevDropdown.classList.toggle('show-submenu');
	professionalDevDropdown.addEventListener(
		'click',
		closeOtherSubmenus(professionalDevDropdown)
	);
}

function dropdownOutcomes() {
	let outcomesDropdown = document.getElementById('outcomes');
	outcomesDropdown.classList.toggle('show-submenu');
	outcomesDropdown.addEventListener(
		'click',
		closeOtherSubmenus(outcomesDropdown)
	);
}

function dropdownEvents() {
	let eventsDropdown = document.getElementById('events');
	eventsDropdown.classList.toggle('show-submenu');
	eventsDropdown.addEventListener(
		'click',
		closeOtherSubmenus(eventsDropdown)
	);
}
