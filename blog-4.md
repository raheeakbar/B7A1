# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects

## Introduction

- OOP gives structure to code. Without it, large projects become a mess.

## Encapsulation

- Is refers to the SECURITY

- Hides internal data. Outside code can't touch it directly.

```ts
class BankAccount {
	private balance = 0;
	deposit(amount: number) {
		this.balance += amount;
	}
	getBalance() {
		return this.balance;
	}
}

acc.balance = 1000; // not allowed
acc.deposit(1000); // only through methods
```

## Inheritance

-It resembles the concept of Parent's Power to Children

- Child class gets parent's properties and methods automatically. No need to rewrite.

```ts
class Person {
	constructor(public name: string) {}
	greet() {
		return `Hi, I'm ${this.name}`;
	}
}
class Student extends Person {
	constructor(
		name: string,
		public grade: string,
	) {
		super(name);
	}
}

const s = new Student("Solo", "A");
s.greet(); // inherited from Person
```

## Polymorphism

-Can be described as Same Operation, Different Output

- Same method call, different behavior per class. Achieved by overriding the parent method.

```ts
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((s) => console.log(s.area())); // each gives different output
```

## Abstraction

-High Level overview, Hide Low Level

- Defines what must be done without caring about how. Subclasses handle the rest.

```ts
abstract class Payment {
	abstract pay(amount: number): void;
}

class Bkash extends Payment {
	pay(amount: number) {
		console.log(`Bkash: ${amount}tk paid`);
	}
}

class Nagad extends Payment {
	pay(amount: number) {
		console.log(`Nagad: ${amount}tk paid`);
	}
}

const p: Payment = new Bkash();
p.pay(500); // Bkash: 500tk paid
```

## Conclusion

- Encapsulation gives security, inheritance gives reusability, polymorphism gives flexibility, abstraction hides complexity. Together they keep large codebases clean.
