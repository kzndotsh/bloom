import './less/index.less'

// Your code goes here!

// button 1 alert
const buttonOne = document.querySelector('.destination .btn');
function buttonOneClick() {
    alert('hello, you clicked on button 1!');
}
buttonOne.addEventListener('click', buttonOneClick);
// button 2 alert
const buttonTwo = document.querySelector('.destination:nth-child(2) .btn');
function buttonTwoClick() {
    alert('hello, you clicked on button 2!');
}
buttonTwo.addEventListener('click', buttonTwoClick);
// button 3 alert
const buttonThree = document.querySelector('.destination:nth-child(3) .btn');
function buttonThreeClick() {
    alert('hello, you have clicked on button 3!');
}
buttonThree.addEventListener('click', buttonThreeClick);

// grow header image
const headerImage = document.querySelector('img:nth-child(1)');
function growImage() {
    headerImage.classList.add('grow');
}
// ungrow header image
headerImage.addEventListener('mouseover', growImage);
function growImageReset() {
    headerImage.classList.remove('grow');
}
headerImage.addEventListener('mouseleave', growImageReset);

// rotate image
document.querySelectorAll(".img-content img").forEach(elem => elem.addEventListener("mouseover", event => {
    elem.classList.add('rotate');
}));

// unrotate image
document.querySelectorAll(".img-content img").forEach(elem => elem.addEventListener("mouseleave", event => {
    elem.classList.remove('rotate');
}));

// bold text
document.querySelectorAll("p").forEach(elem => elem.addEventListener("mouseup", event => {
    elem.style.fontWeight = "bold";
}));

const background = document.querySelector('html');

background.addEventListener('click', function() {
    let randomColor = [ 'yellow', 'blue', 'pink', 'green' ];
    background.style.backgroundColor = randomColor[ Math.floor(  Math.random() * randomColor.length ) ];
});

function escKey(event) {
    if(event.key === "Escape") {
        alert('what are you trying to escape from?');
    }
}
document.addEventListener("keydown", escKey);

// alert when page is loaded

window.addEventListener("load", (event) => {
    alert('the page has fully loaded!');
});

// prevent user from leaving instantly

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});

// alert user every time they stop scrolling

window.onscrollend = (event) => {
    alert('you stopped scrolling!');
};

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
