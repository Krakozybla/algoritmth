let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let valKey = ' ';
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

//// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.


btn.addEventListener('click', ()=>{
    let res = ' ';

    for(let key in arr){
        if(arr[key].age < 30){
            res +=  arr[key].name + ' ';
        }
    }

    document.querySelector('.res').innerHTML = res;
})



/*
let arr = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

inp.addEventListener('change', ()=>{
    valKey = Number(inp.value);
})

btn.addEventListener('click', ()=>{
    let result = '';
    let map = 0;
    for(let key in arr){
        if(typeof(arr[key]) === "number"){
           map += arr[key];
           result = map;
        }
    }
    document.querySelector('.res').innerHTML = result;
})
*/
/*
btn.addEventListener('click', ()=>{
    let result = '';
    let map = -1;
    for(let key in arr){
        if(arr[key] === valKey){
            map = 1;
            if(map){
              delete arr[key];
            }
        }
    }
    if(map === -1){
        result = 'noooo';
    }
    for(let keys in arr){
        result += `${keys} : ${arr[keys]}<br>` 
    }
    document.querySelector('.res').innerHTML = result;
    console.log(arr);
})
*/

/*
btn.addEventListener('click', ()=>{
    let result = '';
    let map = -1;

    for(let key in arr){
        if(key === valKey){
            map = 1;
            if(map){
                result = arr[key];
            }
        }
    }
    if(map === -1){
        result = 'no';
    }
    document.querySelector('.res').innerHTML = result;
})
*/

/*
btn.addEventListener('click', ()=>{
    let result = '';
    let map = -1;
    for(let key in arr){
      if(key === valKey){
          map = 1;
          if(map === 1){
              result = 'older'
          }
      }
    } 
    if(map === -1){
        result = 'new';
    }
    
    document.querySelector('.res').innerHTML = result;
})
*/

