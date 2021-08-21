const form = document.querySelector('.form');
const inp = document.querySelectorAll('.inp');
let obj = {};
const pattern = {
    name: /.+/,
    secondName: /.+/,
    phone: /\d{7,15}/,
    email: /.+@.+\..+/,
}

const formRuleValidation = {
    name: {
        rule: 'name',
        msg: 'Please, wrrite a correct name',
    },
    secondName: {
        rule: 'secondName',
        msg: 'Please, writte a correct surename',
    },
    phone: {
        rule: 'phone',
        msg: 'Please, writte a correct phone number',
    },
    email: {
        rule: 'email',
        msg: 'Please, writte a correct email address',
    }
}

function req(e){
    e.preventDefault();
    inp.forEach(item=>{
        
        let formValid = formRuleValidation[item.name];
        let vType = formValid.rule;
        let patterns = pattern[vType];
        let errMsg = item.nextElementSibling;
        let val = item.value.trim();

        if(patterns.test(val)){
            item.classList.remove('err');
            obj[item.name] = item.value;
            item.value = '';
        }else{
            item.classList.add('err');
            obj = {};
            errMsg.textContent = formValid.msg;
        }
    })

    let json = JSON.stringify(obj);
    console.log(json);

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/people');
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');
    request.send(json);
    request.addEventListener('load', function(){
        if(request.status == 200){
            let data = JSON.parse(request.response);
            console.log(data);
        }else{
            console.error('Something went wrong');
        }
    })
}
form.addEventListener('submit', (e)=>req(e));





