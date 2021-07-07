
/*
31. Реализуйте функцию. На вход функция принимает массив значений из 0 и 1. Верните объект сгруппированных данных {'0': 10, '1': 5}
Input:
[0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1]

Output:
{
'0': 6,
'1': 8
}
*/

let arr = [0, 0, 0, 1, 1, 0 , 1, 1, 1, 0, 0, 1, 1, 0, 1];
/*
let obj = [];
let zero = 0;
let one = 0;
arr.forEach((item, index)=>{
    if(item === 1){
        one++
    }else{
        zero++
    }
})
console.log(Object.assign({}, [zero, one]));*/

let obj = {};
let newArr = [];
let zero = 0;
let one = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 1){
        one = one + 1;
    }else{
        zero = zero + 1;
    }
}
newArr.push(one, zero);
console.log(newArr);
for(let j = 0; j < newArr.length; j++){
    obj[j] = newArr[j];
}
console.log(obj);







/*let arr = [-4, 6, 7, 2, -5, 8];
showDiapozon = (arr, num) =>{
    arr.forEach(elem => {
        if(elem < num || elem > num){
            console.log(elem);
        }
    });
}
let res = showDiapozon(arr, 6);
console.log(res);*/

/*let str = 'education part test 2'.split(' ');
str.sort((a, b)=>{return a.length - b.length});
console.log(str);
let stack;
for(let i = 0; i < str.length; i++){
    for(let j = 0; j < str.length; j++){
        if(str[i].length > str[j].length){
            stack = str[i].length;
            str[i].length = str[j].length;
            str[j].length = stack;
        }
    }
}
console.log(str); */

/*
arr.sort((a, b)=>{return a - b});
console.log(arr);
*/

/*
let list = {
    you: 100, 
    me: 75, 
    foo: 116, 
    bar: 15
};

let sortabled = [];

for(let key in list){
    sortabled.push([key, list[key]]);
}
sortabled.sort(function(a, b) {return a[1] - b[1]})
console.log(sortabled);
*/
/*
var maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};
var sortable = [];
for (var vehicle in maxSpeed) {
    sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function(a, b) {
    return a[1] - b[1];
});


console.log(sortable);
*/

/*
let arr = [1 , 2, 3, 4, 5];
let promt;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i] > arr[j]){
            promt = arr[i];
            arr[i] = arr[j];
            arr[j] = promt;
        }
    }
}
*/





/*
let product = [
    {name: 'test', price: 200},
    {name: 'test1', price: 300},
    {name: 'test', price: 100},
    {name: 'test', price: 600}
]

    let amount = 0;
    for(let key in product){
        if(product[key].name !== 'test1'){
            amount = amount + product[key].price;
        }
    }
    for(let key in product){
        if(product[key].name !== 'test1'){
            product.splice(key, 1);
        }
        if(product[key].name === 'test'){
            product[key].price = amount;
        }
    }
console.log(product);
*/


/*    
for(let key in product){
    if(product[key].name !== 'test1'){
        product.splice(key, 1);
    }
    if(product[key].name === 'test'){
        product[key].price = 900;
    }
}
console.log(product);
*/


/*
let user = {
    'userOne': {
        name: 'Pavel',
        age: 32,
    },
    'userTwo': {
        name: 'Alex',
        age: 21,
    },
    'userThree': {
        name: 'Pavel',
        age: 32,
    }
}
let userList = '';
for(let key in user){
    userList += user[key].name + ' ';
    userList += user[key].age + ' ';
}

document.querySelector('.list').textContent = userList;
//console.log("Это целый user object" + user);
*/




/*
let arr = [1, 2, 3, 3, 4, 5, 5, 6];

for(let i = 0; i < arr.length; i++){
    if(arr[i] === i){
        arr.splice(i, 1);
    }
}

console.log(arr);



let newArr = [];

for(let i = 0; i < arr.length; i++){
   if(!newArr.includes(arr[i])){
       newArr.push(arr[i]);
   }
}

console.log(newArr);
*/