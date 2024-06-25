function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mabile-nav');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	const nav = document.querySelector('.mobile-nav');

	function openMobileNav () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}
	// Открыть мобильную навигацию
	navBtnOpen.onclick = openMobileNav; 

	// Закрыть мобильную навигацию по кнопке
	navBtnClose.onclick = closeMobileNav;

	// Закрыть мобильную навигацию по оверлую
	mobileNavFade.onclick = closeMobileNav;

	function closeMobileNav () {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}

	// Запретить всплытие кликов из мобильной навигации
	nav.addEventListener('click', function(e) {
		e.stopPropagation();
	})
}

export default mobileNav;