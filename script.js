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
    children:['None'],
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
    movies:['A New Hope','Empire Strikes Back','Return of the Jedi','The Force Awakens'],
    biography:
    'Han Solo, the charismatic smuggler turned hero, was an essential figure in the Star Wars saga. From a humble beginning on Tatooine to his pivotal role in the Rebel Alliance, Solos roguish charm and loyalty made him a symbol of rebellion. Despite his initial reluctance, his journey from scoundrel to hero culminated in the Battle of Endor, securing his place as one of the galaxys greatest icons.Han Solo, the charming smuggler-turned-hero, left an unforgettable mark on the Star Wars saga. From piloting the Millennium Falcon to his pivotal role in the Rebel Alliance, Solos roguish charm and loyalty to his friends made him a symbol of rebellion. His journey from scoundrel to hero culminated in his pivotal role in the Battle of Endor, securing his place as one of the galaxys greatest icons.',
    img:'solo.jpg'
},
{
    name: 'Leia Organa (Skywalker)',
    species: 'Human',
    alive: false,
    saberColor: '',
    children:['Ben Solo(Kylo Ren)'],
    movies:['A New Hope','Empire Strikes Back','Return of the Jedi','The Force Awakens','The Rise of Skywalker'],
    biography:
    'Leia Organa, a fearless leader and devoted ally, left an enduring legacy in the Star Wars saga. From her early days as a member of the Rebel Alliance to her crucial role in the fight against the tyranny of the Empire, Leias unwavering resolve and commitment to justice made her a beacon of hope in the galaxy. As a skilled diplomat and a formidable warrior, she played a vital part in the Rebel Alliances victories, including the destruction of the Death Star. Despite facing personal tragedies and challenges, Leias strength and determination never wavered, solidifying her place as one of the most iconic heroes in the Star Wars universe.',
    img:'leia.jpg'
},
{
    name: 'Chewbacca',
    species: 'Wookiee ',
    alive: true,
    saberColor: '',
    children:['None'],
    movies:['Revenge of the Sith','A New Hope','Empire Strikes Back','Return of the Jedi','The Force Awakens','The Rise of Skywalker'],
    biography:
    'Chewbacca, the loyal Wookiee co-pilot of the Millennium Falcon, was a beloved character in the Star Wars saga. With his towering stature, fierce loyalty, and distinctive growl, Chewbacca became an iconic figure alongside his friend Han Solo. Despite his limited verbal communication, Chewbaccas actions spoke volumes, whether in battle or in moments of camaraderie with his companions. Throughout the galaxy-spanning adventures, Chewbaccas unwavering loyalty and bravery earned him the respect of allies and adversaries alike. As a steadfast friend and fierce warrior, Chewbaccas presence added depth and heart to the Star Wars universe, making him an unforgettable part of its legacy.',
    img:'chewwy.jpg'
},
{
    name: 'Yoda',
    species: 'Lannik',
    alive: false,
    saberColor: 'green',
    children:['None'],
    movies:['The Phantom Menace','Attack of the Clones','Revenge of the Sith','Empire Strikes Back','Return of the Jedi',],
    biography:
    'Chewbacca, the loyal Wookiee co-pilot of the Millennium Falcon, was a beloved character in the Star Wars saga. With his towering stature, fierce loyalty, and distinctive growl, Chewbacca became an iconic figure alongside his friend Han Solo. Despite his limited verbal communication, Chewbaccas actions spoke volumes, whether in battle or in moments of camaraderie with his companions. Throughout the galaxy-spanning adventures, Chewbaccas unwavering loyalty and bravery earned him the respect of allies and adversaries alike. As a steadfast friend and fierce warrior, Chewbaccas presence added depth and heart to the Star Wars universe, making him an unforgettable part of its legacy.',
    img:'yoda.jpg'
},
{
    name: 'Mace Windu',
    species: 'Human',
    alive: false,
    saberColor: 'purple',
    children:['None'],
    movies:['The Phantom Menace','Attack of the Clones','Revenge of the Sith',],
    biography:
    ' Mace Windu is a distinguished and powerful Jedi Master in the Star Wars universe, known for his exceptional combat skills and deep commitment to the Jedi Order. He serves on the Jedi High Council and is renowned for his mastery of the rare and aggressive Form VII lightsaber combat, also known as Vaapad. Windu wields a unique purple-bladed lightsaber, symbolizing his balance between the light and dark sides of the Force. Throughout the Clone Wars, he plays a crucial role as a leader and strategist, often working alongside key figures like Yoda and Anakin Skywalker. His unwavering dedication to justice and the Jedi code ultimately leads him to confront Chancellor Palpatine, where he meets his tragic end, cementing his legacy as one of the most respected and formidable Jedi in galactic history.',
    img:'macewindu.jpg'
},
{
    name: 'R2-D2',
    species: 'Droid',
    alive: true,
    saberColor: '',
    children:['None'],
    movies:['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back','Return of the Jedi','The Force Awakens','The Last Jedi','The Rise of Skywalker',],
    biography:
    'R2-D2 is a resourceful and courageous astromech droid in the Star Wars universe, renowned for his pivotal role in numerous key events across the galaxy. Originally serving Queen Amidala of Naboo, his adventures span the entirety of the Skywalker saga, providing crucial assistance to figures like Anakin Skywalker, Padmé Amidala, and Luke Skywalker. His skills in repair, hacking, and navigation, coupled with his brave and loyal nature, make him an invaluable ally. R2-D2 plays significant roles in the Galactic Republic, the Rebellion, and the Resistance, often turning the tide in critical situations with his quick thinking and technological expertise. His endearing personality and indomitable spirit have cemented him as one of the most beloved characters in the Star Wars franchise.',
    img:'r2.jpg'
},
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