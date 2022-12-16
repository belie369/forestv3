const firstName = document.querySelector('.form__input--first-name');
const lastName = document.querySelector('.form__input--last-name');
const mail = document.querySelector('.form__input--mail');
const phone = document.querySelector('.form__input--phone');
const message = document.querySelector('.form__message');
const requiredValues = document.querySelectorAll('[required]');
const formBtn = document.querySelector('.form__btn');
const submitText = document.querySelector('.form__submit-text');

const requiredsFilled = (elements) => {
	const emptyElements = [...elements].filter((el) => el.value === '');

	return emptyElements.length == 0;
};

formBtn.addEventListener('click', (e) => {
	if (requiredsFilled(requiredValues)) {
		submitText.style.visibility = 'visible';
		e.preventDefault();
		[firstName, lastName, mail, phone, message].forEach((el) => {
			el.value = '';
		});
	}
});
