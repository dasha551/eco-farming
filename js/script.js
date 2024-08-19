
// NAVIGATION FUNCTIONALITY START 
function toggleDropdown(id) {
	document.getElementById(id).classList.toggle("show");
}
// NAVIGATION FUNCTIONALITY END 

// GET THE VIDEO 
var video = document.getElementById("myVideo");
// GET THE VIDEO 

// BANNER START
const reviwsSwiper = new Swiper('.reviews-swiper', {
	speed: 1000,
	spaceBetween: 0,
	autoHeight: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
});
// BANNER END 

// ANIMATION FUNCTIONALITY START 
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('item-animation');
		}
		});
	});
	observer.observe(document.querySelector('.section__block-box'));

	const offerPositions = document.querySelectorAll('.section__offer-content');
	offerPositions.forEach(position => observer.observe(position));

	const observer2 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
		    if (entry.isIntersecting) {
				entry.target.classList.add('main-animation');
		}
		});
	});

	observer2.observe(document.querySelector('.main_container'));

	const offerContents = document.querySelectorAll('.section__projects-photobox');
	offerContents.forEach(content => observer2.observe(content));

	const articleBoxes = document.querySelectorAll('.section__articles-box');
	articleBoxes.forEach(box => observer2.observe(box)); 

// ANIMATION FUNCTIONALITY END 

// BURGER MENU START 
document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("burger").addEventListener("click", function() {
	  document.querySelector(".navbar").classList.toggle("open"); // Исправленный селектор
	});
});