
window.addEventListener("load",function(){
let name = document.querySelector("#fName")
let surname = document.querySelector("#lName")
let password = document.querySelector("#password")
let  imagen = document.querySelector("#file")

name.addEventListener("blur",function(){
    if(name.value.length <2){
        errorName.style.display = "block"
    }else{
        errorName.style.display = "none"
    }
})

surname.addEventListener("blur",function(){
    if(surname.value.length <2){
        errorApellido.style.display = "block"
    }else{
        errorApellido.style.display = "none"
    }
})

password.addEventListener("blur",function(){
    if(password.value.length <8){
        errorPassword.style.display = "block"
    }else{
        errorPassword.style.display = "none"
    }
})

})