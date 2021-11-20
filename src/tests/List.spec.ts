import {List, Node} from "../list/List";

type Value = {
    id: number;
    name: string;
}

const first = {id: 1, name: 'первый'};
const second = {id: 2, name: 'второй'};
const third = {id: 3, name: 'третий'};
const new_third = {id: 4, name: 'другой трейти'};

describe("List", () => {
    const list = new List<Value>();
    list.add(first);
    list.add(second);
    list.add(third);

    const firstNode:Node<Value> = list.getNode(first);
    const secondNode:Node<Value>  = list.getNode(second);
    const thirdNode:Node<Value>  = list.getNode(third);

    it("Правильно считает длину", () => {
        expect(list.length).toBe(3);
    });

    it("Верны указатели next", () => {
        expect(firstNode.next).toBe(secondNode);
        expect(secondNode.next).toBe(thirdNode);
        expect(thirdNode.next).toBe(undefined);
    });

    it("Верны указатели prev", () => {
        expect(firstNode.prev).toBe(undefined);
        expect(secondNode.prev).toBe(firstNode);
        expect(thirdNode.prev).toBe(secondNode);
    });

    it("Верен указатель head", () => {
        expect(list.head).toBe(firstNode);
    });

    it("Верен указатель tail", () => {
        expect(list.tail).toBe(thirdNode);
    });

    it("Находит значение по индексу", () => {
        expect(list.find(0)).toBe(first);
        expect(list.find(1)).toBe(second);
        expect(list.find(2)).toBe(third);
    });

    it("Правильно вставляет элемент по индексу", () => {
        list.insert(2, new_third);
        expect(list.length).toBe(4);
        expect(list.find(0)).toBe(first);
        expect(list.find(1)).toBe(second);
        expect(list.find(2)).toBe(new_third);
        expect(list.find(3)).toBe(third);
    });

    it("Находит индекс элемента", () => {
        expect(list.findIndex(first)).toBe(0);
        expect(list.findIndex(second)).toBe(1);
        expect(list.findIndex(new_third)).toBe(2);
        expect(list.findIndex(third)).toBe(3);
    });

    it("Удаляет элемент по индексу", () => {
        list.remove(2);
        expect(list.length).toBe(3);
        expect(list.find(0)).toBe(first);
        expect(list.find(1)).toBe(second);
        expect(list.find(2)).toBe(third);
    });


});