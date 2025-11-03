const menu=document.querySelector(".opcoes")
function login(){
    console.log("clique")
    menu.classList.remove("oculto")
    menu.classList.add("ativo")
}
function sumir(){
    console.log("saiu")
    menu.classList.remove("ativo")
    menu.classList.add("oculto")
}

function abrirlogin(){
    window.open(
        "../paginas/login.html",
        "loginPopup",
        "width=600, height=600, top=100, left=50, resizable=yes"
    )
}


function logar(){
    let entrada1=document.getElementById("email")
    let entrada2=document.getElementById("senha")
    let email=entrada1.value
    let senha=entrada2.value
    if(senha.length<=4){
        alert("A senha precisa ter mais que 4 caracteres")
        return
    }
}