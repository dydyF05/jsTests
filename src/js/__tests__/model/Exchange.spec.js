import Product from '../../model/Product';
import User from '../../model/User';
import Exchange from '../../model/Exchange';
import expect, { createSpy, spyOn, isSpy } from 'expect';

describe("\t##### Exchange testing ######", () => {
  let exchange;
	beforeEach(() => {
    let d = new Date();
    exchange = new Exchange({
      receiver: new User({
        lastname: "town",
        firstname: "slits",
        age: 21,
        email: "slitstown@dafuq.com"
      }),
      product: new Product({
        name: "nameOfTheGame",
        status: "ACTIVATED",
        owner: new User({
          lastname: "ohshit",
          firstname: "itscoming",
          age: 35,
          email: "canyouplease@shutup.com"
        })
      }),
      startDate: new Date(d.getTime() + 1000),
      endDate: new Date(d.getTime() + 40000),
      senderEmail: function(){
        const osef = undefined;
      },
      dbConnection: false
    })
  });

  /*####### RECEIVER SPECS ####### */
  it("\n ### Should fail for exchange's receiver is not defined ###", () => {
    delete exchange.receiver;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is null ###", () => {
    exchange.receiver = null;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is undefined ###", () => {
    exchange.receiver = undefined;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is a number type ###", () => {
    exchange.receiver = 123;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's receiver is empty ###", () => {
    exchange.receiver = "";
    expect(exchange.save()).toBe(false);
  });

  /*####### PRODUCT SPECS ####### */
  it("\n ### Should fail for exchange's product is not defined ###", () => {
    delete exchange.product;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is null ###", () => {
    exchange.product = null;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product's name is undefined ###", () => {
    exchange.product.name = undefined;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is a not a product ###", () => {
    exchange.product = 123;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's product is not a product ###", () => {
    exchange.product = "";
    expect(exchange.save()).toBe(false);
  });

  /* ####### STARTDATE SPECS ####### */
  it("\n ### Should fail for exchange's starting date is not defined ###", () => {
    delete exchange.startDate;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's starting date is not in the future ###", () => {
    exchange.startDate = new Date(1200);
    expect(exchange.save()).toBe(false);
  });

  /* ####### ENDDATE SPECS ####### */
  it("\n ### Should fail for exchange's ending date is not defined ###", () => {
    delete exchange.endDate;
    expect(exchange.save()).toBe(false);
  });
  it("\n ### Should fail for exchange's ending date is inferior to it's satrting one ###", () => {
    exchange.endDate = new Date(exchange.startDate.getTime() - 1000);
    expect(exchange.save()).toBe(false);
  });

  /* ####### SENDEREMAIL SPECS ####### */
  it("\n ### Should use the exchange's function 'senderEmail' for the receiver is minor although everything is valid ###", () => {
    exchange.receiver.age = 17;
    let spy = expect.spyOn(exchange, 'senderEmail');
    expect(exchange.save()).toBe(true);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    spy.restore();
  });
  it("\n ### Should NOT use the exchange's function 'senderEmail' one time for the receiver is minor although everything is valid ###", () => {
    exchange.receiver.age = 18;
    let spy = expect.spyOn(exchange, 'senderEmail');
    expect(exchange.save()).toBe(true);
    expect(spy).toNotHaveBeenCalled();
  });

  it("\n ### Should be valid ###", () => {
    expect(exchange.save()).toBe(true);
  });

  afterAll(() => {
    exchange = undefined;
  });
})
