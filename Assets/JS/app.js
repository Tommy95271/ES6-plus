var module = {
	age: 26,
	showAge() {
		setTimeout(() => {
			console.log(this.age);
		}, 1000);
	}
};

module.showAge();
