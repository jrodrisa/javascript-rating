
const hearts = document.querySelector(".container").children;
let index;


for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("mouseover", function() {
        for (let j = 0; j < hearts.length; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart-outline");
        }
        for (let j = 0; j <= i; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart");      
        }        
    })
    hearts[i].addEventListener("click", function() {
        index = i;
    })
    hearts[i].addEventListener("mouseout", function() {
        for (let j = 0; j < hearts.length; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart-outline");                     
        }
        for (let j = 0; j <= index; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart");          
        }
    })   
}

document.addEventListener("click", function (event) {
    if (!event.target.closest(".container")){
        for (let j = 0; j < hearts.length; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart-outline");                     
        }
        for (let j = 0; j <= index; j++) {
            hearts[j].removeAttribute("name");
            hearts[j].setAttribute("name", "heart-outline");          
        }
        index = -1;
    }
}, false);


