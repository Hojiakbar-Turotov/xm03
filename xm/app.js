function projectWiev() {
    const dbApiUrl = "https://xm03.vercel.app/api/db.json";
    const project = document.getElementById(`projects`);

    let db;
    let dbWiev;
    function getProject() {
        return fetch(dbApiUrl)
            .then(response => response.json())
            .then(data => data)
    }
    // console.log(dbText)
    async function wrProject() {
        db = await getProject();
        dbWiev = db.project.others;
        for (let i = 0; i < dbWiev.length; i++) {
            project.innerHTML += `
        <div class="swiper-slide">
            <img class="w-100" src="${dbWiev[i].screenShots}" alt="">
            <div class="about-project">
                <span class="see">
                    <a href="${dbWiev[i].linkSite}" target="_blank">${dbText.project[0]}</a>
                </span>
                <span class="buyed">${dbText.project[1]}${dbWiev[i].buySite}${dbText.project[2]}</span>
                <span class="prisece">${dbText.project[3]}${dbWiev[i].price}${dbText.project[4]}.
                </span>
            </div>
        </div>
        `;
        }
        // console.log(wrText)
        // project.innerHTML = wrText;
    }

    wrProject();

}
projectWiev();
