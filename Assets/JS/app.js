var module = {
	age: 26,
	showAge() {
		return this.age;
	}
};

module.showAge();
var boxes = document.querySelector('.boxes');
boxes.textContent = module.showAge();
