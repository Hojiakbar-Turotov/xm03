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
    for (let i = 0; i < db.project.length; i++) {
        project.innerHTML += `
    <div class="swiper-slide">
        <img class="w-100" src="${db.project[i].screenShots}" alt="">
        <div class="about-project">
            <span class="see">
                <a href="${db.project[i].linkSite}" target="_blank">go to the site</a>
            </span>
            <span class="buyed">These site codes have been sold ${db.project[i].buySite} times.</span>
            <span class="prisece">The price is ${db.project[i].price} soums.
            </span>
        </div>
    </div>
    `;
    }
    console.log(wrText)
    // project.innerHTML = wrText;
}


wrProject()