let str = 'Я учу учу Javascript'. split(' ');
console.log(str);
console.log(str.indexOf('Javascript'));


/*
Нужно реализовать функцию, которая в параметрах всегда получает массив. И на выбор следующие параметры:
1) только минимальный элемент
2) только максимальный элемент
3) и минимальный, и максимальный элемент

Если пользователю приходит только минимальный, то нужно вывести все значения, которые от минимального и выше.
Если пользователю приходит только максимальный элемент, то нужно вывести все значения до максимального.
Если приходят оба значения вывести все значения от минимального и до максимального элемента.
Input: ([-4, 6, 7, 2, -5, 8], 3, null)
Output:
[6, 7, 8]
let arr = [-4, 6, 7, 2, -5, 8];
let val = 1;
let res = '';
for(let i = 0; i < arr.length; i++){
    if(arr[i] > val){
        res += arr[i] + ' ';
    }
}

console.log(res);
*/


/*31. Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {'0': 10, '1': 5}
Input:
[0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]

Output:
{
'0': 6,
'1': 8
} 

let arr = [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1];
let count = 0;
let amount = 0;
let obj = {};
for(let i = 0; i < arr.length; i++){
   if(arr[i] === 0){
        count++;
   }else{
       amount++;
   }
}
for(let key of arr){
    obj[key] = arr[key];
    if(key === 0){
        obj[key] = count;
    }else{
        obj[key] = amount;
    }   
}
console.log(obj);
*/



/*На вход подается массив со значениями.
Нужно вывести массив уникальных элементов (нет повторений в поданном массиве):

Input:
[5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13]
Output:
[7, 8, 3, 98, 13]
let array = [1, 2, 3, 4, 5];
let array2 = [5, 6, 3, 7, 1];
let newArray = [];

array.forEach(item => {
let flag = false;
newArray.forEach(elem =>{
if(elem === item) flag = true;
})
if(!flag) newArray.push(item);
}) —— Я еще вот так пытался, но он просто удаляет по одному повторяющемуся элементу */
/*
let arr = [5, 7, 6, 2, 8, 3, 5, 6, 2, 98, 13];
let newArr = [];
for(let i = 0; i < arr.length; i++){
    if(!(newArr.includes(arr[i]))){
        newArr.push(arr[i]);
    }
}
console.log(newArr);
*/
/*
let array = [1, 2, 3, 4, 5];
let array2 = [5, 6, 3, 7, 1];
let newArray = [];

for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array2.length; j++){
        if(array[i] === array2[j]){
            array2[j] = null;
        }
    }
}
array2.forEach(item =>{
    if(item !== null){
        array.push(item);
    }
})
console.log(array);
*/



/*31. Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {'0': 10, '1': 5}
Input:
[0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]

Output:
{
'0': 6,
'1': 8
} */
/*
let obj =  [
    {name: 'test', age: 45, country: 'RF', tel: '+79846466744'},
    {name: 'test1', age: 23, country: 'RF', tel: '+79464747484'},
    {name: 'test2', age: 18, country: 'RF', tel: '+376483876346'}
    ]
    for(let key in obj){
        if(obj[key].age > 20){
            obj.splice(key, 1);
        }
    }
    console.log(obj);

    Отфильтровать значения, где age > 20
    
    Output:
    [
    {name: 'test', age: 45, country: 'RF', tel: '+79846466744'},
    {name: 'test1', age: 23, country: 'RF', tel: '+79464747484'}
    ]
    Отфильтровать коллекцию по конкретному условию (callback)
    function filterElements(arr) {
    // ....
    }
    const elements = [
    {name: 'test', age: 45, country: 'RF', tel: '+79846466744'},
    {name: 'test1', age: 23, country: 'RF', tel: '+79464747484'},
    {name: 'test2', age: 18, country: 'RF', tel: '+376483876346'}
    ];
    conts filterArray = filterElements(elements);
    console.log(filterArray);
    // Выводит [
    {name: 'test', age: 45, country: 'RF', tel: '+79846466744'},
    {name: 'test1', age: 23, country: 'RF', tel: '+79464747484'}

*/
/*
//14. Сгруппировать объекты заказов по имени

Input:
[
{name: 'test', price: 200},
{name: 'test1', price: 300},
{name: 'test', price: 100},
{name: 'test', price: 600}
]

Output:
[
{name: 'test', price: 900},
{name: 'test1', price: 300}
]

let obj = [
    {name: 'test', price: 200},
    {name: 'test1', price: 300},
    {name: 'test', price: 100},
    {name: 'test', price: 600}
]
let res = 0;
for(let i = 0; i < obj.length; i++){
    if(obj[i].name === 'test'){
        res += obj[i].price;
    }
}
for(let key in obj){
    if(obj[key].price < 600){
        obj.splice(key, 1);
    }
    if(obj[key].price === 600){
        obj[key].price = res;
    }
}
console.log(res);
console.log(obj);
*/

