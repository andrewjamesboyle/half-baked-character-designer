// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

const catchphrases = [''];

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url(./assets/${headDropdown.value}-head.png)`;
    headCount++;
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url(./assets/${middleDropdown.value}-middle.png)`;
    middleCount++;
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url(./assets/${bottomDropdown.value}-pants.png)`;
    bottomCount++;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    const newCatchphrase = catchphraseInput.value;
    catchphrases.push(newCatchphrase);
    catchphraseInput.value = '';
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You changed the head ${headCount} times, the middle ${middleCount} times, and the bottom ${bottomCount} times.`;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';

    for (let catchphrase of catchphrases) {
        const pTag = document.createElement('p');
        pTag.textContent = catchphrase; 
        pTag.classList.add('catchphrase');
        catchphrasesEl.append(pTag);
        catchphraseInput.value = '';
    }
}
