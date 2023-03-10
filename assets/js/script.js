const buttonLeft = document.querySelector(".arrow-left");
const buttonRight = document.querySelector(".arrow-right");
const scrollContainer = document.querySelector(".grid-container");
const buttonOpenPopup = document.querySelectorAll(".menu-link a, span.--txt-link, .--open-popup a");
const elementPopup = document.querySelectorAll(".popup-container");
const buttonClosePopup = document.querySelectorAll(".popup-close-button");
const header = document.querySelector(".header");
const navTitle = header.querySelector(".nav-title");
const main = document.querySelector(".main");
const nav = document.querySelectorAll(".nav-link");
const elementInfo = document.querySelectorAll(".info-container");
const buttonCloseInfo = document.querySelectorAll(".info-close-button");
const menu = document.querySelector(".menu");
const imagesContainer = document.querySelectorAll(".grid-column-content");
const contentPopup = document.querySelector(".popup-content");
const cursor = document.querySelector("canvas");

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

if (scrollContainer) {
    horizontalScroll(buttonLeft, buttonRight, scrollContainer);
};

buttonOpenPopup.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("current");
        const btnTarget = btn.dataset.target;
        elementPopup.forEach(element => {
            if (btnTarget === element.id) {
                element.classList.add("open");
            };
        });
        header.classList.add("overlay");
        main.classList.add("overlay");
        elementInfo.forEach(el => {
            el.classList.add("overlay");
        });
        cursor.classList.add("hide");
    });
});

buttonClosePopup.forEach(btn => {
    btn.addEventListener("click", () => {
        elementPopup.forEach(element => {
            const wrapper = element.querySelector(".popup-content");
            wrapper.scroll({
                top: 0,
                left: 0
            });
            element.classList.remove("open");
        });
        header.classList.remove("overlay");
        if (main) {
            main.classList.remove("overlay");
        };
        if (scrollContainer) {
            scrollContainer.classList.remove("overlay");
        };
        elementInfo.forEach(element => {
            element.classList.remove("overlay");
        });
        if (navTitle) {
            navTitle.style.visibility = "visible"
        };
        buttonOpenPopup.forEach(btn => {
            btn.classList.remove("current");
        });
        if (cursor.classList.contains("hide")) {
            cursor.classList.remove("hide");
        }
        if (btn.classList.contains("--special")) {
            cursor.classList.add("hide");
        }
    });
});

nav.forEach(n => {
    const link = n.querySelector("a");
    const close = n.querySelector(".info-close-button");
    const btnTarget = link.dataset.target;
    link.addEventListener("click", () => {
        close.style.opacity = "1";
        close.style.pointerEvents = "all";
        elementInfo.forEach(element => {
            if (btnTarget === element.id) {
                element.classList.add("open");
                if (!menu.classList.contains("hide")) {
                    menu.classList.add("hide");
                };
            };
        });
        cursor.classList.add("hide");
    });
    close.addEventListener("click", () => {
        elementInfo.forEach(element => {
            const wrapper = element.querySelector(".info-wrapper");
            wrapper.scroll({
                top: 0,
                left: 0
            });
            if (btnTarget === element.id) {
                element.classList.remove("open");
                close.style.opacity = "0";
                close.style.pointerEvents = "none";
                if (menu.classList.contains("hide")) {
                    menu.classList.remove("hide");
                };
            };
        });
        if (cursor.classList.contains("hide")) {
            cursor.classList.remove("hide");
        }
    });
});

imagesContainer.forEach(container => {
    const imagesArray = container.querySelectorAll("img");
    imagesArray.forEach(img => {
        img.addEventListener("click", () => {
            let clone = img.cloneNode(true);
            contentPopup.appendChild(clone);
            elementPopup.forEach(element => {
                element.classList.add("open");
            });
            scrollContainer.classList.add("overlay");
            header.classList.add("overlay");
            setTimeout(() => {
                navTitle.style.visibility = "hidden";
            }, 400);
        });
    });
    buttonClosePopup.forEach(btn => {
        btn.addEventListener("click", () => {
            const images = contentPopup.querySelectorAll("img");
            images.forEach(img => {
                img.remove()
            })
        });
    });
});

