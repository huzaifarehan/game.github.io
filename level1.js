
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff0000', '#FFFF00', '#08a3d9'];

// function for add the balloons
addBalloons();
function addBalloons() {
    for (let i = 0; i < 20; i++) {
        var random_color = colors[Math.floor(Math.random() * colors.length)]
        let balloons = document.getElementsByClassName('balloon')[i];
        balloons.id = `${random_color}`;
        balloons.style.backgroundColor = random_color;
    }

}

let popped = 0;
let failed = 0;


document.addEventListener('mouseover', popTheBalloonFunc);
function popTheBalloonFunc(e) {

    if (e.target.id === '#ff0000') {
        var random_color = colors[Math.floor(Math.random() * colors.length)]
        e.target.style.backgroundColor = "";
        e.target.innerText = "";
        setTimeout(() => {
            e.target.textContent = "";
            e.target.style.backgroundColor = random_color;
            e.target.id = random_color;
        }, 1000);
        
        popped++;
        removeEvent(e);
        console.log(popped);
        checkAllPopped();
    }
    else if(e.target.className === "balloon"){
        var random_color = colors[Math.floor(Math.random() * colors.length)]
        e.target.style.backgroundColor = "";
        e.target.innerText = "";
        setTimeout(() => {
            e.target.textContent = "";
            e.target.style.backgroundColor = random_color;
            e.target.id = random_color;
        }, 1000);
        
        failed++;
        removeEvent(e);
        checkAllfailed();

    }
};

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 3) {
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};

function checkAllfailed(){
    if (failed === 3) {
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#failed');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
}


