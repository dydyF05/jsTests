'use strict';

var _Product = require('../../model/Product');

var _Product2 = _interopRequireDefault(_Product);

var _User = require('../../model/User');

var _User2 = _interopRequireDefault(_User);

var _Exchange = require('../../model/Exchange');

var _Exchange2 = _interopRequireDefault(_Exchange);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("\t##### Exchange testing ######", function () {
  var exchange = void 0;
  beforeEach(function () {
    var d = new Date();
    exchange = new _Exchange2.default({
      receiver: new _User2.default({
        lastname: "town",
        firstname: "slits",
        age: 21,
        email: "slitstown@dafuq.com"
      }),
      product: new _Product2.default({
        name: "nameOfTheGame",
        status: "ACTIVATED",
        owner: new _User2.default({
          lastname: "ohshit",
          firstname: "itscoming",
          age: 35,
          email: "canyouplease@shutup.com"
        })
      }),
      startDate: new Date(d.getTime() + 1000),
      endDate: new Date(d.getTime() + 40000),
      senderEmail: function senderEmail() {
        var osef = undefined;
      },
      dbConnection: false
    });
  });

  /*####### RECEIVER SPECS ####### */
  it("\n ### Should fail for exchange's receiver is not defined ###", function () {
    delete exchange.receiver;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is null ###", function () {
    exchange.receiver = null;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is undefined ###", function () {
    exchange.receiver = undefined;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is a number type ###", function () {
    exchange.receiver = 123;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is empty ###", function () {
    exchange.receiver = "";
    (0, _expect2.default)(exchange.save()).toBe(false);
  });

  /*####### PRODUCT SPECS ####### */
  it("\n ### Should fail for exchange's product is not defined ###", function () {
    delete exchange.product;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is null ###", function () {
    exchange.product = null;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product's name is undefined ###", function () {
    exchange.product.name = undefined;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is a not a product ###", function () {
    exchange.product = 123;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is not a product ###", function () {
    exchange.product = "";
    (0, _expect2.default)(exchange.save()).toBe(false);
  });

  /* ####### STARTDATE SPECS ####### */
  it("\n ### Should fail for exchange's starting date is not defined ###", function () {
    delete exchange.startDate;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's starting date is not in the future ###", function () {
    exchange.startDate = new Date(1200);
    (0, _expect2.default)(exchange.save()).toBe(false);
  });

  /* ####### ENDDATE SPECS ####### */
  it("\n ### Should fail for exchange's ending date is not defined ###", function () {
    delete exchange.endDate;
    (0, _expect2.default)(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's ending date is inferior to it's satrting one ###", function () {
    exchange.endDate = new Date(exchange.startDate.getTime() - 1000);
    (0, _expect2.default)(exchange.save()).toBe(false);
  });

  /* ####### SENDEREMAIL SPECS ####### */
  it("\n ### Should use the exchange's function 'senderEmail' for the receiver is minor although everything is valid ###", function () {
    exchange.receiver.age = 17;
    var spy = _expect2.default.spyOn(exchange, 'senderEmail');
    (0, _expect2.default)(exchange.save()).toBe(true);
    (0, _expect2.default)(spy).toHaveBeenCalled();
    (0, _expect2.default)(spy.calls.length).toEqual(1);
    spy.restore();
  });
  it("\n ### Should NOT use the exchange's function 'senderEmail' one time for the receiver is minor although everything is valid ###", function () {
    exchange.receiver.age = 18;
    var spy = _expect2.default.spyOn(exchange, 'senderEmail');
    (0, _expect2.default)(exchange.save()).toBe(true);
    (0, _expect2.default)(spy).toNotHaveBeenCalled();
  });

  it("\n ### Should be valid ###", function () {
    (0, _expect2.default)(exchange.save()).toBe(true);
  });

  afterAll(function () {
    exchange = undefined;
  });
});