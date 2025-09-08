// Event data for modal
const eventData = {
    quiz: {
        title: "TRIVIA TIME - Quiz Competition",
        date: "September 13, 2025",
        time: "Morning Session",
        fee: "₹50/- per person",
        team: "Individual participation (Teams formed randomly by organizers)",
        prizes: "Winner: ₹1000, Runner Up: ₹500 + Certificates for all",
        description: "Test your knowledge, quick thinking, and individual excellence in this comprehensive quiz competition covering entertainment, general knowledge, current affairs, and science & technology.",
        rules: [
            "Eligibility: Open to 2nd, 3rd, and 4th year students of all departments",
            "Individual participation only - teams will be formed randomly by organizers",
            "Registration fee: ₹50/- per person",
            "Must carry valid college ID cards",
            "Topics: Entertainment, General Knowledge, Current Affairs, Science & Tech",
            "Round 1: Team Round → Round 2: Rapid Fire → Round 3: Buzzer → Round 4: Individual Buzzer",
            "Scoring: 10 points per correct answer, bonus for quick response in buzzer round",
            "Negative marking may apply for wrong answers in buzzer round",
            "Participants must rely only on their knowledge - unfair means = disqualification",
            "Judges' decisions are final and binding",
            "Certificates for all participants, awards for top two winners"
        ],
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSel25_SnkZpDNgRpoC9Jk4Px3nnybVeVTxAyWjQxH9gt_PxeQ/viewform"
    },
    debate: {
        title: "Battle Of Words - Debate Competition",
        date: "September 13, 2025",
        time: "Morning Session",
        fee: "Free Entry",
        team: "Individual participation (Choose 'For' or 'Against' the motion)",
        prizes: "1st: ₹1000, 2nd: ₹500 + Certificates for all",
        description: "Encourage critical thinking, communication skills, and confidence through structured debate on contemporary topics. Participants will debate the motion: 'Has streaming killed the traditional cinema experience?'",
        rules: [
            "Eligibility: Open to students of all departments",
            "Individual participation only - choose to speak 'For' or 'Against' the motion",
            "Topic: 'Has streaming killed the traditional cinema experience?'",
            "Each participant speaks for 3-4 minutes",
            "Rebuttal round of 2 minutes",
            "Time limits strictly enforced",
            "All content must be original - plagiarism leads to disqualification",
            "Valid college ID must be carried by each participant",
            "Judging: Content Quality (20pts), Delivery & Confidence (20pts), Rebuttal Effectiveness (30pts), Audience Impact (10pts), Overall Presentation (20pts)",
            "Participants must show respect and maintain decorum",
            "Offensive or disrespectful language will result in disqualification",
            "Judges' decision is final"
        ],
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfO-pI0fTecMV--NVYZPfMBYEscIWncv6KpbQGfWGZzum8zpg/viewform"
    },
    openmic: {
        title: "Open-Mic (Talent)",
        date: "September 13, 2025",
        time: "Afternoon Session",
        fee: "Free Entry",
        team: "Individual performance",
        prizes: "1st: ₹1000, 2nd: ₹750, 3rd: ₹500 + Participation Certificates",
        description: "Foster confidence, creativity, and cultural engagement through diverse individual performances. A platform to showcase your unique talents and entertain the audience.",
        rules: [
            "Individual performances only",
            "Performance duration: 3-5 minutes",
            "Categories: Singing, Poetry, Stand-up Comedy, Storytelling, and more",
            "Approximately 30 students expected",
            "Evaluation based on creativity, originality, audience engagement, and stage presence",
            "Participation certificates for all performers"
        ],
        formUrl: "https://forms.google.com/openmic"
    }
};

