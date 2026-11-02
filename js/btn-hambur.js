const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menubtn && nav) {
    menubtn.addEventListener('click', () => {
        if (nav.classList.toggle('active')) {
            menubtn.textContent = 'X';
        } else {
            menubtn.textContent = '☰';
        }
    });
}
