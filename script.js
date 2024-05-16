function loader() {
  let tl = gsap.timeline();
  tl.to(".loader", {
    y: "-100%",
    duration: 0.5,
    delay: 0.6,
  });
  tl.to(".loader h1", {
    opacity: 0,
    duration: 0.3,
  });
}
loader();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true,
// });

let plus = document.querySelector("#plus");

let cross = document.querySelector("#cross");
cross.addEventListener("click", (e) => {
  cross.style.display = "none";
  plus.style.display = "block";

  gsap.to("#studies, #about", {
    x: "100%",
    opacity: 0,
    duration: 0.1,
  });

  gsap.to("#projects", {
    x: "250px",
    duration: 0.5,
    ease: "expo.ease",
  });
});

plus.addEventListener("click", (e) => {
  cross.style.display = "block";
  plus.style.display = "none";

  gsap.to("#studies, #about", {
    x: "0%",
    opacity: 1,
    display: "block",
  });

  gsap.to("#projects", {
    x: "0%",
  });
});

let page2 = document.querySelector(".page2");

let contents = document.querySelectorAll(".page2-content");
contents.forEach((content) => {
  content.addEventListener("mouseenter", (e) => {
    page2.style.backgroundImage = `url(${content.getAttribute("data-img")})`;
  });

  content.addEventListener("mouseleave", (e) => {
    page2.style.backgroundImage = `url()`;
  });
});
