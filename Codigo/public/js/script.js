
window.addEventListener("load",()=>{
let carrito = []
let botonCarrito=document.querySelectorAll('#agregar-carrito')
let lupa = document.querySelector('.lupa')
let botonOculto = document.querySelector('.buscarOculto')
console.log(botonCarrito)
for (let i = 0; i < botonCarrito.length; i++) {
    botonCarrito[i].addEventListener("click",function(event){
        event.preventDefault()
        return swal("Perfecto!","El producto ha sido agregado al carrito","success")
    })  
}


lupa.addEventListener("click",function(event){
    event.preventDefault()
    lupa.classList.toggle('lupa') 
    lupa.classList.add('buscarOculto')
    botonOculto.classList.add('lupa')
    botonOculto.classList.remove('buscarOculto')   
})
})