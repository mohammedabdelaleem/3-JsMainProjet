
// 9-input-validation


//when click on => create Account Button 
createAccount.addEventListener("click" , (eo) => {
    document.getElementsByClassName("parent-form")[0].style.display = "flex";
  setTimeout(() => {  // zoom in 
    document.getElementsByClassName("my-form")[0].style.transform = "scale(1)";
  }, 50);
   
})

//when click on => close X
cross.addEventListener("click" , (eo) => {
   // zoom out
    document.getElementsByClassName("my-form")[0].style.transform = "scale(0)";


setTimeout(() => {
    document.getElementsByClassName("parent-form")[0].style.display = "none"
    
}, 280);
})


    // _*_  Activate Register Button
    
    const activateRegisterButton = () => {
         // contains => super
        if( username.classList.contains("success") &&  email.classList.contains("success") && psw.classList.contains("success") && repeatPsw.classList.contains("success") ){
            register.removeAttribute("disabled");
        }
        else {
            register.setAttribute("disabled", "");
        }
    }



const checkValidation = (target, regExp) => {

    if(regExp.test(target.value)){
        target.classList.add("success")
        target.parentElement.getElementsByClassName("icon-check-circle")[0].style.opacity = "1"
        target.parentElement.getElementsByTagName("p")[0].classList.remove("active")
    
       }else
       {
        target.classList.remove("success")
        target.classList.add("error")
        target.parentElement.getElementsByClassName("icon-check-circle")[0].style.opacity = "0"
        target.parentElement.getElementsByTagName("p")[0].classList.add("active")
       }
}


// 1- validate username
username.addEventListener("keyup", (eo)=> {

const regUsername  = /[a-z]{3}/
  
checkValidation(eo.target , regUsername)

activateRegisterButton()
})


// 2- validate email
email.addEventListener("keyup", (eo)=> {
const regemail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

checkValidation(eo.target , regemail)

activateRegisterButton()
})


// 3- validate password
psw.addEventListener("keyup", (eo)=> {
    const regpassword  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    checkValidation(eo.target , regpassword)   
    activateRegisterButton()
    })
    

// 4- validate repeat password
    
    // check Password
    const confirmPassword = () => {
        if( psw.value === repeatPsw.value && psw.value!="") {
            repeatPsw.parentElement.getElementsByClassName("icon-check-circle")[0].style.opacity = "1"
            repeatPsw.parentElement.getElementsByTagName("p")[0].classList.remove("active")

        
            return true
           }else
           {
            repeatPsw.parentElement.getElementsByClassName("icon-check-circle")[0].style.opacity = "0"
            repeatPsw.parentElement.getElementsByTagName("p")[0].classList.add("active")
            return false

           }
    }
 


repeatPsw.addEventListener("keyup", (eo)=> {
    if( confirmPassword()   )
        {
            eo.target.classList.add("success")
            activateRegisterButton() 
        }

    else
   {
    eo.target.classList.remove("success")
    eo.target.classList.add("error")
    activateRegisterButton() 
   }

   
    })
    

































