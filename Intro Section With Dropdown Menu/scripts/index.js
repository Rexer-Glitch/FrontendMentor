const MENU_ICON_IMAGE = {
  open: "./images/icon-menu.svg",
  close: "./images/icon-close-menu.svg",
};

const HERO_IMAGE = {
  mobile: "./images/image-hero-mobile.png",
  desktop: "./images/image-hero-desktop.png",
};

const ARROW_IMAGE = {
  down: "./images/icon-arrow-down.svg",
  up: "./images/icon-arrow-up.svg",
};

let isMenuOpen = false;
let mousePos = { x: 0, y: 0 };
const menuWrapper = document.querySelector(".nav-menu");
const heroImage = document.querySelector(".cta-img img");
const navItemsWrapper = document.querySelector(".nav-items-wrapper");

//set nav items functionality
function toggleNavOpt(target) {
  if (target.tagName === "SPAN") {
    const arrow = target.childNodes[1];
    if (arrow) {
      const navItemsOpsWrapper = target.parentNode.childNodes[3];
      if (arrow.src.includes(ARROW_IMAGE.up.replace(".", ""))) {
        navItemsOpsWrapper.classList.remove("show-nav-item-opts");
        arrow.src = ARROW_IMAGE.down;
      } else {
        navItemsOpsWrapper.classList.add("show-nav-item-opts");
        arrow.src = ARROW_IMAGE.up;
      }
    }
  }
}

navItemsWrapper.addEventListener("click", ({ target }) => {
  toggleNavOpt(target);
});

//set toggle menu functionality
function toggleMenu() {
  if (!isMenuOpen) {
    menuWrapper.childNodes[0].src = MENU_ICON_IMAGE.close;
    navItemsWrapper.classList.add("show-nav-items");
  } else {
    menuWrapper.childNodes[0].src = MENU_ICON_IMAGE.open;
    navItemsWrapper.classList.remove("show-nav-items");
  }
  isMenuOpen = !isMenuOpen;
}

menuWrapper.addEventListener("click", toggleMenu);
window.addEventListener("click", ({ target }) => {
  if (mousePos.x < innerWidth * 0.35) {
    isMenuOpen = true;
    toggleMenu();
  }

//remove subnavs
  if (
    target.tagName !== "SPAN" &&
    !target.classList.contains("nav-item-opt") &&
    !target.parentNode.classList.contains("nav-item-opt") &&
    !target.parentNode.parentNode.classList.contains("nav-item-opt")
  ) {
    const spans = [...document.querySelectorAll("nav span")];
    spans.forEach(t => {
        const navItemsOpsWrapper = t.parentNode.childNodes[3];
        if(navItemsOpsWrapper && navItemsOpsWrapper.classList.contains("show-nav-item-opts"))
        toggleNavOpt(t);
    })
  }
});

window.addEventListener("mousemove", ({ clientX, clientY }) => {
  mousePos = { x: clientX, y: clientY };
});

//set hero image based on screen size
function setHeroImageByScreenSize() {
  if (window.innerWidth < 850) {
    heroImage.src = HERO_IMAGE.mobile;
  } else {
    heroImage.src = HERO_IMAGE.desktop;
  }
}

window.addEventListener("resize", setHeroImageByScreenSize);
setHeroImageByScreenSize();