// Modal functions
function openEventModal(eventId) {
    const modal = document.getElementById('eventModal');
    const event = eventData[eventId];
    
    if (!event) return;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDate').textContent = event.date;
    document.getElementById('modalTime').textContent = event.time;
    document.getElementById('modalFee').textContent = event.fee;
    document.getElementById('modalTeam').textContent = event.team;
    document.getElementById('modalPrizes').textContent = event.prizes;
    document.getElementById('modalDescription').textContent = event.description;
    
    // Populate rules
    const rulesList = document.getElementById('modalRules');
    rulesList.innerHTML = '';
    event.rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
    
    // Set form URL for registration button
    document.getElementById('registerButton').setAttribute('data-form-url', event.formUrl);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function redirectToForm() {
    const formUrl = document.getElementById('registerButton').getAttribute('data-form-url');
    if (formUrl) {
        window.open(formUrl, '_blank');
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('eventModal');
    if (e.target === modal) {
        closeEventModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEventModal();
    }
});

// Navigation functionality
function initNavigation() {
    const nav = document.querySelector('.floating-nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Active link highlighting
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id], .hero');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id || (section.classList.contains('hero') ? 'hero' : '');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('onclick')?.includes(sectionId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Scroll effect for navigation
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        updateActiveLink();
    }
    
    // Add scroll listeners
    window.addEventListener('scroll', handleNavScroll);
    window.addEventListener('load', updateActiveLink);
    
    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling and navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// AOS (Animate On Scroll) implementation
function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Form handling - Remove this section since we removed the registration form
function handleFormSubmission() {
    // This function is no longer needed as we're using Google Forms
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#ffffff' : '#FF3B30'};
        color: #000000;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #000000;
        padding: 0;
        margin: 0;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced button interactions
function initButtonInteractions() {
    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Calculate position and size
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Style the ripple
            ripple.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            `;
            
            // Add ripple to button
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Event card hover enhancements
function initEventCardInteractions() {
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add subtle glow effect
            this.style.boxShadow = '0 20px 40px rgba(0, 229, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove glow effect
            this.style.boxShadow = '';
        });
    });
}

// Mobile optimizations
function initMobileOptimizations() {
    // Hide mobile CTA on desktop and when hero CTA is visible
    function toggleMobileCTA() {
        const mobileCTA = document.querySelector('.mobile-cta');
        const heroSection = document.querySelector('.hero');
        
        if (!mobileCTA || !heroSection) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        
        if (window.innerWidth > 768) {
            // Hide on desktop
            mobileCTA.style.display = 'none';
        } else {
            // Show only when hero section is not visible on mobile
            if (heroRect.bottom < 100) {
                mobileCTA.style.display = 'block';
            } else {
                mobileCTA.style.display = 'none';
            }
        }
    }
    
    // Initial check
    toggleMobileCTA();
    
    // Check on scroll and resize
    window.addEventListener('scroll', toggleMobileCTA);
    window.addEventListener('resize', toggleMobileCTA);
    
    // Touch optimizations for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Improve touch targets
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .cta-button {
                min-height: 44px;
                min-width: 44px;
            }
            
            .touch-device .social-link {
                min-height: 44px;
                min-width: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
    }
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .keynote');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    });
}

// Utility function to check if element is in viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Loading animation
function initLoadingAnimation() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
            document.body.classList.add('loaded');
        }, 100);
    });
    
    // Add loading styles
    const style = document.createElement('style');
    style.textContent = `
        .loading {
            overflow: hidden;
        }
        
        .loading .hero-content > * {
            opacity: 0;
            transform: translateY(50px);
        }
        
        .loaded .hero-content > * {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .loaded .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
        .loaded .hero-content > *:nth-child(2) { animation-delay: 0.2s; }
        .loaded .hero-content > *:nth-child(3) { animation-delay: 0.3s; }
        .loaded .hero-content > *:nth-child(4) { animation-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

// Keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Navigate with arrow keys
        if (e.key === 'ArrowDown') {
            const sections = document.querySelectorAll('section');
            const currentSection = getCurrentSection();
            const currentIndex = Array.from(sections).indexOf(currentSection);
            
            if (currentIndex < sections.length - 1) {
                sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        if (e.key === 'ArrowUp') {
            const sections = document.querySelectorAll('section');
            const currentSection = getCurrentSection();
            const currentIndex = Array.from(sections).indexOf(currentSection);
            
            if (currentIndex > 0) {
                sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// Get current section in viewport
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    let currentSection = sections[0];
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
        }
    });
    
    return currentSection;
}

// Simplified background optimization for low-res image
function initBackgroundImage() {
    const hero = document.querySelector('.hero');
    
    // Simple hardware acceleration for hero section
    hero.style.transform = 'translateZ(0)';
    
    // No need for progressive loading with low-res image
    console.log('Low-res background image ready');
}

// Enhanced scroll performance optimization
function initScrollOptimizations() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const nav = document.querySelector('.floating-nav');
        
        // Minimal scroll effects to maintain 60fps
        if (nav && scrolled > 50 && !nav.classList.contains('scrolled')) {
            nav.classList.add('scrolled');
        } else if (nav && scrolled <= 50 && nav.classList.contains('scrolled')) {
            nav.classList.remove('scrolled');
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    // Use passive listeners for better scroll performance
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images when implemented
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    preloadLink.as = 'style';
    document.head.appendChild(preloadLink);
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initBackgroundImage();
    initScrollOptimizations(); // Add scroll performance optimization
    initAOS();
    addNotificationStyles();
    initButtonInteractions();
    initEventCardInteractions();
    initMobileOptimizations();
    initParallaxEffects();
    initLoadingAnimation();
    initKeyboardNavigation();
    initPerformanceOptimizations();
    
    console.log('IDEA SPARK landing page initialized successfully! 🚀');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Could implement error reporting here
});

// Page visibility API for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when page is visible
        document.body.classList.remove('page-hidden');
    }
});
