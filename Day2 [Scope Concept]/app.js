/*
   ---------------------Scope Concept------------------------------

   -> Global Scope
   -> Function Scope
   -> Block Scope
*/



// Global Scope

// We use the keywords `var`, `let` and `const` to create variables in JavaScript. We will start learning these keywords
var variableName = 10;
console.log(variableName);

// Global scope is a type of scope that can be accessed without any restrictions.
var a = 5;

while (a > 5) { // It can be accessed here
    console.log(a);
    var a = 5; // However, this usage here is incorrect; It should not be used inside curly brackets.
}

if (true) { // It can be accessed here
    console.log(a);
}

function methods1() {
    console.log(a);
}

// You can access this from any locationz

// Function Scope

// Function scope is a type of scope in which variables defined within a function are accessible only from within that function.
function method1() {
    var number = 10;
    console.log(number); // You can use it this way; but if you try to access it from outside these curly brackets you will get an error.
}

method1();

console.log(number); // The use here is incorrect.

// Block Scope

// Block-specific scope is a type of scope in which variables defined within a block (for example, `if`, `while`, `for` or `do-while` blocks) are accessible only within that block.
function method2() {
    var a = 5; // If it were defined here, this would be the scope of a function.

    if (true) {
        var a = 5;  // This is a block scope
    }

    // I can only access this variable within these curly braces.

    while (true) {
        // ...
    }

    for (let i = 0; i <= 10; i++) {
        // ...
    }

    do {
        // ...
    } while (true);
}
