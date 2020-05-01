var module = {
	age: 26,
	showAge() {
		setTimeout(() => {
			console.log(this.age);
			return this.age;
		}, 1000);
	}
};

var boxes = document.querySelector('.boxes');
boxes.textContent = module.showAge();
