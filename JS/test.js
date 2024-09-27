
const myHearts = document.querySelectorAll(".heart")

mybtn.addEventListener("click" , 

    (eo) => {
        myHearts.forEach(item => {
            item.style.animation = "fall 3s 1 linear forwards"
        });
    }
) 