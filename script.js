const display=document.querySelector(".display");

const equals=document.querySelector(".equals");
const clear=document.querySelector(".clear");

let appendToDisplay=(e)=>{
    display.value+=e;
}

let clearDisplay=()=>{
    display.value='';
}

let calculate=()=>{
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}