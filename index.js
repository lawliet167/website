let backtotop=document.querySelector(".up");

backtotop.addEventListener("click",()=>{
    window.scrollTo(0,0);
    document.querySelector(".disp").style.opacity=1;

})

let slider=document.querySelector(".slider");
let previous=document.querySelector(".previous");
let next=document.querySelector(".next");

next.addEventListener("click",()=>{
        let query=window.matchMedia("(max-width:778px)");
        
        if(query.matches){
            slider.scrollLeft+=800;
            slider.style.scrollbehavior="smooth";    
        }
            else{
                slider.scrollLeft+=1360;
                slider.style.scrollbehavior="smooth";
            }   
            query= window.matchMedia("(max-width:375px)");
              
})
previous.addEventListener("click",()=>{
    let query=window.matchMedia("(max-width:778px)");
    if(query.matches){
        slider.scrollLeft-=800;
        slider.style.scrollbehavior="smooth";
    }
    else{
        slider.scrollLeft-=1360;
        slider.style.scrollbehavior="smooth";
    }
   
})
 
let bars=document.querySelector(".fa-bars");
let navlist=document.querySelector(".nav-list");
let cross=document.querySelector(".fa-xmark");


bars.addEventListener("click",()=>{
        navlist.style.transform="translateX(0%)"
        navlist.style.height="1000px";
        navlist.style.position="sticky";
        bars.style.opacity=0;
        cross.style.opacity=1;
   })
cross.addEventListener("click",()=>{
        navlist.style.transform="translateX(-110%)"
        cross.style.opacity=0;
        bars.style.opacity=1;    
})