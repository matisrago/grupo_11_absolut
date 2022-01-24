window.addEventListener('load',function(){
    let campoEmail = document.querySelector("#email")
    let campoPassword = document.querySelector("#password")

    campoEmail.addEventListener("blur",function(){
        if(campoEmail.value.length > 1){
            errorEmail.style.display = "none"
        }else{
        
            errorEmail.style.display = "block"
            
        }
    })

    campoPassword.addEventListener("blur",function(){
        if(campoPassword.value.length >= 8){
            errorPassword.style.display = "none"
        }else{
        
            errorPassword.style.display = "block"
            
        }
    })

})