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
    window.location.href="../paginas/novato.html";
}

function iniciante(){
    const menu=document.querySelector(".menu")
    const novatos=document.querySelector(".novato")
    menu.classList.add("off")
    setTimeout(() => {
        menu.style.display="none"
    }, 200);
    setTimeout(() => {
        novatos.classList.remove("off")
    }, 300);

}
function evento(e){
    const valor=e.target.dataset.value
    const fisicasn=classes.iniciante.fisicas
    const magicasn=classes.iniciante.magicas
    const hibridasn=classes.iniciante.hibrido
    const divfisica=document.getElementById("fisica")
    const divmagica=document.getElementById("magica")
    const divhibrida=document.getElementById("hibrida")
    const divs=[divfisica,divmagica,divhibrida]
    divs.forEach(div=>{
        div.innerHTML=""
        div.classList.remove("on")
        div.classList.add("off")
    })
    console.log(valor)
    if(valor==="1"){
        divfisica.classList.add("on")
        divfisica.classList.remove("off")
        fisicasn.forEach(classesfn=>{
            const selecao=document.createElement("button")
            selecao.innerHTML=classesfn
            divfisica.appendChild(selecao)
        });
    }
    if(valor==="2"){
        divmagica.classList.add("on")
        divmagica.classList.remove("off")
        magicasn.forEach(classesmn=>{
            const selecao=document.createElement("button")
            selecao.innerHTML=classesmn
            divmagica.appendChild(selecao)
        });
    }
        if(valor==="3"){
        divhibrida.classList.add("on")
        divhibrida.classList.remove("off")
        hibridasn.forEach(classeshn=>{
            const selecao=document.createElement("button")
            selecao.innerHTML=classeshn
            divhibrida.appendChild(selecao)
        });
    }
}
