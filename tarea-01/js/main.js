
// constante 
const LEGAL_AGE = 18;

// variables 
let isToogled = false;

// references to html elements
const linkElement = document.querySelector('link');
const toogleStyleButton = document.querySelector('#toogleStyle');
const personalDataForm = document.querySelector('#personal-data-form');
const birthdate = document.querySelector('#birthdate');

// functions 
const getAge = (birthdate) => Math.floor((new Date() - new Date(birthdate).getTime()) / 3.15576e+10)

// events
toogleStyleButton.innerText = 'Alternar estilo de alto contraste';

toogleStyle.addEventListener('click', (event) => {

    isToogled = !isToogled;

    if (!isToogled) {        
        toogleStyleButton.innerText = 'Alternar estilo de alto contraste';
        linkElement.setAttribute('href', 'css/style.css')
    } else {
        toogleStyleButton.innerText = 'Alternar estilo institucional';
        linkElement.setAttribute('href', 'css/high-contrast.css')
    }  
 
});

personalDataForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    if (getAge(birthdate.value) < LEGAL_AGE) {
        alert('Tienes que ser mayor de 18 años para registrar tus datos');
        return false;
    }

    alert('Se enviaron tus datos');

    personalDataForm.reset();    
});