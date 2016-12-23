'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Test = require('../global/Test.js');

var _Test2 = _interopRequireDefault(_Test);

var _User = require('../model/User.js');

var _User2 = _interopRequireDefault(_User);

var _Product = require('../model/Product.js');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Exchange = function () {
	function Exchange(_ref) {
		var receiver = _ref.receiver,
		    product = _ref.product,
		    startDate = _ref.startDate,
		    endDate = _ref.endDate,
		    senderEmail = _ref.senderEmail,
		    dbConnection = _ref.dbConnection;

		_classCallCheck(this, Exchange);

		this.receiver = receiver, this.product = product, this.startDate = startDate, this.endDate = endDate, this.senderEmail = senderEmail, this.dbConnection = dbConnection;
	}

	_createClass(Exchange, [{
		key: 'getReceiver',
		value: function getReceiver() {
			return this.receiver;
		}
	}, {
		key: 'getProduct',
		value: function getProduct() {
			return this.product;
		}
	}, {
		key: 'getStartDate',
		value: function getStartDate() {
			return this.startDate;
		}
	}, {
		key: 'getEndDate',
		value: function getEndDate() {
			return this.endDate;
		}
	}, {
		key: 'getSenderEmail',
		value: function getSenderEmail() {
			return this.senderEmail;
		}
	}, {
		key: 'getDbConnection',
		value: function getDbConnection() {
			return this.dbConnection;
		}
	}, {
		key: 'isValid',
		value: function isValid() {
			var t = new _Test2.default();
			return t.isInstanceOf(this.getReceiver(), _User2.default) && this.getReceiver().isValid() && t.isInstanceOf(this.getProduct(), _Product2.default) && this.getProduct().isValid() && t.isDateInFuture(this.getStartDate()) && t.isDateSuperior(this.getEndDate(), this.getStartDate());
		}
	}, {
		key: 'save',
		value: function save() {
			var t = new _Test2.default();
			var validity = this.isValid();
			if (validity) {
				if (this.getReceiver().getAge() < 18) {
					this.getSenderEmail()();
				}
				return true;
			}
			return false;
		}
	}]);

	return Exchange;
}();

exports.default = Exchange;