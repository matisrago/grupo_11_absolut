window.addEventListener('load',function(){
        var campoName = document.querySelector("input#name");
        let campoDescription = document.querySelector("input#description")
        var errorNombre = document.querySelector("#errorNombre")
        var errorDescripcion = document.querySelector("#errorDescripcion")
        campoName.addEventListener("blur",function(){
            if(campoName.value.length < 5){
                errorNombre.style.display = "block"
            }else{
            
                errorNombre.style.display = "none"
                
            }
        })
        campoDescription.addEventListener("blur",function(){
            if(campoDescription.value.length <20){
                errorDescripcion.style.display = "block"

            }else{
                errorDescripcion.style.display = "none"
            }
            

        })

})
    
  

       