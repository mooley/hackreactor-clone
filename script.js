// Elements

let mainMenu = document.getElementById('main-menu');
let mainMenuButton = document.getElementsByClassName('menu-button')[0];
let submenus = document.getElementsByClassName('submenu');

// Functions

function closeOtherSubmenus(openDropdown) {
	for (let i = 0; i < submenus.length; i++) {
		let isToggled = submenus[i].classList.contains('show-submenu');

		if (isToggled && openDropdown.id != submenus[i].id) {
			submenus[i].classList.toggle('show-submenu');
		}
	}
}

function toggleMainMenu() {
	mainMenu.classList.toggle('show-menu');
	closeOtherSubmenus(mainMenu);
}

function toggleSubmenu(submenu) {
	submenu.classList.toggle('show-submenu');
	closeOtherSubmenus(submenu);
}

function changeColor(button) {
	button.classList.toggle('change-color');
}

// Event listeners

// Main dropdown menu
mainMenuButton.addEventListener('click', toggleMainMenu);

// Submenu listener loop
for (let i = 0; i < submenus.length; i++) {
	if (submenus[i].id != 'prepare') {
		let submenuButton = submenus[i].children[0];
		submenuButton.addEventListener('click', function () {
			toggleSubmenu(submenus[i]);
		});
	}
}
