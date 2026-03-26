// Toggle Menu Placeholder
    function toggleMenu() {
        console.log("Toggle Menu");
    }

    // â”€â”€ Vivum Carousel Logic â”€â”€
    let vivumIndex = 0;
    const vivumSlides = document.querySelectorAll('#philosophyCarousel .philosophy-carousel-slide').length;

    function moveCarousel(direction) {
        vivumIndex += direction;
        if (vivumIndex < 0) vivumIndex = vivumSlides - 1;
        if (vivumIndex >= vivumSlides) vivumIndex = 0;
        const inner = document.querySelector('#philosophyCarousel .philosophy-carousel-inner');
        if (inner) {
            inner.style.transform = `translateX(-${vivumIndex * 100}%)`;
        }
    }

    // â”€â”€ S'allier Carousel Logic â”€â”€
    let sallierIndex = 0;
    const sallierSlides = document.querySelectorAll('#sallierCarousel .philosophy-carousel-slide').length;

    function moveSallierCarousel(direction) {
        sallierIndex += direction;
        if (sallierIndex < 0) sallierIndex = sallierSlides - 1;
        if (sallierIndex >= sallierSlides) sallierIndex = 0;
        const inner = document.getElementById('sallierCarouselInner');
        if (inner) {
            inner.style.transform = `translateX(-${sallierIndex * 100}%)`;
        }
    }

    // â”€â”€ Smooth scroll for sidebar links â”€â”€
    document.querySelectorAll('.sidebar-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 120,
                    behavior: 'smooth'
                });
                document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // â”€â”€ Scroll spy for sidebar â”€â”€
    window.addEventListener('scroll', () => {
        const sections = ['vivum', 'sallier', 'profile', 'place', 'reserve'];
        let current = '';

        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = id;
                }
            }
        });

        document.querySelectorAll('.sidebar-link, .tab-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
