const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idx = 10;
let idy = 0;
let ini = 0;

function hslColor(h){
    return `hsl(${ h }, 80%, 40%)`};


function bolita (x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();
}



setInterval (() =>{
    // ctx.clearRect(0, 0, 700, 400);
    bolita (idx, idy);
    if(dirX === 1 && dirY === 1){
        idx += 2;
        idy += 2;
    } else if(dirX === 1 && dirY === 2){
        idx += 2;
        idy -= 2;
    } else if(dirX === 2 && dirY === 1){
        idx -= 2;
        idy += 2;
    } else {
        idx -= 2;
        idy -= 2;
    }
    // cambiar direción 
    if (idx > 690) dirX = 2;
    if (idx < 10) dirX = 1;
    if (idy > 390) dirY = 2;
    if (idy < 10) dirY = 1;
},20 );