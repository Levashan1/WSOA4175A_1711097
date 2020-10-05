//navigation for desktop

//calling all of the classes that have a drop-down tag
const parent = document.querySelectorAll(".drop-down");
//referencing the nav tag
const desktopNav = document.querySelector(".desktop-nav");

for(let i = 0; i < parent.length; i++){
   
    parent[i].addEventListener("click", function(){
        let ddStatus = parent[i].childNodes[2].style.display;

        if(ddStatus === "flex"){
            parent[i].childNodes[2].style.display = "none";
        }else{
            closeAll(parent);
            parent[i].childNodes[2].style.display = "flex";
        }
    })
}
function closeAll(arg) {
    for(let i = 0; i < arg.length; i++){
        arg[i].childNodes[2].style.display = "none";
    }
}
document.addEventListener("click",function(e){
    if(!desktopNav.contains(e.target)){
        closeAll(parent);
    }
})



//mobile version

const mParent = document.querySelectorAll(".mobile-nav .m-drop-down");
const mNav = document.querySelector(".mobile-nav");
const toggleNav = document.getElementById("toggle-nav");

for(let i = 0; i < mParent.length; i++){
   
    mParent[i].addEventListener("click", function(){
        let ddStatus = mParent[i].childNodes[2].style.display;

        if(ddStatus === "block"){
            mParent[i].childNodes[2].style.display = "none";
        }else{
            closeAll(mParent);
            mParent[i].childNodes[2].style.display = "block";
        }
    })
}
toggleNav.addEventListener("click",function(){
    mNav.classList.toggle("open");
    toggleNav.classList.toggle("open");
})

