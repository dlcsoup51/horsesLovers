function fullNameFormat() {
    let firstName = document.getElementById('firstName').value;
    let firstNameRegex = /^[A-Z][a-z0-9_-]{3,19}$/;
    if (firstName.match(firstNameRegex)) {
        alert('valid firstname entered');
        console.log(true)
    } else {
        alert('firstName entered is invalid');
        console.log(false);
    }
}



function fullNameFormat() {
    let lasttName = document.getElementById('lastName').value;
    let lastNameRegex = /^[A-Z][a-z0-9_-]{3,19}$/;
    if (lastName.match(lastNameRegex)) {
        alert('valid lastname entered');
        console.log(true)
    } else {
        alert("lastName entered is invalid");
        console.log(false);
    }
}

function checkFirstLetters() {
    firstNameFormat();
    lastNameFormat();
    pause();
}



//So, I worked with the last name part, did not change anything on the html except to id the last name...
// but when I run it now I can't get past my console saying "Uncaught ReferenceError: firstNameFormat script.js 14,
// is not defined. at checkFirstLetters (script.js: 14   at HTMLButtonElement.onclick  (index.html:40."
//
// It won't even give the alert on the first name as it was doing with you!