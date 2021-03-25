class stack {
    static stack = [];
    static i = 0;
    constructor() {
    this.push = (i) =>{
      stack.stack[stack.i++] = i;  
    }

    this.pop = () =>{
        stack.i--;
        return stack.stack[stack.i];
    }

    this.peek = () =>{
        return stack.stack[stack.i - 1];
    }

    this.isEmpty = () => {
        return stack.i == 0;
    }
}
}
s = new stack();
s.push(5);
s.push(6);
s.push(8);
console.log(s.pop());
s.push(9);
s.push(10);
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
console.log(s.isEmpty());