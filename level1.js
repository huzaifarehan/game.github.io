
var colors = ['#ff0000', '#00ff00', '#0000ff', '#FFFF00', '#08a3d9'];

// function for add the balloons
addBalloons();
function addBalloons() {
    for (let i = 0; i < 20; i++) {
        var random_color = colors[Math.floor(Math.random() * colors.length)]
        let balloons = document.getElementsByClassName('balloon')[i];
        // balloons.className+= ` ${random_color}`;
        balloons.id = `${random_color}`;
        console.log(balloons.id);
        balloons.style.backgroundColor = random_color;
    }

}

let popped = 0;

document.addEventListener('mouseover', function (e) {

    if (e.target.id === '#ff0000') {
        var random_color = colors[Math.floor(Math.random() * colors.length)]
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "pop";
        popped++;
        setTimeout(() => {
            e.target.textContent = "";
            e.target.style.backgroundColor = random_color;
            e.target.id = random_color;
        }, 1000);
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 24) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};


