let displaycount= document.querySelectorAll(".absection2div");
let interval=2000;

displaycount.forEach(displaycount=>{
    let startvalue=0;
    let endvalue=parseInt(displaycount.getAttribute("data-val"));
   
    let duration=Math.floor(interval/endvalue);
    let countewr  =setInterval(function(){
        startvalue+=1;
        displaycount.textContent=startvalue+"+";
        
        if(startvalue==endvalue)
        clearInterval(countewr)
    }, duration);
})