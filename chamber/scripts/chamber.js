const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
const oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `<span>${oLastModif}</span>`


const cards = document.querySelector('.grid');
const greetings = document.createElement('h2');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    // console.log(data.members);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach( (members) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let websitelink = document.createElement('a');
        let website = document.createElement('p');
        let address = document.createElement('p');
        let membership = document.createElement('p');
        let city = document.createElement('p')

 
        fullName.textContent = `${members.name}`;
        membership.textContent = `Membership: ${members.membershipLevel}`;
        address.textContent = `Addres: ${members.address}`;
        phone.textContent = `Phone: ${members.phone}`;
        website.textContent = `Website: `;
        websitelink.setAttribute('href', members.website);
        websitelink.setAttribute('title', `${members.name} website`);
        websitelink.textContent = `Visit website`;
        logo.setAttribute('src', members.image);
        logo.setAttribute('alt', `Portrait of ${members.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', 'auto');
        website.appendChild(websitelink);
        card.appendChild(fullName);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);        
        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", ()=> {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.add("grid");
}