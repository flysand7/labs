//1 задание
console.log("\nЗадание 1\n");
var user1 = {};
user1.name = "John";
user1.surname = "Smith";
user1["name"] = "Pete";
delete user1.name;

console.log(user1);

//2 задание
console.log("\nЗадание 2\n");
function isEmpty(obj) {
    return Object.keys(obj).length == 0;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

//3 задание
console.log("\nЗадание 3\n");
const user2 = {
    name: "John"
};
console.log(user2);
user2.name = "Pete"; 
console.log(user2);

//4 задание
console.log("\nЗадание 4\n");
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

var sum = 0;
for (const i in salaries) {
    sum += salaries[i];
}
console.log(sum);

//5 задание
console.log("\nЗадание 5\n");
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
function multiplyNumeric(obj) {
    for (const x in obj) {
        if (typeof obj[x] == 'number')
            obj[x] *= 2;
    }
}
multiplyNumeric(menu)
console.log(menu);

//6 задание
console.log("\nЗадание 6\n");
let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

console.log(fruits.length); // 4

//7 задание
console.log("\nЗадание 7\n");
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
console.log(styles);

//8 задание
console.log("\nЗадание 8\n");
var arr = ["a", "b"];
arr.push(function () {
    return this
})
console.log(arr[2]());


// 9 задание
console.log("\nЗадание 9\n");
let mas = [];
do {
    let data = null//prompt();
    if (isNaN(data) || data === null)
        break;
    mas.push(data);
} while (true);
console.log(mas.reduce((a,v)=>a+v, 0));

//10 задание
console.log("\nЗадание 10\n");
var arr10 = [-1, 2, 3, -9, 11];

function getMaxSubSum(arr) {
    let newSum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        newSum += arr[i];
        if (newSum < arr[i]) newSum = arr[i];
        if (newSum > maxSum) maxSum = newSum;
    }

    return maxSum;
}
console.log(getMaxSubSum(arr10));

//11 задание
console.log("\nЗадание 11\n"); 
function delete_duplicates(arr) {
    let counts = {}
    for(num of arr) {
        if(isNaN(counts[num])) {
            counts[num] = 0
        }
        counts[num] += 1
    }
    for(let i = 0; i != arr.length;) {
        if(counts[arr[i]] > 2) {
            arr.splice(i, 1)
        }
        else {
            i += 1
        }
    }
    console.log(counts)
}

let doubles = [1, 1, 1, 1, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7];
delete_duplicates(doubles)
console.log(doubles);

// 12 задание
console.log("\nЗадание 12\n");
function Left3Right1FromMax(arr) {
    let max = arr[0], idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            idx = i;
        }
    }

    // Сдвиг 3 влево
    for (let i = 0; i < 3; i++) {
        if (idx === arr.length - 1) break;
        let temp = arr[idx + 1];
        arr.splice(idx + 1, 1);
        arr.splice(idx, 0, temp);
        idx++;
    }

    let temp = arr[idx - 1];
    arr.splice(idx - 1, 1);
    arr.splice(idx, 0, temp);
}

var arr12 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(arr12);
Left3Right1FromMax(arr12);
console.log(arr12);

// 13 задание
console.log("\nЗадание 13\n");
function sum_negatives(arr) {
    return arr.reduce((acc, elem) => elem < 0 ? acc += elem : acc);
}
var arr13 = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
console.log(arr13);
console.log(sum_negatives(arr13));

// 14 задание
console.log("\nЗадание 14\n");
function ProdOddIdx(arr) {
    return arr.reduce((acc, elem, idx) => idx % 2 != 0 ? acc *= elem : acc);
}
var arr14 = [1, 2, 3, 4, 5];
console.log(arr14);
console.log(ProdOddIdx(arr14));

// 15 задание
console.log("\nЗадание 15\n");
function betweenZeros(arr) {
    let pos1, pos2;

    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 && !pos1 ? pos1 = i : pos2 = i
    }

    if (!pos1 || !pos2)
        return 0;

    let sum = 0;
    for (let i = pos1 + 1; i < pos2; i++) {
        sum += arr[i];
    }

    return sum;
}

var arr15 = [0, 2, 3, 3, 4, 0, 3, 3, 4, 5];
console.log(arr15);
console.log("между нулями:", betweenZeros(arr15));

// 16
console.log("\nЗадание 16\n");
var arr = [5, 6, 7, 1, 2, 9, 11];
console.log(arr);
console.log(Math.max.apply(null, arr));

// 17
console.log("\nЗадание 17\n");
function minOdd(arr) {
    let min = arr[0];

    for (const elem of arr) {
        if (elem < min && elem % 2 == 0)
            min = elem;
    }

    return min;
}

// 18
console.log("\nЗадание 18\n");
function StartsWithZeros(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 0)
            arr.unshift(arr.splice(i--, 1)[0]);
    }
}
var arr18 = [0, 1, 2, 3, 0, 4, 5, 0, 6, 7, 0, 8, 0, 0, 0, 9];
console.log(arr18);
StartsWithZeros(arr18);
console.log(arr18);

// 19
console.log("\nЗадание 19\n");
function MinMaxIdxSum(arr) {
    let min = arr[0], max = arr[0], idx1 = 0, idx2 = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            idx1 = i;
        }

        if (arr[i] > max) {
            max = arr[i];
            idx2 = i;
        }
    }

    return idx1 + idx2;
}

var arr19 = [7, -5, 2, -1, 9, 1, 2, 0];
console.log(arr19);
console.log(MinMaxIdxSum(arr19));

// 20
console.log("\nЗадание 20\n");
function MinAbs(arr) {
    return arr.reduce((a, b) => Math.min(Math.abs(a), Math.abs(b)));
}
let arr20 = [-3, -2, -1, 1, 2, 3];
console.log(arr20);
console.log("20.", MinAbs(arr20));

//21 задание
console.log("\nЗадание 21\n");
function RandRevers() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * (20)) - 10;
    }

    return arr = [...arr.slice(0, 5).reverse(), ...arr.slice(5, 10).reverse()]
}
console.log(RandRevers());

//22 задание
console.log("\nЗадание 22\n");
function RandMoveLeft4() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * (12 - -12 + 1)) - 12;
    }

    console.log("arr:", arr);

    for (let i = 0; i < 4; i++) {
        arr.unshift(arr.pop());
    }

    return arr;
}
console.log(RandMoveLeft4());