class Stack {
    constructor(){
        this.storage = {};
        this.size = 0;
    }

    push(value) {
       this.size++;
       this.storage[this.size] = value;
    }

    pop() {
       let removed = this.storage[this.size];
       delete this.storage[this.size];
       this.size--;
    }

    length() {
        return size;
    }
}

let stack = new Stack();

stack.push('{');
stack.push('(');
console.log(stack);
stack.pop();


console.log(stack);