
let animal = [
    {
        name: 'Lion',
        description: "'Un grand félin carnivore, surnommé le 'roi de la jungle'",
        category: 'terrestre',
        image : 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
    },
    {
        name: 'Dauphin',
        description: 'Un mammifère marin très intelligent et social.',
        category: 'aquatique',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Spinner_dolphin_at_Sataya.jpg/1280px-Spinner_dolphin_at_Sataya.jpg',
    },
    {
        name: 'Aigle',
        description: 'Les aigles sont de grands rapaces planeurs diurnes qui possèdent des pattes puissantes et de grandes serres qui leur permettent de saisir leurs proies',
        category: 'volant',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg/500px-Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg',
    },
    {
        name: '',
        description: '',
        category: '',
        image : '',
    }
];

console.log("animmals");

const mainDiv = document.getElementById('main'); 

rendersAnimals(animals);

const animalAddForm = document.getElementById('animal_add_form');
//console.log(animalForm);

animalAddForm.addEventListener('submit', function(e){
    e.preventDefault();

    let nameInput = document.getElementById('nameInput');
    let descriptionInput = document.getElementById('descriptionInput');
    let categoryInput = document.getElementById('categoryInput');
    let imageUrlInput = document.getElementById('imageUrlInput');

    let errors = [];

    //console.log()

    if(nameInput.value.trim().length <= 0){
        errors.push('Name cannot be empty');
    }

    if(descriptionInput.value.trim().length <= 0){
        errors.push('Description cannot be empty');
    }

    if(categoryInput.value.trim().length <= 0){
        errors.push('Category cannot be empty');
    }

     if (errors.length === 0) {
    if (errorDisplay) {
        errorDisplay.innerHTML = ''; 
        
        let newAnimal = {
            name: nameInput.value,
            descrption: descriptionInput.value,
            category: categoryInput.value,
            image: ''
        };

        animals.push(newAnimal);
        console.log('Form validé', animals);
        rederAnimals(animals);
        } else {
            document.getElementById('errors').innerHTML + errors.reduce(
                 (a, c) => c + ' ' + a
            )
        }
    }



});
const nameInput = document.getElementById('nameInput'); 
const descriptionInput = document.getElementById('descriptionInput');
const categoryInput = document.getElementById('categoryInput'); 
const imageUrlInput = document.getElementById('imageUrlInput');
const animalFilter = document.getElementById('animalFilter'); 
const errorDisplay = document.getElementById('errors');


// Fonctions display ANIMALS

/**
 * Affiche les animaux dans la div #main.
 * @param {Array<Animal>} animalsArray - Le tableau d'objets Animal à afficher.
 */
function displayAnimals(animalsArray) {
    mainDiv.innerHTML = '';

    for ( let animal of animalsArray) {
        let animalDiv = document.createElement('div');
        animalDiv.className = 'col-3 border p-2';

        let animalName = document.createElement('h2');
        animalName.innerText = `${animal.name}`;

        let animalDescription = document.createElement('p');
        animalDescription.innerText = `${animal.description}`;

        let animalCategory = document.createElement('p');
        animalCategory.innerText = `${animal.category}`;

        let animalImg = document. createElement('img');
        animal.src = animal.image;
        animal.alt = animal.name;
        animalImg.style.width = '100%';
        animalImg.style.height = 'auto';

        animalDiv.appendChild(animalName);
        animalDiv.appendChild(animalDescription);
        animmalDiv.appendChild(animalCategory);
        animmalDiv.appendChild(animalImg);

        mainDiv.appendChild(animalDiv);
    }
  
}