"use strict";

var _User = require("../../model/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("##### User testing ######", function () {
  var user = void 0;
  beforeEach(function () {
    user = new _User2.default({
      lastname: "town",
      firstname: "slits",
      age: 18,
      email: "slitstown@da.fuq"
    });
  });

  /* EMAIL SPECS */
  it("\n ### Should fail for email is not properly formated", function () {
    user.email = "wrong";
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for email is not defined", function () {
    delete user.email;
    expect(user.isValid()).toBe(false);
  });

  /* FIRSTNAME SPECS */
  it("\n ### Should fail for firstname is not defined", function () {
    delete user.firstname;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for firstname is empty", function () {
    user.firstname = "";
    expect(user.isValid()).toBe(false);
  });

  /* LASTNAME SPECS */
  it("\n ### Should fail for name is not defined", function () {
    delete user.lastname;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for name is empty", function () {
    user.lastname = "";
    expect(user.isValid()).toBe(false);
  });

  /* AGE SPECS */
  it("\n ### Should fail for usr's age is not defined", function () {
    delete user.age;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for usr is too young", function () {
    user.age = 12;
    expect(user.isValid()).toBe(false);
  });

  /* GLOBAL */
  /* it("\n ### Should fail for usr's attributes are empty", () => {
     // expect doesn't seem to catch TypeError
     user = new User();
     expect(user.isValid).toThrow(TypeError);
   });*/

  it("\n ### Should be valid", function () {
    expect(user.isValid()).toBe(true);
  });

  afterAll(function () {
    user = undefined;
  });
});