var module = {
	age: 26,
	showAge() {
		setTimeout(function() {
			console.log(this.age);
		}, 1000);
	}
};

module.showAge();
