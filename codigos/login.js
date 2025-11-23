function renderlogin() {
  const menu=document.querySelector(".login")
  menu.classList.remove("off")
}

// =====================================================
// FUNÇÃO: Buscar dados do usuário logado no backend
// =====================================================
async function getUsuario() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const resposta = await fetch("http://127.0.0.1:5000/avatar", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    });

    if (!resposta.ok) return null;

    return await resposta.json();
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
    return null;
  }
}

// =====================================================
// FUNÇÃO DE LOGOUT (CASO USE NO MENU DEPOIS)
// =====================================================
function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

// =====================================================
// MONTAGEM DO NAVBAR
// =====================================================
document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  const navbar = document.querySelector(".navbar");

  // Caso não esteja logado
  if (!token) {
    navbar.innerHTML = `
      <li><a href="index.html">Início</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li>
        <a onclick="renderlogin()"><img src="./assets/avatar.png" alt=""></a><br>
        <a onclick="renderlogin()">Login</a>
      </li>
    `;
    return;
  }

  // ================================
  // Carrega o usuário logado
  // ================================
  const usuario = await getUsuario();

  // Se token expirou ou inválido
  if (!usuario) {
    localStorage.removeItem("token");
    window.location.reload();
    return;
  }

  // ================================
  // Navbar quando está logado
  // ================================
  navbar.innerHTML = `
    <li><a href="index.html">Início</a></li>
    <li><a href="./paginas/criacao.html">Criação</a></li>
    <li><a href="./paginas/galeria.html">Galeria</a></li>
    <li><a href="./paginas/desenvolvedor.html">Área do desenvolvedor</a></li>
    <li><a href="#">Sobre</a></li>

    <li class="sublogin">
      <a><img src="./assets/avatar.png" alt=""></a>
      <img class="setinha" src="assets/setinha.png" alt="">
      <div class="caixa">
        <p>${usuario.nome_usuario}</p>
        <p>${usuario.email}</p>
        <button onclick="logout()" class="logout-btn">Sair</button>
      </div>
    </li>
  `;
});

async function getUsuario() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const resposta = await fetch("http://127.0.0.1:5000/avatar", {
        method: "GET",
        headers: { "Authorization": "Bearer " + token }
    });

    if (!resposta.ok) return null;

    return resposta.json();
}


async function logar(e){
  e.preventDefault()
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








async function cadastrar(e){
  e.preventDefault()
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
      window.alert("usuario criado com sucesso.. redirecionando")
      window.location.href="../index.html"
    }
    else{
      alert("Erro"+dados.erro||dados.mensagem)
    }}
  catch(erro){
    console.error("Erro ao cadastrar"+ erro)
    alert("Tem algo errado com o servidor")
  }
}
