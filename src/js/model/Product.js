import Test from '../global/Test.js';
import User from '../model/User.js';
export default class Product {
	constructor({
        name,
        status,
        owner
    }){
		this.name = name;
		this.status = status;
		this.owner = owner;
	}
	getName () {
		return this.name
	}
	getStatus () {
		return this.status
	}
	getOwner () {
		return this.owner
	}
	isValid () {
		const t = new Test();
		return t.isNotEmptyString(this.getName())
		&& t.isStringValid(this.getStatus())
		&& this.getStatus() === "ACTIVATED"
		&& t.isInstanceOf(this.getOwner(), User)
		&& this.getOwner().isValid()
	}
}
