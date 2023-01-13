const buttonLeft = document.querySelector(".arrow-left");
const buttonRight = document.querySelector(".arrow-right");
const scrollContainer = document.querySelector(".grid-container");
const buttonOpenPopup = document.querySelectorAll(".menu-link a");
const elementPopup = document.querySelectorAll(".popup-container");
const buttonClosePopup = document.querySelectorAll(".popup-close-button");
const header = document.querySelector(".header");
const navTitle = header.querySelector(".nav-title");
const main = document.querySelector(".main");
const buttonOpenInfo = document.querySelectorAll(".nav-link a");
const elementInfo = document.querySelectorAll(".info-container");
const buttonCloseInfo = document.querySelectorAll(".info-close-button");
const menu = document.querySelector(".menu");
const imagesContainer = document.querySelectorAll(".grid-column-image");
const contentPopup = document.querySelector(".popup-content");

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
}

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
    });
});

buttonClosePopup.forEach(btn => {
    btn.addEventListener("click", () => {
        elementPopup.forEach(element => {
            element.classList.remove("open");
        });
        header.classList.remove("overlay");
        if (main) {
            main.classList.remove("overlay");
        }
        if (scrollContainer) {
            scrollContainer.classList.remove("overlay");
        }
        if (navTitle) {
            navTitle.style.visibility = "visible"
        }
        if (contentPopup) {
            console.log("yes")
            contentPopup.scrollTop
        }
        buttonOpenPopup.forEach(btn => {
            btn.classList.remove("current");
        })
    });
});

buttonOpenInfo.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.pointerEvents = "none";
        btn.classList.add("current");
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
        btnOpen.classList.remove("current");
        menu.classList.remove("hide");
        btn.classList.remove("show");
    });
});

for (let i = 0; i < imagesContainer.length; i++) {
    const container = imagesContainer[i];
    const imagesArray = container.querySelectorAll("figure");
    imagesArray.forEach(image => {
        let clone = image.cloneNode(true);
        contentPopup.appendChild(clone);
    });

    images = container.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("click", () => {
            elementPopup.forEach(element => {
                element.classList.add("open");
            });
            scrollContainer.classList.add("overlay");
            header.classList.add("overlay");
            setTimeout(() => {
                navTitle.style.visibility = "hidden";
            }, 400);
        })
    })
}

