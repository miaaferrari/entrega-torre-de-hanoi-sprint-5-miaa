
const createDisc = () => {
    const towers = document.getElementsByClassName('tower');
    const colors = ['#FFB6C1', '#F08080', '#DB7093'];
    for (let i = 1; i <= 3; i++){
        disco = document.createElement('div');
        disco.id = i;
        disco.classList.add('disc');
        disco.style.width = `${130 - (i * 30)}px`;
        disco.style.backgroundColor = colors[i-1];
        towers[0].appendChild(disco);
    };
};

const createTower = () => {
    container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    for (let i = 1; i <= 3; i++){
        torre = document.createElement('div');
        torre.id = `torre${i}`;
        torre.classList.add('tower');
        container.appendChild(torre);
    };
    createDisc();
};
createTower();

const win = (tower) => {
    
    if (tower.childElementCount === 3 && tower.id !== 'torre1') {
        window.alert('ganhou eba');
        document.body.innerHTML = "";
        createTower();
    }
}

let holdDisc = false;
let lastDisc;
const moveDisc = (e) => {
    let selectedTower = e.currentTarget;

    if (holdDisc === false && selectedTower.childElementCount !== 0) {
        lastDisc = selectedTower.lastElementChild;
        selectedTower.removeChild(lastDisc);
        holdDisc = true;

    } else if(holdDisc === true && selectedTower.childElementCount === 0) {
        
        selectedTower.appendChild(lastDisc);
        holdDisc = false;

    } else if (holdDisc === true && selectedTower.childElementCount !== 0) {

        if (selectedTower.lastElementChild.id < lastDisc.id){

            selectedTower.appendChild(lastDisc);
            holdDisc = false;
            
        }else{

            holdDisc = true;
            window.alert('não pode, besta');
        }
    }
    win(selectedTower);
};

const addEvent = () => {
    const towers = document.getElementsByClassName('tower');
    for (let i = 0; i < towers.length; i++) {
        towers[i].addEventListener('click', moveDisc);
    }
}
addEvent();




