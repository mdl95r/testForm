const successful = () => {
	const form = document.querySelector('.js-modal-form');
	form.innerHTML = `
	<div class="modal-form__container">
		<div class="modal-form__head">
			<h2 class="modal-form__title">Successfull payment</h2>
			<p class="modal-form__hint">Your request has been accepted and will be processed within 24 working hours. We will send you a payment details and all information to your email.</p>
		</div>
		<div class="modal-form__img-wrap modal-form__img-wrap_status">
			<img src="img/successful.png" alt="successful">
		</div>
		<button class="modal-form__submit-btn">Back</button>
  	</div>
	`
	window.history.pushState("object or string", "Title", "?status=paymentsuccess");
}

const error = () => {
	const form = document.querySelector('.js-modal-form');
	form.innerHTML = `
	<div class="modal-form__container">
		<div class="modal-form__head">
			<h2 class="modal-form__title">Your payment failed</h2>
			<p class="modal-form__hint">Sorry, but we’ve having trouble processing your payment. You have been not charged for this transaction.</p>
		</div>
		<div class="modal-form__img-wrap modal-form__img-wrap_status">
			<img src="img/failed.png" alt="error">
		</div>
		<button class="modal-form__submit-btn modal-form__submit-btn_error">Try to pay again</button>
	</div>
	`
	window.history.pushState("object or string", "Title", "?status=paymenterror");
}

const getRandomStatus = (_this_) => {
	const _this = _this_
	_this.textContent = ''
	_this.classList.add('modal-form__submit-btn_loading');
	setTimeout(function () {
		const randomStatus = [successful, error]
		randomStatus[Math.floor(Math.random() * randomStatus.length)].call()
	}, 1500)
}

export default getRandomStatus