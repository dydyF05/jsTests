"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
	function Test() {
		_classCallCheck(this, Test);
	}

	_createClass(Test, [{
		key: "isStringValid",
		value: function isStringValid(s) {
			return s !== undefined && typeof s === "string";
		}
	}, {
		key: "isNotEmptyString",
		value: function isNotEmptyString(s) {
			return this.isStringValid(s) && s.length > 0;
		}
	}, {
		key: "isNameValid",
		value: function isNameValid(s) {
			return this.isStringValid(s) && s.length > 1;
		}
	}, {
		key: "isEmailValid",
		value: function isEmailValid(s) {
			return this.isStringValid(s) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s);
		}
	}, {
		key: "isNumber",
		value: function isNumber(n) {
			return n !== undefined && typeof n === "number";
		}
	}, {
		key: "isNumberSuperior",
		value: function isNumberSuperior(n, l) {
			return this.isNumber(n) && this.isNumber(l) && n >= l;
		}
	}, {
		key: "isInstanceOf",
		value: function isInstanceOf(i, m) {
			return i !== undefined && (typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && i instanceof m;
		}
	}, {
		key: "isDateInFuture",
		value: function isDateInFuture(d) {
			var _d = new Date();
			return this.isInstanceOf(d, Date) && d.getTime() > _d.getTime();
		}
	}, {
		key: "isDateSuperior",
		value: function isDateSuperior(d1, d2) {
			return this.isInstanceOf(d1, Date) && this.isInstanceOf(d2, Date) && parseInt(d1.getTime()) > parseInt(d2.getTime());
		}
	}]);

	return Test;
}();

exports.default = Test;