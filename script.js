//Team Member Data
const teamMembers = [
{
    name: 'Darth Vader',
    species: 'human',
    alive: false,
    saberColor: 'red',
    children:['Luke Skywalker','Leia Organa (Skywalker)'],
    movies:['Revenge of the Sith','A New Hope','Empire Strikes Back','Return of the Jedi'],
    biography:'Messi is cool',
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
    <div class="card">
        <div class = "card-header">
        ${member.name}
        </div>
        <div class="card-body" style="background-color:${backgroundColor};">
        <p><strong>Species:</strong> ${member.species}</p>
        <p><strong>Status:</strong> ${aliveStatus}</p>
        <p><strong>Children:</strong> ${childrenList}</p>
        <p><strong>Movies:</strong> ${moviesList}</p>

        </div>
    </div>
  
    `
    
    teamCardsContainer.appendChild(card)
});

}


window.onload = generateTeamCards()