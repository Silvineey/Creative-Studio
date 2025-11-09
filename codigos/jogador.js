const classes={
    iniciante:{
        fisicas:["Guerreiro", "Arqueiro", "Ladino", "Bárbaro", "Caçador","Monge"],
        magicas:["Feiticeiro","Clérigo","Druída"],
        hibrido:["Suporte","Paladino","Bardo"],
    },
    experiente:{
        fisicas:["Guerreiro", "Arqueiro", "Bárbaro", "Cavaleiro", "Assassino", "Caçador", "Samurai", "Pirata", "Mercenário", "Gladiador", "Sentinela", "Explorador", "Andarilho"],
        magicas:["Mago", "Clérigo", "Feiticeiro", "Druída", "Necromante", "Xamã", "Alquimista", "psíquico", "Sábio", "Ilusionista", "Sacerdote", "Bruxo", "Oráculo", "Runísta"],
        hibrido:["Paladino", "Templário", "Engenheiro", "Artífice", "Guardião", "Autômato", "Mecânico","Canalizador", "Vampiro", "Licantropo"],
    },
    casual:{
        fisicas:["Cavaleiro", "Assassino", "Gladiador", "Sentinela", "Samurai", "Mercenário", "Caçador", "Monge", "Espadachim", "Berserker"],
        magicas:["Necromante", "Xamã", "Arcanista", "Ilusionista", "Feiticeiro", "Oráculo", "Bruxo", "Elementalista"],
        hibrido:["Templário", "Alquimista"],
    }

}

function jogador(){
    window.location.href="../paginas/jogador.html";
}
function novato(){
    const menu=document.querySelector(".menu");
    const novato=document.querySelectorAll(".novato");
    menu.classList.add("oculto");
    menu.style.display="none";
    setTimeout(() => {
        rendernovato()
        novato.forEach(novatos=>{
            novatos.classList.remove("oculto");
            novatos.classList.add("ativo");
        })
    }, 500);
}

function casual(){
    const menu=document.querySelector(".menu");
    const casual=document.querySelectorAll(".casual")
    menu.classList.add("oculto")
    menu.style.display="none"
    setTimeout(() => {
        rendercasual()
        casual.forEach(casuais=>{
            casuais.classList.remove("oculto")
            casuais.classList.add("ativo")
        })
    }, 500);
}
function experiente(){
    const menu=document.querySelector(".menu");
    const experiente=document.querySelectorAll(".experiente")
    menu.classList.add("oculto")
    menu.style.display="none"
    setTimeout(() => {
        renderexperiente()
        experiente.forEach(experientes=>{
            experientes.classList.remove("oculto")
            experientes.classList.add("ativo")
        })
    }, 500);
}



function rendernovato(){
    const classesf=classes.iniciante.fisicas;
    const classesm=classes.iniciante.magicas;
    const classesh=classes.iniciante.hibrido;
    const divf=document.getElementById("nfisicas");
    const divm=document.getElementById("nmagicas");
    const divh=document.getElementById("nhibridas");

    classesf.forEach((classesf,i)=>{
        const selecao=document.createElement("button");
        selecao.innerHTML=classesf;
        selecao.value=i+1;
        divf.appendChild(selecao);
    });
    classesm.forEach((classesm,i)=>{
        const selecao=document.createElement("button");
        selecao.innerHTML=classesm;
        selecao.value=i+7;
        divm.appendChild(selecao);
    });
    classesh.forEach((classesh,i)=>{
        const selecao=document.createElement("button");
        selecao.innerHTML=classesh;
        selecao.value=i+10;
        divh.appendChild(selecao);
    });
}

function rendercasual(){
    const classef=classes.casual.fisicas;
    const classesm=classes.casual.magicas;
    const classesh=classes.casual.hibrido;
    const divf=document.getElementById("cfisica");
    const divm=document.getElementById("cmagica");
    const divh=document.getElementById("chibrida");
    const novato=document.querySelectorAll(".novato");
    novato.forEach(n=>{
        n.style.display="none"
    })
    classef.forEach((classesf,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesf
        selecao.value=i+1
        divf.appendChild(selecao)
    });
    classesm.forEach((classesm,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesm
        selecao.value=i+10
        divm.appendChild(selecao)
    });
    classesh.forEach((classesh,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesh
        selecao.value=i+18
        divh.appendChild(selecao)
    });
}
function renderexperiente(){
    const classef=classes.experiente.fisicas;
    const classesm=classes.experiente.magicas;
    const classesh=classes.experiente.hibrido;
    const divf=document.getElementById("efisica");
    const divm=document.getElementById("emagica");
    const divh=document.getElementById("ehibrida");
    const novato=document.querySelectorAll(".novato");
    const casual=document.querySelectorAll(".casual")
    novato.forEach(n=>{
        n.style.display="none"
    })
    casual.forEach(c=>{
        c.style.display="none"
    })
    classef.forEach((classesf,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesf
        selecao.value=i+1
        divf.appendChild(selecao)
    });
    classesm.forEach((classesm,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesm
        selecao.value=i+10
        divm.appendChild(selecao)
    });
    classesh.forEach((classesh,i)=>{
        const selecao=document.createElement("button")
        selecao.innerHTML=classesh
        selecao.value=i+18
        divh.appendChild(selecao)
    });
}



//function galeria(indice){
//let id=indice.value;
//console.log(id);
//    const img=document.querySelectorAll(".personagens img");
//    img.forEach(imgs=>{
//        imgs.classList.add("oculto");
//        imgs.classList.remove("ativo");
//    })
//    img[id-1].classList.remove("oculto");
//    img[id-1].classList.add("ativo");
//}