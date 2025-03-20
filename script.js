document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

document.getElementById('nav-btn').addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('display-none');
});
document.getElementsByTagName('nav')[0].addEventListener('click', function() {
	document.querySelector('nav').classList.toggle('display-none');
});
