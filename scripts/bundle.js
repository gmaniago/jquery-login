(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(start);

function start() {
	var $user = $('#userName');
	var $pass = $('#password');
	var combinations = [{ email: 'aaron@theironyard.com', password: 'password123' }, { email: 'admin@google.com', password: 'pandas' }, { email: 'gladisaur@gmail.com', password: 'honeycrisp' }];

	$('form').submit(function (e) {
		e.preventDefault();
		if (validate() == true) {
			window.location.href = 'http://theironyard.com';
		}
		function validate() {
			var validation = true;
			if (!validator.isEmail($user.val())) {
				$('#user-name').html('Please enter a valid email address.');
				validation = false;
			}
			if ($user.val() == '') {
				$('#user-name').html('Please enter an email before logging in.');
				validation = false;
			}
			if ($pass.val() == '') {
				$('#pw').html('Please enter a password before logging in.');
				validation = false;
			}

			if (validation == true) {
				var user;
				for (var i = 0; i < combinations.length; i++) {
					if ($user.val() == combinations[i].email) {
						user = combinations[i];
					}
				}
				if (user === undefined) {
					$('#user-name').html('Your user is not found');
				} else if ($pass.val() == user.password) {
					return true;
				} else {
					$('#pw').html('The password you entered is incorrect. Please try again');
					return false;
				}
			}
		}
	});
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map