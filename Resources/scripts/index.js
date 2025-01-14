
var count = 0;
const array = ['Web Designer', 'Web Developer', 'Software Developer', 'Software Designer', 'Game Developer', 'System Developer', 'Astronaut', 'Digital Artist'];
function change() {
    var imwhat = document.getElementById('imWhat');
    imwhat.textContent = array[count];
    if (count >= array.length - 1) {
        count = 0;
    } else {
        count++;
    }
}

setTimeout(() => {
    document.getElementById('intro').classList.remove('view-intro');
    document.getElementById('about').classList.add('flexed-box-center');
    document.getElementById('page-nav').classList.add('show');

    setInterval(change, 2000);
}, 5000);