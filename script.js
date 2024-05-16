// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
	this.greet=function(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
this.jobTitle=jobTitle;
 this.jobGreet=function () {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}
//Employee.prototype=new Person();

const Alice=new Person("Alice",25);
Alice.greet();
const Bob=new Employee("Bob",30,"Manager");
Bob.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
