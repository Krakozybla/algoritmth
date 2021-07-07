
// Task 20
// При нажатии b-20 выполняете функцию f20. Функция должна в out-20 вывести название станции которые содержат переход на другую ветку. Такие станции маркируются 2. Вывод через пробел

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}



/*
//При нажатии b-19 выполняете функцию f19. Функция должна в out-19 вывести цвет ветки станции которую пользователь ввел в i-19. Пользователь может вводить текст как с большой, так и с маленькой буквы. Если ветка не найдена - выводите пустую строку.

let arr = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}
let inp = document.querySelector('.inp');
//let res = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';


inp.addEventListener('change', ()=>{
    valInp = inp.value;
})

btn.addEventListener('click', ()=>{
    let out = ' ';
    for(let key in arr){
        for(let i = 0; i < arr[key].length; i++){
            if(arr[key][i] === valInp){
                out += key;
            }
        }
    }
    inp.value = ' ';
    document.querySelector('.res').innerHTML += out;
})
*/

/*
//Task 18 При нажатии b-18 выполняете функцию f18. Функция должна в out-18 вывести станции метро из массива a18 той ветки, которую пользователь ввел в i-18. Вывод станций - через пробел. Если ветка не найдена выводите пустую строку.

let arr = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

let inp = document.querySelector('.inp');
//let res = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';

inp.addEventListener('change', ()=>{
    valInp = String(inp.value);
})

btn.addEventListener('click', ()=>{
    let out = '';
    for(let key in arr){
        if(key === valInp){
            out += key +" "+ "ведет в направлении:" + arr[key] + "<br>";
        }
    }
    document.querySelector('.res').innerHTML += out;
    inp.value = ' ';
    valInp = ' ';
    out = " ";
})
*/


/*
//Task 17 При нажатии b-17 выполняете функцию f17. Функция должна в out-17 выводить элементы name вложенных массивов в a17 для который age > 30. Вывод через пробел.
let btn = document.querySelector('.btn');
let arr = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}
let out = ' ';
for(let key in arr){
    if(arr[key].age > 30){
        out +=  arr[key].name  +"--"+ arr[key].age + "<br>";
    }
    //out += key + '--' + arr[key].age + '<br>';
}

document.querySelector('.res').innerHTML += out;
*/

/*
// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.
let btn = document.querySelector('.btn');
let arr = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}
let out = ' ';
for(let key in arr){
    out += key + '--' + arr[key].age + '<br>';
}

document.querySelector('.res').innerHTML += out ;
*/


/*
// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна в out-14 выводить нулевые (по индексу)  элементы вложенных массивов в a14. Вывод через пробел.
// Ожидаемый вывод - 1 3 6 9

let arr = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};
let out = ' ';
for(let key in arr){
   out =   "--" +  arr.prim  + '<br>' + "--" +  arr.one  + '<br>' + '--'  +  arr.testt  + '<br>' + "--" +  arr.ivan  + '<br>';
}
document.querySelector('.res').innerHTML =  out;
*/

/*
//Task 13 При нажатии b-13 выполняете функцию f13. Функция должна в out-13 выводить сумму значений массива a13 (только числа).
let inp = null;
inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';

let arr = {
    1: 21,
    2: 31,
    3: 14,
    4: 2,
    5: 5,
    6: 8,
    7: 4,
    8: 3,
    9: 2,
    10: 1
}

btn.addEventListener('click', ()=>{
    let out = '';
    let sum = 0
    for(let key in arr){
        out = sum += arr[key];
    }
    document.querySelector('.res').innerHTML = out;
})
*/
/*
//Task 12
let inp = null;
inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';
let arr = {
    1: 'sahsa',
    2: 'pasha',
    3: 'sahsa',
    4: 'vany',
    5: 'semeon',
    6: 'sahsa',
    7: 'alex',
    8: 'vany',
    9: 'pasha',
    10: 'masha'
}


inp.addEventListener('change', ()=>{
    valInp = inp.value;
})

btn.addEventListener('click', ()=>{
    let out = ' ';
    let map = -1;
    for(let key in arr){
        if(arr[key] === valInp){
            delete arr[key];
        }
    }

    for(let key in arr){
        out += arr[key] + "<br>";
    }
    document.querySelector('.res').innerHTML += out;
    inp.value = ' ';
})
*/
/*
//Task 11 При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11. Для вывода используйте функцию f5.

let inp = null;
inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';
let arr = {
    1: 'sahsa',
    2: 'pasha',
    3: 'sahsa',
    4: 'vany',
    5: 'semeon',
    6: 'sahsa',
    7: 'alex',
    8: 'vany',
    9: 'pasha',
    10: 'masha'
}

inp.addEventListener('change', ()=>{
    valInp = inp.value;
})
btn.addEventListener('click', ()=>{
    let out = ' ';
    let map = -1;
    for(let key in arr){
        if(key === valInp){
            map = 1;
            if(map === 1){
             delete arr[key];
            }
        }
    }
    if(map === -1){
        out = 'Such value is not available!';
    }
    for(let key in arr){
        out += `${key} : ${arr[key]} <br>`;
        //out += arr[key] + "<br>";
    }
    console.log(arr);
    document.querySelector('.res').innerHTML += out + "<br>";
    inp.value = " ";
    valInp = " ";
})
*/

