
//Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1, которая при нажатии читает i-1 и добавляем его в массив. После чего выводит массив в .out-1. Поскольку мы будем выводить массив d1 неоднократно, то давайте вывод массива сделаем отдельной функцией, showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.
//let inp;
//let valueInp
/*
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');
inp = document.querySelector('.inp');

inp.addEventListener('change', ()=>{
     valueInp = inp.value;
});
let DataArray = [];

btn.addEventListener('click', ()=>{
    onBtn();
})
onBtn = () =>{
    DataArray.push({
        text: valueInp,
    })
    inp.value = '';
    valueInp = '';
    render();
}

  render = () =>{
    let container = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    DataArray.forEach((elem, index)=>{
           let box = document.createElement('div');
            box.className = "box";
            box.innerText = elem.text;
            container.appendChild(box);
            box.addEventListener("click", ()=>{
                DataArray.splice(index, 1);
                render();
            })
    })
}
*/


/*
for(let i = 0; i < div.length; i++){
    div[i].addEventListener('click', ()=>{
         res.innerHTML += "You choosed" + " " + div[i].dataset.num + "<br>";
    })
}
*/
/*
let cont = document.querySelector('.insert-elem');
let btn = document.querySelector('.btn');
let res = document.querySelector('.res');

btn.addEventListener('click', ()=>{
    render();
})
render = () =>{
    let div = document.createElement('div');
    div.className = 'elem';
    div.textContent = 12;
    div.classList.toggle('.elem');
    div.addEventListener('click', () =>{
        div.textContent--;
        if(div.textContent == 0){
            div.textContent = 12;
        }
    })
    cont.replaceWith(div);
}
*/
/* //very important
f1 = () =>{
    let val1 =  Number(inp1.value);
    let val2 = Number(inp2.value);
    if(val1 > val2){
        while(val1 > val2){
            val1--;
            res.innerHTML += val1;
        }
    }else{
        while(val2 > val1){
            val2--;
            res.innerHTML += `<br> Count from ${val2} to ${val1} is: ${val2}<br>`;
        }
    }
    inp1.value = "";
    inp2.value = "";
}
*/
/*
for(let i = 0; i < 6; i++){
    for(let k = 0; k < i; k++){
        res.innerHTML += "*";
    }
    res.innerHTML += "<br>"
}

for(let i = 0; i < 6; i++){
    for(let k = 6; k > i; k--){
        res.innerHTML += "*";
    }
    res.innerHTML += "<br>";
}
*/
/*
let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let allData = [];
let inpVal = '';
btn.addEventListener('click', ()=>{
    inpVal = inp.value;
    
    allData.push({
        text: inpVal
    })

    localStorage.setItem('data', JSON.stringify(allData));
})
*/

let data = [
    Alex = {
        'name': 'Alex',
        'math': 1,
        'litaratura': 1
    },
    Vlad = {
        'name': 'Vlad',
        'math': 5,
        'litaratura': 2
    },
    Pavel = {
        'name': 'Pavel',
        'math': 3,
        'litaratura': 5
    },
    Maria = {
        'name': 'Maria',
        'math': 2,
        'litaratura': 1
    },
]

let inp = document.querySelector('.inp');
let  btn = document.querySelector('.btn');
let inpVal = '';

btn.addEventListener('click', ()=>{
    inpVal = inp.value;
    findStudent(inpVal);
    inp.value = ' ';
})

const findStudent = val =>{
    let cont = document.querySelector('.container');
    cont.innerHTML = '';
    let map = false;
    for(let key in data){
       if(data[key].name == val){
            map = false
           let li = document.createElement('li');
           li.textContent = `Name: ${data[key].name}`
           let math = document.createElement('li');
           math.textContent = `MAth: ${data[key].math}`
           let liter = document.createElement('li');
           liter.textContent = `Literatura ${data[key].litaratura}`;
           cont.appendChild(li);
           cont.appendChild(math);
           cont.appendChild(liter);
       }else{
           map = true;
       }
    }
    if(map){
        let result = document.querySelector('.res');
        let res = document.createElement('li');
        res.textContent = 'Such pupils is not find in dataBase'
        result.appendChild(res);
    }
}