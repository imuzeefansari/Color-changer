// const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// const btn = document.querySelector('button');
//  const color = document.querySelector('.color');

// btn.addEventListener('click',function () {
//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRandomNumber()]; 
//     }
//     color.textContent = hexColor;   // text content = innerHTML and innerText..
//     document.body.style.background = hexColor;
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * hex.length);
// }


// getting the refrence and access

// const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// const color = document.querySelector('.color');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     let hexColor = '#';

//     for (let i = 0; i < 6; i++) {
//         hexColor += hex[getRamdomNumber()];
//     }

//     color.innerHTML = hexColor;
//     document.body.style.background = hexColor;
// })


//  const getRamdomNumber = () => {
//     return Math.floor(Math.random()*hex.length)
//  }

const color = document.querySelector('.color');
const btn = document.querySelector('button');
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click', () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
         hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}