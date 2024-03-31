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

// scroll animation

ScrollTrigger.batch(".title", {
  onEnter: (batch) => {
    gsap.from(batch, {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      y: "0",
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

/*--------section lstest ------------- */

const latestCards = document.querySelectorAll(".latest__card");

latestCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.1, duration: 0.5 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.5 });
  });
});

/* ---------section popular------------------ */

ScrollTrigger.batch(".popular__recipe", {
  onEnter: (batch) => {
    gsap.from(batch, {
      x: "-100%",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      x: "0%",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

ScrollTrigger.batch(".orange__title", {
  onEnter: (batch) => {
    gsap.from(batch, {
      y: "50px",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      y: "0",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

/*---------section combination-----------*/

gsap.from(".author__top", {
  scrollTrigger: {
    trigger: ".author__top",
    start: "30% center",
    end: "+=300px",
  },
  scale: 0,
  transformOrigin: "top center",
  ease: "none",
  stagger: 0.2,
});

ScrollTrigger.batch(".combination__title", {
  onEnter: (batch) => {
    gsap.from(batch, {
      y: "30px",
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
  onLeaveBack: (batch) => {
    gsap.to(batch, {
      y: "0",
      opacity: 1,
      duration: 2,
      stagger: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});

/*----section trending--------*/

const trendingBlocks = document.querySelectorAll(".trending__block");

trendingBlocks.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    gsap.to(block, { scale: 1.1, duration: 0.5 });
  });
  block.addEventListener("mouseleave", () => {
    gsap.to(block, { scale: 1, duration: 0.5 });
  });
});
