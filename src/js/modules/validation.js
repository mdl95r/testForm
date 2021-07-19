const isValidEmail = (email) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);

const validation = () => {
	const allInputs = document.querySelectorAll('.modal-form__product-input');

	let field = false;

	for (let i = 0; i < allInputs.length; i++) {
		if (!allInputs[i].value) {
			const groupParent = allInputs[i].closest('.modal-form__product-group');
			groupParent.classList.remove('modal-form__product-group_valid');
			groupParent.classList.add('modal-form__product-group_invalid');
			field = false;
		} else {
			const groupParent = allInputs[i].closest('.modal-form__product-group');

			groupParent.classList.remove('modal-form__product-group_invalid');
			groupParent.classList.add('modal-form__product-group_valid');

			if (allInputs[i].type === 'email') {
				const isValid = isValidEmail(allInputs[i].value);
				if (isValid) {
					groupParent.classList.remove('modal-form__product-group_invalid');
					groupParent.classList.add('modal-form__product-group_valid');
					field = true;
				} else {
					groupParent.classList.remove('modal-form__product-group_valid');
					groupParent.classList.add('modal-form__product-group_invalid');
					field = false;
				}
			}
		}
		allInputs[i].addEventListener('input', function () {
			if (!allInputs[i].value) {
				const groupParent = allInputs[i].closest('.modal-form__product-group');

				groupParent.classList.remove('modal-form__product-group_valid');
				groupParent.classList.add('modal-form__product-group_invalid');
			} else {
				const groupParent = allInputs[i].closest('.modal-form__product-group');

				groupParent.classList.remove('modal-form__product-group_invalid');
				groupParent.classList.add('modal-form__product-group_valid');
			}
		})
	}
	return field
}

export default validation