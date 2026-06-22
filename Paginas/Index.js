const botaoTopo = document.getElementById("btnTopo");
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

