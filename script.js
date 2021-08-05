// Parte Mia Início - DISCOS
alert('Olá, bem-vindo! Clique nas torres para movimentar os discos.')
let containerDiscos1 = document.createElement("div");
containerDiscos1.id = 'containerDiscos1';
let containerDiscos2 = document.createElement("div");
containerDiscos2.id = 'containerDiscos2';
let containerDiscos3 = document.createElement("div");
containerDiscos3.id = 'containerDiscos3';

function criarDiscos() {
    for (let i = 4; i >= 1; i--) { // 4 discos
        const disco = document.createElement("div");
        disco.className = 'disco';
        disco.id = `disco${i}`
        containerDiscos1.appendChild(disco);
    }
}
criarDiscos();
// Parte Mia Final



// Parte Jair Início - TORRES
const main = document.createElement("main");
main.classList.add("main");
main.id = 'data-id';
document.body.appendChild(main);

const haste = document.createElement("div");
haste.classList.add("haste");
haste.id = 'haste1';
haste.appendChild(containerDiscos1);
main.appendChild(haste);

const poste = document.createElement("div");
poste.classList.add("poste");
haste.appendChild(poste);

const haste2 = document.createElement("div");
haste2.classList.add("haste");
haste2.id = 'haste2';
haste2.appendChild(containerDiscos2);
main.appendChild(haste2);

const poste2 = document.createElement("div");
poste2.classList.add("poste");
haste2.appendChild(poste2);

const haste3 = document.createElement("div");
haste3.classList.add("haste");
haste3.id = 'haste3';
haste3.appendChild(containerDiscos3);
main.appendChild(haste3);

const poste3 = document.createElement("div");
poste3.classList.add("poste");
poste3.id = 'final';
haste3.appendChild(poste3);

// Parte Jair Final

let ultimoDisco;
let disco;
let segurando;
let postes = document.getElementsByClassName('poste');
console.log(postes);
for (let i = 0; i < postes.length; i++) {
    postes[i].addEventListener("click", moverDisco)
      
}

function moverDisco(e) {
    let clique = e.target;
    if (segurando === true) {
        escolherTorre(clique);
    } else {
        console.log(ultimoDisco);
        pegarDisco(clique);
    }
}

function pegarDisco(clique) {
    let torreAtual = clique.previousElementSibling;
    if (torreAtual !== null){
        segurando = true;
        disco = clique.previousElementSibling.lastElementChild;
    }
    console.log(disco);
}


function vitoria(clique) {
    let win = document.getElementById('final');
    let disc = document.querySelectorAll('disco').length;
    console.log(disc)
    if (document.querySelectorAll('#containerDiscos3 div').length === 4){
        alert('Parabéns! Você Ganhou');
        location.reload();
    }
}

function escolherTorre(clique) {
    ultimoDisco = clique.previousElementSibling.lastElementChild;
    let torreClicada = clique.previousElementSibling;
    console.log(torreClicada.lastElementChild)
   if (torreClicada.lastElementChild === null){
       
       clique.previousElementSibling.appendChild(disco);
    } else if (disco.clientWidth < ultimoDisco.clientWidth) {
        clique.previousElementSibling.appendChild(disco);
   } 
    segurando = false;
    console.log(clique.previousElementSibling.lastElementChild)
    vitoria(clique);
}

