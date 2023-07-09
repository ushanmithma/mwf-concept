
// Image slider

const slides = document.querySelectorAll('.slide');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const changeSlide = () => {
	const current = document.querySelector('.current');
	current.classList.remove('current');
	if (current.nextElementSibling) {
		current.nextElementSibling.classList.add('current');
	} else {
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
}

if (auto) {
	slideInterval = setInterval(changeSlide, intervalTime);
}

// Responsive menu control

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');

menu.addEventListener("click", function() {
	nav.classList.toggle('nav-active');
	menu.classList.toggle('toggle');
});

// carousel

$(document).ready(function(){
	var slider = $('#autoWidth').lightSlider({
		controls: false,
		autoWidth: true,
		loop: true,
		onSliderLoad: function(){
			$('#autoWidth').removeClass('cS-hidden');
		}
	});
	$('.slide-controls .slide-prev').click(function() {
        slider.goToPrevSlide();
    });

    $('.slide-controls .slide-next').click(function() {
        slider.goToNextSlide();
    });
});
