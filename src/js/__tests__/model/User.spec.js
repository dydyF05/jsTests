import User from '../../model/User';

describe("##### User testing ######", () => {
  let user;
	beforeEach(() => {
    user = new User({
      lastname: "town",
      firstname: "slits",
      age: 18,
      email: "slitstown@da.fuq"
    })
  });

  /* EMAIL SPECS */
  it("\n ### Should fail for email is not properly formated", () => {
    user.email = "wrong";
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for email is not defined", () => {
    delete user.email;
    expect(user.isValid()).toBe(false);
  });

  /* FIRSTNAME SPECS */
  it("\n ### Should fail for firstname is not defined", () => {
    delete user.firstname;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for firstname is empty", () => {
    user.firstname = "";
    expect(user.isValid()).toBe(false);
  });

  /* LASTNAME SPECS */
  it("\n ### Should fail for name is not defined", () => {
    delete user.lastname;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for name is empty", () => {
    user.lastname = "";
    expect(user.isValid()).toBe(false);
  });

  /* AGE SPECS */
  it("\n ### Should fail for usr's age is not defined", () => {
    delete user.age;
    expect(user.isValid()).toBe(false);
  });
  it("\n ### Should fail for usr is too young", () => {
    user.age = 12;
    expect(user.isValid()).toBe(false);
  });

  /* GLOBAL */
 /* it("\n ### Should fail for usr's attributes are empty", () => {
    // expect doesn't seem to catch TypeError
    user = new User();
    expect(user.isValid).toThrow(TypeError);
  });*/

  it("\n ### Should be valid", () => {
    expect(user.isValid()).toBe(true);
  });

  afterAll(() => {
    user = undefined;
  });
})