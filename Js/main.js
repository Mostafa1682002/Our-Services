let them=document.querySelector("#thems");

them.onclick=function(){
    them.classList.toggle("fa-sun");
    if(them.classList.contains("fa-sun")){
        document.body.classList.add("active")
    }else{
        document.body.classList.remove("active")
    }
}
