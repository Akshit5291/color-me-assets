function toggleMenu() {
        // Simple toggle for mobile menu (synchronizing with about.html logic)
        const hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('active');
        console.log("Mobile Menu Toggle");
    }

    function toggleOther() {
        const box = document.getElementById('menuOtherBox');
        box.classList.toggle('open');
    }
