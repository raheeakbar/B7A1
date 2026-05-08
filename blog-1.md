# Why any is a Type Safety Hole and unknown is the Safer Choice

## Introduction

- TypeScript checks type errors before runtime. 'any' disables that checking.

```ts
let x: any = "hello"; //string
x = 10; //number
x = [10, 20, 30]; //array
```

The variable is not sticked to a specific type which makes the purpose of type in vain.

## Why unknown is Safer

- Though unknown permits any type of input but it has obligatory type guard rule which where the type must be confirmed in statement.

```ts
let x: unknown = "hello";
x.toUpperCase(); // error — not proven the type
```

## Concept of Type Narrowing

- Refers to the confirmation of ts after type guard.After the type guard check, TypeScript knows the exact type inside that block. This is called type narrowing.

```ts
if (typeof x === "string") {
	// type guard
	x.toUpperCase(); // ← type narrowing (ts knows x is string here)
}
```

## Conclusion

-any means "TS doesn't care". unknown means "you're permitted to take inputs, but you have to check and confirm the type." It is best to use unknown for unpredictable data.
