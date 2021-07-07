let inp = document.querySelectorAll('.inp');
//let inp2 = document.querySelector('.inp2');
let btn = document.querySelector('.btn');
let logo = document.querySelector('.logo');
let logo2 = document.querySelector('.logo2');
let form = document.querySelector('.container');
let objKey = '';
let inputValue = '';
let arr = {
    "one": 1,
    "two": 2
};
btn.addEventListener('click', (e)=>{
    inp.forEach(item =>{
        if(item.value === ''){
            item.classList.add('err');
            e.preventDefault();
        }else{
            item.classList.remove('err');
            redner(inp);
        }
    })
})

redner = (inp) =>{
    let result = ' ';
    let map = -1;
   inp.forEach(elem =>{
       if(elem.name === 'keyVal'){
           objKey = elem.value;
       }else{
           inputValue = Number(elem.value);
       }
   })

   for(let key in arr){
     if(key === objKey || arr[key] === inputValue){
         map = -1;
     }else{
         map = 1
        arr[objKey] = inputValue;
     }
   }
   if(map === -1){
       result = "New value to array";
   }else if(map === 1){
    result = `Such element is already excis in array`;
   }

   document.querySelector('.res').innerHTML = result;
   console.log(arr);
   console.log(result);
}




/*
let inp2 = document.querySelector('.inp2');
let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let arr = {
    "one": 1,
    "two": 2
}
inp.addEventListener('change', ()=>{
    keyVal = inp.value;
})
inp2.addEventListener('change', ()=>{
    inpVal = Number(inp2.value);
})
btn.addEventListener('click', ()=>{
    let res = ' ';
    let map = 1;
    for(let key in arr){
        if(key === keyVal && arr[key] === inpVal){
           map = -1;
           if(map === -1){
              res =  'Such value is not available!';
           }
        }
    }
            if(map === 1){
               arr[keyVal] = inpVal;
               res = `New element in array is saved, his key ${keyVal}, his value ${inpVal}`;
            }
   
    console.log(res);
    console.log(arr);
    inp.value = '';
    inp2.value = ' ';
    keyVal = ' ';
    inpVal = ' ';
    
})

*/








/*
checkElem = (arr, keyVal, inpVal) =>{
    let map = -1;
    let res = ' ';
    for(let key in arr){
        if(key !== keyVal || arr[key] !== inpVal){
            map = 1;
            if(map){
                arr[keyVal] = inpVal;
            }else if(key === keyVal && arr[key] === inpVal){
                res = 'Such value is not available!';
            }
        }
    }
    return res;
    
    if(map === -1){
        console.log('Such value is not available');
    }
    return arr;
   
}
 */

/*
let arr = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};


btn.addEventListener('click', ()=>{
    showArr(arr);
})

showArr = (arr) =>{
    let res = ' ';
    for(let key in arr){
        res += ` <br> ${key} : ${arr[key]} <br>`;
    }

    return document.querySelector('.res').innerHTML += res;
}
*/





/*    
let arr = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
};

getElem = (arr, val) =>{
    let res = ' ';
    for(let key in arr){
        if(arr[key] === val){
            res = arr[key];
        }
    }
    return res;
}
let result = getElem(arr, 'hi');
document.querySelector('.res').innerHTML = result;
*/



/*
let arr = ['Your','payment','method','will','automatically','be','charged','in','advance','every', 'asdfhklgrkab;dugasdpg' ];
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i].length < max.length){
        max = arr[i];
    }
}
console.log(max);
*/

