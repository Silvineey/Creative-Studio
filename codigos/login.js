function rendermenu(){
  console.log("passou o mouse")
  const menu=document.querySelector(".opcoes")
  menu.classList.remove("oculto")
  menu.classList.add("ativo")
  menu.style.display="inline-block"
}
function sumir(){
  const menu=document.querySelector(".opcoes")
  setTimeout(() => {
    menu.classList.remove("ativo")
    menu.classList.add("oculto")
  }, 3000);
}
function renderlogin(){
  const formulario=document.querySelector(".body")
  formulario.classList.remove("oculto")
  formulario.classList.add("ativo")
}
window.rendermenu = rendermenu;
window.sumir = sumir;
window.renderlogin = renderlogin;




document.addEventListener("DOMContentLoaded",()=>{
  const token=localStorage.getItem("token");
  const navbar=document.querySelector(".navbar");
  if(!token){
    navbar.innerHTML=`
      <li><a href="index.html">Início</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li onmouseleave="sumir()" onmouseover="rendermenu()" class="sublogin">
          <a>Logar</a>
          <ol class="opcoes oculto">
              <p>Já é membro?</p>
              <li><a onclick="renderlogin()">Logar</a></li>
              <li><a href="">Cadastrar</a></li>
          </ol>
      </li>`;
  }else{
    navbar.innerHTML= `
      <li><a href="index.html">Início</a></li>
      <li><a href="./paginas/criacao.html">Criação</a></li>
      <li><a href="galeria.html">Galeria</a></li>
      <li><a href="desenvolvedor.html">Área do desenvolvedor</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li><a onclick="logout()">Sair</a></li>`;
  }
})

async function logar(event){
  event.preventDefault()
  const usuario=document.getElementById("usuario").value
  const senha=document.getElementById("senha").value

  try{
    const resposta=await fetch("http://127.0.0.1:5000/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({usuario,senha}),
    });
    const dados=await resposta.json()
    if(resposta.ok){
      localStorage.setItem("token",dados.token)
      window.location.reload()
    }
    else{
      alert(dados.erro||dados.mensagem||"Erro desconhecido")
    }}
    catch(erro){
      console.error("Falha ao logar"+erro)
      alert("Usuario ou senha inválidos")
    }
}

function logout(){
  localStorage.removeItem("token")
  window.location.href="https://silvineey.github.io/Creative-Studio/"
}








async function cadastrar(evento){
  evento.preventDefault()
  const usuario=document.getElementById("cadastroUsuario").value
  const email=document.getElementById("cadastroEmail").value
  const senha=document.getElementById("cadastroSenha").value
  try{
    const resposta =await fetch ("http://127.0.0.1:5000/cadastro",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify({usuario, email, senha}),
    });
    const dados=await resposta.json()
    if(resposta.ok){
      alert("Usuario cadastrado com sucesso")
    }
    else{
      alert("Erro"+dados.erro||dados.mensagem)
    }}
  catch(erro){
    console.error("Erro ao cadastrar"+ erro)
    alert("Tem algo errado com o servidor")
  }
}
