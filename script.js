//Team Member Data
const teamMembers = [
{
    name: 'Darth Vader',
    species: 'Human',
    alive: false,
    saberColor: 'red',
    children:['Luke Skywalker','Leia Organa (Skywalker)'],
    movies:['Revenge of the Sith','A New Hope','Empire Strikes Back','Return of the Jedi'],
    biography:'Darth Vader, born as Anakin Skywalker, was a central figure in the Star Wars saga. Initially a heroic Jedi Knight, he fell to the dark side of the Force due to fear, anger, and manipulation by Emperor Palpatine. Clad in menacing black armor and wielding a red lightsaber, Vader became a symbol of tyranny in the galaxy. Despite his villainous deeds, a flicker of redemption remained within him, ultimately leading to his self-sacrifice to save his son, Luke Skywalker, and destroy the Emperor, bringing balance to the Force.i is cool',
    img:'vader.png'
}
]


function generateTeamCards(){

const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

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
    <div class="card mt-5">
        <div class = "card-header text-center">
        <img src="${member.img}" class="img-fluid card-img">
      ${member.name}
        </div>
        <div class="card-body" style="background-color:${backgroundColor};">
        <p><strong class="chcolor">Species:</strong> ${member.species}</p>
        <p><strong class="chcolor">Status:</strong> ${aliveStatus}</p>
        <p><strong class="chcolor">Children:</strong> ${childrenList}</p>
        <p><strong class="chcolor">Movies:</strong> ${moviesList}</p>
        <p><strong class="chcolor">Movies:</strong> ${member.biography}</p>
        </div>
    </div>
  
    `
    
    teamCardsContainer.appendChild(card)
});

}


window.onload = generateTeamCards()