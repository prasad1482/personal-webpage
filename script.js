
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll Animation
        const sections = document.querySelectorAll('.section-hidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));

        // CV Download (Placeholder - Replace with actual CV file)
        function downloadCV() {
            const link = document.createElement('a');
            link.href = 'Prasad_CV.pdf'; // Replace with actual CV file path (e.g., './cv.pdf')
            link.download = 'Jnana_Satya_Prasad_CV.pdf';
            link.click();
            alert('CV download initiated!.');
        }
