let emailCadastrado = ["thiagopzaparolli@gmail.com"];
let senhaCadastrada = ["Thiago1234"];
let usuariosCadastrados = ["Thiago"];
let emailInserido = document.getElementById("Email");
let senhaInserida = document.getElementById("password");
let nomeInserido = document.getElementById("name");
let entraOuCadastra = 0;
let tipo = 1;
let loginRealizado = localStorage.getItem("usuarioAtual");
let jaClicado = false;
let usuarioAtual = "";

const tiraCadastro1 = document.getElementById("p1");
const tiraCadastro2 = document.getElementById("p2");
const mostraNome = document.getElementById("cadastro");
const botaoTopo = document.getElementById("btnTopo");
const imagemCadastro = document.getElementById("imagemCadastro");
const aparecerDivi = document.getElementById("divSair");
const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sair");

// localStorage.removeItem("Usuarios");
// localStorage.removeItem("Email");
// localStorage.removeItem("senha");

// localStorage.setItem("Usuarios", JSON.stringify(usuariosCadastrados));
// localStorage.setItem("Email", JSON.stringify(emailCadastrado));
// localStorage.setItem("senha", JSON.stringify(senhaCadastrada));

if (loginRealizado) {
    tiraCadastro1.textContent = "";
    tiraCadastro2.textContent = "";
    mostraNome.textContent = localStorage.getItem("usuarioAtual");
}

imagemCadastro.onclick = function () {
    if (loginRealizado) {
        aparecerDivi.style.opacity = "1";
        aparecerDivi.style.pointerEvents = "auto";
        document.body.style.overflowY = "hidden";
        return;
    }

    document.body.style.overflowY = "auto";
    window.location.href = "Cadastro.html"
}

botaoNao.onclick = function () {
    aparecerDivi.style.opacity = "0";
    aparecerDivi.style.pointerEvents = "none";
    document.body.style.overflowY = "auto";
}

botaoSim.onclick = function () {
    aparecerDivi.style.opacity = "0";
    aparecerDivi.style.pointerEvents = "none";
    tiraCadastro1.textContent = "Entrar ou";
    tiraCadastro2.textContent = "Cadastrar-se";
    mostraNome.textContent = "";
    loginRealizado = !loginRealizado;
    localStorage.removeItem("usuarioAtual");
    document.body.style.overflowY = "auto";
}

function atualizaTipo() {
    if (tipo == 1) {
        entraOuCadastra = document.getElementById("submitButton").textContent = "Entrar";
    } else if (tipo == 2) {
        entraOuCadastra = document.getElementById("submitButton").textContent = "Cadastrar";
    }
}

function trocaTipo() {
    tipo = 2;
    atualizaTipo();
}

function entrarOuCadastrar(tipo) {
    if (tipo == 1) {
        verificaDados();
    } else if (tipo == 2) {
        adicionaDados();
    }
}

function verificaDados() {
    emailInserido = document.getElementById("Email").value;
    senhaInserida = document.getElementById("password").value;

    emailCadastrado = JSON.parse(localStorage.getItem("Email"));
    senhaCadastrada = JSON.parse(localStorage.getItem("senha"));

    if (emailCadastrado === null || senhaCadastrada === null) {
        if (emailCadastrado === null && senhaCadastrada === null) {
            alert("Não existem dados cadastrados ainda");
            trocaTipo();
            atualizaTipo();
            return;
        } else if (emailCadastrado === null) {
            alert("Cadastre seu e-mail");
            trocaTipo();
            atualizaTipo();
            return;
        } else {
            alert("Cadastre sua senha");
            trocaTipo();
            atualizaTipo();
            return;
        }
    }

    let senhaExiste = senhaCadastrada.indexOf(senhaInserida);
    let emailExiste = emailCadastrado.indexOf(emailInserido);

    if ((emailExiste !== -1 && emailExiste == senhaExiste)) {

        nomeInserido = document.getElementById("name").value;

        usuariosCadastrados = JSON.parse(localStorage.getItem("Usuarios"));

        let posUsuario = usuariosCadastrados.indexOf(nomeInserido)

        usuarioAtual = usuariosCadastrados[posUsuario];

        alert("Bem vindo(a) " + usuarioAtual);
        localStorage.setItem("usuarioAtual", usuarioAtual);
        loginRealizado = true;
        window.location.href = "Inicio.html";
    } else {
        alert("E-mail ou senha incorreta");
    }
}

