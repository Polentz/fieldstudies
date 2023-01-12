const buttonLeft = document.querySelector(".arrow-left");
const buttonRight = document.querySelector(".arrow-right");
const scrollContainer = document.querySelector(".grid-container");
const buttonOpenPopup = document.querySelectorAll(".menu-link a");
const elementPopup = document.querySelectorAll(".popup-container");
const buttonClosePopup = document.querySelectorAll(".popup-close-button");
const overlaySections = document.querySelectorAll(".main, .header");
const buttonOpenInfo = document.querySelectorAll(".nav-title a");
const elementInfo = document.querySelectorAll(".info-container");
const buttonCloseInfo = document.querySelectorAll(".info-close-button");
const menu = document.querySelector(".menu");
const imagesContainer = document.querySelectorAll(".grid-column");

const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight)
documentHeight();

const horizontalScroll = (buttonLeft, buttonRight, scrollContainer) => {
    const distance = 332;
    buttonLeft.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -distance,
            behavior: "smooth"
        });
    });
    buttonRight.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: distance,
            behavior: "smooth"
        });
    });
};

buttonOpenPopup.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnTarget = btn.dataset.target;
        elementPopup.forEach(element => {
            if (btnTarget === element.id) {
                element.classList.add("open");
            };
        });
        overlaySections.forEach(section => {
            section.classList.add("overlay");
        });
    });
});

buttonClosePopup.forEach(btn => {
    btn.addEventListener("click", () => {
        elementPopup.forEach(element => {
            element.classList.remove("open");
        });
        overlaySections.forEach(section => {
            section.classList.remove("overlay");
        });
    });
});

buttonOpenInfo.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.pointerEvents = "none";
        const btnTarget = btn.dataset.target;
        const btnClose = btn.nextElementSibling;
        elementInfo.forEach(element => {
            if (btnTarget === element.id) {
                element.classList.add("open");
            } else {
                element.classList.remove("open");
            }
        });
        menu.classList.add("hide");
        btnClose.classList.add("show");
    });
});

buttonCloseInfo.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnTarget = btn.dataset.target;
        const btnOpen = btn.previousElementSibling;
        elementInfo.forEach(element => {
            if (btnTarget === element.id) {
                element.classList.remove("open");
            };
        });
        btnOpen.style.pointerEvents = "all";
        btn.classList.remove("show");
    });
});

if (scrollContainer) {
    horizontalScroll(buttonLeft, buttonRight, scrollContainer);
}

for (let i = 0; i < imagesContainer.length; i++) {
    const container = imagesContainer[i];
    const images = container.querySelectorAll("img");
    let arr = Array.prototype.slice.call(images);
    console.log(arr);
}