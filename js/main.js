let input=document.querySelectorAll('input');
let mydiv=document.querySelector('section');
let h1=document.querySelectorAll('h1');
let btn=document.querySelectorAll('button');



    let showbackgraend= () => {
        let back=input[0].value;
        mydiv.style.background=back;
        mydiv.style.background.transition='0.5s'
        
     
        input[0].addEventListener('keyup',showbackgraend)
    }
    btn[0].addEventListener('click',showbackgraend)
    let showwith= () => {
        let width=input[1].value;
        mydiv.style.width=width+"px";
        input[1].addEventListener('keyup',showwith)
    }
   
    btn[0].addEventListener('click', showwith)
    let showhight= () => {
        let hight=input[2].value;
        mydiv.style.height=hight+"px";
        input[2].addEventListener('keyup', showhight)
    }
btn[0].addEventListener('click',showhight)

btn[1].addEventListener('click',showq =()=>{
    mydiv.style.background='white';
    mydiv.style.background.transition='1s';
    h1[0].style.color='transparent'
    h1[1].style.color='transparent'
    h1[2].style.color='transparent'
    h1[0].style.textShadow='0px 0px 0px  '
    h1[1].style.textShadow='0px 0px 0px  '
    h1[2].style.textShadow='0px 0px 0px  '
    h1[3].style.textShadow='0px 0px 0px  '
    h1[3].style.color='transparent'
    h1[0].style.transition='1s'
    h1[1].style.transition='0.7s'
    h1[2].style.transition='0.4s'
    h1[3].style.transition='0.2s'
})

btn[0].addEventListener('click',print= () =>{
    

setTimeout(() => {
    h1[0].style.transition='0.5s'
    h1[0].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
    h1[0].style.color='black'
}, 2000);

setTimeout(() => {
    h1[1].style.transition='0.7s'
    h1[1].style.color='black'
    h1[1].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
}, 4000);

setTimeout(() => {
    h1[2].style.color='black'
    h1[2].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
    h1[2].style.transition='0.9s'
}, 6000);
setTimeout(() => {
    h1[3].style.color='black'
    h1[3].style.textShadow='0px 0px 3px rgb(79, 82, 82) '
    h1[3].style.transition='1s'
}, 8000);
}




)





    







