console.clear();

const { gsap } = window;

const tl = gsap.timeline({
  defaults: {
    ease: "expo.inOut",
    stagger: 0.12,
    duration: 3,
  },
  repeat: -1,
});

tl.to(".cube", { rotateY: -90 }, 0);
tl.to(".cube .cube__face--front", { skewX: 30 }, 0);
tl.from(".cube .cube__face--right", { skewX: 30 }, 0.15);
tl.to(".cube .cube__face--front", { backgroundPosition: "0% 50%" }, 0);
tl.to(".cube .cube__face--right", { backgroundPosition: "0% 50%" }, 0.15);

// Burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menu.classList.remove("header__nav_active");
        });
      }
    }
  }
})();
