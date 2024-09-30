

const mainContainer = document.querySelector(".container");

const resetBtn = document.createElement('button');
resetBtn.classList.add('resetBtn');
resetBtn.innerHTML('reset');
mainContainer.appendChild(resetBtn);


for( let i = 0; i < 16; i++ ){
    const divLine = document.createElement('div');
    divLine.classList.add(`Line${i + 1}`);
    mainContainer.appendChild(divLine);
    
    for(let y = 0; y < 16; y++){
        const divRow = document.createElement('div');
        divRow.classList.add(`Row${y + 1}`, `row`);
        divLine.appendChild(divRow);
    }
    
}


const rows = document.querySelectorAll('div[class^="Row"]'); // Select all row divs

rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
               row.classList.add('active');
    });
});



