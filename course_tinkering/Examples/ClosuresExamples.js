var me = "Bruce Wayne";
function greetMe() {
  console.log("Hello, " + me + "!");
}
greetMe(); // Hello, Bruce Wayne!

function sendRequest() {
  var requestID = "123";
  $.ajax({
    url: "/myUrl",
    success: function (response) {
      alert("Request " + requestID + " returned");
    },
  });
}

//Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding
// state (the lexical environment). In other words, a closure gives you access to an outer function's scope from
// an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// Consider the following code example:

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

//   Running this code has exactly the same effect as the previous example of the init() function above. What's different
//   (and interesting) is that the displayName() inner function is returned from the outer function before being executed.

// At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables
// within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might
// expect that the name variable would no longer be accessible. However, because the code still works as expected, this is
// obviously not the case in JavaScript.

// The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical
// environment within which that function was declared. This environment consists of any local variables that were in-scope
// at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName
// that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment,
// within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available
// for use, and "Mozilla" is passed to console.log.

// Here's a slightly more interesting example—a makeAdder function:

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

//   In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function.
//   The function it returns takes a single argument y, and returns the sum of x and y.

// In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument.
// In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

// add5 and add10 are both closures. They share the same function body definition, but store different lexical environments.
// In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
