const img = document.querySelector('.card img');
const title = document.querySelector('.card h2');
const genderText = document.querySelector('.card p');
const toggleButton = document.getElementById('toggleGenderBtn');

const maleState = {
    imgSrc: '../images/john.png',
    name: 'John Doe',
    gender: 'Male',
    alt: 'John Doe'
};

const femaleState = {
    imgSrc: '../images/john-female.png',
    name: 'John Doe',
    gender: 'Female',
    alt: 'John Doe'
};

let isMale = true;

toggleButton.addEventListener('click', () => {
    const state = isMale ? femaleState : maleState;
    img.src = state.imgSrc;
    img.alt = state.alt;
    title.textContent = state.name;
    genderText.textContent = state.gender;
    isMale = !isMale;
});
