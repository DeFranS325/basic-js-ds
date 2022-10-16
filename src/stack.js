const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
        this.length = null;
    }
    push(element) {
        if (this.length === null)
            this.length = 1;
        this.length++;
        this[this.length - 1] = element;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

    pop() {
        if (this.length === null)
            return undefined;
        let temp = this[this.length - 1];
        this.length--;
        return temp;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

    peek() {
        if (this.length === null)
            return undefined;
        return this[this.length - 1];
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
