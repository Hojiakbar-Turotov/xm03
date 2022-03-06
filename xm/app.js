const dbApiUrl = "https://xm03.vercel.app/api/db.json";
const project = document.getElementById(`projects`);

let db;

function getProject() {
    return fetch(dbApiUrl)
        .then(response => response.json())
        .then(data => data)
}

async function wrProject() {
    db = await getProject();
    let wrText = '';
    for (let i = 0; i - 1 <= db.project.length; i++) {
        project.innerHTML += `
    <div class="swiper-slide">
        <img src="${db.project[0].screenShots}" alt="">
        <div class="about-project">
            <span class="see">
                <a href="${db.project[0].linkSite}">Saytga o'tish</a>
            </span>
            <span class="buyed">Ushbu proyektim ${db.project[0].buySite} marota sotildi</span>
            <span class="prisece">Siz ushbu saytni ${db.project[0].price}so'mga
                <a href="https://t.me/hojiakbar_turotov">olishingiz</a> mumkin
            </span>
        </div>
    </div>
    `;
    }
    console.log(wrText)
    // project.innerHTML = wrText;
}


wrProject()