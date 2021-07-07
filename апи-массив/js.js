
/*
//Фильмтрация по возрастанию 
let arr = [3, 4, 2, 1, 7, 5, 6];
for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
*/
/*
for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
*/

/*
fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=b1e7d7d548f21c639dd3c0895e1e3005')
     .then(function (resp) { return resp.json() })
        .then(function(data){
                console.log(data);
                document.querySelector('.city-name').innerHTML = data.name;
                document.querySelector('.celsiy').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.clouds').innerHTML = data.weather[0]['description'];
        })
        .catch(function(){
            // catch any errors
        })
*/
/*
// ДОБАВИТЬ С ПЕРВЫЙ МАССИВ ТОЛЬКО ТЕ ЗНАЧЕНИЯ КОТОРЫЕ ПРИСУТСВУЮТ ВО ВТОРОМ, НО НЕТУ В ПЕРВОМ//
let array1 = [1, 2, 3, 4, 5 , 6, 7,];
let array2 = [5, 6, 7, 8, 9, 10];

array1.forEach((item, index)=>{
    array2.forEach((elem, idxs) =>{
        if(array1[index] === array2[idxs]){
            array2[idxs] = null;
        }
    })
})
array2.forEach(items =>{
    if(items !== null){
        array1.push(items);
    }
})
console.log(array1);
*/
/*
// 2. НАЙТИ БОЛЬШЕЕ И НАЙМЕНЬШЕЕ СЛОВО В СТРОКЕ //
let string = 'sahsa pavel MI oly d mikitadfg aklsjdghkjasgdhgpjsd mikola nikola'.split(' ');
let min = string[0]; 
for(let i = 0; i < string.length; i++){
    if(string[i].length < min.length){
        min = string[i];
    }
}
console.log(min);
*/

/*
// 3. remove diplicate form the string//
let str = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'.split(' ');
let newArr = [];
// step 2
let uniqElem = new Set(str);
console.log(uniqElem);

/* step 1
str.forEach(item =>{
    if(!newArr.includes(item)){
        newArr.push(item);
    }
})
console.log(newArr);
*/
/*
// сортировка элементов массива по возрастанию или по убыванию 
let arr = [ 5, 6, 3, 1, 2, 4, 7];

rearrangOrder = (arr) =>{
   for(let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
       }
   }
   return arr;
}
let res = rearrangOrder(arr);
console.log(res);
*/

