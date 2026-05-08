// Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
	return numbers.filter((number) => number % 2 === 0);
}

// Problem 2
function reverseString(text: string): string {
	return text.split("").reverse().join("");
}

// Problem 3
function checkType(userInput: string | number): string {
	return typeof userInput === "string" ? "String" : "Number";
}

// Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

// Problem 5
interface Book {
	title: string;
	author: string;
	publishedYear: number;
}

function toggleReadStatus(input: Book): Book & { isRead: true } {
	return { ...input, isRead: true };
}

// Problem 6
class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	grade: string;

	constructor(name: string, age: number, grade: string) {
		super(name, age);
		this.grade = grade;
	}

	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
	}
}

// Problem 7
function getIntersection(ara1: number[], ara2: number[]): number[] {
	return ara1.filter((n1) => ara2.includes(n1));
}
