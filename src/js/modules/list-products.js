import getRandomStatus from './end-state';
import validation from './validation';
import containerShow from './container-show';
import getDataFields from './get-fields-data';

const showTemplate = ({ value, count, inputValues }) => {
	const form = document.querySelector('.js-modal-form');
	let summ = value;
	const sumPerOne = summ / count;
	let content = '';

	for (let i = 0; i < count; i++) {
		const isProductOneLink = i === 0 ? `value="${inputValues[2]}"` : '';
		const isProductOneKeyWord = i === 0 ? `value="${inputValues[1]}"` : '';
		const isFirstProduct = i === 0 ? ''
			: `<button class="modal-form__product-button js-product-button" title="Remove product">
					<svg class="modal-form__product-icon" width="13" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0)" fill="#23C967">
							<path d="M6.5 13.206c-3.584 0-6.5-2.926-6.5-6.524S2.916.158 6.5.158 13 3.084 13 6.682s-2.916 6.524-6.5 6.524zm0-12.116C3.428 1.09.929 3.598.929 6.682c0 3.084 2.499 5.592 5.571 5.592 3.072 0 5.572-2.508 5.572-5.592 0-3.084-2.5-5.592-5.572-5.592z"/>
							<path d="M8.822 9.478a.462.462 0 01-.329-.136L3.85 4.682a.467.467 0 010-.66.463.463 0 01.657 0l4.643 4.66a.467.467 0 01-.328.796z"/>
							<path d="M4.179 9.478a.467.467 0 01-.328-.796l4.642-4.66a.463.463 0 01.657 0 .467.467 0 010 .66l-4.643 4.66a.462.462 0 01-.328.136z"/>
						</g>
						<defs>
							<clippath id="clip0">
								<path fill="#fff" transform="translate(0 .158)" d="M0 0h13v13.049H0z"/>
							</clippath>
						</defs>
					</svg>
				</button>`;
		content += `
			<div class="modal-form__product-group">
				<div class="modal-form__product-head">
					<h2 class="modal-form__product-title">Product ${i + 1}</h2>
					${isFirstProduct}
				</div>
				<label class="modal-form__product-label">Enter main keyword for the product
					<input class="js-product-input modal-form__product-input" type="text" placeholder="for example, sylicon wine cup" required ${isProductOneKeyWord}>
				</label>
			</div>
			<div class="modal-form__product-group">
				<label class="modal-form__product-label">Enter link to the similar product as a reference
					<input class="js-group-input modal-form__product-input" type="url" placeholder="https://..." ${isProductOneLink}>
				</label>
			</div>
		`;
	}
	form.innerHTML = `
		<div class="modal-form__container modal-form__container_hidden">
			<div class="modal-form__chosen-list">
				<div class="modal-form__product-group">
					<h2 class="modal-form__product-title">Info</h2>
					<label class="modal-form__product-label">Enter your email address
						<input class="js-group-input modal-form__product-input" value="${inputValues[0]}" type="email" placeholder="team@checkforpatent.com" required>
					</label>
				</div>
				${content}
			</div>
			<button class="js-submit-btn modal-form__submit-btn">Submit and Pay ${summ} USD</button>
		</div>
	`;
	containerShow();

	const enableRemoveProducts = () => {
		form.addEventListener('click', (e) => {
			const trg = e.target;
			const buttonSubmit = document.querySelector('.js-submit-btn');

			e.preventDefault();
			if (trg.closest('.js-product-button')) {
				const parentGroup = trg.closest('.modal-form__product-group');

				parentGroup.nextSibling.nextSibling.classList.add('modal-form__product-group_remove');
				parentGroup.classList.add('modal-form__product-group_remove');

				setTimeout(() => {
					parentGroup.nextSibling.nextSibling.remove();
					parentGroup.remove();
					summ = summ - sumPerOne;

					let newSumm;
					if ((summ / sumPerOne) < count) {
						newSumm = summ / sumPerOne;

						switch (newSumm) {
							case 4:
								newSumm = newSumm * 18
								break;
							case 3:
								newSumm = newSumm * 20
								break;
							case 2:
								newSumm = newSumm * 22
								break;
						}
					}
					newSumm > sumPerOne ? buttonSubmit.innerHTML = `Submit and Pay ${newSumm} USD` : buttonSubmit.innerHTML = `Submit and Pay 24.99 USD`;
				}, 500)
			}
		})
	}

	const enableSubmit = () => {
		const submitBtn = document.querySelector('.js-submit-btn');
		submitBtn.addEventListener('click', function () {
			const isValid = validation();
			if (isValid) {
				const dataFields = getDataFields();
				console.log(dataFields);
				getRandomStatus(this);
			}
		})
	}

	enableRemoveProducts();
	enableSubmit();
}

export { showTemplate }