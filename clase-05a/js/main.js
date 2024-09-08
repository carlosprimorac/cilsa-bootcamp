// constante 
const LEGAL_AGE = 18;

// variables 
let isToogled = false;

// references to html elements
const linkElement = document.querySelector('link');
const toogleStyleButton = document.querySelector('#toogleStyle');
const personalDataForm = document.querySelector('#personal-data-form');
const birthdate = document.querySelector('#birthdate');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const country = document.querySelector('#country');


// functions 
const getAge = (birthdate) => Math.floor((new Date() - new Date(birthdate).getTime()) / 3.15576e+10)

const validateNameForField = (name, field) => {
    let regexp = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü][A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]{2,50}$/;
    if (!regexp.test(name)) {
        alert(`
            El ${field} puede contener únicamente de 2 a 50 
            caracteres (sin espacios en blanco al inicio), 
            incluyendo letras (mayúsculas, minúsculas con o 
            sin tilde) y espacios`);
        return false;
    }
    return true;
}



// events
toogleStyleButton.innerText = 'Alternar estilo de alto contraste';

toogleStyleButton.addEventListener('click', (event) => {

    isToogled = !isToogled;
    document.body.classList.toggle('contrast');
    if (!isToogled) {        
        toogleStyleButton.innerText = 'Alternar estilo de alto contraste';      
    } else {
        toogleStyleButton.innerText = 'Alternar estilo institucional';        
    }   
});

personalDataForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    if (getAge(birthdate.value) < LEGAL_AGE) {
        alert('Tienes que ser mayor de 18 años para registrar tus datos');
        return false;
    }

    if (!validateNameForField(firstName.value, 'nombre')) {
        return;
    }

    if (!validateNameForField(lastName.value, 'apellido')) {
        return;
    }

    if (!validateNameForField(country.value, 'país')) {
        return;
    }

    alert('Se enviaron tus datos');

    personalDataForm.reset();    
});