/*
inp.addEventListener('change', ()=>{
    inpVal = Number(inp.value);
})
btn.addEventListener('click', ()=>{
    for(let i = 0; i < inpVal; i++){
        arr.push(1);
    }
    console.log(arr);
    inp.value = '';
})
*/
/*
//имитация reverse 1
let arr = [0,1,2,3,4,5,6,7,8,9];
let temp;
for(let i = 0, j = arr.length -1; i < j; i++, j--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
res.innerHTML = arr;
*/
/*
for(var i=0,j=arr.length-1; i<j; i++,j--)
{
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
document.querySelector('.res').innerHTML = (arr);
*/
/*
let arr = [1, 2, 3, 4, 5, 6]
inp.addEventListener('change', ()=>{
    inpVal = Number(inp.value);
})

btn.addEventListener('click', ()=>{
    let map = - 1;
   arr.forEach((item, index) =>{
       if(inpVal === item){
           map = 1;
           if(map === 1){
               console.log(arr.indexOf(item));
           }
       }
   })
    if(map === -1){
        console.log('Such value is not available!');
    }
    inp.value = '';
})
*/
/*
let arr = [1, 2, 3, 4];
let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
console.log(arr);
*/
/*
let arr = [];
btn6.addEventListener('click', ()=>{
    arr = [inp.value, ...arr];
    console.log(arr);
    inp.value = ' ';
})
*/
/*
let arr = [1, 2, 3, 4];

btn6.addEventListener('click', ()=>{
    for(let i = 0; i < arr.length; i++){
        arr[arr.length - 1] = inp.value;
    }
    console.log(arr);
    inp.value = ' ';
})
*/

/*
let arr = [1, 2, 3, 4, 5, 76,]
btn6.addEventListener('click', ()=>{
    for(let i = 0; i < arr.length; i++){
        arr[arr.length - 1] = inp.value;
    }
    console.log(arr);
    inp.value = ' ';
})
*/
/*
massive6 = [100, 200, 300, 400, 700, 121];

btn6.onclick = f6;

function f6() {
    for (let i = 0; i < massive6.length; i++) {
        massive6[massive6.length - 1] = input6.value;
    }
    out6.textContent = massive6;
}
*/
/*
let valInp = '';
let arr = [];
inp.addEventListener('change', ()=>{
    valInp = inp.value;
})
btn.addEventListener('click', ()=>{
    showArr(valInp);
})
showArr = (valInp) =>{
 arr.push(valInp);
 inp.value = ' ';
  res.innerHTML += "<br>" +  arr + '<br>';
}
*/



// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
// т.е ожидаем 6
/*
let arr = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];

let max = arr[0];

for(let i = 0; i < arr.length; i++){
      if(arr[i].length > max){
          max = arr[i].length;
      }
}
res.innerHTML = `The length of the biggest array is ${max}`;
*/
/*
let arr = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];


for(let i = 0; i < arr.length; i++){
        res.innerHTML += 'The length of the arr' + i + " " + arr[i].length + "<br>";
}
*/
/*
let arr = [
    [-2, '7', -3],
    [3, 4, -7],
    [-5, 6, -8, 32, 'a'],
    ['st', 21, -34, -43],
    [44, -56, 'task']
];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
        if(typeof(arr[i][j]) === 'string'){
            res.innerHTML += arr[i][j] + ' ';
        }
    }
}
*/

/*
let arr = [12, [45, 87], [55, 13]];
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i][j] === 13){
            res.innerHTML += arr[i][j];
        }
    }
}
*/
/*
*
**
***
****
*/
/*
for(let i = 5; i >= 0; i--){
    for(let j = 0; j <= i; j++){
        res.innerHTML += '*';
    }
    res.innerHTML += '<br>';
}
*/

/*
for(let i = 0; i <= 5; i++){
    for(let j = 5; j >= i; j--){
        res.innerHTML += '*';
    }
    res.innerHTML += '<br>';
}
*/
/*
for(let i = 5; i >= 0; i--){
    for(let j = 0; j < i; j++){
        res.innerHTML += '*';
    }
    res.innerHTML += "<br>";
}
*/
/*
for(let i = 0; i <= 5; i++){
    for(let j = 5;  j >= i; j--){
        res.innerHTML += '*';
    }
    res.innerHTML += "<br>";
}
*/

