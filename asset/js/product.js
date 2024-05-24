const bigImg = document.querySelector('.product-content-left-big-img img');
const smallImg = document.querySelectorAll('.product-content-left-small-img img');

smallImg.forEach(function(imgItem, X) {
    imgItem.addEventListener('mouseover', function() {
        bigImg.src = imgItem.src;
    })
} )




const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.product-info-tab-item');
const panes = $$('.product-info-tab-pane');

const tabActive = $('.product-info-tab-item.active');
const line = $('.product-info-line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index) =>{
    const pane = panes[index];

    tab.onclick = function () {
        $('.product-info-tab-item.active').classList.remove('active');
        $('.product-info-tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';    

        this.classList.add('active');
        pane.classList.add('active');
    }
})