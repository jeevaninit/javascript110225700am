let popupwindow=document.getElementById('popup');
let closepopup=document.getElementById('closepopup');
let btn=document.getElementById('showpopup');


btn.onclick=function(){
    popupwindow.style.display='block';
}
closepopup.onclick=function(){
    popupwindow.style.display='none';
}