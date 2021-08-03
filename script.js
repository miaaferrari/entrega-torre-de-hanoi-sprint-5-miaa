// Parte Mia Início - DISCOS
let containerDiscos = document.createElement("div");
containerDiscos.id = 'containerDiscos';

function criarDiscos() {
    for (let i = 1; i <= 4; i++) { // 4 discos
        let disco = document.createElement("div");
        disco.className = `disco${i}`;
        containerDiscos.appendChild(disco);
    }
}
criarDiscos();
// Parte Mia Final



// Parte Jair Início - TORRES
const main = document.createElement("main") 
    main.classList.add("main")
    document.body.appendChild(main)
                

const haste = document.createElement("div")
haste.classList.add("haste")
main.appendChild(haste)

const poste = document.createElement("div")
poste.classList.add("poste")
haste.appendChild(poste)

const piso = document.createElement("div")
piso.classList.add("piso")
haste.appendChild(piso)

const haste2 = document.createElement("div")
haste2.classList.add("haste")
main.appendChild(haste2)

const poste2 = document.createElement("div")
poste2.classList.add("poste")
haste2.appendChild(poste2)

const piso2 = document.createElement("div")
piso2.classList.add("piso")
haste2.appendChild(piso2)

const haste3 = document.createElement("div")
haste3.classList.add("haste")
main.appendChild(haste3)

const poste3 = document.createElement("div")
poste3.classList.add("poste")
haste3.appendChild(poste3)

const piso3 = document.createElement("div")
piso3.classList.add("piso")
haste3.appendChild(piso3)
// Parte Jair Final

// Parte Mia Início - CLIQUES E MOVIMENTAÇÃO DOS DISCOS
haste.appendChild(containerDiscos); // adicionando os discos


// Parte Mia Final