function adicionaDados() {
    emailCadastrado = JSON.parse(localStorage.getItem("Email"));
    senhaCadastrada = JSON.parse(localStorage.getItem("senha"));
    usuariosCadastrados = JSON.parse(localStorage.getItem("Usuarios"));

    emailInserido = document.getElementById("Email").value;
    senhaInserida = document.getElementById("password").value;
    nomeInserido = document.getElementById("name").value;

    if (emailCadastrado === null || senhaCadastrada === null) {
        if (emailCadastrado === null && senhaCadastrada === null) {
            if (usuariosCadastrados === null) {
                emailCadastrado = [];
                senhaCadastrada = [];
                usuariosCadastrados = [];

                emailCadastrado.push(emailInserido);
                senhaCadastrada.push(senhaInserida);
                usuariosCadastrados.push(nomeInserido);
                localStorage.setItem("Usuarios", JSON.stringify(usuariosCadastrados));
                localStorage.setItem("Email", JSON.stringify(emailCadastrado));
                localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
                alert("Dados cadastrados");
                tipo = 1;
                atualizaTipo();
                return;
            } else {
                emailCadastrado = [];
                senhaCadastrada = [];

                emailCadastrado.push(emailInserido);
                senhaCadastrada.push(senhaInserida);
                localStorage.setItem("Email", JSON.stringify(emailCadastrado));
                localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
                alert("Email e senha cadastrados");
                tipo = 1;
                atualizaTipo();
                return;
            }
        } else if (emailCadastrado === null) {
            if (usuariosCadastrados === null) {
                emailCadastrado = [];
                usuariosCadastrados = [];

                emailCadastrado.push(emailInserido);
                usuariosCadastrados.push(nomeInserido);
                localStorage.setItem("Usuarios", JSON.stringify(usuariosCadastrados));
                localStorage.setItem("Email", JSON.stringify(emailCadastrado));
                alert("Email e usuario cadastrados");
                tipo = 1;
                atualizaTipo();
                return;
            } else {
                emailCadastrado = [];

                emailCadastrado.push(emailInserido);
                localStorage.setItem("Email", JSON.stringify(emailCadastrado));
                alert("Email cadastrado");
                tipo = 1;
                atualizaTipo();
                return;
            }
        } else {
            if (usuariosCadastrados === null) {
                senhaCadastrada = [];
                usuariosCadastrados = [];

                senhaCadastrada.push(senhaInserida);
                usuariosCadastrados.push(nomeInserido);
                localStorage.setItem("Usuarios", JSON.stringify(usuariosCadastrados));
                localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
                alert("Senha e usuario cadastrados");
                tipo = 1;
                atualizaTipo();
                return;
            } else {
                senhaCadastrada = [];

                senhaCadastrada.push(senhaInserida);
                localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
                alert("Senha cadastrada");
                tipo = 1;
                atualizaTipo();
                return;
            }
        }
    }

    if (senhaCadastrada.indexOf(senhaInserida) == -1 || emailCadastrado.indexOf(emailInserido) == -1 || 
    usuariosCadastrados.indexOf(nomeInserido) == -1) {
        if (senhaCadastrada.indexOf(senhaInserida) == -1 && emailCadastrado.indexOf(emailInserido) == -1) {
            senhaCadastrada.push(senhaInserida);
            emailCadastrado.push(emailInserido);
            localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
            localStorage.setItem("Email", JSON.stringify(emailCadastrado));
        } else if (senhaCadastrada.indexOf(senhaInserida) == -1) {
            senhaCadastrada.push(senhaInserida);
            localStorage.setItem("senha", JSON.stringify(senhaCadastrada));
        } else {
            emailCadastrado.push(emailInserido);
            localStorage.setItem("Email", JSON.stringify(emailCadastrado));
        }

        if (usuariosCadastrados.indexOf(nomeInserido) == -1) {
            usuariosCadastrados.push(nomeInserido);
            localStorage.setItem("Usuarios", JSON.stringify(usuariosCadastrados));
        }
        alert("Dados cadastrados");
    } else {
        alert("Você já cadastrou seu e-mail, senha ou usuário");
    }
    tipo = 1;
    atualizaTipo();
}

window.onscroll = function () {
    if (window.scrollY > 720) {
        botaoTopo.style.opacity = '1';
        botaoTopo.style.pointerEvents = 'auto';
    } else {
        botaoTopo.style.opacity = '0';
        botaoTopo.style.pointerEvents = 'none';
    }
}

function vaiProTopo() {
    botaoTopo.addEventListener("click", function (e) {
        e.preventDefault();

        const inicio = window.scrollY;

        const duracao = 500;
        const inicioTempo = performance.now();

        function animar(tempoAtual) {
            const tempoDecorrido = tempoAtual - inicioTempo;
            const progresso = Math.min(tempoDecorrido / duracao, 1);

            window.scrollTo(0, inicio * (1 - progresso));

            if (progresso < 1) {
                requestAnimationFrame(animar);
            }
        }

        requestAnimationFrame(animar);
    });
}