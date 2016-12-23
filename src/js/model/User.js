import Test from '../global/Test.js';
export default class User {
	constructor({
        lastname,
        firstname,
        age,
        email
    }) {
		this._minimumAge = 13;
		this.lastname = lastname;
		this.firstname = firstname;
		this.age = age;
		this.email = email;
	}
	getEmail () {
		return this.email
	}
	getLastname () {
		return this.lastname
	}
	getFirstname () {
		return this.firstname
	}
	getAge () {
		return this.age
	}
	isValid () {
		const t = new Test();
		return t.isEmailValid(this.getEmail())
		&& t.isNameValid(this.getLastname())
		&& t.isNumberSuperior(this.getAge(), this._minimumAge)
		&& t.isNameValid(this.getFirstname())
	}
}
