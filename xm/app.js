const dbApiUrl = "https://xm03.vercel.app/api/db.json";

let db;
let dbWiev;

function eventPortfolio(arr) {
    const project = document.getElementById(`projects`);
    for (let i = 0; i < arr.length; i++) {
        console.log(project.innerHTML)
        project.innerHTML += `
    <div class="swiper-slide">
        <img class="w-100" src="${arr[i].screenShots}" alt="">
        <div class="about-project">
            <span class="see">
                <a href="${arr[i].linkSite}" target="_blank">${dbText.project[0]}</a>
            </span>
            <span class="buyed">${dbText.project[1]}${arr[i].buySite}${dbText.project[2]}</span>
            <span class="prisece">${dbText.project[3]}${arr[i].price}${dbText.project[4]}.
            </span>
        </div>
    </div>
    `;
    }

}

function getProject() {
    return fetch(dbApiUrl)
        .then(response => response.json())
        .then(data => data)
}
// console.log(dbText)
async function wrProject() {
    db = await getProject();
    dbWiev = db.project.other;
    eventPortfolio(dbWiev)
    load_SwipperJs();
    menuScroll();   
}



wrProject();


function load_SwipperJs() {
    let body = document.querySelector('head');
    let swipperJsCND = document.createElement('script');
    let swipperJsModule = document.createElement('script');
    swipperJsCND.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
    swipperJsModule.type = 'module';
    swipperJsModule.innerHTML = `
    import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    `
    body.append(swipperJsCND);
    body.append(swipperJsModule);
}