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
});