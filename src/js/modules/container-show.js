const containerShow = () => {
	const innerContainer = document.querySelector('.modal-form__container');
	const DELAY = 70;
	setTimeout(() => {
		innerContainer.classList.remove('modal-form__container_hidden');
	}, DELAY)
}

export default containerShow