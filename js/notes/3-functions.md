# Functions

## Defining a function

- Afunction is created with an expression that starts with the keyword function . Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.
- it can have multiple parameters or no parameters at all.

## Bindings and scopes

- As in C/C++, in java there is too, local and gloabal bindings or variables.
- The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

## Declaration Notation

- (see the code for this)<br> The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.

## The Call Stack

- The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.
- When the stack grows too big, the computer will fail with a message like `“out of stack space” or “too much recursion”`.

## Optional Arguments

-
