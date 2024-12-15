const currentUrl = window.location.href;

console.log(currentUrl);

const everything = currentUrl.split('?');
 console.log(everything);

let formData = everything[1].split('&');
 console.log(formData);

 function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@")
        }
    });

    return result
 }

 const showInfo = document.querySelector('#results');

 showInfo.innerHTML = `
 <h3>Thank you for filling out the form!</h3>
 <p>You are ${show('first')} ${show('last')} from ${show('Organization+name')}</p>
 <p>Your phone number is ${show('phone')} and email ${show('email')}</p>
 <p>You applied for membership at ${show('timestamp')}</p>
 
 `;