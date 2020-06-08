const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.modal_close');

btn.onclick = () => {
	modal.classList.add('modal_active');
}