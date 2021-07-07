let btn = document.querySelector('.btn');
let div = document.querySelectorAll('.out');
console.log(div);
/*
// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).

btn.addEventListener('click', ()=>{
    for(let item of div){
        item.innerHTML = 15;
    }
})
*/
/*
// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4,5,6]);

btn.addEventListener('click', ()=>{
    let res = ' ';
    for(let item of a14){
        res += item + ' ';
    }
    document.querySelector('.res').innerHTML = res;
})
*/

/*
// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';


btn.addEventListener('click', ()=>{
    let res = ' ';
    let str = a13.split('');
    for(let item of str){
        res += item + ' ';
    }
    document.querySelector('.res').innerHTML = res;
})
*/

/*
// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4,5,6,7];

btn.addEventListener('click', ()=>{
    let res = '';
    for(let item of a12){
        res += item + ' ';
    }
    document.querySelector('.res').innerHTML = res;
})
*?
/*
// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

btn.addEventListener('click', ()=>{
    let res = " ";
    for(let key in a11){
        if(a11[key] > 10){
            res += a11[key] + ' ';
        }
    }
    document.querySelector('.res').innerHTML = res;
})
*/
/*
// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];


btn.addEventListener('click', ()=>{
    let arr = {};
    for(let i = 0; i < a10.length; i++){
        arr[a10[i]] = a10[i];
    }
    console.log(arr);
})

*/
// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.
/*
let arr = [ [4,3,2], [2,5], [0,0,0,0,0]];

let max = 0;
for(let i = 0; i < arr.length; i++){
    let maxIndex = arr[i].length -1;
    if(maxIndex > max){
        max = maxIndex;
    }
}

console.log(max);

/*
//let arr = ['sahsa', 'pashas', 'asdflkahgkdg', 'io'];
let max = arr[0].length;
for(let key of arr){
    if(key.length > max){
        max = key.length;
    }
}
console.log(max -1);

/*
let max = arr[0].length;
for(let key of arr){
    if(max < key.length){
        max = key.length;
    }
}
console.log(max - 1);
/*
btn.addEventListener('click', ()=>{


    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j].length > max.length){
                max.length =arr[i][j].length;
            }
        }
    }
    console.log(max);
    /*
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
    }    
    console.log(max);

})
    */
/*
// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let arr = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

btn.addEventListener('click', ()=>{
    let arr2 = [];
    for(let key in arr){
        arr2.push(arr[key].id);
    }
    console.log(arr2);
})
*/


// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.
/*
let arr = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

btn.addEventListener('click', ()=>{
    let obj = {};
    let tempID = ' ';
    for(let key in arr){
       tempID += arr[key].id;
       arr[key].id = arr[key].name;
       arr[key].name = tempID;
    }
    for(let keys in arr){
        obj[keys] = arr[keys];
    }
    console.log(obj);
})
*/

/*
// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.
let arr = [[1,2], [3,4], [5,6]];
let arr2 = [].concat(arr[0], arr[1], arr[2]);
console.log(arr2);


let arr = [[1,2], [3,4], [5,6]];
let arr2 = [];
let res = ''
for(let i = -0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        arr2.push(arr[i][j]);
        res = arr2;
    }
}
document.querySelector('.res').innerHTML = res;
console.log(arr2);
*/




/*
// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.
let arr1 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];

sortElem = (arr1) =>{
    let arr = [];
    for(let i = 0; i < arr1.length; i++){
            if(arr1[i] > 7){
                arr.push(arr1[i]);
            }
    }
    return arr;
}
let res = sortElem(arr1);
console.log(res);
*/



// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

/*
// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

let div = document.getElementsByClassName('out');

btn.addEventListener('click', ()=>{
    for(let i = 0; i < div.length; i++){
        div[i].innerHTML = 3;
    }
})
*/
/*
// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.
let arr = [5,7,9, 11, 13, 15];
let res = ' ';
for(let i = 0; i < arr.length; i++){
    res += `Index ${i} : ${arr[i]}<br>`
}
document.querySelector('.res').innerHTML = res;
*/
/*
// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let arr = [5,7,9, 11, 13, 15];
let res = ' '
for(let i = 0; i < arr.length; i++){
    res += arr[i] + ' ';
}
document.querySelector('.res').innerHTML = res;
*/