let emailCadastrado = ["thiagopzaparolli@gmail.com"];
let senhaCadastrada = ["Thiago1234"];
let nomeCadastrado = ["Thiago"];
let emailInserido = document.getElementById("Email");
let senhaInserida = document.getElementById("password");
let nomeInserido = document.getElementById("name");
let entraOuCadastra = 0;
let tipo = 1;
let loginRealizado = localStorage.getItem("nome");
let jaClicado = false;
let usuarios = [];

const tiraCadastro1 = document.getElementById("p1");
const tiraCadastro2 = document.getElementById("p2");
const mostraNome = document.getElementById("cadastro");
const botaoTopo = document.getElementById("btnTopo");
const imagemCadastro = document.getElementById("imagemCadastro");
const aparecerDivi = document.getElementById("divSair");
const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sair");

if (loginRealizado) {
    tiraCadastro1.textContent = "";
    tiraCadastro2.textContent = "";
    mostraNome.textContent = localStorage.getItem("nome");
}

imagemCadastro.onclick = function () {
    alert("Deu certo");
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
    tiraCadastro2.textContent = "Cadastrar";
    mostraNome.textContent = "";
    loginRealizado = !loginRealizado;
    localStorage.removeItem("nome");
    document.body.style.overflowY = "auto";
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

