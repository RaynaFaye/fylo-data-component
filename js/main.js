const storageBar = document.querySelector('.storage__slider__full');
const maxData = 1000;
const usedData = 815;
const width = (usedData / maxData) * 100;

storageBar.style.width = width + '%';
