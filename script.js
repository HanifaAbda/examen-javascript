
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
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/500px-Tursiops_truncatus_01.jpg',
    },
    {
        name: 'Aigle',
        description: 'Les aigles sont de grands rapaces planeurs diurnes qui possèdent des pattes puissantes et de grandes serres qui leur permettent de saisir leurs proies',
        category: 'volant',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg/500px-Bald_Eagle_%28Haliaeetus_leucocephalus%29_Kachemak_Bay%2C_Alaska.jpg',
    },
    {
        name: 'Girafe',
        description: "La Girafe (Giraffa camelopardalis) est une espèce de mammifères ongulés artiodactyles, du groupe des ruminants, vivant dans les savanes africaines et répandue du Tchad jusqu'en Afrique du Sud.",
        category: 'terrestre',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Giraffa_camelopardalis_angolensis.jpg/500px-Giraffa_camelopardalis_angolensis.jpg',
    },
    {
        name: 'Baleine',
        description: "Les baleines sont connues pour leur taille impressionnante. Parmi elles, la baleine bleue ou rorqual bleu est le plus grand animal vivant sur Terre. ",
        category: 'aquatique',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Eubalaena_glacialis_with_calf.jpg/500px-Eubalaena_glacialis_with_calf.jpg',
    },
    {
        name: 'Chauve-souris',
        description: "Les chauves-souris font partie de l’ordre des chiroptères. Trop souvent victimes de fausses croyances, les chauves-souris sont jugées et chassées.",
        category: 'volant',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Wikipedia-Bats-001-v01.jpg/500px-Wikipedia-Bats-001-v01.jpg',
    },
];

const mainDiv = document.getElementById('main');
const animalAddForm = document.getElementById('animal_add_form');
const nameInput = document.getElementById('nameInput');
const descriptionInput = document.getElementById('descriptionInput');
const categoryInput = document.getElementById('categoryInput');
const imageUrlInput = document.getElementById('imageUrlInput');
const errorDisplay = document.getElementById('errors');


//console.log("animmals");

function displayAnimals(animalsArray) {
    mainDiv.innerHTML = '';

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

//Formulaire
animalAddForm.addEventListener('submit', function(e){
    e.preventDefault();

    //let nameInput = document.getElementById('nameInput');
    // let descriptionInput = document.getElementById('descriptionInput');
    // let categoryInput = document.getElementById('categoryInput');
    // let imageUrlInput = document.getElementById('imageUrlInput');

    const errors = [];

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
    errorDisplay.innerHTML = ''; 

    const newAnimal = {
        name: nameInput.value,
        description: descriptionInput.value,
        category: categoryInput.value,
        image: imageUrlInput.value.trim()
    };

    animals.push(newAnimal);
    displayAnimals(animals);
    } else {
    errorDisplay.innerHTML = errors.join('<br>');
    }
});


//Filtre
const animalFilter = document.getElementById('animalFilter');

animalFilter.addEventListener('change', function(e) {
    console.log(animalFilter.value);

    const selectedCategory = animalFilter.value;

    if (selectedCategory === '') {
        displayAnimals(animals);
    } else {
        const filtered = animals.filter(animal => animal.category === selectedCategory);
        displayAnimals(filtered);
    }
});



  
