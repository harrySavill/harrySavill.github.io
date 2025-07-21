const name = "Harry Savill"; 
let i = 0;

function typeName() {
    if (i < name.length) {
        document.getElementById("typed-name").textContent += name.charAt(i);
        i++;
        setTimeout(typeName, 100);
    }
}

window.onload = () => {
    typeName();
};

document.querySelector('.content-button').addEventListener('click', (e) => {    
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
});
