const bigImg = document.querySelector('.product-content-left-big-img img');
const smallImg = document.querySelectorAll('.product-content-left-small-img img');

smallImg.forEach(function(imgItem, X) {
    imgItem.addEventListener('mouseover', function() {
        bigImg.src = imgItem.src;
    })
} )




const chitiet = document.querySelector('.chitiet');
const mota = document.querySelector('.mota');


if(chitiet) {
    chitiet.addEventListener('click', function() {
        document.querySelector('.product-info-detail-content-chitiet').style.display = 'block';
        document.querySelector('.product-info-detail-content-mota').style.display = 'none';
    })
}

if(mota) {
    mota.addEventListener('click', function() {
        document.querySelector('.product-info-detail-content-chitiet').style.display = 'none';
        document.querySelector('.product-info-detail-content-mota').style.display = 'block';
    })
}

const button = document.querySelector('.product-info_top');
if(button) {
    button.addEventListener('click', function() {
        document.querySelector('.product-info-detail').classList.toggle('active');
    })
}