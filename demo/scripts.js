menuToggler.addEventListener('click', ev => {
	menuToggler.classList.toggle('open');
});

for (const element of document.querySelectorAll('nav a')) {
	element.addEventListener('click', ev => {
		menuToggler.classList.remove('open');
	});
}
