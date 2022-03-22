const body = document.getElementById('body');

let lang = document.querySelector('html').lang || 'en';
var dbText = {};

function translate() {
    if (lang == 'uz') {
        dbText = {
            menu: [
                `Asosiy`,
                `Ma'lumot`,
                `Loyihalar`,
                `Aloqa`,
            ],
            home: [
                'Frond End Dasturchi'
            ],
            lang: [
                'active',
                '',
            ],
            about: [
                `Assalomu alaykum, Jizzaxlik Fron End Dasturchi Hojiakbarman. 
                Men dasturlash va u bilan bog'liq barcha narsalarga qiziqaman.`,
                `Men TeamIT Academydagi "Web (Front End) Developer" kurslarida tahsil olaman.`,
                `Men buyuk insonlar bilan birgalikda ajoyib loyihalarni amalga oshirishga tayyorman.`
            ],
            project: [
                `saytga o'tish`,
                `Ushbu sayt `,
                ` marotaba sotildi.`,
                `Narxi `,
                ` so'm`
            ],
            contact: [
                `Ko'proq bilishni xohlaysizmi yoki shunchaki suhbatlashmoqchimisiz?
                Marhamat!`,
                `Habar jo'natish`,
                `&#10084; bilan qilindi. | 2022`
            ]
        }
    } else {
        dbText = {
            menu: [
                `Home`,
                `About me`,
                `Portfolio`,
                `Contacts`,
            ],
            home: [
                'Frond End Developer'
            ],
            lang: [
                '',
                'active',
            ],
            about: [
                `Hi, I'm Hojiakbar – Frond End Developer from Jizzax.
                I'm interested in programming and everything connected with it.`,
                `I'm studying at courses "Web (Frond End) Developer" in TeamIT Academy.`,
                `I ready to implement excellent projects
                with wonderful people.`
            ],
            project: [
                `go to the site`,
                `These site codes have been sold `,
                ` times.`,
                `The price is `,
                ` soums.`
            ],
            contact: [
                `Want to know more or just chat?
                You are welcome!`,
                `Send message`,
                `Made with &#10084; | 2022`
            ]
        }
    }

    body.innerHTML = `
    <header>
    <div class="container underline">
        <div class="d-flex" id="menu">
            <div class="d-inline-block">${dbText.menu[0]}</div>
            <div class="d-inline-block">${dbText.menu[1]}</div>
            <div class="d-inline-block">${dbText.menu[2]}</div>
            <div class="d-inline-block">${dbText.menu[3]}</div>
        </div>
    </div>
    <div class="container home-body">
        <div class="d-flex">
            <div class="d-inline-block text1">
                Hojiakbar
                <br>
                Turatov
            </div>
            <div class="d-inline-block text2" id="jobs">${dbText.home[0]}</div>
            <div class="d-inline-block">
                <div id="lang">
                    <span class="${dbText.lang[0]}">Uz</span>
                    <span class="active">
                        |
                    </span>
                    <span class="${dbText.lang[1]}">Eng</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container pb-5 mb-5">
        <div class="row">
            <div class="col-12">
                <img src="./xm/hojiakbar.jpg" alt="Hojiakbar Turatov" class="w-100">
            </div>
        </div>
    </div>
    </header>
    <section id="about">
    <div class="container">
        <div class="row justify-content-center">
            <div class="text1 col-auto">
                ${dbText.menu[1]}
            </div>
        </div>
        <div class="row justify-content-center text2">
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                ${dbText.about[0]}
            </div>
        </div>
        <div class="row justify-content-center text3">
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            ${dbText.about[1]}
            </div>
        <div class="row justify-content-center text4">
            <div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            ${dbText.about[2]}
            </div>
    </div>
    </section>
    <div id="portfolio">
    <div class="container">
        <div class="row justify-content-center">
            <div class="text1 col-auto">
            ${dbText.menu[2]}
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- Slider main container -->
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper" id="projects">
                        <!-- Slides -->
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- If we need navigation buttons -->
                    <!-- <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div> -->
                    <!-- If we need scrollbar -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                </div>
            </div>
        </div>
    </div>
    </div>
    <div id="contacts">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-auto text1">
            ${dbText.menu[3]}
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto text2">
                ${dbText.contact[0]}
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <a href="https://t.me/hojiakbar_turotov" class="btn btn-success text3">
                    ${dbText.contact[1]}
                </a>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto text4">
                ${dbText.contact[2]}
            </div>
        </div>
    </div>
    </div>
    `;
    evenLang();

}
function evenLang() {
    const btnLang = document.querySelectorAll(`#lang span`);
    btnLang[0].addEventListener('click', () => {
        lang = 'uz';
        translate();
        wrProject();

    })
    btnLang[2].addEventListener('click', () => {
        lang = 'en';
        translate();
        wrProject();
    })

}





translate();