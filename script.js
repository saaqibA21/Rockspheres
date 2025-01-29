// Shrink Navbar on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-container");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll(".glass");

function reveal() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
