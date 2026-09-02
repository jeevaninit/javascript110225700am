Variable Scope in JavaScript: var, let, and const

Understanding scope is one of the most important parts of JavaScript. The three ways to declare variables—var, let, and const—behave differently, especially regarding where they can be accessed and whether they can be redeclared or reassigned.

1. The three types at a glance
Feature	var	let	const
Scope	Function-scoped	Block-scoped	Block-scoped
Can reassign?	✅ Yes	✅ Yes	❌ No
Can redeclare in same scope?	✅ Yes	❌ No	❌ No
Hoisted?	✅ Yes	✅ Yes, but TDZ	✅ Yes, but TDZ
Must initialize?	❌ No	❌ No	✅ Yes
Recommended today?	Usually no	✅ Yes	✅ Default choice
2. What is scope?

Scope determines where a variable can be accessed in your code.

For example:

{
  let message = "Hello";

  console.log(message); // Hello
}

console.log(message); // ReferenceError


message exists only inside the { } block.

JavaScript has several important types of scope:

Global scope
Function scope
Block scope
Module scope

The biggest difference between var and let/const is:

var is function-scoped, while let and const are block-scoped.

3. var — function scope

var is the older way of declaring variables in JavaScript.

function greet() {
  var message = "Hello";

  console.log(message); // Hello
}

greet();

console.log(message); // ReferenceError


The variable is available throughout the function, but not outside the function.

The important part: var ignores blocks

Consider this:

if (true) {
  var name = "John";
}

console.log(name); // John


Even though name was declared inside the if block, it is accessible outside the block.

That's because var does not have block scope.

Compare it with let:

if (true) {
  let name = "John";
}

console.log(name); // ReferenceError


Here name exists only inside the if block.

4. let — block scope

let was introduced in ES6 (ES2015).

let age = 25;

age = 26;

console.log(age); // 26


You can change a let variable.

But you cannot declare the same variable again in the same scope:

let age = 25;

let age = 30; // SyntaxError

Block scope
{
  let city = "Hyderabad";

  console.log(city); // Hyderabad
}

console.log(city); // ReferenceError


The variable exists only inside the { }.

5. const — block scope + cannot reassign

const is also block-scoped.

const country = "India";

console.log(country); // India


But you cannot assign a new value to it:

const country = "India";

country = "USA"; // TypeError


Therefore:

const PI = 3.14159;


is appropriate when you don't intend to change the variable.

const must be initialized

This is invalid:

const age;


You must give it a value immediately:

const age = 25;

6. The most important example: var vs let

Look at this loop:

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);


Output:

0
1
2
3


i is still accessible after the loop because var is not block-scoped.

Now:

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);


The final console.log(i) produces:

ReferenceError


because let i exists only inside the for block.

This is one reason let is generally safer than var.

7. A very important real-world example

Imagine you have:

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


You might expect:

0
1
2


But you get:

3
3
3


Why?

Because there is only one var i, and after the loop finishes its value is 3. The callbacks later read that same variable.

With let:

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}


Output:

0
1
2


Each iteration gets its own block-scoped i.

This is a major practical reason to prefer let over var.

8. const with objects — very important

A common misunderstanding is:

"const means the value can never change."

That's not quite true for objects.

Consider:

const user = {
  name: "John",
  age: 25
};

user.age = 26;

console.log(user);


Output:

{
  name: "John",
  age: 26
}


This works.

Why?

Because const prevents you from reassigning the variable, not from modifying the object it refers to.

This is not allowed:

const user = {
  name: "John"
};

user = {
  name: "David"
}; // TypeError


But this is allowed:

const user = {
  name: "John"
};

user.name = "David"; // ✅


Think of it like this:

const user
     │
     ▼
   Object
 ┌─────────┐
 │ name    │
 │ "John"  │
 └─────────┘


You cannot make user point to another object, but you can modify the existing object's properties.

9. const with arrays

The same concept applies to arrays.

const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);


Output:

["Apple", "Banana", "Orange"]


This works.

But:

const fruits = ["Apple", "Banana"];

fruits = ["Mango"]; // TypeError


doesn't.

So:

const fruits = [];
fruits.push("Apple"); // ✅


but:

fruits = []; // ❌

10. Hoisting: var vs let vs const

This is another major difference.

var
console.log(name);

var name = "John";


Output:

undefined


Conceptually, JavaScript behaves somewhat like:

var name;

console.log(name); // undefined

name = "John";


