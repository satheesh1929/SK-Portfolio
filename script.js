document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // -------------------------------------------------------
    // Mobile Menu Logic
    // -------------------------------------------------------
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            // Change icon to X (handled by re-rendering or swapping SVG, here strict swap for simplicity)
            menuBtn.innerHTML = `<i data-lucide="x"></i>`;
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
        }
        lucide.createIcons(); // Re-render new icon
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            menuBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });

    // -------------------------------------------------------
    // Hero Text Rotator
    // -------------------------------------------------------
    const titles = [
        "Tech Head | Web & AI Solutions Builder",
        "Building Scalable Web & AI Systems",
        "Bridging Agriculture & Technology",
        "From Idea to Execution",
        "AI Solutions for Real-World Problems",
        "Learning. Building. Growing."
    ];

    let currentTitleIndex = 0;
    const titleElement = document.getElementById('hero-title');

    // Initial opacity set in CSS class

    setInterval(() => {
        // Fade out
        titleElement.style.opacity = '0';
        titleElement.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            // Update text
            currentTitleIndex = (currentTitleIndex + 1) % titles.length;
            titleElement.innerText = titles[currentTitleIndex];

            // Fade in
            titleElement.style.opacity = '1';
            titleElement.style.transform = 'translateY(0)';
        }, 500); // Wait for fade out transition (0.5s)

    }, 3000);

    // -------------------------------------------------------
    // Scroll Animations (Intersection Observer)
    // -------------------------------------------------------
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target); // Trigger once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
