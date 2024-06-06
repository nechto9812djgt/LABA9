const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
};
let evaluate = (expr) => {
    let stack = [];
    expr.split(' ').forEach((token) => {
        if (token in operators) {
            let [y, x] = [stack.pop(), stack.pop()];
            stack.push(operators[token](x, y));
        } else {
            stack.push(parseFloat(token));
        }
    });
    return stack.pop();
};
res = evaluate('1 2 + 3 *');
document.getElementById('nine').innerText = `1 + 2 * 3 = ${res}`;