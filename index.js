const hamburger = document.querySelector('.hamb');
// hamburger div ko select kie fr isko click krne p line ko hata denge
const mobView = document.querySelector('.nav-list');
// mobview s mera navbar aaega aur jaega
let header = document.querySelector('.header.container');
// header container ko utha rha h
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobView.classList.toggle('active');
});

// scroll krne p navbar ka background change ho jae
document.addEventListener('scroll', () => {
	let scrll = window.scrollY;
	if (scrll > 300) {
		header.style.backgroundColor = '#29323C';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// link ko click krne p automatically hatane k lie screen ko uske a link m toggle class call kr de bs
const menu = document.querySelectorAll('.header .nav-bar .nav-list li a');
menu.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobView.classList.toggle('active');
	});
});