The declaration is hoisted.

let
console.log(name);

let name = "John";


This produces:

ReferenceError

const
console.log(name);

const name = "John";


Also:

ReferenceError


let and const are hoisted, but they cannot be accessed before their declaration is executed. This period is called the Temporal Dead Zone (TDZ).

For practical programming, remember:

Don't use a variable before declaring it.

11. Function scope vs block scope

This example makes the distinction very clear:

function example() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }

  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

example();


Why?

function example()
│
├── var a      ← function scoped
│
└── if block
    ├── let b  ← block scoped
    └── const c ← block scoped


a belongs to the function.

b and c belong to the if block.

12. Nested blocks

Block scope also applies to nested blocks.

let name = "John";

{
  let name = "David";

  console.log(name); // David
}

console.log(name); // John


The inner name doesn't change the outer name.

You can think of it as two separate variables:

Outer scope
└── name = "John"

    Inner scope
    └── name = "David"


This is called shadowing.

13. Shadowing

Example:

let username = "John";

{
  let username = "David";

  console.log(username); // David
}

console.log(username); // John


The inner variable shadows the outer variable.

The same thing can happen with const:

const price = 100;

{
  const price = 200;

  console.log(price); // 200
}

console.log(price); // 100

14. Can let and const be redeclared?

In the same scope:

let x = 10;
let x = 20; // ❌

const x = 10;
const x = 20; // ❌


But different blocks are okay:

let x = 10;

{
  let x = 20;

  console.log(x); // 20
}

console.log(x); // 10


The two x variables belong to different scopes.

15. Can var be redeclared?

Yes.

var x = 10;
var x = 20;

console.log(x); // 20


This is one of the reasons var can cause bugs in larger programs.

For example:

var username = "John";

// Lots of code...

var username = "David";

console.log(username); // David


You might accidentally overwrite a variable without realizing it.

With let:

let username = "John";

// Lots of code...

let username = "David"; // SyntaxError


JavaScript catches the problem for you.

16. Best practice: use const by default

Modern JavaScript code generally follows this pattern:

const name = "John";
const age = 25;
const country = "India";


If you need to change a variable:

let score = 0;

score += 10;
score += 20;

console.log(score); // 30


Use var mainly when working with older JavaScript code or when you specifically need its legacy function-scoping behavior.

A simple rule is:

Need to reassign?
       │
   ┌───┴───┐
   │       │
  YES     NO
   │       │
  let    const

17. Practical example: shopping cart

Instead of:

var product = "Laptop";
var price = 50000;
var quantity = 1;

quantity = 2;

console.log(product);
console.log(price);
console.log(quantity);


Prefer:

const product = "Laptop";
const price = 50000;
let quantity = 1;

quantity = 2;

console.log(product);
console.log(price);
console.log(quantity);


Why?

product doesn't change → const
price doesn't change → const
quantity changes → let

This makes your intentions obvious.

18. Practical example: function
function calculateTotal(price, quantity) {
  const discount = 100;
  let total = price * quantity;

  total = total - discount;

  return total;
}

console.log(calculateTotal(500, 2));


Here:

const discount = 100;


because the discount isn't reassigned.

let total = price * quantity;


because total is subsequently changed.

This is a good example of how you should choose between const and `let based on behavior**, not on the type of data.

19. A common beginner mistake

Don't do this:

let name = "John";

name = "David";
name = "Michael";
name = "Robert";


just because the value might change someday.

Instead, ask:

Does this variable actually need to be reassigned?

If not:

const name = "John";


Use let only when reassignment is actually required.

20. The rule I recommend memorizing

For modern JavaScript:

const → default choice
let   → when reassignment is necessary
var   → generally avoid in new code


For example:

const firstName = "John";
const lastName = "Doe";

let age = 25;

age = 26;


And with objects:

const user = {
  name: "John",
  age: 25
};

user.age = 26; // ✅


But:

user = {}; // ❌

Quick mental model

Think of scope like rooms:

Global Room
│
├── name
│
└── Function Room
    │
    ├── var → available throughout this function
    │
    └── Block Room
        ├── let   → available only in this block
        └── const → available only in this block


So the key distinction is:

var → function scope

let → block scope + can reassign

const → block scope + cannot reassign

If you're learning JavaScript for interviews or real-world development, the next concepts worth learning are scope chain → lexical scope → closures → hoisting → temporal dead zone. These five concepts connect directly to why var, let, and const behave the way they do.