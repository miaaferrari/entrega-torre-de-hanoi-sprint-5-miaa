// Parte Mia Início
let containerDiscos = document.createElement("div");
containerDiscos.id = 'containerDiscos';
let body = window.document.body;
body.appendChild(containerDiscos);

function criarDiscos() {
    for (let i = 1; i <= 4; i++) { // 4 discos
        let disco = document.createElement("div");
        disco.className = `disco${i}`;
        containerDiscos.appendChild(disco);
    }
}
criarDiscos();
// Parte Mia Final