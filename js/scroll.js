// const scrollElements = document.querySelectorAll(".js-scroll");

// // scrollElements.forEach((el) => {
// //   el.style.opacity = 0;
// // });

// const elementInView = (el, percentageScroll = 100) => {
//   const elementTop = el.getBoundingClientRect().top;
//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) *
//       percentageScroll
//   );
// };

// //to display the element when it is in view on scrolling
// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 100)) {
//       displayScrollElement(el);
//     }
//   });
// };

// //to return the element to its default state after it is no longer in view.

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 100)) {
//       displayScrollElement(el);
//     } else {
//       hideScrollElement(el);
//     }
//   });
// };

// window.addEventListener("scroll", () => {
//   handleScrollAnimation();
// });

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});