window.addEventListener('load', function(){
    const form = document.querySelector('form')
    const inp = document.querySelectorAll('.inp');
    let formData;
    let values;


    async function sendForm(e){
        e.preventDefault();

        let error = validForm();
        if(error == 0){
            let formData = new FormData(form);
            let values = Object.fromEntries(formData.entries());
            let json = JSON.stringify(values);
            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:3000/visitors');
            request.setRequestHeader('content-type', 'application/json; charset=utf-8');
            request.send(json);
            request.addEventListener('load', function(){
                if(request.status == 201){
                    let data = JSON.parse(request.response);
                    console.log(data);
                    console.log('Yeah, form is sent, response is loaded!');
                    inp.forEach(elem=>{
                        elem.value = '';
                    })
                }else{
                    console.log('Something went wrong!');
                }
            })
        }else{
            console.log('something went wrong!');
        }
    }

    validForm = () =>{
        let err = 0;


        let pattern = {
            name: /.+/,
            surename: /.+/,
            phone: /\d{7,15}/,
        }
        
        let formValidationRule = {
            name : {
                rule: 'name',
                msg: 'Please, write down a correct name',
            },
            surename : {
                rule: 'surename',
                msg: 'Please, writte down a correct Surename',
            },
            phone : {
                rule: 'phone',
                msg: 'Please, writte down a correct phone number',
            },
        }
            let map = false;
        inp.forEach(item=>{
            let formRules = formValidationRule[item.name];
            let vType = formRules.rule;
            let patterns = pattern[vType];
            let errMSg = item.nextElementSibling;
            let val = item.value.trim();
        
            if(patterns.test(val)){
                errMSg.textContent = '';
                map = true;
            }else{
                errMSg.textContent = formRules.msg;
                err++;
            }
        })

        return err;
    }

    form.addEventListener('submit', (e) => sendForm(e));


})




/* e.preventDefault();
        
let pattern = {
    name: /.+/,
    surename: /.+/,
    phone: /\d{7,15}/,
}

let formValidationRule = {
    name : {
        rule: 'name',
        msg: 'Please, write down a correct name',
    },
    surename : {
        rule: 'surename',
        msg: 'Please, writte down a correct Surename',
    },
    phone : {
        rule: 'phone',
        msg: 'Please, writte down a correct phone number',
    },
}
    let map = false;
inp.forEach(item=>{
    let formRules = formValidationRule[item.name];
    let vType = formRules.rule;
    let patterns = pattern[vType];
    let errMSg = item.nextElementSibling;
    let val = item.value.trim();

    if(patterns.test(val)){
        errMSg.textContent = '';
        map = true;
    }else{
        errMSg.textContent = formRules.msg;
        formData = '';
    }
}) */

/* if(map){
    formData = new FormData(form);
    values = Object.fromEntries(formData.entries());
    let json = JSON.stringify(values);
    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/visitors');
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');
    request.send(json);

    request.addEventListener('load', function(){
        if(request.status == 200){
            let data = JSON.parse(request.response);
            console.log(`Yeah, form is sent, response is loaded`);
        }else{
            console.log('Something went wrong!');
        }  
    })
        }    */