let firstName;
let lastName;
let mail;
let phone;
let message;
let formBtn;
let submitText;

const prepareDOMElements = () => {
	firstName = document.querySelector('.form__input--first-name');
	lastName = document.querySelector('.form__input--last-name');
	mail = document.querySelector('.form__input--mail');
	phone = document.querySelector('.form__input--phone');
	message = document.querySelector('.form__message');
	phone = document.querySelector('.form__input--phone');
	formBtn = document.querySelector('.form__btn');
	submitText = document.querySelector('form__submit-text');
};

const prepareDOMEvents = () => {
	preventRefresh();
};

const preventRefresh = () =>
	formBtn.addEventListener('click', (e) => {
		e.preventDefault();
	});

prepareDOMElements();
prepareDOMEvents();
