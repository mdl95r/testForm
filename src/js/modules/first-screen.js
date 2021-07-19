import getRandomStatus from './end-state';
import validation from './validation';
import addingProducts from './add-more-products';
import getDataFields from './get-fields-data';

const showFirstScreen = () => {
	const form = document.querySelector('.js-modal-form');

	form.innerHTML = `
		<div class="modal-form__container">
			<div class="modal-form__product-group">
				<h2 class="modal-form__product-title">Info</h2>
				<label class="modal-form__product-label" >Enter your email address
					<input class="js-group-input modal-form__product-input" type="email" placeholder="team@checkforpatent.com" required>
				</label>
			</div>
			<div class="modal-form__product-group">
				<h2 class="modal-form__product-title">Product 1</h2>
				<label class="modal-form__product-label">Enter main keyword for the product
					<input class="js-product-input modal-form__product-input" type="text" placeholder="for example, sylicon wine cup" required>
				</label>
			</div>
			<div class="modal-form__product-group">
				<label class="modal-form__product-label">Enter link to the similar product as a reference
					<input class="js-product-input modal-form__product-input" type="url" placeholder="https://..." required>
				</label>
			</div>
			<button class="js-add-btn modal-form__add-btn">
				Add more products
				<svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 3.405a.464.464 0 00-.464.464V9.13a.464.464 0 10.928 0V3.869a.464.464 0 00-.464-.464z" fill="#23C967"/>
					<path d="M9.131 6.036H3.87a.464.464 0 100 .928H9.13a.464.464 0 100-.928z" fill="#23C967"/>
					<path d="M6.5 0A6.507 6.507 0 000 6.5C0 10.084 2.916 13 6.5 13S13 10.084 13 6.5 10.084 0 6.5 0zm0 12.071A5.578 5.578 0 01.929 6.5C.929 3.428 3.428.929 6.5.929c3.072 0 5.571 2.499 5.571 5.571 0 3.072-2.499 5.571-5.571 5.571z" fill="#23C967"/>
				</svg>
			</button>
			<p class="js-description modal-form__description">We offer discount up to 36% for multiple checks</p>
		  	<button class="js-submit-btn modal-form__submit-btn">Submit and Pay 24.99 USD</button>
			<p class="js-secure-title modal-form__secure-title">
				<svg width="11" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0)">
					<path d="M9.78 9.222a.668.668 0 00-.53-.262H9v-1.8c0-1.15-.344-2.137-1.031-2.962-.688-.826-1.51-1.238-2.47-1.238-.958 0-1.78.412-2.468 1.237C2.344 5.023 2 6.01 2 7.16v1.8h-.25a.668.668 0 00-.531.262A.963.963 0 001 9.86v5.4c0 .25.073.463.219.638a.669.669 0 00.531.262h7.5a.669.669 0 00.531-.262.964.964 0 00.219-.638v-5.4a.962.962 0 00-.22-.638zM7.5 8.96h-4v-1.8c0-.663.195-1.228.586-1.697.39-.469.862-.703 1.414-.703.552 0 1.023.234 1.414.703.39.469.586 1.034.586 1.697v1.8z" fill="#AFB4CC"/>
					</g>
					<defs>
					<clippath id="clip0">
					<path fill="#fff" transform="translate(0 .96)" d="M0 0h11v13.2H0z"/>
					</clippath>
					</defs>
				</svg>Secure payment with Stripe
		  	</p>
		</div>
	`

	const submitBtn = document.querySelector('.js-submit-btn');
	submitBtn.addEventListener('click', function (e) {
		e.preventDefault();
		const isValid = validation();
		if (isValid) {
			const dataFields = getDataFields();
			console.log(dataFields);
			getRandomStatus(this);
		}
	})
	addingProducts();
}

export default showFirstScreen