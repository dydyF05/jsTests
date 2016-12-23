import Product from '../../model/Product';
import User from '../../model/User';

describe("\t##### Product testing ######", () => {
  let product;
	beforeEach(() => {
    product = new Product({
      name: "nameOfTheGame",
      status: "ACTIVATED",
      owner: new User({
        lastname: "town",
        firstname: "slits",
        age: 18,
        email: "slitstown@da.fuq"
      })
    })
  });

  /*####### NAME SPECS ####### */
  it("\n ### Should fail for its name is not defined ###", () => {
    delete product.name;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is null ###", () => {
    product.name = null;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is undefined ###", () => {
    product.name = undefined;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is a number type ###", () => {
    product.name = 123;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its name is empty ###", () => {
    product.name = "";
    expect(product.isValid()).toBe(false);
  });

  /* ####### STATUS SPECS ####### */
  it("\n ### Should fail for its status is not defined ###", () => {
    delete product.status;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for its status is not 'ACTIVATED' ###", () => {
    product.status = 37657;
    expect(product.isValid()).toBe(false);
  });

  /* ####### OWNER SPECS ####### */
  it("\n ### Should fail for its owner is not defined ###", () => {
    delete product.owner;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for it's owner is not a user ###", () => {
    product.owner = 12;
    expect(product.isValid()).toBe(false);
  });
  it("\n ### Should fail for it's owner's name is not valid ###", () => {
    delete product.owner.lastname;
    expect(product.isValid()).toBe(false);
  });
  /*it("\n ### Should fail for it's owner is not a valid one ###", () => {
    // expect doesn't seem to catch TypeError
    product.owner = new User();
    expect(product.isValid()).toThrow();
  });*/

  it("\n ### Should be valid ###", () => {
    expect(product.isValid()).toBe(true);
  });

  afterAll(() => {
    product = undefined;
  });
})
