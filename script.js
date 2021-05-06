(function(){

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
	function labelMovesToTop() {
		const labelSibling = this.previousElementSibling;

			// Changes the style of labels when the user is in the field
			labelSibling.style.top = '-20px';
			labelSibling.style.left = '0';
			labelSibling.style.color = 'white';
			labelSibling.style.fontSize = '12px';
	}

	function labelMovesBack() {
		const labelSibling = this.previousElementSibling;

		// Checks if the user inputs something in the field
		if (e.target.value.trim() === '') {
			labelSibling.style.top = '10px';
			labelSibling.style.left = '10px';
			labelSibling.style.color = 'gray';
			labelSibling.style.fontSize = '14px';
		}
	}

	// For each input field specified above
	for (field of [userName, userEmail, userMessage]) {

		// Triggers when a user tries to input something
		field.onfocus = function() {
			labelMovesToTop();
		}

		// Triggers when a user finishes the input
		field.onblur = function() {
			/* This method depends if the user
			left something in the input then it
			won't go back to its position unless
			the user clears the input */
			labelMovesBack();
		}
	}


	// (function() {
	// 	// Initializes EmailJS api for emailing

	// })();

})();