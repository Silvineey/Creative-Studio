function jogador(){
    window.location.href="../paginas/jogador.html"
}
function novato(){
    const menu=document.querySelector(".menu")
    const novato=document.querySelector(".novato")
    menu.classList.add("oculto")
    novato.classList.remove("oculto")
    setTimeout(() => {
        menu.style.display="none"
    }, 1500);
}
function galeria(indice){
    let id=indice.value
    let saida=document.getElementById("saida")
    console.log(id)
    const img=document.querySelectorAll(".personagens img")
    img.forEach(imgs=>{
        imgs.classList.add("oculto")
        imgs.classList.remove("ativo")
    })
    img[id-1].classList.remove("oculto")
    img[id-1].classList.add("ativo")
    if(id==="1"){
        saida.textContent="Guerreiro"
    }
    else if(id==="2"){
        saida.textContent="Classe 2"
    }
    else if(id==="3"){
        saida.textContent="Classe 3"
    }
}