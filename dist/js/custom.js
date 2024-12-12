$(function () {

	// =================================
	// Tooltip
	// =================================
	const tooltipTriggerList = Array.from(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	tooltipTriggerList.forEach((tooltipTriggerEl) => {
		new bootstrap.Tooltip(tooltipTriggerEl);
	});


	// =================================
	// Sticky
	// =================================
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('header').addClass("sticky");
		}
		else {
			$('header').removeClass("sticky");
		}
	});


	// =================================
	// Slider
	// =================================
	$('.featured-breeds-slider .owl-carousel').owlCarousel({
		loop: true,
		margin: 24,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1024: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	})


	// =================================
	// AOS
	// =================================
	AOS.init({
		once: true,
	});


	// =================================
	// Slider
	// =================================
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
	var slidesPerPage = 4;
	var syncedSecondary = true;

	sync1
		.owlCarousel({
			items: 1,
			slideSpeed: 2000,
			nav: false,
			autoplay: false,
			dots: false,
			loop: true,
			responsiveRefreshRate: 200,
			navText: [
				'<svg width="12" height="12" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
				'<svg width="12" height="12" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
			],
		})
		.on("changed.owl.carousel", syncPosition);

	sync2
		.on("initialized.owl.carousel", function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			items: slidesPerPage,
			items: 6,
			margin: 16,
			dots: false,
			nav: false,
			smartSpeed: 200,
			slideSpeed: 500,
			slideBy: slidesPerPage,
			responsiveRefreshRate: 100,
		})
		.on("changed.owl.carousel", syncPosition2);

	function syncPosition(el) {
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		var onscreen = sync2.find(".owl-item.active").length - 1;
		var start = sync2.find(".owl-item.active").first().index();
		var end = sync2.find(".owl-item.active").last().index();

		if (current > end) {
			sync2.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
			sync2.data("owl.carousel").to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			sync1.data("owl.carousel").to(number, 100, true);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).index();
		sync1.data("owl.carousel").to(number, 300, true);
	});



	// =================================
	// Range Slider
	// =================================
	var $range = $(".js-range-slider"),
		$from = $(".from"),
		$to = $(".to"),
		range,
		min = $range.data("min"),
		max = $range.data("max"),
		from,
		to;

	var updateValues = function () {
		$from.prop("value", from);
		$to.prop("value", to);
	};

	$range.ionRangeSlider({
		onChange: function (data) {
			from = data.from;
			to = data.to;
			updateValues();
		}
	});

	range = $range.data("ionRangeSlider");
	var updateRange = function () {
		range.update({
			from: from,
			to: to
		});
	};

	$from.on("input", function () {
		from = +$(this).prop("value");
		if (from < min) {
			from = min;
		}
		if (from > to) {
			from = to;
		}
		updateValues();
		updateRange();
	});

	$to.on("input", function () {
		to = +$(this).prop("value");
		if (to > max) {
			to = max;
		}
		if (to < from) {
			to = from;
		}
		updateValues();
		updateRange();
	});


	// =================================
	// Slider
	// =================================
	$('.hero-section-inner-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		items: 1,
		dots: true,
		nav:false,
		autoplay: true,
	})


	// =================================
	// Slider
	// =================================
	$('.andrews-reviews-sloder .owl-carousel').owlCarousel({
		loop: true,
		margin: 16,
		dots: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			}
		}
	})


	const select = document.getElementsByClassName('mySelect');
    $(select).click(function () {
      this.addEventListener('change', function () {
        this.style.color = '#08314e';
      });
    });

});