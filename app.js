// Array of objects containing profiles 

const profiles = [
    {
        id: 1,
        name: "Mario Jose",
        img: "img/ian-dooley-d1UPkiFd04A-unsplash.jpg",
        job: "Teacher",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, culpa. Cupiditate, eligendi repellat vero totam debitis est earum modi nihil."
    },
    {
        id: 2,
        name: "Eduardo Montolla",
        img: "img/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
        job: "Fire Fighter",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus cupiditate itaque quis corrupti laborum at dolorum iste, eius incidunt dicta, ducimus odio delectus vel hic aut voluptate, voluptatem reiciendis."
    },
    {
        id: 3,
        name: "Cristina Fernanda",
        img: "img/aiony-haust-3TLl_97HNJo-unsplash.jpg",
        job: "Singer",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus cupiditate itaque quis corrupti laborum at dolorum iste."
    },
    {
        id: 4,
        name: "Maria de la Ho",
        img: "img/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg",
        job: "President",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, culpa. Cupiditate, eligendi repellat vero totam debitis est earum modi nihil."
    },
]

// Variables 

const author = document.getElementById('name');
const img = document.getElementById('img');
const job = document.getElementById('job');
const description = document.getElementById('description');

const prev = document.getElementById('previous'); 
const random = document.getElementById('random');
const foll = document.getElementById('following');

// Set index to zero

let profileIndex = 0;

// Charge data 

window.addEventListener('DOMContentLoaded', function(){

    showProfile(profileIndex);

})

// Function to withdraw information from object

function showProfile(person){
    const profile = profiles[person];
    img.src = profile.img
    author.textContent = profile.name;
    job.textContent = profile.job;
    description.textContent = profile.description
}

// Add event listeners

foll.addEventListener('click', function(){
    profileIndex++;
    if(profileIndex > profiles.length-1){
        profileIndex= 0;
    }
    showProfile(profileIndex);
})


prev.addEventListener('click', function(){
    profileIndex--;
    if(profileIndex < 0){
        profileIndex = profiles.length-1
    }
    showProfile(profileIndex);
})

random.addEventListener('click', function(){
    let randomProfile = Math.floor(Math.random()*profiles.length);

    showProfile(randomProfile);
})
