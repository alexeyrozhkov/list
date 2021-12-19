export class Node<T> {
    constructor(value:T) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
    public value:T;
    public next?:Node<T>;
    public prev?:Node<T>;
}



export class List<T> {
    constructor() {
        this.head = undefined;
        this.tail = undefined;

        this.length = 0;
    }

    add(value:T) {
        const newNode = new Node(value);
        newNode.prev = this.tail;

        if (this.tail) {
            this.tail.next = newNode;
        } else{
            this.head = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    find(index:number):T | null {
        const node = this.getNodeByIndex(index);
        return node?.value || null;
    }

    getNode(value:T):Node<T> | null {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    getNodeByIndex(index: number):Node<T> | undefined {
        let currentNode = this.head;
        let current = 0;
        while(currentNode) {
           if(index === current) {
               return currentNode;
           }
           currentNode = currentNode.next;
           current++;
        }
        return;
    }

    insert(index:number, value: T) {
        if (index > this.length) {
            return;
        }
        if (index === this.length) {
            return this.add(value);
        }
        let currentNode = this.getNodeByIndex(index);
        if (!currentNode) {
            return;
        }

        const newNode = new Node(value);
        const prev = currentNode.prev;
        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
            currentNode.prev = newNode;
        }

        newNode.next = currentNode;
        this.length++;
    }

    findIndex(value: T):number | null {
        let currentNode = this.head;
        let current = 0;
        while(currentNode) {
            if(currentNode.value === value) {
                return current;
            }
            currentNode = currentNode.next;
            current++;
        }
        return null;
    }

    remove(index: number) {
        if (index >= this.length) {
            return;
        }
        let currentNode = this.getNodeByIndex(index);
        if (!currentNode) {
            return;
        }

        const prev = currentNode.prev;
        const next = currentNode.next;

        if (prev) {
            prev.next = next;
        }
        if (next) {
            next.prev = prev;
        }

        currentNode.prev = undefined;
        currentNode.next = undefined;

        this.length--;        
    }

    print():void {
        const result = [];
        let current = this.head;
        while(current) {
            result.push(current.value);
            current = current.next
        }
        console.log(result);
    }

    public head?:Node<T>;
    public tail?:Node<T>;
    public length:number = 0;

}