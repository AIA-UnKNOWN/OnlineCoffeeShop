(function(){

	// Contact Us Form
	const contactUsForm = document.querySelector('.contact-us form');
	// Inputs
	const userName = contactUsForm.querySelector('#userName');
	const userEmail = contactUsForm.querySelector('#userEmail');
	const userMessage = contactUsForm.querySelector('#userMessage');

	// For each input field specified above
	for (field of [userName, userEmail, userMessage]) {
		// Triggers when a user tries to input something
		field.onfocus = function() {
			const label = this.previousElementSibling;

			// Changes the style of labels when the user is in the field
			label.style.top = '-20px';
			label.style.left = '0';
			label.style.color = 'white';
			label.style.fontSize = '12px';
		}

		// Triggers when a user finishes the input
		field.onblur = function(e) {
			const label = this.previousElementSibling;

			// Checks if the user inputs something in the field
			if (e.target.value.trim() === '') {
				label.style.top = '10px';
				label.style.left = '10px';
				label.style.color = 'gray';
				label.style.fontSize = '14px';
			}
		}
	}

})();