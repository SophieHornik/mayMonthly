//Team Member Data
const teamMembers = [
{
    name: 'Lionel Messi',
    age: 36,
    activePlayer: true,
    position: 'forward',
    strengths:'Ball Control',
    weaknesses:'heading ability',
    skills:['Dribbling','Shooting','Passing'],
    biography:'Messi is cool',
}
]


function generateTeamCards(){

const teamCardsContainer = document.getElementById('teamCards')

teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

//style the background color of the card based off position
let backgroundColor

switch(member.position.toLowerCase()){
    case 'forward':
        backgroundColor = "red"
        break
        case 'mid':
        backgroundColor = "green"
        break
        case 'defender':
        backgroundColor = "blue"
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
        <p><strong>Position:</strong> ${member.position}</p>
        </div>
    </div>
  
    `
    teamCardsContainer.appendChild(card)
});

}


window.onload = generateTeamCards()