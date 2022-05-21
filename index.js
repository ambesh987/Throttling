let app= document.getElementById("app");
const expensive_function=()=>{
    console.log(app.value);
}
app.addEventListener("input", throttle(expensive_function,5000));
function throttle(expensive_function,time){
    let lastcall=0;
    return function(){
        if(Date.now()>lastcall){
            lastcall=Date.now()+time;
            expensive_function();
        }
    }
}