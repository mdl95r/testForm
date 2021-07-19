const getDataFields = () => {
	const allInputs = document.querySelectorAll('.modal-form__product-input');
	const result = {
		email: null,
		products: []
	}
	for (let i = 0; i < allInputs.length; i++) {
		const el = allInputs[i];
		if (i === 0) {
			result.email = el.value
		} else if (i % 2 !== 0) {
			result.products.push({
				product: el.value,
				link: allInputs[i + 1].value
			})
		}
	}
	return JSON.stringify(result);
}

export default getDataFields