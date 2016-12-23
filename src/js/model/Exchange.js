import Test from '../global/Test.js';
import User from '../model/User.js';
import Product from '../model/Product.js';
export default class Exchange {
	constructor({
        receiver,
        product,
        startDate,
        endDate,
        senderEmail,
        dbConnection
    }){
		this.receiver = receiver,
        this.product = product,
        this.startDate = startDate,
        this.endDate = endDate,
        this.senderEmail = senderEmail,
        this.dbConnection = dbConnection
	}
	getReceiver () {
		return this.receiver
	}
	getProduct () {
		return this.product
	}
	getStartDate () {
		return this.startDate
	}
	getEndDate () {
		return this.endDate
	}
	getSenderEmail () {
		return this.senderEmail
	}
	getDbConnection () {
		return this.dbConnection
	}
	isValid () {
		const t = new Test();
		return t.isInstanceOf(this.getReceiver(), User)
		&& this.getReceiver().isValid()
		&& t.isInstanceOf(this.getProduct(), Product)
		&& this.getProduct().isValid()
		&& t.isDateInFuture(this.getStartDate())
		&& t.isDateSuperior(this.getEndDate(), this.getStartDate())
	}
	save () {
		const t = new Test();
		const validity = this.isValid();
		if ( validity ) {
			if ( this.getReceiver().getAge() < 18  ){
				this.getSenderEmail()();
			}
			return true
		}
		return false;
	}
}
