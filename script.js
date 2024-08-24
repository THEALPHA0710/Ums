const colors = [
    "#378091",
    "#814757",
    "#563681",
    "#112391",
    "#69B555",
    "#237F67",
    "#567E81",
    "#922323",
    "#596625",
    "#566868",
    "#7D4790"
];

const colorPalette = document.getElementById('choice');
const targetElement = document.querySelector('.color');

colors.forEach((color) => {
    const colorDiv = document.createElement('div');
    colorPalette.append(colorDiv);
    colorDiv.classList.add('color-div');
    colorDiv.style.backgroundColor = color;

    colorDiv.addEventListener('click', () => {
        targetElement.style.backgroundColor = color;
        colorPalette.style.visibility = "hidden";
    });
});


const menu = document.getElementById("menu");
menu.addEventListener('click', () => {
    colorPalette.style.visibility = "visible";
});



const btns = document.getElementsByClassName("grid-box");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        window.location.href = "./screen.html";
    });
}

const date = new Date();

// Get the month abbreviation
const options = { month: 'short' };
const month = new Intl.DateTimeFormat('en-US', options).format(date);

// Get the day, year, hours, and minutes
const day = date.getDate();
const year = date.getFullYear();

let hours = date.getHours();
const minutes = date.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12;

const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

const formattedDate = `${month} ${day}, ${year}`;
const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

document.getElementById("formatted-date").innerText = formattedDate;
document.getElementById("formatted-time").innerText = formattedTime;

const currentHour = date.getHours();
let meal;

if (currentHour >= 6 && currentHour < 12) {
    meal = "Breakfast";
} else if (currentHour >= 12 && currentHour < 15) {
    meal = "Lunch";
} else if (currentHour >= 15 && currentHour < 19) {
    meal = "Tea";
} else if (currentHour >= 19 && currentHour < 22) {
    meal = "Dinner";
}

document.getElementById("meal").innerText = meal;