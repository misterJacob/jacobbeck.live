const closeBtn = document.querySelector('.close-btn');
const sendEmail = document.querySelector('nav .send-email');
const modalEmail = document.querySelector('.modal-email');


sendEmail.addEventListener('click', () => {
    modalEmail.classList.add('active')
});

closeBtn.addEventListener('click', () => {
    modalEmail.classList.remove('active')
});

const goBack = document.querySelector('.return-btn .btn');
const transfer = document.querySelector('.transfer');
const modalTransfer = document.querySelector('.modal-airport-transfer');

transfer.addEventListener('click', () => {
    modalTransfer.classList.add('active');

});

goBack.addEventListener('click', () => {
    modalTransfer.classList.remove('active');
});