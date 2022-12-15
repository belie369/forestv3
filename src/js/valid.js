const firstName = document.querySelector('.form__input--first-name');
const lastName = document.querySelector('.form__input--last-name');
const mail = document.querySelector('.form__input--mail');
const phone = document.querySelector('.form__input--phone');
const message = document.querySelector('.form__message');
const requiredValues = document.querySelectorAll('[required]');

const formBtn = document.querySelector('.form__btn');
const submitText = document.querySelector('.form__submit-text');

const checkForm = (elements, e) => {
	const emptyElements = [...elements].filter((el) => el.value === '');

	console.log(emptyElements);

	if (emptyElements.length == 0) {
		e.preventDefault();
		submitText.style.visibility = 'visible';
	}
};

formBtn.addEventListener('click', (e) => {
	checkForm(requiredValues, e);
});
