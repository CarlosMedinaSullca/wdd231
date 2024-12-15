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

// THE CODE BELOW IS INTENDED TO ADD DINAMICALLY MEMBERS CARDS TO THE DIRECTORY PAGE USING DATA FROM A JSON FILE.

const cards = document.querySelector('.grid'); // ***This grid class must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
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

// THE CODE BELOW ENABLES THE OPTIONS OF GRID AND LIST TO SHOW THE CARDS TO SHOW THE MEMBERS OF THE CHAMBER

const gridbutton = document.querySelector("#grid"); // ***This grid id must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
const listbutton = document.querySelector("#list"); // ***This list id must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
const display = document.querySelector("article");  // ***This article element must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***

gridbutton.addEventListener("click", ()=> {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.add("grid");
}

// The code below is to show a weather card that shows many features of the weather in the current day

const currentTemp = document.querySelector("#current-temp"); // ***This current-temp id must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
const weatherIcon = document.querySelector("#weather-icon"); // ***This weather-icon id must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
const captionDesc = document.querySelector(".fig");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-21.52&lon=-64.73&units=metric&appid=48a9c5117dce7d7efbd2633a23faf9d3';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
  

function displayResults (data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let iconIma = document.createElement('img');
    iconIma.setAttribute('src', iconsrc);
    iconIma.setAttribute('alt',`${data.weather[0].description}`);
    weatherIcon.appendChild(iconIma);
    captionDesc.textContent = `${desc}`;
    high.textContent = `${data.main.temp_max} °C`;
    low.textContent = `${data.main.temp_min} °C`;
    humidity.textContent = `${data.main.humidity} %`;
}

// The code below is for the index page to show a three days forecast to show some weather features.
const thisDay = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow1');
const dayAfterTomorrow = document.querySelector('#tomorrow2');
const thisDayTemp = document.querySelector('#todayTemp');
const tomoTemp = document.querySelector('#tomTemp1');
const dayAfterTomoTemp = document.querySelector('#tomTemp2');

const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayOfWeek = daysOfWeek[today.getDay()];
const tomorrow1 = daysOfWeek[today.getDay() + 1];
const tomorrow2 = daysOfWeek[today.getDay() + 2];

thisDay.textContent = `${dayOfWeek}: `;
tomorrow.textContent = `${tomorrow1}: `;
dayAfterTomorrow.textContent = `${tomorrow2}: `;


const url1= 'https://api.openweathermap.org/data/2.5/forecast?lat=-21.52&lon=-64.73&appid=48a9c5117dce7d7efbd2633a23faf9d3&units=metric';

async function apiForecastFetch() {
    try {
        const response = await fetch(url1);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecastResults(forecastData);
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    }
}

apiForecastFetch();  

function displayForecastResults (data) {
    thisDayTemp.textContent= `${data.list[0].main.temp} °C`;
    tomoTemp.textContent = `${data.list[5].main.temp} °C`;
    dayAfterTomoTemp.textContent = `${data.list[13].main.temp} °C`;        
}

// The code below is intended to display dinamically three random Gold or silver members of the chamber of commerce

const  spotCard= document.querySelector('.spot'); // ***This spot class must be in all the pages of the website in order to preserve all the functionality of this JavaScript file***
async function getSpotMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    randomMembers(data.members);
}

getSpotMembersData();




function randomMembers(list) {
    let spots = 0;    
    while (spots != 3) {
        let randomNumber = Math.floor(Math.random() * list.length);
        list.forEach(members => {
            if (randomNumber == list.indexOf(members)){
                if (members.membershipLevel == "Gold" || members.membershipLevel == "Silver") {
                    let adCard = document.createElement('section');
                    let fullName = document.createElement('h2');
                    let logo = document.createElement('img');
                    let phone = document.createElement('p');
                    let websitelink = document.createElement('a');
                    let website = document.createElement('p');
                    let address = document.createElement('p');
                    let membership = document.createElement('p');

 
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
                    adCard.appendChild(fullName);
                    adCard.appendChild(logo);
                    adCard.appendChild(address);
                    adCard.appendChild(phone);
                    adCard.appendChild(website);
                    adCard.appendChild(membership);        
                    spotCard.appendChild(adCard);
                    spots += 1;
                }
            }            
        });
    }
    
}

// THE CODE BELOW IS FOR THE JOIN PAGE TIMESTAMP

function setTimestamp() {
    var timestampField = document.querySelector("#timestamp");
    var currentDateTime = new Date().toISOString();
    timestampField.value = currentDateTime;
}

const submission = document.querySelector('#submit');

submission.addEventListener( 'click', setTimestamp);

// THE CODE BELOW IS FOR THE SHOW MODAL DIALOG THAT IS DISPLAYED WHEN THE "LEARN MORE" BUTTON OF THE MEMEBERHSIP CARDS IS CLICKED
import {memberships} from '../data/memberships.js';
console.log(memberships);

// Gram a reference to the division we display the items
const showHere = document.querySelector("#showHere");

// Get a reference to the html dialog element

const mydialog = document.querySelector("#mydialog");
const myclose = document.querySelector("#mydialog button");
const myTitle = document.querySelector("#mydialog h2");
const membershipInfo = document.querySelector("#dialog");

myclose.addEventListener("click", () =>mydialog.close());

function displayItems(data){
    console.log(data)
    data.forEach(x => {
        let membershipCard = document.createElement('section');
        let membershipTitle = document.createElement('h3');
        let button = document.createElement('button');
        membershipTitle.innerHTML = `${x.level}`;
        button.innerHTML= "Learn more";

        membershipCard.appendChild(membershipTitle);
        membershipCard.appendChild(button);         
        showHere.appendChild(membershipCard);  
        button.addEventListener("click", () => showStuff(x));     
        
    });
}

// Display membership cards

displayItems(memberships)

// Populate the dialog information when the button is clicked

function showStuff(x) {
    myTitle.innerHTML = x.level;
    membershipInfo.innerHTML = `
    <p>${x.description}</p>
    <p>Cost: ${x.cost}</p>   
    <p>Events: ${x.events}</p>   
    <p>Training: ${x.training}</p>   
    <p>Advertising: ${x.advertising}</p>
    <p>Discounts: ${x.discounts}</p>               
    `;
    mydialog.showModal();
}