//Добавьте input .i-9. При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 все ключи массива a9, которые содержат значение, равное значению в input.i-9. Вывод через пробел. Если значений - нет то выводить пустую строку.
/*
let inp = null;
inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
let valInp = ' ';
let arr = {
    1: 'sahsa',
    2: 'pasha',
    3: 'sahsa',
    4: 'vany',
    5: 'semeon',
    6: 'sahsa',
    7: 'alex',
    8: 'vany',
    9: 'pasha',
    10: 'masha'
}

inp.addEventListener('change', ()=>{
    valInp = inp.value;
})

btn.addEventListener('click', ()=>{
    let map  = false;
    for(let key in arr){
        if(arr[key] === valInp){
            map = true;
            if(map){
                res.innerHTML = map;
            }
        }
    }
    if(map === false){
        res.innerHTML = map;
    }
})
*/
/*
inp.addEventListener('change', ()=>{
    valInp = inp.value;
    console.log(typeof(valInp));
})

btn.addEventListener('click', ()=>{
    for(let key in arr){
        if(arr[key] === valInp){
            res.innerHTML += valInp + " was find under the keys" + " " + key + "<br>";
        }
    }

})
*/

/*
let inp = null;
let valInp = ' ';
let allData = [];
inp = document.querySelector('.inp');
let btn  = document.querySelector('.btn');
let res = document.querySelector('.res');
inp.addEventListener('change', ()=>{
    valInp = inp.value;
})

btn.addEventListener('click', ()=>{
    allData.push({
        text: valInp,
    })
    inp.value = ' ';
    allData.forEach((item, index) =>{
        res.innerHTML += item.text;
    })
})
*/
/*
let inp = null;
let valueInp = " ";
inp = document.querySelector('.inp1');
let allData = [];


inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let res =  document.querySelector('.res');


inp.addEventListener('change', ()=>{
    valueInp = inp.value;
})

btn.addEventListener('click', ()=>{
    allData.push({
        text: valueInp,
    })
    inp.value = " ";
    allData.forEach((item, index)=>{
        res.innerHTML = item.text;
    })
})
*/



//Добавьте input .i-8. При нажатии b-8 выполняете функцию f8. Функция должна выводить значение в out-8, если ключ введенный в i-8 есть в массиве, если нет - 0.
/*
let arr = {
    1: 'sahsa',
    2: 'pasha',
    3: 'grisha',
    4: 'vlad',
    5: 'semeon',
    6: 'masha',
    7: 'alex',
    8: 'vany',
    9: 'oly',
    10: 'alena'
}

inp.addEventListener('change', ()=>{
    valKey = inp.value;
})

btn.addEventListener('click', ()=>{
    let out = ' ';
    let map = -1;
    for(let key in arr){
        if(valKey === key){
            map = 1;
            if(map === 1){
                out += arr[key] + " ";
            }
        }
    }
    if(map === -1){
        out = 'Such key is not valid'
    }
    document.querySelector('.res').innerHTML += out;
    inp.value = ' '; 
    valKey = ' ';
    console.log(inp.value);
})
*/

/*
let keys = '';
let a7 = {
    "b": 17,
    "e": 22
};


inp.addEventListener('change', ()=>{
    keys = inp.value;
})

btn.addEventListener('click',()=>{
    let map = -1;
    for(let key in a7){
        if(key == keys){
            map = 1;
            if(map === 1){
                res.innerHTML = "such key is already excist"
            }
        }
    }
    if(map === -1){
        res.innerHTML = 'this value is new to array!'
    }
})
*/

/*
btn.addEventListener('click', ()=>{
    arr[inp.value] = inp2.value;
    for(key in arr){
        res.innerHTML += 'key is' + " " +  key + " " + "value is" + " " + arr[key] + "<br>";
    }
    inp.value = ' ';
    inp2.value = ' ';
})
*/