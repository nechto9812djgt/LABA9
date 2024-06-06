<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Times New Roman', Times, serif;">
    <p align = "center" style="font-size: 14;">
        МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ <br>
        РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
        ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
        ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
        «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»<br>
    </p>
    <br><br><br><br><br><br>
    <body font-size = "12">
        <p align = "center"> 
            Институт естественных наук и техносферной безопасности<br>
            Кафедра информатики<br>
            Бахтина Елена Владимировна<br>
        </p>
        <br><br><br>
        <p align = "center">
            <strong>Лабораторная работа №9. «JavaScript».</strong><br>
            01.03.02 Прикладная математика и информатика
        </p>
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <p align = "right"> 
            Научный руководитель<br>
            Соболев Евгений Игоревич
        </p>
        <br><br><br>
        <p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
    </body>
    <body style="font-family: 'Times New Roman', Times, serif;">
        <h2 align = "center">Введение</h2>
        <p font-size = "12">
            <b>JavaScript</b> — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.
        </p>
        <br>
        <h2 align = "center">Цель и задачи</h2>
        <p align = "left" font-size = "12"> 
            Цель: решить задачи при помощи JS.<br>
            Задачи:<br>
                1.	Есть некоторая строка (var str = 'fgfggg';), что будет, если мы возьмем str[0]?<br>
                2.	 Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'<br>
                3.	Дано дерево, надо найти сумму всех вершин.<br>
                4.	Нарисовать стилями полукруг.<br>
                5.	Есть массив в котором лежат объекты с датами, отсортировать по датам.<br>
                6.	Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')<br>
                7.	От них же. Числа от 1 до 100 лежат в массиве, они хаотично перемешанные, от туда изъяли одно число, надо найти, что это за число. алгоритм не должен превышать O(n^2) сложности.<br>
                8.	Реализовать сортировку пузырьком.<br>
                9.	Обратная польская нотация.<br>
                10.	Реализовать функцию является ли слово палендром.<br>
        </p>
        <h2 align = "center">Решение</h2>
        <p font-size = "12">Для выполнения этой лабораторной работы, я пользовалась:</p>
        <p> 1.  Материалом в сети интернет</p>
        </body>
<h3 align = "center">Файл lab9.html</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab9</title>
    <style>
        .title{ font-weight: bold;}
    </style>
</head>
<body>
    <div>
        <p class="title">Первое задание:</p>
        <p id="first"></p>
        <button id="btn1">Нажмите</button> <button id="btn2">Нажмите</button>
        <p class="title">Второе задание:</p>
        <p id="second"></p>
        <p class="title">Третье задание:</p>
        <p id="third"></p>
        <p class="title">Четвертое задание:</p>
        <canvas id="circle" width="200" height="50"></canvas>
        <p class="title">Пятое задание:</p>
        <ul id="fifth"></ul>
        <p class="title">Шестое задание:</p>
        <p id="Sixth"></p> <p id="Sixthh"></p>
        <p class="title">Седьмое задание:</p>
        <p id="seventh"></p>
        <p class="title">Восьмое задание:</p>
        <p id="eight"></p>
        <p id="eightt"></p>
        <p class="title">Девятое задание:</p>
        <p id="nine"></p>
        <p class="title">Десятое задание:</p>
        <p id="ten"></p>
    </div>
    <script>
        var str = 'fgfggg';
        document.getElementById('first').innerText = `${str[0]}`;
    </script>
    <script>
        function str(one, two, three, four)
        {
            return two+one+three+one+four;
        }
        document.getElementById('second').innerText = `${str('*', '1', 'b', '1c')}`;
    </script>
    <script src="tree.js"></script>
    <script src="circle.js"></script>
    <script>
        const datas = [
            { date: new Date('2022-01-15') },
            { date: new Date('2023-05-20') },
            { date: new Date('2021-10-05') }
        ];
        const resultList = document.getElementById('fifth');
        resultList.innerHTML = '';
        datas.forEach(obj => {
        const li = document.createElement('li');
        li.textContent = obj.date.toDateString();
        resultList.appendChild(li);
        });
    </script>
    <script>
        function Words(word1, word2) {
            const sortedd = word1.split('').sort().join('');
            const sorted = word2.split('').sort().join('');
            return sortedd === sorted;
        }
        const word1 = 'кот';
        const word2 = 'ток';
        const word3 = 'окт';
        const result12 = Words(word1, word2);
        const result23 = Words(word2, word3);
        document.getElementById('Sixth').innerText = `Слова ${word1} и ${word2} состоят из одних и тех же букв: ${result12}`;
        document.getElementById('Sixthh').innerText = `Слова ${word2} и ${word3} состоят из одних и тех же букв: ${result23}`;
    </script>
    <script>
        function find(arr) {
            const n = arr.length + 1;
            let totalSum = (n * (n + 1)) / 2;
            let sum = 0;
            for (const num of arr) {
                sum += num;
            }
            return totalSum - sum;
        }
        const arrr = Array.from({ length: 99 }, (_, index) => index + 1);
        const num = find(arrr);
        document.getElementById('seventh').innerText = `Отсутствующее число в массиве: ${num}`;
    </script>
    <script>
        function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        }
        const arr = [6, 10, 3, 15, 0];
        document.getElementById('eight').innerText = `Исходный массив: ${arr}`;
        const sortedArr = bubbleSort(arr);
        document.getElementById('eightt').innerText = `Отсортированный массив: ${sortedArr}`;
    </script>
    <script src="kurwabober.js"></script>
    <script>
        function palin(word) {
            const Word = word.toLowerCase().replace(/ /g, '');
            return Word === Word.split('').reverse().join('');
        }
        const testWord = 'топот';
        if (palin(testWord)) {
            document.getElementById('ten').innerText = `${testWord} - это палиндром!`;
        } else {
            document.getElementById('ten').innerText = `${testWord} - не палиндром.`;
        }
    </script>
</body>
</html>
```
<h3 align = "center">Файл tree.js</h3>

```
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
```
<h3 align = "center">Файл circle.js</h3>

```
const canvas = document.getElementById('circle');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(100, 50, 50, Math.PI, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = 'teal';
ctx.fill();
```
<h3 align = "center">Файл kurwabober.js</h3>

```
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
```
</html>
<br>
 <h2 align = "center">Вывод</h2>
 <p align = "left" font-size = "12">
    По итогу данной лабороторной работы, я научилась новым интересным вещам на этом язке 😊 
</p>
</body>
</html>