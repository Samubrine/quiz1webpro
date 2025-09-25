// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Update active navigation link based on current page
    let targetPage = currentPage;
    if (currentPage === 'index' || currentPage === '') {
        targetPage = 'home';
    }
    
    // Find and activate the correct navigation link
    const currentNavLink = document.querySelector(`[data-page="${targetPage}"]`);
    
    if (currentNavLink) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        // Add active class to current page link
        currentNavLink.classList.add('active');
    }
    
    // No need to prevent default - let normal navigation work
    // The HTML href attributes will handle navigation naturally
    
    // Initialize navbar scroll effects for all pages
    initNavbarEffects();
    
    // Page-specific functionality
    if (targetPage === 'home' || targetPage === 'index' || targetPage === '') {
        initLandingEffects();
    } else if (targetPage === 'hometown') {
        initHometownEffects();
    } else if (targetPage === 'food') {
        initFoodEffects();
    } else if (targetPage === 'tourist') {
        initTouristEffects();
    }
});

// Navbar scroll effects for all pages
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Hometown page scroll effects and animations
function initHometownEffects() {
    // Parallax scrolling effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.hero-malang');
        
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Scroll reveal animations for description cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe description cards for scroll reveal
    setTimeout(() => {
        const descriptionCards = document.querySelectorAll('.description-card');
        descriptionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.8s ease ${index * 0.2}s`;
            observer.observe(card);
        });
        
        // Observe section title
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.style.opacity = '0';
            sectionTitle.style.transform = 'translateY(30px)';
            sectionTitle.style.transition = 'all 1s ease 0.3s';
            observer.observe(sectionTitle);
        }
    }, 100);
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const descriptionSection = document.querySelector('.malang-description');
            if (descriptionSection) {
                descriptionSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Food page scroll effects and animations
function initFoodEffects() {
    // Parallax scrolling effect for food hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.hero-food');
        
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Enhanced scroll reveal animations for food cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special animation for food cards
                if (entry.target.classList.contains('food-card')) {
                    entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Initialize scroll animations
    setTimeout(() => {
        const foodCards = document.querySelectorAll('.food-card');
        foodCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.8s ease ${index * 0.2}s`;
            observer.observe(card);
        });
        
        // Observe section title and intro card
        const elements = ['.section-title', '.food-intro-card'];
        elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 1s ease 0.3s';
                observer.observe(element);
            }
        });
    }, 100);
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const descriptionSection = document.querySelector('.food-description');
            if (descriptionSection) {
                descriptionSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Tourist page scroll effects and animations
function initTouristEffects() {
    // Parallax scrolling effect for tourist hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.hero-tourist');
        
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Enhanced scroll reveal animations for tourist cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special animation for tourist cards
                if (entry.target.classList.contains('tourist-card')) {
                    entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    // Initialize scroll animations
    setTimeout(() => {
        const touristCards = document.querySelectorAll('.tourist-card');
        touristCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.8s ease ${index * 0.2}s`;
            observer.observe(card);
        });
        
        // Observe section title and intro card
        const elements = ['.section-title', '.tourist-intro-card'];
        elements.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 1s ease 0.3s';
                observer.observe(element);
            }
        });
    }, 100);
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const descriptionSection = document.querySelector('.tourist-description');
            if (descriptionSection) {
                descriptionSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Landing page scroll effects and animations
function initLandingEffects() {
    // Parallax scrolling effect for landing hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElement = document.querySelector('.hero-landing');
        
        if (parallaxElement) {
            const speed = scrolled * 0.5;
            parallaxElement.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Enhanced scroll reveal animations for overview sections
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate child elements with staggered delays
                const children = entry.target.querySelectorAll('.overview-badge, .overview-title, .overview-description, .btn-overview, .visual-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateX(0) translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, observerOptions);
    
    // Initialize scroll animations for overview items
    setTimeout(() => {
        const overviewItems = document.querySelectorAll('.overview-item');
        overviewItems.forEach((item, index) => {
            observer.observe(item);
            
            // Set initial state for animations
            const animateElements = item.querySelectorAll('.overview-badge, .overview-title, .overview-description, .btn-overview, .visual-card');
            animateElements.forEach(element => {
                element.style.opacity = '0';
                if (item.classList.contains('reverse')) {
                    element.style.transform = 'translateX(50px)';
                } else {
                    element.style.transform = 'translateX(-50px)';
                }
                element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
            });
        });
        
        // Observe CTA section
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            observer.observe(ctaSection);
        }
    }, 100);
    
    // Smooth scroll for hero CTA buttons
    const heroButtons = document.querySelectorAll('.btn-hero-primary, .btn-hero-secondary');
    heroButtons.forEach(button => {
        if (button.getAttribute('href') === '#overview') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const overviewSection = document.querySelector('#overview');
                if (overviewSection) {
                    overviewSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
    
    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const overviewSection = document.querySelector('#overview');
            if (overviewSection) {
                overviewSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Add hover effects for visual cards
    const visualCards = document.querySelectorAll('.visual-card');
    visualCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Dynamic background color change on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const overviewSection = document.querySelector('.overview-section');
        
        if (overviewSection && scrolled > window.innerHeight * 0.5) {
            document.body.classList.add('scrolled-past-hero');
        } else {
            document.body.classList.remove('scrolled-past-hero');
        }
    });
}
