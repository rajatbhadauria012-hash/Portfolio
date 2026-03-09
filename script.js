// script.js - Typing effect
document.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.getElementById('typing-name');
    const roleEl = document.getElementById('typing-role');

    const fullName = "Aditya Bhadoriya";
    const roles = [
        "Video Editor",
        "Reels Creator",
        "Shorts Specialist",
        "Motion Graphics Artist",
        "Colorist"
    ];

    let nameIndex = 0;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        // Type name first (only once)
        if (nameIndex < fullName.length) {
            nameEl.textContent += fullName[nameIndex];
            nameIndex++;
            setTimeout(type, 80);
            return;
        }

        // Then cycle roles
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 90;

        if (!isDeleting && charIndex <= currentRole.length) {
            roleEl.textContent = currentRole.substring(0, charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else if (isDeleting && charIndex >= 0) {
            roleEl.textContent = currentRole.substring(0, charIndex);
            charIndex--;
            setTimeout(type, speed);
        } else {
            if (!isDeleting) {
                setTimeout(() => { isDeleting = true; type(); }, 2000);
            } else {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                charIndex = 0;
                setTimeout(type, 600);
            }
        }
    }

    type();

    // Optional subtle parallax on scroll
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        document.querySelector('.layer-2').style.transform = `translateY(${scroll * 0.25}px)`;
        document.querySelector('.layer-3').style.transform = `translateY(${scroll * 0.1}px)`;
    });
});