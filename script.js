
let animals = [
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

const mainDiv = document.getElementById('main');
const animalAddForm = document.getElementById('animal_add_form');
const nameInput = document.getElementById('nameInput');
const descriptionInput = document.getElementById('descriptionInput');
const categoryInput = document.getElementById('categoryInput');
const imageUrlInput = document.getElementById('imageUrlInput');
const errorDisplay = document.getElementById('errors');
const animalFilter = document.getElementById('animalFilter');

//console.log("animmals");

function displayAnimals(animalsArray) {
mainDiv
for ( let animal of animalsArray) {
        const animalDiv = document.createElement('div');
        animalDiv.className = 'col-3 border p-2';

        const animalName = document.createElement('h2');
        animalName.innerText = `${animal.name}`;

        const animalDescription = document.createElement('p');
        animalDescription.innerText = `${animal.description}`;

        const animalCategory = document.createElement('p');
        animalCategory.innerText = `${animal.category}`;

        const animalImg = document. createElement('img');
        animalImg.src = animal.image;
        animalImg.alt = animal.name;
        animalImg.style.width = '100%';
        animalImg.style.height = 'auto';

        animalDiv.appendChild(animalName);
        animalDiv.appendChild(animalDescription);
        animalDiv.appendChild(animalCategory);
        animalDiv.appendChild(animalImg);

        mainDiv.appendChild(animalDiv);
    }
}

displayAnimals(animals);


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
        
    const newAnimal = {
            name: nameInput.value,
            description: descriptionInput.value,
            category: categoryInput.value,
            image: ''
        };

        animals.push(newAnimal);
        console.log('Form validé', animals);
        displayAnimals(animals);
        } else {
            document.getElementById('errors').innerHTML + errors.reduce(
                 (a, c) => c + ' ' + a
            )
        }
    }

});

animalFilter.addEventListener('change', () => {
    const selected = animalFilter.value;
    if (selected) {
        const filtered = animal.filter(animal => animal.category === selected);
      displayAnimals(filtered);
    } else {
        displayAnimals(animals);
    }
});
  
