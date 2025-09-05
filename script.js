console.log("Halo Ilyas, website kamu sudah jalan!");

// navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// animasi fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold : 0.2,
    rootMargin : "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// dark mode toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

// ganti ikon sesuai mode
    if (document.body.classList.contains('dark')) {
        toggleBtn.textContent="☀️";
    } else {
        toggleBtn.textContent="🌙";
    }
});