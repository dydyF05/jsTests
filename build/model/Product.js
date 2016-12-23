'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Test = require('../global/Test.js');

var _Test2 = _interopRequireDefault(_Test);

var _User = require('../model/User.js');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
	function Product(_ref) {
		var name = _ref.name,
		    status = _ref.status,
		    owner = _ref.owner;

		_classCallCheck(this, Product);

		this.name = name;
		this.status = status;
		this.owner = owner;
	}

	_createClass(Product, [{
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			return this.status;
		}
	}, {
		key: 'getOwner',
		value: function getOwner() {
			return this.owner;
		}
	}, {
		key: 'isValid',
		value: function isValid() {
			var t = new _Test2.default();
			return t.isNotEmptyString(this.getName()) && t.isStringValid(this.getStatus()) && this.getStatus() === "ACTIVATED" && t.isInstanceOf(this.getOwner(), _User2.default) && this.getOwner().isValid();
		}
	}]);

	return Product;
}();

exports.default = Product;