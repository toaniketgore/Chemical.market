    let lastScrollY = window.scrollY;
    const navBar = document.querySelector('.navigation-bar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down, hide the navbar
            navBar.classList.add('hidden');
        } else {
            // Scrolling up, show the navbar
            navBar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

