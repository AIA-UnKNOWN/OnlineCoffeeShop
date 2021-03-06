(function(){

	// Animation for header when a user scrolls
	const header = document.querySelector('.header-wrapper');
	let prevScrollHeight = 0;

	// Animation to trigger
	const animateOnScroll = () => {
		// Scroll Height
		const scrollHeight = window.scrollY;
		// Current scroll height
		const currentHeight = scrollHeight;

		// This checks if a user scroll up or down
		if (prevScrollHeight < currentHeight) {
			// header hides
			header.classList.add('hide');
		} else {
			// header shows
			header.classList.remove('hide');
		}

		// Assign the previous scroll height
		prevScrollHeight = scrollHeight;
	}

	const deviceWidth = window.matchMedia('(max-width: 720px)');
	const matchDevice = x => {
		if (x.matches) {
			// Detect when scrolling
			window.addEventListener('scroll', animateOnScroll);
			
		} else {
			window.removeEventListener('scroll', animateOnScroll);
		}
	}
	matchDevice(deviceWidth);
	deviceWidth.addListener(matchDevice);


	

	// Closes nav after a navigation link is clicked
	const navs = document.querySelectorAll('.header-wrapper ul li a');
	const toggleNav = document.querySelector('#toggleNav');

	for (nav of navs) {
		// Asign the event listener for each nav
		nav.addEventListener('click', function() {
			// Checks or unchecks the toggler when triggered
			toggleNav.checked = false;
		});
	}

	// Contact Us Form
	const contactUsForm = document.querySelector('.contact-us form');
	// Inputs
	const userName = contactUsForm.querySelector('#userName');
	const userEmail = contactUsForm.querySelector('#userEmail');
	const userMessage = contactUsForm.querySelector('#userMessage');


	// Methods for Contact Form Fields
	function labelMovesToTop(owner) {
		const labelSibling = owner.previousElementSibling;

		// Changes the style of labels when the user is in the field
		labelSibling.style.top = '-20px';
		labelSibling.style.left = '0';
		labelSibling.style.color = 'white';
		labelSibling.style.fontSize = '12px';
	}

	function labelMovesBack(e, owner) {
		const labelSibling = owner.previousElementSibling;

		if (e.target.value.trim() === '') {
			labelSibling.style.top = '10px';
			labelSibling.style.left = '10px';
			labelSibling.style.color = 'gray';
			labelSibling.style.fontSize = '14px';
			labelSibling.style.color = 'red';
		}

	}

	// For each input field specified above
	for (field of [userName, userEmail, userMessage]) {

		// Triggers when a user tries to input something
		field.onfocus = function() {
			labelMovesToTop(this);
		}

		// Triggers when a user finishes the input
		field.onblur = function(e) {
			/* This method moves depending if the user
			left something in the input then it
			won't go back to its position unless
			the user clears the input */
			labelMovesBack(e, this);
		}
	}

	(function() {
		// You can find you user id in the integraion section of your dashboard
		emailjs.init('user_aW9POqcWHaoSnuxIHFPJr');
	})();

	contactUsForm.addEventListener('submit', function(e) {
		// This prevents the page from refreshing when submitting the form
		e.preventDefault();

		// Checks if all fields are not empty
		if (Boolean(userName.value) && Boolean(userEmail.value) && Boolean(userMessage.value)) {
			// Initializes EmailJS api for emailing
			emailjs.sendForm('service_4lqq7n6', 'template_qw9jjjj', this)
				.then(function() {
					// If success, clears all the inputs
					userName.value = '';
					userEmail.value = '';
					userMessage.value = '';
				}, function() {
					console.log('Unsent!');
				})
		}

	});

})();