// Demo credentials used to check the submitted login information.
const user = 'qwer';
const pass = '1234';

// Checks the entered username and password.
const clickButton = (a, b) => {
    if (a == user && b == pass) {
        alert('Login Success!');
        document.location.href = 'feed.html';
    } else {
        alert('Wrong username or password!');
    }
};