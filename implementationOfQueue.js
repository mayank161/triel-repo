class Queue {
    static front = 0;
    static rear = 0;
    static q = [];
    constructor() {
        
        this.enqueue = (i) => {
            Queue.q[Queue.rear++] = i;
        }

        this.dequeue = () => {
            if(this.isEmpty()) { 
                console.log('queue is Empty');
                return -1;
            }
            return Queue.q[Queue.front++]; 
        }

        this.isEmpty = () => {
            return Queue.front == Queue.rear;
        }

        this.front = () => {
            if(this.isEmpty()) { 
                console.log('queue is Empty');
                return -1;
            }
            return Queue.q[Queue.front]; 
        }

        this.rear = () => {
            if(this.isEmpty()) { 
                console.log('queue is Empty');
                return -1;
            }
            return Queue.q[Queue.rear - 1];
        }
    }
}

var nq = new Queue();
console.log(nq.isEmpty());
console.log(nq.dequeue());
console.log(nq.front());
console.log(nq.rear());
nq.enqueue(1);
nq.enqueue(2);
nq.enqueue(5);
console.log(nq.front());
console.log(nq.rear());
console.log(nq.isEmpty());
console.log(nq.dequeue());
console.log(nq.front());
console.log(nq.rear());