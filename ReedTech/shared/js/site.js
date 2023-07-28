const retNavOptionContainers = document.getElementsByClassName("navOption-Container");
const retNavIcons = document.getElementsByClassName("navImage-Container");
const retNavLinks = document.getElementsByClassName("navLinkText-Container");
const retClpButton = document.getElementById("collapseButton");
const wthrSrchButton = document.getElementById("wthrsrch-Btn");
const retLinks = document.getElementsByTagName("link");
const navLinks = document.getElementsByClassName("crsl-NavItem");
const navArrows = document.getElementsByClassName("crslSlider-Container");
const apiKey = "4aeb3d5d2d2d845047b4039504553b8b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";



wthrSrchButton.addEventListener("click", function (e) {
    checkWeather();
});

for (let i = 0; i < retNavOptionContainers.length; i++){
    const item = retNavOptionContainers[i];
    const returnedIcon = retNavIcons[i];
    const returnedLink = retNavLinks[i];

    item.addEventListener("mouseenter", function (event) {
        returnedIcon.style = "color: #E5A00D";
        returnedLink.style = "color: #E5A00D";
    });

    item.addEventListener("mouseleave", function (event) {
        returnedIcon.style = "";
        returnedLink.style = "";
    });
}

retClpButton.addEventListener("click", function(e){
    if (retClpButton.title == "lightSide"){
        retClpButton.title = "darkSide";
        for (let i = 0; i < retLinks.length; i++) {
            let filePath = retLinks[i].href.substring(0, retLinks[i].href.lastIndexOf('/') + 1);
            let siteVersion = getFileName(retLinks[i].href);
            if (siteVersion == "mainOmni_Light.css"){
                retLinks[i].href = filePath + "mainOmni_Dark.css";
            }
        }
    }
    else{
        retClpButton.title = "lightSide";
        for (let i = 0; i < retLinks.length; i++) {
            let filePath = retLinks[i].href.substring(0, retLinks[i].href.lastIndexOf('/') + 1);
            let siteVersion = getFileName(retLinks[i].href);
            if (siteVersion == "mainOmni_Dark.css"){
                retLinks[i].href = filePath + "mainOmni_Light.css";
            }
        }
    }

});

for (let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', (event) =>{
        const nxtImg = document.querySelector(event.target.getAttribute('href'));
        if (!nxtImg) return;
    
        if (nxtImg.scrollIntoViewIfNeeded) {
            event.preventDefault();
            nxtImg.scrollIntoViewIfNeeded();
        } else if (nxtImg.scrollIntoView) {
            event.preventDefault();
            nxtImg.scrollIntoView();
        }
    });
}

for (let i = 0; i < navArrows.length; i++){
    navArrows[i].addEventListener('click', (event) =>{
        const nxtImg = document.querySelector(event.target.getAttribute('href'));
        if (!nxtImg) return;
    
        if (nxtImg.scrollIntoViewIfNeeded) {
            event.preventDefault();
            nxtImg.scrollIntoViewIfNeeded();
        } else if (nxtImg.scrollIntoView) {
            event.preventDefault();
            nxtImg.scrollIntoView();
        }
    });
}

function getFileName(filePath) {
    return filePath.substring(filePath.lastIndexOf('/') + 1);
}

async function  checkWeather() {
    let userSearch = document.getElementById("weatherSearchInput").value;
    const response = await fetch(`${apiUrl}${userSearch}` + `&appid=${apiKey}`);
    let data = await response.json();

    document.getElementById("tempHeader").innerHTML = Math.round(data.main.temp) + "°F";
}