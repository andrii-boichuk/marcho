$(function () {

	$('.blog-page__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10pt" height="15pt" viewBox="0 0 10 15" version="1.1"><g><path d="M 1.238281 7 L 6.550781 3.015625 C 6.917969 2.742188 7.511719 2.742188 7.875 3.015625 L 8.757812 3.679688 C 9.125 3.953125 9.125 4.398438 8.757812 4.671875 L 4.996094 7.5 L 8.761719 10.324219 C 9.128906 10.597656 9.128906 11.046875 8.761719 11.316406 L 7.878906 11.984375 C 7.511719 12.257812 6.917969 12.257812 6.554688 11.984375 L 1.242188 8 C 0.871094 7.722656 0.871094 7.277344 1.238281 7 Z M 1.238281 7 "/></g></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10pt" height="15pt" viewBox="0 0 10 15" version="1.1"><g><path d="M 8.761719 8 L 3.449219 11.984375 C 3.082031 12.257812 2.488281 12.257812 2.125 11.984375 L 1.242188 11.320312 C 0.875 11.046875 0.875 10.597656 1.242188 10.328125 L 5.007812 7.503906 L 1.242188 4.679688 C 0.875 4.402344 0.875 3.957031 1.242188 3.6875 L 2.121094 3.015625 C 2.488281 2.742188 3.082031 2.742188 3.445312 3.015625 L 8.757812 7 C 9.128906 7.277344 9.128906 7.722656 8.761719 8 Z M 8.761719 8 "/></g></svg></button>',
		infinite: false,
	});

	$('.product-tabs__top-item').on('click', function (e) {
		e.preventDefault;
		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active');

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');


	});

	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,

	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true,
	});

	$('.shop-content__filter-button').on('click', function () {
		$('.shop-content__filter-button').removeClass('shop-content__filter-button--active');
		$(this).addClass('shop-content__filter-button--active');
	});

	$('.button-list').on('click', function () {
		$('.product-item').addClass('product-item--list');
	});

	$('.button-grid').on('click', function () {
		$('.product-item').removeClass('product-item--list');
	});



	$('.select-style, .product-one__item-num').styler();

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: '$',
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	$('.top-slider__inner').slick(
		{
			dots: true,
			arrows: false,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2000,
		}
	);



	$('.star').rateYo({
		starWidth: "17px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: "true",
	});

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const days = Math.floor(total / (1000 * 60 * 60 * 24));

		return {
			total,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function initializeClock(clas, endtime) {
		const clock = document.querySelector(clas);
		const daysSpan = clock.querySelector('.promo__days');
		const hoursSpan = clock.querySelector('.promo__hours');
		const minutesSpan = clock.querySelector('.promo__minutes');
		const secondsSpan = clock.querySelector('.promo__seconds');

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysSpan.innerHTML = t.days;
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		const timeinterval = setInterval(updateClock, 1000);
	}

	const deadline = $('.promo__clock').attr('data-time');
	initializeClock('.promo__clock', deadline);




});