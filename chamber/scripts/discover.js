// THE CODE BELOW IS FOR THE MESSAGE DISPLAY TO VISITORS IN THE DISCOVER PAGE

const  message =document.querySelector(".message");

message.innerHTML = "hello";

const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = new Date();
localStorage.setItem('lastVisit', currentVisit);

if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = currentVisit - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 *60 *24));

    if (daysDifference < 1)
    {
        message.textContent = `Back so soon! Awesome!`;
    }
    else if (daysDifference === 1)
    {
        message.textContent = `You last visited 1 day ago.`;
    }
    else {
        message.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

else 
{
    message.textContent =`Welcome! Let us know if you have any questions`;
}
