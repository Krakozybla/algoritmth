let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valInp = ' ';

/*
// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.

let arr = { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

btn.addEventListener('click', ()=>{
    let result = '';
    for(let key in arr){
        result += `Symbol ${key} : amount ${arr[key]}<br>`
    }
    document.querySelector('.res').innerHTML = result;
})
*/
/*
// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

btn.addEventListener('click', ()=>{
    let str = new Set(str12);
    console.log(str);
})
*/
/*
let arr = new Set(['4', '5', '6']);
//При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.


btn.addEventListener('click', ()=>{
    let res = '';
    for(let key of arr){
        res += key + ' ';
    }
    document.querySelector('.res').innerHTML = res;
})
*/



/*
// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 
let arr = new Set([9, 8, 7, 6, 5]);

btn.addEventListener('click', ()=>{
    dataTypeConver(arr);
})

dataTypeConver = (arr) =>{
    let res = ' ';
    for(let key of arr){
        res += String(key) + ' ';
    }
    return console.log(typeof(res));
}
*/
/*
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.


let arr = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let obj = new Set();
for(let key of arr){
    if(key > 5){
        obj.add(key);
    }
}
console.log(obj);
*/
/*
//При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.
let obj  = new Set('sahsa');
inp.addEventListener('change', ()=>{
    valInp = String(inp.value);
})

btn.addEventListener('click', ()=>{
    let str = valInp.split('');
    for(let i = 0; i < str.length; i++){
        if(obj.has(str[i])){
            console.log('Damn wow');
        }else{
            obj.add(str[i]);
            console.log('New element has added to obj!');
        }
    }
    console.log(obj);
})
*/

/*
let arr = new Set(['sahsa']);
//При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.
inp.addEventListener('change', ()=>{
    valInp = String(inp.value);
})

btn.addEventListener('click', ()=>{
    let str = valInp.split('');
    for(let key of arr){
        if(str.length >= 6){
            arr.add(str.join(''));
        }else{
            console.log('The length of the password should be consist more than 6 elements!');
        }
    }
    for(let keys of arr){
        if(keys === str.join('')){
            console.log('Cannot be added to array cause such value has already excist in array!');
        }
    }
    console.log(arr);
    inp.value = '';
})
*/

/*
let arr = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

let b = new Set(arr);
console.log(b.size);
*/
/*
let arr = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);
//При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

btn.addEventListener('click', ()=>{
    let count = 0;
    for(let i of arr){
        count++;
    }
    document.querySelector('.res').innerHTML = count;
})
*/
/*
inp.addEventListener('change', ()=>{
    valInp = inp.value;
})

btn.addEventListener('click', ()=>{
    let result = ' ';
    let map = false;
    for(let key of arr){
        if(key === valInp){
            map = true
            if(map){
                result = 'true';
            }
        }
    }
    if(map === false){
        result = 'false'
    }

    document.querySelector('.res').innerHTML = result;
    console.log(arr);
    inp.value = " ";
    valInp = ' ';
})
*/