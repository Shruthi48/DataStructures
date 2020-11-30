class LinkedList {
   constructor() {
     this.head = this.tail = null
   }

   append(value) {
      if(!this.tail) {
          this.head = this.tail = new Node(value);
          this.tail.next = null
      } else {
          const oldTail = this.tail;
          this.tail = new Node(value);
          this.tail.prev = oldTail;
          oldTail.next = this.tail;
      }
   }

   prepend(value) {
       if(!this.head && !this.tail) {
         this.head = new Node(value);
         this.tail = this.head;
         this.tail.next = null;
         this.tail.prev = null;
       } else {
           const oldHead = this.head;
           this.head = new Node(value);
           oldHead.prev = this.head;
           this.head.next = oldHead;
       }
   }

   deleteHead() {
      if(!this.head) {
          return null
      } else if(this.head == this.tail) {
          this.head = this.tail = null
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }
   }

   deleteTail() {
       if(this.head == this.tail) {
           this.head = this.tail = null;
       } else {
           this.tail = this.tail.prev;
           this.tail.next = null;
       }
   }

   search(value) {
       let currentNode = this.head;

       while(currentNode) {
           if(currentNode.value === value) {
               return true;
           } else {
               currentNode = currentNode.next
           }
       }
       return false;
   }

   printAllNodes() {
       let currentNode = this.head;
       let resultArray = [];

       while(currentNode) {
           resultArray.push(currentNode.value);
           currentNode = currentNode.next;
       }

       return resultArray;
   }

   size() {
       let result = this.printAllNodes();
       return result.length;
   }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);




// list.search(1);
console.log(list.printAllNodes());

list.deleteHead();
list.deleteTail();

console.log(list.printAllNodes());


const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);


const list2 = new LinkedList();
list2.append(4);
list2.append(5);
list2.append(6);


function merge2LinkedList(firstList, secList){
    console.log(firstList.printAllNodes());
    console.log(secList.printAllNodes());
    let firstCurrentNode = firstList.head
    let secondCurrentNode = secList.head
    let array = [];

    
    while(firstCurrentNode && secondCurrentNode) { 
        if(secondCurrentNode.value > firstCurrentNode.value) {
            array.push(secondCurrentNode.value);
            firstCurrentNode.next = secondCurrentNode;
            secondCurrentNode = secondCurrentNode.next;
        }
       if(firstCurrentNode.value <  secondCurrentNode.value) {
           array.push(firstCurrentNode.value);
         firstCurrentNode = firstCurrentNode.next || firstCurrentNode; 
       } else if( ) {
        
      }
    }

    console.log(firstList.printAllNodes());
    console.log(array)

}

merge2LinkedList(list1, list2)