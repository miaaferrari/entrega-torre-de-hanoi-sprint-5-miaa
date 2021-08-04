// Parte Mia Início - DISCOS
let containerDiscos = document.createElement("div");
containerDiscos.id = 'containerDiscos';

function criarDiscos() {
    for (let i = 1; i <= 4; i++) { // 4 discos
        let disco = document.createElement("div");
        disco.className = `disco${i}`;
        disco.id = `disco${i}`
        containerDiscos.appendChild(disco);
    }
}
criarDiscos();
// Parte Mia Final



// Parte Jair Início - TORRES
const main = document.createElement("main") 
    main.classList.add("main")
    main.id = 'data-id'
    document.body.appendChild(main)
                

const haste = document.createElement("div")
haste.classList.add("haste")
haste.id = 'haste1'
main.appendChild(haste)

const poste = document.createElement("div")
poste.classList.add("poste")
haste.appendChild(poste)

// const piso = document.createElement("div")
// piso.classList.add("piso")
// haste.appendChild(piso)

const haste2 = document.createElement("div")
haste2.classList.add("haste")
haste2.id = 'haste2'
main.appendChild(haste2)

const poste2 = document.createElement("div")
poste2.classList.add("poste")
haste2.appendChild(poste2)

// const piso2 = document.createElement("div")
// piso2.classList.add("piso")
// haste2.appendChild(piso2)

const haste3 = document.createElement("div")
haste3.classList.add("haste")
haste3.id = 'haste3'
main.appendChild(haste3)

const poste3 = document.createElement("div")
poste3.classList.add("poste")
haste3.appendChild(poste3)

// const piso3 = document.createElement("div")
// piso3.classList.add("piso")
// haste3.appendChild(piso3)

// document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "div") {
//       console.log("Clicked", event.target.textContent);
//     }
//   });
// let actualClick;




// function pegaDisco(){
//     document.getElementByClassName('disco1').addEventListener("click")
//         containerDiscos.removeChild('disco1')

//     }

// Parte Jair Final

// Parte Mia Início - CLIQUES E MOVIMENTAÇÃO DOS DISCOS
haste.appendChild(containerDiscos); // adicionando os discos


// Parte Mia Final
let actualClick;
let container = document.getElementById("containerDiscos")
  container.addEventListener("click", e => {
        const currentDisk = e.target
        actualClick = currentDisk
        console.log(actualClick)
        // e.target.classList.add("clicked")
      })

const container2 = document.getElementById("haste2")
container2.addEventListener("click", e =>{
    if (actualClick!== undefined){
        actualClick.remove("clicked")
        container2.appendChild(actualClick)
        actualClick = undefined
    }else{
        const currentDisk = e.target
        actualClick = currentDisk
        actualClick.remove("clicked")
        container.removeChild(actualClick)
    }
})   

const container3 = document.getElementById("haste3")
container3.addEventListener("click", e =>{
    if (actualClick !== undefined){
        actualClick.remove("clicked")

        container3.appendChild(actualClick)
        actualClick = undefined
    }else{
        const currentDisk = e.target
        actualClick = currentDisk
        container2.removeChild(actualClick)
    }
})
  











