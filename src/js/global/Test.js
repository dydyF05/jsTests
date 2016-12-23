export default class Test {
	isStringValid (s) {
		return s !== undefined && typeof s === "string"
	}
	isNotEmptyString (s) {
		return this.isStringValid(s) && s.length > 0
	}
	isNameValid (s) {
		return this.isStringValid(s) && s.length > 1
	}
	isEmailValid (s) {
		return this.isStringValid(s) && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)
	}
	isNumber (n) {
		return n !== undefined && typeof n === "number"
	}
	isNumberSuperior (n, l) {
		return this.isNumber(n) 
		&& this.isNumber(l)
		&& n >= l
	}
	isInstanceOf (i, m) {
		return i !== undefined && typeof i === "object" && i instanceof m
	}
	isDateInFuture (d) {
		const _d = new Date();
		return this.isInstanceOf (d, Date) && d.getTime() > _d.getTime();
	}
	isDateSuperior (d1, d2) {
		return this.isInstanceOf (d1, Date) && this.isInstanceOf (d2, Date) && parseInt(d1.getTime()) > parseInt(d2.getTime());
	}
}
