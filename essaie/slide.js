let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');


function image() {
setTimeout(() => {
    i1.style.display = "none";
    i2.style.display = "block";
}, 4000)

setTimeout(() => {
    i2.style.display = "none";
    i3.style.display = "block";
}, 8000)

setTimeout(() => {
    i3.style.display = "none";
    i1.style.display = "block";
}, 12000)
}

const myInterval = setInterval(image, 12000)
