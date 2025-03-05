/* 
JavaScript Events and AddEventListener 
    1. Mouse Events: click, doubleclick, mouseOver, MouseOut,MouseMove
    2. Keyboard Events: keydown, keyup, keypress
    3. Focus Events: Focus,Blur, FocusIn, FocusOut, 
*/

function over_dialogbox(){
    alert("Welcome to Event Dialogbox Over...")
}

function myfun1(){
   
    var text=document.getElementById('textbox1');
    var inputvalue=text.value;
    var msg="This Msg get from Input field"=' : '+inputvalue;

    var output=document.getElementById('textbox1');
    output.innerHTML=msg; 
}