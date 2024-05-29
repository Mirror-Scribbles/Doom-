const $addBackGround = document.querySelector('.add');
const $clearBackGround = document.querySelector('.clear');

const d = document;

d.addEventListener('click', (e) =>{
    if (e.target == $addBackGround){
        console.log('you have click added a background')
    }else if (e.target == $clearBackGround){
        console.log('you have  removed the background')
    }else{
        return
    }
});



