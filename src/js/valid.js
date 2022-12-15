const firstName = document.querySelector('.form__input--first-name');
const lastName = document.querySelector('.form__input--last-name');
const mail = document.querySelector('.form__input--mail');
const phone = document.querySelector('.form__input--phone');
const message = document.querySelector('.form__message');
const requiredValues = document.querySelectorAll('[required]');

const formBtn = document.querySelector('.form__btn');
const submitText = document.querySelector('.form__submit-text');

const checkForm = (input, e) => {
	if (input.value !== '') {
		e.preventDefault();
		submitText.style.visibility = 'visible';
	}
};

formBtn.addEventListener('click', (e) => {
	checkForm(firstName, e);
});
