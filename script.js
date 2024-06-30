const overlayLeft = document.getElementById('overlayLeft');
const overlayRight = document.getElementById('overlayRight');
const overlayLeft2 = document.getElementById('overlayLeft2');
const overlayRight2 = document.getElementById('overlayRight2');
const container = document.getElementById('container');

overlayLeft.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

overlayRight.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

overlayLeft2.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

overlayRight2.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
