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


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed:true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

displayCourses(courses)

const all= document.querySelector('.all');
const cse= document.querySelector('.cse');
const wdd= document.querySelector('.wdd');


cse.addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject[0] == 'C'));
});
wdd.addEventListener('click', () => {
    displayCourses(courses.filter(course => course.subject[0] == 'W'));
});
all.addEventListener('click', () => {displayCourses(courses);});

function displayCourses(filteredCourses) {
    document.querySelector(".courses").innerHTML = "";
    document.querySelector(".credits").innerHTML = "";
    let totalCredits = 0
    let creditsTodisplay = document.createElement("p");
    creditsTodisplay.setAttribute("id", "credits")
    filteredCourses.forEach(course => {
        let name = document.createElement("p");
        if (course.completed == true) {
            name.setAttribute("id", "completed");
        }

        totalCredits += course.credits
        name.textContent = `${course.subject} ${course.number}`;

        document.querySelector(".courses").appendChild(name);
    }
    );
    creditsTodisplay.textContent = `Credits: ${totalCredits}`;
    document.querySelector(".credits").appendChild(creditsTodisplay)

}
// -21.517605167989498, -64.72949905980894
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector(".fig");
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
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt',`${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`;
}