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

        if(this.tail) {
            this.tail.next = newNode;
        }else{
            this.head = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    find(index:number):T {

    }

    getNode(value:T):Node<T> {

    }

    insert(index:number, value: T) {

    }

    findIndex(value: T):number {
        return 0;
    }

    remove(index: number) {

    }

    print():void {

    }

    public head?:Node<T>;
    public tail?:Node<T>;
    public length:number = 0;

}