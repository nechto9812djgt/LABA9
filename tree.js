class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}
function sumTree(node) {
    let sum = node.value;
    
    node.children.forEach(child => {
        sum += sumTree(child);
    });
    
    return sum;
}
const tree = new Node(1, [
    new Node(2, [
        new Node(3),
        new Node(4)
    ]),
    new Node(5, [
        new Node(6),
        new Node(7, [
            new Node(8)
        ])
    ])
]);
const sum = sumTree(tree);
document.getElementById('third').innerText = `${sum}`;