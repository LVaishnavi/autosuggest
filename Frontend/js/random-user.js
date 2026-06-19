const img = document.querySelector('.card img');
const title = document.querySelector('.card h2');
const genderText = document.querySelector('.card p');
const randomUserButton = document.getElementById('randomUserBtn');

const users = [
    {
        imgSrc: '../images/john.png',
        name: 'John Doe',
        gender: 'Male'
    },
    {
        imgSrc: '../images/john-female.png',
        name: 'Jane Doe',
        gender: 'Female'
    },
    {
        imgSrc: '../images/john.png',
        name: 'Michael Smith',
        gender: 'Male'
    },
    {
        imgSrc: '../images/john-female.png',
        name: 'Emily Clark',
        gender: 'Female'
    }
];

randomUserButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const user = users[randomIndex];
    img.src = user.imgSrc;
    img.alt = user.name;
    title.textContent = user.name;
    genderText.textContent = user.gender;
});