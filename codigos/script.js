
function jogador(){
    window.location.href="../paginas/jogador.html"
}
function novato(){
    const menu=document.querySelector(".menu")
    const novato=document.querySelectorAll(".novato")
    menu.classList.add("oculto")
    setTimeout(() => {
        menu.style.display="none"
    }, 1200);
    novato.forEach(novatos=>{
        novatos.classList.remove("oculto")
        novatos.classList.add("ativo")
    })
}
function galeria(indice){
    let id=indice.value
    console.log(id)
    const img=document.querySelectorAll(".personagens img")
    img.forEach(imgs=>{
        imgs.classList.add("oculto")
        imgs.classList.remove("ativo")
    })
    img[id-1].classList.remove("oculto")
    img[id-1].classList.add("ativo")
}


const classes={
    iniciante:{
        fisicas:["Guerreiro", "Arqueiro", "Ladino", "Bárbaro", "Caçador","Monge"],
        magicas:["Feiticeiro","Clérigo","Druída"],
        hibrico:["Suporte","Paladino","Bardo"]
    }
}

function rendernovato(){
    const classesf=classes.iniciante.fisicas
    const classesm=classes.iniciante.magicas
    const classesh=classes.iniciante.magicas
    classesf.forEach((classes,i)=>{
        const div=document.getElementById("fisicas");
        const selecao=document.createElement("button");
        selecao.innerHTML=classes;
        selecao.value=i+1;
        selecao.onmouseover=()=>galeria(selecao);
        div.appendChild(selecao);;
    })
    classesm.forEach((classes,i)=>{
        const div=document.getElementById("magicas");
        const selecao=document.createElement("button");
        selecao.innerHTML=classes;
        selecao.value=i+1;
        selecao.onmouseover=()=>galeria(selecao)
        div.appendChild(selecao)
    })    
}
rendernovato()