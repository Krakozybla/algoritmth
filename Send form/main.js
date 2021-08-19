const form = document.querySelector('.form');
const inp = document.querySelectorAll('.inp');
let obj = {};
let allData = [];


const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });  
    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    }  
    return await response.json();
}


const pattern = {
    name: /.+/,
    secondName: /.+/,
    phone: /\d{7,15}/,
    email: /.+@.+\..+/,
}

const formValidationRule = {
    name: {
        rule: 'name',
        msg: 'Please, writte dowm a correct name',
    },
    secondName: {
        rule: 'secondName',
        msg: 'Please, writte down a correct secind name'
    },
    phone: {
        rule: 'phone',
        msg: 'Please, writte a correct phone number'
    },
    email: {
        rule: 'email',
        msg: 'Please, writte choose a correct email adress'
    },
}
form.addEventListener('submit', function(e){
    let map = false;
   inp.forEach(item=>{
        let formValidType = formValidationRule[item.name];
        let validType = formValidType.rule;
        let patterns = pattern[validType];
        let val = item.value.trim();
        let errMsg = item.nextElementSibling;

        if(patterns.test(val)){
           item.classList.remove('err');
            obj[item.name] = item.value;
            errMsg.textContent = '';
            map = true;
            item.value = '';
        }else{
            item.classList.add('err');
            obj = {};
            errMsg.textContent = formValidType.msg;
            allData = [];
        } 
   })
   if(map){
       allData.push(obj);
       const forma = new FormData()
       forma.set('info' , JSON.stringify(allData))
       sendData('http://12312312312' , forma)
   }else{
       e.preventDefault();
   }
   obj = {};
   console.log(allData);
})

