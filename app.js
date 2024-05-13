let projectsBtn = document.querySelector(".projects-btn");

projectsBtn.addEventListener("click", () => {
    projectScroll();
});

function projectScroll() {
    let projects = document.querySelector(".projects");
    let projectsPosition = projects.offsetTop;
    window.scrollTo({
        top: projectsPosition - 150,
        behavior: "smooth"
    });
}

let connectionBtn = document.querySelector(".connection-btn");

connectionBtn.addEventListener("click", () => {
    connectionScroll();
});

function connectionScroll() {
    let connection = document.querySelector(".handels");
    let connectionPosition = connection.offsetTop;
    window.scrollTo({
        top: connectionPosition - 130,
        behavior: "smooth"
    });
}

let aboutMeBtn = document.querySelector(".about-mee");

aboutMeBtn.addEventListener("click", () => {
    aboutMeScroll();
});

function aboutMeScroll() {
    let aboutMe = document.querySelector(".main");
    let aboutMePosition = aboutMe.offsetTop;
    window.scrollTo({
        top: aboutMePosition - 130,
        behavior: "smooth"
    });
}

let projects = document.querySelectorAll(".proj");
let body = document.querySelector("body");

for (project of projects) {
    project.addEventListener("click", function () {
        let bodyWidth = body.offsetWidth;
        if (bodyWidth < 721) {
            alert("Please open this project on your PC for better view.");
        }
        let id = this.getAttribute("id");
        clickBtn(id);
    });
}

function clickBtn(id) {
    if (id == 1) {
        window.location.href = "https://quantumsn.github.io/amazon-clone/";
    } else if (id == 2) {
        window.location.href = "https://quantumsn.github.io/Tic-Tac-Toe-Game/";
    } else if (id == 3) {
        window.location.href = "https://quantumsn.github.io/simon-says-game/";
    } else if (id == 4) {
        window.location.href = "https://quantumsn.github.io/rock-paper-scissors-game/";
    }
}

let socialMedias = document.querySelectorAll(".media");

for (handels of socialMedias) {
    handels.addEventListener("click", function () {
        let id = this.getAttribute("id");
        connectSocial(id);
    });
}

function connectSocial(id) {
    if (id == "insta") {
        window.location.href = "https://www.instagram.com/quantum_sn/";
    } else if (id == "twitter") {
        window.location.href = "https://twitter.com/NayakSampr24896";
    } else if (id == "facebook") {
        window.location.href = "not found";
    } else if (id == "github") {
        window.location.href = "https://github.com/quantumsn";
    } else if (id == "linkedin") {
        window.location.href = "https://www.linkedin.com/in/samprity-nayak-85175826b/";
    }
}
