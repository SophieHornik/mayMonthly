//Team Member Data
const teamMembers = [
{
    name: 'Darth Vader',
    species: 'Human',
    alive: false,
    saberColor: 'red',
    children:['Luke Skywalker','Leia Organa (Skywalker)'],
    movies:['Revenge of the Sith','A New Hope','Empire Strikes Back','Return of the Jedi'],
    biography:'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.',
    img:'vader.png'
},
{
    name: 'Luke Skywalker',
    species: 'Human',
    alive: false,
    saberColor: 'green',
    children:['none'],
    movies:['A New Hope','Empire Strikes Back','Return of the Jedi','The Force Awakens','The Rise of Skywalker'],
    biography:'Luke Skywalker, the son of Anakin Skywalker and Padmé Amidala, played a crucial role in the Star Wars saga. From a humble farm boy on Tatooine to a Jedi Knight, Lukes journey epitomized hope and redemption. Despite confronting his fathers dark legacy as Darth Vader, Luke remained steadfast in his commitment to the light side. His unwavering resolve and belief in the power of goodness led to the redemption of Darth Vader and the ultimate defeat of the Sith, solidifying his legacy as a beacon of hope in the galaxy.',
    img:'newlukepic.jpg'
},
{
    name: 'Han Solo',
    species: 'Human',
    alive: false,
    saberColor: '',
    children:['Ben Solo(Kylo Ren)'],
    movies:['A New Hope','Empire Strikes Back','Return of the Jedi','The Force Awakens','The Rise of Skywalker'],
    biography:
    'Han Solo, the charismatic smuggler turned hero, was an essential figure in the Star Wars saga. From a humble beginning on Tatooine to his pivotal role in the Rebel Alliance, Solos roguish charm and loyalty made him a symbol of rebellion. Despite his initial reluctance, his journey from scoundrel to hero culminated in the Battle of Endor, securing his place as one of the galaxys greatest icons.Han Solo, the charming smuggler-turned-hero, left an unforgettable mark on the Star Wars saga. From piloting the Millennium Falcon to his pivotal role in the Rebel Alliance, Solos roguish charm and loyalty to his friends made him a symbol of rebellion. His journey from scoundrel to hero culminated in his pivotal role in the Battle of Endor, securing his place as one of the galaxys greatest icons.',
    img:'solo.jpg'
}
]

function generateTeamCards(){

const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-3', 'm-3')

    let aliveStatus

    if(member.alive){
        aliveStatus = "Living"
    } else {
        aliveStatus = "Deceased"
    }


//Create a list of Skills with <li> tags
const moviesList = member.movies
.map(movies => `<li> ${movies} </li>`).join('')

const childrenList = member.children
.map(children => `<li> ${children} </li>`).join('')


//style the background color of the card based off position
let backgroundColor

switch(member.saberColor.toLowerCase()){
    case 'red':
        backgroundColor = "red"
        break
        case 'blue':
        backgroundColor = "blue"
        break
        case 'green':
        backgroundColor = "green"
        break
        case 'purple':
        backgroundColor = "purple"
        break
        case '':
        backgroundColor = "gray"
        break
}
card.style.backgroundColor = backgroundColor


    card.innerHTML= `
    <div class="card m-5">
        <div class = "card-header text-center">
        <img src="${member.img}" class="img-fluid card-img">
      ${member.name}
        </div>
        <div class="card-body" style="background-color:${backgroundColor};">
        <p><strong class="chcolor">Species:</strong> ${member.species}</p>
        <p><strong class="chcolor">Status:</strong> ${aliveStatus}</p>
        <p><strong class="chcolor">Children:</strong> ${childrenList}</p>
        <p><strong class="chcolor">Movies:</strong> ${moviesList}</p>
        <p><strong class="chcolor">Biography
        :</strong> ${member.biography}</p>
        </div>
    </div>
  
    `
    
    teamCardsContainer.appendChild(card)
});
}
window.onload = generateTeamCards()