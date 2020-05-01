var module = {
	age: 26,
	showAge() {
		setTimeout(
			function() {
				console.log(this.age);
			}.bind(this),
			1000
		);
	}
};

module.showAge();
