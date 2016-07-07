document.addEventListener("DOMContentLoaded", function(){
    var photo = document.querySelectorAll(".photo");
    var photoText = document.querySelectorAll(".photoText");
    
   
        photo[0].addEventListener("mouseover", function(event){
            photoText[0].style.visibility = "hidden"; 
        });
        photo[0].addEventListener("mouseout", function(event){
            photoText[0].style.visibility = "visible";
        });
        photo[1].addEventListener("mouseover", function(event){
            photoText[1].style.visibility = "hidden"; 
        });
        photo[1].addEventListener("mouseout", function(event){
            photoText[1].style.visibility = "visible";
        });
    
    
    
    var next = document.querySelector("#signRight");
    console.log(next)
    var prev = document.querySelector("#signLeft");
    console.log(prev)
    var img = document.querySelectorAll("#krzeslo > img");
    console.log(img);
    var index = 0;
    
    img[index].classList.remove("visible");
    
    prev.addEventListener("click", function(event){
        img[index].classList.toggle("visible");
        index = index + 1;
        img[index].classList.toggle("visible");
        if( index > img.length - 1 ) {
            index = 0;
        }
    });

});