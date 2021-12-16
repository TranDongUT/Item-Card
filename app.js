const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listSize = $$('.item-size span');
listSize.forEach(e => {
    e.addEventListener('click',() => {
        $('.item-size .active-size').classList.remove('active-size');
        e.classList.add('active-size');
    })
});

const listColor = $$('.item-color span');
listColor.forEach(e => {
    e.addEventListener('click',() => {
        $('.item-color .active-color').classList.remove('active-color');
        e.classList.add('active-color');
    })
});

const listIcon = $$('.icon');
listIcon.forEach(e => {
    e.addEventListener('click',() => {
        e.classList.toggle('active-icon');
    })
});