/*
let newObj = [{}];
let res = 0;
for(let i = 0; i < obj.length; i++){
    if(obj[i].name === 'test'){
        res += obj[i].price;
    }
}
console.log(res);
for(let key in obj){
    if(obj[key].price === 200){
        delete obj[key]
    }else if(obj[key].price === 100){
        delete obj[key];
    }else if(obj[key].price === 600){
        obj[key].price = res;
    };
    newObj[key] = obj[key];
}
console.log(obj);
console.log(newObj);
*/




/*
//Реализуйте функцию, которая параметром принимает объект. Выведите сформированную строку для браузера ('https://underscorejs.org') с параметрами. Например, {a: 4, b:8} => 'https://underscorejs.org?a=4&b=8'
let str = 'https://underscorejs.org';
let obj = {a: 4, b:8};
let  symb = '?';
createLink = (obj, str) =>{
    let idx = ' ';
    let idxs = ' ';
    for(let key in obj){
        str += `${symb}${key}=${obj[key]}&`;
    }
    let newStr = str.split('');
    for(let i = 0; i < newStr.length; i++){
       idx = newStr.lastIndexOf('&');
        idxs =  newStr.lastIndexOf('?');
        newStr[33] = '';
        newStr[29] = '';
    }
    return newStr.join('');
}
let res = createLink(obj, str);
console.log(res);
//'https://underscorejs.org?a=4&b=8' input
// https://underscorejs.org?a=4&b=8   output
*/
/*
//21. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
//Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
let res = document.querySelector('.res');
let num = 31;
for(let i = 0; i < 32; i++){
    res.innerHTML += `32 % ${i} = ${32 % i === 0} <br>`
}
*/

/*
//31. Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {'0': 10, '1': 5}
 //Input:
 // [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]

// Output:

 let obj = {
    '0': 6,
    '1': 8
}



let arr = [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 1];
let obj = {};
let count = 0;
let amount = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        count++;
    }else{
        amount++;
    }
}
for(let key of arr){
    obj[key] = arr[key];
    if(key == 0){
        arr[key] = count;
    }else{
        arr[key] = amount;
    }
}
console.log(obj);
console.log(count);
console.log(amount);
*/
//Строка состоит из слов, разделенных одним или несколькими пробелами. Переставьте слова по убыванию их длин.
//Input:
//'test education part 2'
//Output:
//'education part test 2'
/*
let str = 'test education part 2'.split(' ');
let max = str[0].length;
for(let i = 1; i < str.length; i++){
    for(let j = 0; j < i; j++){
        if(str[i].length > str[j].length){
           let temp = str[i];
           str[i] = str[j];
           str[j] = temp;
        }
    }
}
console.log(str);
*/
/*
let arr = ['sahsa', 'pasha', 'vald', 'sergey'];
let obj = {}
for(let key in arr){
    obj[key] = arr[key];
}
console.log(obj);
let arr2 = [];
for(let key in obj){
    if(obj.hasOwnProperty(key)){
        arr2.push(key);
    }
}
console.log(arr2);
*/