function chcm(){
    let domchanges=document.getElementById('dchanges');

    domchanges.style.background='lightgreen';
    domchanges.style.width='100%';
    domchanges.style.color='yellow';
    domchanges.style.fontSize='30px';
    domchanges.style.textAlign='center';
}

let buttonid=document.getElementById('chc');
    buttonid.addEventListener('click',function(){
        let domchanges=document.getElementById('dchanges');
        domchanges.style.display='none';
    });


function myfun(){
    var shc=document.getElementById('content');
    shc.classList.toggle('mystyle');
}

let btn=document.getElementById('toggle');
btn.addEventListener('click',myfun);


let popupbtn=document.getElementById('popup');
popupbtn.addEventListener('click',function(){
    var shc=document.querySelector('.popup');
    shc.style.display='block';
})