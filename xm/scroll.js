function menuScroll(){
    const header = document.querySelector('header');
    const about = document.getElementById(`about`);
    const portfolio = document.getElementById(`portfolio`);
    const contacts = document.getElementById(`contacts`);
    const menu = document.querySelectorAll(`#menu .d-inline-block`);
    
    menu[0].addEventListener('click', ()=>{
        window.scrollTo(0, 0);
    })
    menu[1].addEventListener('click', ()=>{
        window.scrollTo(0, header.scrollHeight + 50);
    })
    menu[2].addEventListener('click', ()=>{
        window.scrollTo(0, header.scrollHeight + about.scrollHeight + 50);
    })
    menu[3].addEventListener('click', ()=>{
        window.scrollTo(0, header.scrollHeight + about.scrollHeight + portfolio.scrollHeight + 50);
    })
}