/*
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 9; j++){
        if(j % 2 === 0){
            res.innerHTML += 0;
        }else if(j % 3 === 0){
            res.innerHTML += 'x';
        }else{
            res.innerHTML += 1;
        }
    }
    res.innerHTML += "<br>"
}
*/


/*
for(let i = 0; i < 3; i++){
    res.innerHTML += i + '_';
    for(let j = 1; j < 6; j++){
        res.innerHTML += j + ' ';
    }
    res.innerHTML += ' ';
}
*/

/*
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 3; j++){
        res.innerHTML += '*' + "_";
    }
    res.innerHTML += '<br>';
}
*/

/*
let count = 0;
for(let i = 0; i < 3; i++){
    res.innerHTML +=  count++ + "<br>";
    for(let j = 0; j < 3; j++){
        res.innerHTML += '*' + '_'
    }
    res.innerHTML += "<br>";
}
*/
/*
let res = document.querySelector('.res');
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        res.innerHTML += "*"
    }
    res.innerHTML += '_';
};
*/


/*
let res = document.querySelector('.res');
let inp = document.querySelectorAll('.inp');
console.log(inp);
let btn = document.querySelector('.btn');
let valInp = ' ';
let valInp2 = ' ';
let count = 0;
for(let i = 10; i > 0; i--){
    res.innerHTML += i + " " + count++ + " ";
}
console.log(count);
*/



/*
for(let j = 0; j < inp.length; j++){
    inp[j].addEventListener('click', ()=>{
          for(let i = 0; i < inp.length; i++){
              if(inp[i].checked){
                  console.log(inp[i].value);
              }
          }
    
    })
}
*/
/*
btn.addEventListener('click', ()=>{
    for(let i = 0; i < inp.length; i++){
        res.innerHTML += i + 'inp' + ' ' + inp[i].value + '<br>';
    }
})
*/

//Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...






/*
//Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно. Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
for(let i = 1950; i < 2000; i++){
    if(i % 2 === 0){
        res.innerHTML += i + ' ';
    }
}
*/

/*
inp.addEventListener('change', ()=>{
    parceVal();
})
inp2.addEventListener('change', ()=>{
    parceVal(); 
})
parceVal = () =>{
    valInp =  Number(inp.value);
    valInp2 = Number(inp2.value);
    console.log(valInp2);
    console.log(valInp);
}
btn.addEventListener('click', ()=>{
    for(let i = valInp2; i < valInp; i++){
        res.innerHTML += i + ' ';
    }
})
*/
/*
inp.addEventListener('change', ()=>{
    parceVal();
})
inp2.addEventListener('change', ()=>{
    parceVal(); 
})
parceVal = () =>{
    valInp =  Number(inp.value);
    valInp2 = Number(inp2.value);
    console.log(valInp2);
    console.log(valInp);
}
btn.addEventListener('click', ()=>{
    for(let i = valInp2; i > valInp; i--){
        res.innerHTML += i + ' ';
    }
})
*/

/*
inp.addEventListener('change', ()=>{
    valInp =  Number(inp.value);
    console.log(typeof(valInp));
})

btn.addEventListener('click', ()=>{
    for(let i = valInp; i > -1; i--){
        res.innerHTML += i + ' ';
    }
    inp.value = ' ';
})
*/
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
/*
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 6; j++){
        res.innerHTML += '*';
    }
    res.innerHTML += '<br>';
}
*/
/*
//от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
for(let i = 1; i < 17; i++){
    if(i % 2 === 0){
        res.innerHTML +=  i + '**';
    }else{
        res.innerHTML +=  i + '*';
    }
    res.innerHTML += " ";
}
*/
/*
for(let i = 75; i > 35; i--){
    res.innerHTML += i + '_';
}
*/
/*
for(let i = 25; i > 6; i--){
    res.innerHTML += i + ' ';
}
*/
/*
for(let i = 50; i > 0; i--){
    res.innerHTML += i;
}
*/
/*
for(let i = 0; i < 451; i++){
    res.innerHTML += i + '<br>';
}
*/