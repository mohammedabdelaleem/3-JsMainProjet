

/* 10 - TOOTstrap*/ 

// get all copy buttons 
const copyButtons = document.querySelectorAll("#copy")
console.log(copyButtons);

copyButtons.forEach(item => {
    
item.addEventListener("click" , 

    (eo) => {
        
        navigator.clipboard.writeText(item.nextElementSibling.getElementsByTagName("code")[0].innerText)

        item.innerText = "copied!"

        setTimeout(() => {
        item.innerText = "copy"
            
        }, 2000);
    }
)

});

























