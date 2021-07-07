let inp = null;
let dataVal = [];
let inpValue;



inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
let btnDel = document.querySelector('.btnDel');

/*
 let d20 = [4,5,6,7,8,9,10]
    console.log(d20.join("", ","));
    */

/*
let arr = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];

let smallest = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i].length < smallest.length){
        smallest = arr[i];
    }
}
console.log(smallest);
*/

/*
inp.addEventListener('change', ()=>{
    inpValue = Number(inp.value);
})

btn.addEventListener('click', ()=>{
   if(dataVal.includes(inpValue)){
       res.innerHTML = 'excist'
   }else{
       dataVal.push(inpValue);
   }
    inp.value = ' ';
    console.log(dataVal);
})

*/

/*
inp.addEventListener('change', ()=>{
    inpValue = Number(inp.value);
})
btn.addEventListener('click', ()=>{
    inp.value = " ";
    checkElem();
})

checkElem = () =>{
    let map = -1;
  dataVal.forEach(elem => {
      if(elem === inpValue){
        map = 1;
        if(map === 1){
            res.innerHTML = "Such excist";
        }
      }
  });
  if(map === -1){
      res.innerHTML = dataVal.push(inpValue);
  }
  console.log(dataVal);
}
*/

/*
Task 15
Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15 (переводим в число), а потом - если нет - добавляет его в массив.


inp.addEventListener('change', ()=>{
    inpValue = Number(inp.value);
})

btn.addEventListener('click', ()=>{
    checkElem();
})

checkElem = () =>{
    let map = -1;
    array.forEach((item, index)=>{
        if(inpValue === item){
            map = 1;
            if(map === 1){
                res.innerHTML = `Such element is already excist! His IDX is: ${index} index`
            }
        }
    })
    if(map === -1){
    res.innerHTML = `Added new value to array ${inpValue}` + " " + "His IDX:" + array.push(inpValue) + `Length of array has changed and now consist ${array.length} elements`;
    }
    
    console.log(array);
    inp.value = '';

}
*/
/*
Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.

inp.addEventListener('change', ()=>{
    inpValue =  Number(inp.value);
})
btn.addEventListener('click', ()=>{
    for(let i = inpValue; i > 0; i--){
         array.push(+1);
    }
    res.innerHTML += array;
    console.log(array);
    inp.value = " ";
})
*/
/*
ты каждую итерацию в цикле присваеваешь res.innerHtml -1. 
Даже если искомый элемент был в массиве (не последним) - то финальная итерация всеравно присвоит -1.
Сделай флаг в функции numberHasFound = -1;
и в цикле при условии, что он найден - то меняй флаг на индекс и выходи из цикла. И по окончанию перебора присваивай значение флага в res
// имитация indexOf
inp.addEventListener('change', ()=>{
    inpValue = Number(inp.value);
})

btn.addEventListener('click', ()=>{
    let map = -1;
    let idx; 
    arr.forEach((elem, index) => {
        if(inpValue === elem){
           map = 1;
           if(map === 1){
               res.innerHTML = index;
           }
        }
        if(map !== 1){
            res.innerHTML = -1;
        }
    });


    console.log(arr);
    inp.value = ' ';
})
*/

/*
let inp = null;
let dataVal = [];
let inpValue = ' ';

inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
let btnDel = document.querySelector('.btnDel');
let d1 = [33, 'best', 66, 'best'];

btn.addEventListener("click", ()=>{
    d1.unshift(inp.value);
    inp.value = " ";
    res.innerHTML +=  d1  + "<br>";
})

btnDel.addEventListener('click', ()=>{
    d1.pop();
    res.innerHTML +=  " " +  d1 + " " + "<br>";
})
*/

/*
let inp = null;
let valueInp = " ";
let allData = [];


inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');


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