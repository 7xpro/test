const headicon=document.getElementsByClassName("header-icon")
const headlist=document.getElementsByClassName("header-list")

headicon.addEventListener=("click",function(){
    headlist.forEach(element => {
    element.style.display="block";    
    });
    console.log("click")
    
})

headicon.addEventListener=("click",function(){
    headlist.forEach(element => {
    element.style.display="none";    
    });
    console.log("click")
    
})