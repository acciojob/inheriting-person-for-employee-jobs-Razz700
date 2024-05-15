// complete this js code
function Person(name, age) {
	this.Name=name;
	this.Age=age;
	this.greet=function(){
		console.log(`Hello, my name is ${this.Name}, I am ${this.Age} years old.`);
	}
}

function Employee extends Person(name, age, jobTitle) {
	super(name,age);
	this.jobTitle=jobTitle;
	this.jobGreet=function () {
		console.log(`Hello, my name is ${this.Name}, I am ${this.Age} years old, and my job title is ${this.jobTitle}.`);
	}
}
const Alice=new Person("Alice",25);
Alice.greet;
const Bod=new Employee("Bob",30,"Manager");
Bob.jobGreet;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
