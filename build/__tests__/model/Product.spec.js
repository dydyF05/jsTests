'use strict';

var _Product = require('../../model/Product');

var _Product2 = _interopRequireDefault(_Product);

var _User = require('../../model/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("\t##### Product testing ######", function () {
  var product = void 0;
  beforeEach(function () {
    product = new _Product2.default({
      name: "nameOfTheGame",
      status: "ACTIVATED",
      owner: new _User2.default({
        lastname: "town",
        firstname: "slits",
        age: 18,
        email: "slitstown@da.fuq"
      })
    });
  });

  /*####### NAME SPECS ####### */
  it("\n ### Should fail for its name is not defined ###", function () {
    delete product.name;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is null ###", function () {
    product.name = null;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is undefined ###", function () {
    product.name = undefined;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is a number type ###", function () {
    product.name = 123;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is empty ###", function () {
    product.name = "";
    expect(product.isValid()).toBe(false);
  });

  /* ####### STATUS SPECS ####### */
  it("\n ### Should fail for its status is not defined ###", function () {
    delete product.status;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its status is not 'ACTIVATED' ###", function () {
    product.status = 37657;
    expect(product.isValid()).toBe(false);
  });

  /* ####### OWNER SPECS ####### */
  it("\n ### Should fail for its owner is not defined ###", function () {
    delete product.owner;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for it's owner is not a user ###", function () {
    product.owner = 12;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for it's owner's name is not valid ###", function () {
    delete product.owner.lastname;
    expect(product.isValid()).toBe(false);
  });
  /*it("\n ### Should fail for it's owner is not a valid one ###", () => {
    // expect doesn't seem to catch TypeError
    product.owner = new User();
    expect(product.isValid()).toThrow();
  });*/

  it("\n ### Should be valid ###", function () {
    expect(product.isValid()).toBe(true);
  });

  afterAll(function () {
    product = undefined;
  });
});