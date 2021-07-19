import { showTemplate as showProducts } from './list-products';
import containerShow from './container-show';

const addingProducts = () => {
	const addBtn = document.querySelector('.js-add-btn');
	const form = document.querySelector('.js-modal-form');

	addBtn.addEventListener('click', showTemplate);

	form.addEventListener('click', (e) => {
		const trg = e.target
		if (trg.classList.contains('modal-form__products-input')) {
			const items = document.querySelectorAll('.modal-form__products-item');
			items.forEach(el => el.classList.remove('modal-form__products-item_active'));

			const parranetItem = trg.closest('.modal-form__products-item');
			parranetItem.classList.add('modal-form__products-item_active');
		}
	})

	const enableSubmitButton = (inputValues) => {
		const continueBtn = document.querySelector('.js-step-btn');
		continueBtn.addEventListener('click', (e) => {
			e.preventDefault();

			const allInputs = document.querySelectorAll('.modal-form__products-input');

			allInputs.forEach(el => {
				if (el.checked) {
					const parentItem = el.closest('.modal-form__products-item');
					const { value, count } = parentItem.dataset;
					const data = {
						value,
						count,
						inputValues
					}
					showProducts(data);
				}
			})
		})
	}

	function showTemplate() {
		const moreProducts = {
			title: 'Adding more products',
			subTitle: 'The more items you check, the better the price.',
			products: [
				{
					count: 5,
					active: true,
					checked: true,
					price: 80,
					title: '5 products for 80 usd / 16$ for each',
					hint: 'You safe 36% on each patent check',
				},
				{
					count: 4,
					price: 72,
					title: '4 products for 72 usd / 18$ for each',
					hint: 'You safe 28% on each patent check',
				},
				{
					count: 3,
					price: 60,
					title: '3 products for 60 usd / 20$ for each',
					hint: 'You safe 20% on each patent check',
				},
				{
					count: 2,
					price: 44,
					title: '2 products for 44 usd / 22$ for each',
					hint: 'You safe 12% on each patent check',
				},
				{
					count: 1,
					price: 24.99,
					title: '1 product for 24.99 usd',
				},
			],
			button: 'Continue',
		}

		const inputs = document.querySelectorAll('input');
		const inputValues = [];

		inputs.forEach(el => inputValues.push(el.value));

		const products = moreProducts.products.map(el => {
			const isHint = el.hint ? `<p class="modal-form__products-hint">${el.hint}</p>` : '';
			const activeItem = el.active ? ' modal-form__products-item_active' : '';
			const isChecked = el.checked ? 'checked' : '';
			return `
				<li class="modal-form__products-item${activeItem}" 
						data-value="${el.price}" 
						data-count="${el.count}">
					<label class="modal-form__products-label">
					<input class="modal-form__products-input" type="radio" name="radio" ${isChecked}>
					<span class="modal-form__fake-input"></span>
					<div class="modal-form__products-text">
						<h3 class="modal-form__products-title">${el.title}</h3>
						${isHint}
					</div>
					</label>
				</li>
			`
		})

		form.innerHTML = `
			<div class="modal-form__container modal-form__container_hidden">
				<div class="modal-form__head">
					<h2 class="modal-form__title">${moreProducts.title}</h2>
					<p class="modal-form__hint">${moreProducts.subTitle}</p>
				</div>
				<ul class="modal-form__products-list">${products.join(" ")}</ul>
				<button class="js-step-btn modal-form__submit-btn">${moreProducts.button}</button>
			</div>
		`
		containerShow();
		enableSubmitButton(inputValues);
	}
}

export default addingProducts