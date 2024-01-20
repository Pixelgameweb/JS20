let phone =  document.querySelector("#phone");

//event - содержить иформацию о событии
//event.type - тип события
//event.key - нажатый на клавиатуре символ
//event.

phone.addEventListener("keydown" , (event) =>{
    let isDigit = false;
    let isDash = false;
    let isControl = false;


if(event.key >= 0 && event.key <= 9 && event.key != " ") {
isDigit = True;
}

if(event.key == "-") {
    isDash = true;
}

if(event.key == "Backspace" || event.key == "ArrowRight" || event.key == "ArrowLeft"){
    isControl = true;
}

if (!isDigit && !isDash && !isControl){
    event.preventDefault( );
}
});


