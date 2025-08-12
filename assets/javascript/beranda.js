function setLanguage(lang) {
    document.getElementById('current-lang').innerText = lang;
    // Di sini bisa ditambahkan logika ganti bahasa (redirect / fetch data)
    console.log("Bahasa dipilih:", lang);
}
// Enhanced Interactive Features
document.addEventListener('DOMContentLoaded', function () {
    // Loading Animation
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 200);
    });

    // Newsletter subscription with validation
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');

    newsletterBtn.addEventListener('click', function () {
        const email = newsletterInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showNotification('Silakan masukkan alamat email Anda.', 'warning');
        } else if (!emailRegex.test(email)) {
            showNotification('Format email tidak valid.', 'error');
        } else {
            showNotification('Terima kasih telah berlangganan! Kami akan mengirimkan informasi terbaru ke email Anda.', 'success');
            newsletterInput.value = '';
        }
    });

    // Enhanced service card interactions
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const text = this.querySelector('span');
            if (text) {
                const service = text.textContent.trim();
                showNotification(`Mengarahkan ke layanan: ${service}`, 'info');
                // Simulate navigation
                setTimeout(() => {
                    console.log('Navigating to:', service);
                }, 1000);
            }
        });

        // Add keyboard navigation
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // // Enhanced slider functionality
    // let currentSlide = 0;
    // const slides = [
    //     {
    //         title: 'JANTUNG TERPADU',
    //         description: 'Layanan Jantung Terpadu adalah pendekatan holistik dalam pelayanan kesehatan yang ditujukan khusus untuk masalah dan gangguan pada jantung dengan teknologi medis terkini.',
    //         image: 'assets/images/radiologi.jpg'
    //     },
    //     {
    //         title: 'PARU-PARU TERPADU',
    //         description: 'Pelayanan komprehensif untuk kesehatan paru-paru dengan fasilitas diagnostik canggih dan tim dokter spesialis yang berpengalaman.',
    //         image: 'assets/images/paru-paru.jpeg'
    //     },
    //     {
    //         title: 'GINJAL TERPADU',
    //         description: 'Layanan kesehatan ginjal lengkap termasuk hemodialisis, transplantasi, dan pencegahan penyakit ginjal kronik.',
    //         image: 'assets/images/ginjal.jpg'
    //     }
    // ];

    // function updateSlider(index) {
    //     const sliderText = document.querySelector('.slider-text');
    //     const sliderImage = document.querySelector('.slider-image-semantic');

    //     if (sliderText && sliderImage) {
    //         sliderText.querySelector('h3').textContent = slides[index].title;
    //         sliderText.querySelector('p').textContent = slides[index].description;
    //         sliderImage.src = slides[index].image;
    //         sliderImage.alt = slides[index].title;
    //     }
    // }

    // document.querySelectorAll('.slider-btn').forEach((btn, index) => {
    //     btn.addEventListener('click', function () {
    //         if (index === 0) {
    //             currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    //         } else {
    //             currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    //         }
    //         updateSlider(currentSlide);
    //     });
    // });

    // // Auto-slide functionality
    // setInterval(() => {
    //     currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    //     updateSlider(currentSlide);
    // }, 8000);

    // Enhanced article interactions
    // document.querySelectorAll('.article-link').forEach(link => {
    //     link.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const title = this.closest('.article-card').querySelector('.article-title').textContent;
    //         showNotification(`Membuka artikel: ${title.substring(0, 50)}...`, 'info');
    //     });
    // });

    // Back to top functionality
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('d-none');
        } else {
            backToTopBtn.classList.add('d-none');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Enhanced smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for sticky header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                }
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Doctor search functionality
    const doctorSearchInput = document.querySelector('.doctor-search input');
    const doctorSearchBtn = document.querySelector('.doctor-search button');

    function searchDoctor() {
        const query = doctorSearchInput.value.trim();
        if (query) {
            showNotification(`Mencari dokter: "${query}"`, 'info');
            // Simulate search
            setTimeout(() => {
                showNotification(`Ditemukan 3 dokter untuk pencarian "${query}"`, 'success');
            }, 1500);
        } else {
            showNotification('Silakan masukkan nama dokter atau spesialisasi', 'warning');
        }
    }

    if (doctorSearchBtn) {
        doctorSearchBtn.addEventListener('click', searchDoctor);
    }

    if (doctorSearchInput) {
        doctorSearchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchDoctor();
            }
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.custom-notification');
        existingNotifications.forEach(notif => notif.remove());

        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed custom-notification`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
        notification.innerHTML = `
                    <div class="d-flex align-items-center">
                        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : type === 'error' ? 'times-circle' : 'info-circle'} me-2"></i>
                        <span style="font-size: 0.9rem;">${message}</span>
                        <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="alert"></button>
                    </div>
                `;

        document.body.appendChild(notification);

        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Lazy loading for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    console.log('RS Jayapura website fully loaded and responsive!');
});

// Performance monitoring
window.addEventListener('load', function () {
    const loadTime = performance.now();
    console.log(`Page loaded in ${Math.round(loadTime)}ms`);
});

// Category Filter Functionality
document.addEventListener('DOMContentLoaded', function () {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const mitraCards = document.querySelectorAll('.mitra-card');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            // Filter cards
            mitraCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';

                    // Animate in
                    setTimeout(() => {
                        card.style.transition = 'all 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';

                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll animation for cards on load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    mitraCards.forEach(card => {
        observer.observe(card);
    });
});