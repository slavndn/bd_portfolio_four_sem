const parallaxSections = document.querySelectorAll('.parallax-section');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    parallaxSections.forEach(section => {
        let speed = section.getAttribute('data-speed');
        section.style.transform = `translateY(${scroll * speed}px)`;
    });
});
