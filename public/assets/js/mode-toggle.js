"use strict";

/* Dependency: js-cookie plugin - Ref: https://github.com/js-cookie/js-cookie */

const modeToggler = document.getElementById('darkmode');
const documentBody = document.getElementsByTagName('body')[0];


function setThemeFromCookie() {
	// Check if the cookie is set 
	if (typeof Cookies.get('mode') !== "undefined" ) {
		documentBody.classList.add('light-mode');
		modeToggler.checked = true; // toggle change
	} else {
		documentBody.classList.remove('light-mode');
		modeToggler.checked = false; // toggle change
	}
}


setThemeFromCookie();


modeToggler.addEventListener('change', () => {
    if (modeToggler.checked) {
		documentBody.classList.add('light-mode');
		//Set cookies for 7 days 
		Cookies.set('mode', 'light-mode', { expires: 7 });
	} else {
		documentBody.classList.remove('light-mode');
		//Remove cookies
		Cookies.remove('mode');
	}
});