'use strict';

$(document).ready(start);

function start() {
	var $user = $('#userName');
	var $pass = $('#password');
	var combinations = [
	{email: 'aaron@theironyard.com', password: 'password123'},
	{email:'admin@google.com', password: 'pandas'},
	{email: 'gladisaur@gmail.com', password: 'honeycrisp'}];

	$('form').submit(function(e) {
		e.preventDefault();
		if (validate() == true) {
			window.location.href = 'http://theironyard.com';
		}
		function validate () {
			var validation = true;
			if (!validator.isEmail($user.val())) {
				$('#user-name').html('Please enter a valid email address.');
				validation = false;
			}
			if($user.val() == '') {
				$('#user-name').html('Please enter an email before logging in.');
				validation = false;
			} 	
			if ($pass.val() == '') {
				$('#pw').html('Please enter a password before logging in.');
				validation = false;
			} 

			if(validation == true) {
				var user;
				for(var i=0; i<combinations.length; i++) {
					if ($user.val() == combinations[i].email) {
						user = combinations[i];
					}
				}
				if(user === undefined) {
					$('#user-name').html('Your user is not found');
				} else if ($pass.val() == user.password) {
					return true;
				} else {
					$('#pw').html('The password you entered is incorrect. Please try again');
					return false;
				}
			}
		}
	})
}