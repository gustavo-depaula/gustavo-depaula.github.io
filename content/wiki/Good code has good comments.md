There's a common and pervasive myth in the software industry: that good code does not require comments.

This myth stems from one truth combined with one misconception. The truth is that good code should be self-descriptive: it should be easy to understand what the code is doing by reading it.

To achieve that, several things are necessary: good naming, well-thought abstractions, loose coupling, etc..

The misconception is when people think that comments should describe exactly what the code is doing. e.g. of these types of comments:
```py
# declare a function
def sum(a, b):
	result = a + b # sum a and b
	return result # return the result
```


Good code can minimize the need for comments by, for example, using descriptive names, but there will always be information that can't be transmitted only through code.

Good code comments will capture the *why*, the intentions of the designer/coder that can't be expressed through code. In this case, the code is expressing *what* is happening and the comment will complement it by expressing *why* we are doing this.

Purely descriptive code comments (that express the *what*) are only worth it if they enhance the code by adding a different level of detail to your code. 

They can do that by adding precision, clarifying something that isn't obvious or by adding intuition, giving a more abstract view of that code.

Another use of comments is to be a part of your module's interface. In this case, they're used to describe what the methods in your interface do.

They are useful in this case because, if you have incomplete information about a module and need to read its implementation details, the goal of the module's interface to [[Information Hiding|hide complexity]] has failed. Also, as the module or system grows larger and larger, it becomes impractical to read all the implementation details just to understand its interface, its behavior.

#cleancode
