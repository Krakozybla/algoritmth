window.addEventListener('DOMContentLoaded', function(){
    const menu = document.querySelector('.menu');
    let links = document.querySelectorAll('a');
    let btn = document.querySelector('.wrapper');
    let scrollTimeOut;
    const form = document.querySelector('.form');

    console.log(window.location.hash);

    window.addEventListener('scroll', function(){
        this.clearTimeout(scrollTimeOut);
        scrollTimeOut = setTimeout(onScroll, 100);
    })


    btn.addEventListener('click', function(e){
        if(e.target.classList.contains('btn-up')){
            scrollTo({top: 0, behavior: "smooth"});
        }
    })

    menu.addEventListener('click', function(e){
        let link = e.target;

        if(link.classList.contains('link__content')){
            e.preventDefault();
            scrollToTarget(link);
        }
    })


    function scrollToTarget(link){
        let target = document.querySelector(link.hash);

        let pos = target.offsetTop -60;

        scrollTo({
            top: pos,
            behavior: "smooth",
        })
    }


    function onScroll(){
        let pos = window.pageYOffset;

        if(pos > window.innerHeight){
            btn.classList.remove('hide');
        }else{
            btn.classList.add('hide');
        }


        links.forEach(item=>{
            let target = document.querySelector(item.hash);
            if((pos + window.innerHeight / 2) >  target.offsetTop){
                menu.querySelector('.active-link').classList.remove('active-link');
                item.classList.add('active-link');
            }
        })
    }



    function sendForm(e){
        e.preventDefault();

        let formData = new FormData(form);
        let values = Object.fromEntries(formData.entries());
        let json = JSON.stringify(values);
        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/custumers');
        request.setRequestHeader('content-type', 'application/json; charset=utf-8');
        request.send(json);
        form.reset();
        request.addEventListener('load', function(){
            if(request.status === 201){
                alert('Yeah, form is sent, response is loaded');
            }else{
                alert('Something went wrong');
            }
        })
    }




    form.addEventListener('submit', (e) => sendForm(e));


})



/* window.addEventListener('DOMContentLoaded', function(){

const menu = document.querySelector('.menu');
let links = document.querySelectorAll('a');
let scrollTimeOut;

window.addEventListener('scroll', function(){
    clearTimeout(scrollTimeOut);
    scrollTimeOut = setTimeout(onScroll, 1000);
})


menu.addEventListener('click', function(e){

    let link = e.target;

    if(link.classList.contains('link__content')){
        e.preventDefault('');

        scrollToTarget(link.hash);
    }
})

    function scrollToTarget(id){
        let target = document.querySelector(id);
        let pos = target.offsetTop -70;
            scrollTo({
                top: pos,
                behavior: "smooth",
            })
    }

function onScroll(){
    let pos = window.pageYOffset;


    links.forEach(item=>{
        let target = document.querySelector(item.hash);
        

        if((pos + window.innerHeight / 2) > target.offsetTop){
            menu.querySelector('.active-link').classList.remove('active-link');
            item.classList.add('active-link');
        }
    })
} })*/





/* 
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('a');
    console.log(links);

    window.addEventListener('scroll', function(){
        let scrollTimeOut;
        clearTimeout(scrollTimeOut);
        scrollTimeOut = setTimeout(onScroll, 1000);
    })

    menu.addEventListener('click', function(e){
        let link = e.target;
        if(link.classList.contains('link__content')){
            e.preventDefault(e);
            scrollToTarget(link.hash);
        }
    })


    if(location.hash !== null){
        scrollToTarget(location.hash);
    }

    function scrollToTarget(id){
        let target = document.querySelector(id);
        console.log(target);

        if(target !== null){
            let pos = target.offsetTop - 100;

            window.scrollTo({
                top: pos,
                behavior: 'smooth',
            })
        }
    }


    function onScroll(){
        let pos = window.pageYOffset;

        for(let i = links.length -1; i >= 0; i--){
            let link = links[i];
            let target = document.querySelector(link.hash);

            if((pos + window.innerHeight / 2) > target.offsetTop){
                menu.querySelector('.active-link').classList.remove('active-link');
                link.classList.add('active-link');
                break;
            }
        }
    } }) */


