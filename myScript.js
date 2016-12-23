const calculator = {
	sub: function(a, b) {
		return a-b;
	},
	average: function(tabArray) {
		return tabArray.reduce( (actual, previous) => actual + previous ) / tabArray.length;
	},
	multply: function(a, b) {
		return a*b;
	},
	sum: function (a, b) {
		return a + b;
	}
};
console.log(expect(calculator.sum(1, 2)).toEqual(3));
