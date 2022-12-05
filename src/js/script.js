let burgerBtn;
let logo;
let navbar;
let menu;
let navbarItems;
let navbarLinks;
let sections;
let getCurrentUrl;
let yearFooter;

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.navbar__burger-btn');
	logo = document.querySelector('.navbar__logo');
	navbar = document.querySelector('.navbar');
	menu = document.querySelector('.navbar__list');
	navbarItems = document.querySelectorAll('.navbar__item');
	navbarLinks = document.querySelectorAll('.navbar__item a');
	sections = document.querySelectorAll('.scrollspy');
	getCurrentUrl = window.location.href;
	yearFooter = document.querySelector('.footer__year');
};

const prepareDOMEvents = () => {
	startHighlightNavFocus();
	letCurrentYear();
	burgerBtn.addEventListener('click', showMenu);
	logo.addEventListener('click', closeMenu);
	navbarItems.forEach((item) => item.addEventListener('click', closeMenu));
	window.addEventListener('scroll', scrollSpy);
};

const showMenu = () => {
	menu.classList.toggle('show-menu');
	burgerBtn.classList.toggle('is-active');
};

const closeMenu = () => {
	burgerBtn.classList.remove('is-active');
	menu.classList.remove('show-menu');
};

const scrollSpy = () => {
	sections.forEach((section) => {
		const id = section.getAttribute('id');

		const viewTop = window.scrollY + 400;
		const sectionTop = section.offsetTop;
		const sectionBottom = section.offsetTop + section.offsetHeight;

		if (viewTop >= sectionTop && viewTop < sectionBottom) {
			removeHighlightNavbarItems();
			highlightNavbarItem(id);
		}
	});
};

const removeHighlightNavbarItems = () => {
	navbarItems.forEach((item) => {
		item.classList.remove('active');
	});
};

const highlightNavbarItem = (id) => {
	document.querySelector(`.navbar__item a[href*=${id}]`).parentElement.classList.add('active');
};

const startHighlightNavFocus = () => {
	const hostNameLength = getCurrentUrl.lastIndexOf('/');
	const hostName = getCurrentUrl.slice(0, hostNameLength);

	console.log(hostName);
	console.log(getCurrentUrl);

	switch (getCurrentUrl) {
		case `${hostName}`:
		case `${hostName}/`:
		case `${hostName}/index.html`:
			highlightNavbarItem('home');
			break;
		case `${hostName}/contact.html`:
			highlightNavbarItem('contact');
			break;
		case `${hostName}/offer.html`:
			highlightNavbarItem('offer');
			break;
	}
};

const letCurrentYear = () => {
	const currentYear = new Date();
	yearFooter.textContent = currentYear.getFullYear();
};

prepareDOMElements();
prepareDOMEvents();
