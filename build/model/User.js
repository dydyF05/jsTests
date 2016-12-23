'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Test = require('../global/Test.js');

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
	function User(_ref) {
		var lastname = _ref.lastname,
		    firstname = _ref.firstname,
		    age = _ref.age,
		    email = _ref.email;

		_classCallCheck(this, User);

		this._minimumAge = 13;
		this.lastname = lastname;
		this.firstname = firstname;
		this.age = age;
		this.email = email;
	}

	_createClass(User, [{
		key: 'getEmail',
		value: function getEmail() {
			return this.email;
		}
	}, {
		key: 'getLastname',
		value: function getLastname() {
			return this.lastname;
		}
	}, {
		key: 'getFirstname',
		value: function getFirstname() {
			return this.firstname;
		}
	}, {
		key: 'getAge',
		value: function getAge() {
			return this.age;
		}
	}, {
		key: 'isValid',
		value: function isValid() {
			var t = new _Test2.default();
			return t.isEmailValid(this.getEmail()) && t.isNameValid(this.getLastname()) && t.isNumberSuperior(this.getAge(), this._minimumAge) && t.isNameValid(this.getFirstname());
		}
	}]);

	return User;
}();

exports.default = User;