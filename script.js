// Event data for modal
const eventData = {
    filmmaking: {
        title: "Film-making Competition",
        date: "March 13, 2025",
        time: "Morning (9:00 AM - 12:00 PM)",
        fee: "₹70/-",
        team: "Individual",
        prizes: "1st: ₹1500, 2nd: ₹1000, 3rd: ₹500",
        description: "Showcase your storytelling prowess and creativity through film. This competition challenges participants to create compelling short films that demonstrate technical skill and narrative excellence.",
        rules: [
            "Maximum duration: 5 minutes",
            "Original content only - no plagiarism",
            "All genres accepted (drama, comedy, documentary, etc.)",
            "Submit in MP4 format, minimum 720p quality",
            "Judging based on creativity, technical execution, and storytelling"
        ],
        formUrl: "https://forms.google.com/filmmaking"
    },
    minecraft: {
        title: "Minecraft Build Battle",
        date: "March 13, 2025",
        time: "Morning (10:00 AM - 1:00 PM)",
        fee: "₹100/-",
        team: "Individual",
        prizes: "1st: ₹1000, 2nd: ₹750, 3rd: ₹500",
        description: "Create digital masterpieces in the world of Minecraft. Participants will have 3 hours to build themed structures showcasing creativity and architectural skills.",
        rules: [
            "3-hour time limit for building",
            "Theme will be announced at the start",
            "Creative mode only - no survival elements",
            "No external tools or mods allowed",
            "Judging based on creativity, detail, and theme adherence"
        ],
        formUrl: "https://forms.google.com/minecraft"
    },
    dance: {
        title: "Dance & Ramp Walk",
        date: "March 13, 2025",
        time: "Evening (6:00 PM - 8:00 PM)",
        fee: "₹150/- (Team)",
        team: "Team (2-8 members)",
        prizes: "1st: ₹1000, 2nd: ₹1000",
        description: "Express yourself through movement and style. Teams will perform 2-minute dance routines followed by a ramp walk showcase, demonstrating both choreographic skills and fashion sense.",
        rules: [
            "Performance time: 2 minutes maximum",
            "Team size: 2-8 members",
            "Music must be provided by participants",
            "Appropriate costumes and themes required",
            "Judging on choreography, synchronization, creativity, and presentation"
        ],
        formUrl: "https://forms.google.com/dance"
    },
    openmic: {
        title: "Open Mic Talent Show",
        date: "March 13, 2025",
        time: "Evening (8:30 PM - 10:30 PM)",
        fee: "Free Entry",
        team: "Individual",
        prizes: "1st: ₹1000",
        description: "A platform for diverse talents including stand-up comedy, singing, shayari, poetry, mimicry, and beatboxing. Show your unique skills and entertain the audience.",
        rules: [
            "Maximum performance time: 3 minutes",
            "Categories: Stand-up, Singing, Shayari, Poetry, Mimicry, Beatbox",
            "Original content preferred",
            "Microphone and basic sound system provided",
            "Judging based on audience response and creativity"
        ],
        formUrl: "https://forms.google.com/openmic"
    },
    quiz: {
        title: "Quiz Competition",
        date: "March 15, 2025",
        time: "Morning (9:00 AM - 12:00 PM)",
        fee: "₹100/- (Team)",
        team: "Team (2 members)",
        prizes: "1st: ₹1000, 2nd: ₹500",
        description: "Test your knowledge across various domains including technology, current affairs, sports, entertainment, and general knowledge in this exciting quiz competition.",
        rules: [
            "Team of exactly 2 members required",
            "Multiple elimination rounds with buzzer system",
            "Topics: Tech, Current Affairs, Sports, Entertainment, GK",
            "Final round between top 2 teams",
            "No electronic devices allowed during the quiz"
        ],
        formUrl: "https://forms.google.com/quiz"
    },
    debate: {
        title: "Debate Competition",
        date: "March 15, 2025",
        time: "Morning (10:00 AM - 1:00 PM)",
        fee: "₹100/-",
        team: "Individual or Team (2 members)",
        prizes: "1st: ₹1000, 2nd: ₹500",
        description: "Voice your opinions and showcase your argumentative skills. Participants will engage in structured debates on contemporary topics, demonstrating critical thinking and oratory skills.",
        rules: [
            "Individual or 2-member team participation",
            "Topics announced 30 minutes before each round",
            "3 minutes speaking time per participant per round",
            "Progression through elimination rounds",
            "Judging on content, delivery, rebuttal skills, and time management"
        ],
        formUrl: "https://forms.google.com/debate"
    },
    tech: {
        title: "Tech Project Exhibition",
        date: "March 15, 2025",
        time: "Afternoon (2:00 PM - 6:00 PM)",
        fee: "₹200/- (Team)",
        team: "Team (3-4 members)",
        prizes: "1st: ₹3000, 2nd: ₹2000",
        description: "The flagship event of IDEA SPARK where innovation takes center stage. Teams showcase groundbreaking projects, from mobile apps to IoT solutions, competing for the highest prize pool.",
        rules: [
            "Team size: 3-4 members mandatory",
            "Project must be functional and demonstrable",
            "10-minute presentation + 5-minute Q&A",
            "All domains welcome: Web, Mobile, IoT, AI/ML, etc.",
            "Judging on innovation, technical implementation, presentation, and commercial viability"
        ],
        formUrl: "https://forms.google.com/tech"
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
        background: ${type === 'success' ? '#00E5FF' : '#FF3B30'};
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
