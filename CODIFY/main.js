window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle(
        'window-scroll', window.scrollY > 0
    );
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');
    })
});

const openButton = document.querySelector('#open-menu-btn');
const closeButton = document.querySelector('#close-menu-btn');

openButton.addEventListener('click', ()=>{
    document.querySelectorAll('.nav-menu li').forEach(item =>{
        item.style.display = "flex";
    })
    openButton.style.display = "none";
    closeButton.style.display = "inline-block";
})

closeButton.addEventListener('click', ()=>{
    document.querySelectorAll('.nav-menu li').forEach(item =>{
        item.style.display = "none";
    })
    openButton.style.display = "inline-block";
    closeButton.style.display = "none";
})

