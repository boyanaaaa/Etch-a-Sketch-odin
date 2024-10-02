const mainContainer = document.querySelector(".container");

const userInput = document.createElement('input');
userInput.classList.add('userInput');
userInput.setAttribute('placeholder', "Write a number between 1 and 100..");
userInput.setAttribute('min', 6);
userInput.setAttribute('max', 100);

const submitBtn = document.createElement('button');
submitBtn.classList.add('submitBtn');
submitBtn.textContent = "Submit";

const resetBtn = document.createElement('button');
resetBtn.classList.add('resetBtn');
resetBtn.textContent = "Reset";

let inputNumber = 16;

function createGrid(inputNumber) {

    mainContainer.innerHTML = '';


    mainContainer.appendChild(userInput);
    mainContainer.appendChild(submitBtn);
    mainContainer.appendChild(resetBtn);

   
    for (let i = 0; i < inputNumber; i++) {
        const divLine = document.createElement('div');
        divLine.classList.add(`Line${i + 1}`);
        mainContainer.appendChild(divLine);

        for (let y = 0; y < inputNumber; y++) {
            const divRow = document.createElement('div');
            divRow.classList.add(`Row${y + 1}`, `row`);
            divLine.appendChild(divRow);
        }
    }

    const rows = document.querySelectorAll('div[class^="Row"]');


    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.classList.add('active');
        });
    });

  
    resetBtn.addEventListener('click', () => {
        rows.forEach(row => {
            row.classList.remove('active'); 
        });
    });
}


createGrid(inputNumber);

submitBtn.addEventListener('click', () => {
    if (userInput.value === "" || userInput.value < 1) {
        alert("Please enter a number greater than 1.");
    } else if (userInput.value > 100) {
        alert("Please enter a number less than 100.");
    } else {
        inputNumber = userInput.value;

        
        createGrid(inputNumber);
    }
});
