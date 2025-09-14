// Smart Scholar Landing Page JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLandingPage();
    setupEventListeners();
    initializeAnimations();
    initializeScrollEffects();
});

// Initialize the landing page
function initializeLandingPage() {
    // Add entrance animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Initialize intersection observer for animations
    initializeIntersectionObserver();
    
    // Add loading animation
    document.body.classList.add('loaded');
}

// Setup event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Button click effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
    
    // Feature card interactions
    const featureCards = document.querySelectorAll('.feature-card, .outcome-card, .stakeholder-card, .overview-card, .curriculum-card, .benefit-item, .showcase-item, .stat-card, .visual-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', handleCardHover);
        card.addEventListener('mouseleave', handleCardLeave);
        card.addEventListener('click', handleCardClick);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Window resize handler
    window.addEventListener('resize', handleWindowResize);
}

// Handle header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Handle smooth scrolling
function handleSmoothScroll(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        const headerHeight = 80;
        const targetPosition = targetSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Create ripple effect for buttons
function createRippleEffect(e) {
    const button = e.target;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Handle feature card hover
function handleCardHover(e) {
    const card = e.target.closest('.feature-card');
    const icon = card.querySelector('.feature-icon');
    
    // Add subtle rotation to icon
    if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    }
    
    // Add glow effect
    card.style.boxShadow = '0 25px 50px -12px rgba(220, 38, 38, 0.25)';
}

// Handle feature card leave
function handleCardLeave(e) {
    const card = e.target.closest('.feature-card');
    const icon = card.querySelector('.feature-icon');
    
    // Reset icon transform
    if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
    }
    
    // Reset shadow
    card.style.boxShadow = '';
}

// Handle feature card click
function handleCardClick(e) {
    const card = e.target.closest('.feature-card');
    const title = card.querySelector('.feature-title').textContent;
    
    // Show a brief highlight effect
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // Log interaction (in real app, this could trigger analytics)
    console.log(`Feature card clicked: ${title}`);
}

// Initialize intersection observer for scroll animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for feature cards
                if (entry.target.classList.contains('feature-card')) {
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .feature-item, .section-header, .problem-statement, .impact-section, .outcome-card, .stakeholder-card, .data-stats, .overview-card, .curriculum-card, .benefit-item, .showcase-item, .stat-card, .visual-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate background shapes
    const shapes = document.querySelectorAll('.bg-shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
    
    // Animate hero elements with stagger
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-tagline');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add parallax effect to background shapes
    window.addEventListener('scroll', handleParallaxScroll);
}

// Handle parallax scroll effect
function handleParallaxScroll() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.bg-shape');
    
    shapes.forEach((shape, index) => {
        const rate = scrolled * (0.5 + index * 0.1);
        shape.style.transform = `translateY(${rate}px) rotate(${scrolled * 0.1}deg)`;
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Add scroll progress indicator
    createScrollProgress();
    
    // Add scroll-to-top button
    createScrollToTopButton();
}

// Create scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(220, 38, 38, 0.1);
            z-index: 9999;
        }
        
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        
        progressBar.querySelector('.scroll-progress-bar').style.width = `${progress}%`;
    });
}

// Create scroll to top button
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Handle keyboard navigation
function handleKeyboardNavigation(e) {
    // Escape key to close any modals or reset focus
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusedElement = document.activeElement;
        const currentIndex = Array.from(focusableElements).indexOf(focusedElement);
        
        if (e.shiftKey) {
            // Shift + Tab (backwards)
            if (currentIndex === 0) {
                e.preventDefault();
                focusableElements[focusableElements.length - 1].focus();
            }
        } else {
            // Tab (forwards)
            if (currentIndex === focusableElements.length - 1) {
                e.preventDefault();
                focusableElements[0].focus();
            }
        }
    }
}

// Handle window resize
function handleWindowResize() {
    // Recalculate any layout-dependent animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        // Reset any transform styles that might be affected by resize
        card.style.transform = '';
    });
}

// Button action functions
function scrollToFeatures() {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        const headerHeight = 80;
        const targetPosition = featuresSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function redirectToLogin() {
    // In a real application, this would redirect to the login page
    // For now, we'll show a message
    showNotification('Redirecting to login page...', 'info');
    
    setTimeout(() => {
        // Simulate redirect (in real app, use window.location.href)
        window.location.href = 'Student login/StudentLogin.html';
    }, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 16px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            border-left: 4px solid var(--primary-color);
            max-width: 300px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text-primary);
            font-weight: 500;
        }
        
        .notification-content i {
            color: var(--primary-color);
        }
        
        .notification-info {
            border-left-color: #3B82F6;
        }
        
        .notification-info i {
            color: #3B82F6;
        }
        
        .notification-success {
            border-left-color: #10B981;
        }
        
        .notification-success i {
            color: #10B981;
        }
        
        .notification-error {
            border-left-color: #EF4444;
        }
        
        .notification-error i {
            color: #EF4444;
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'info':
        default: return 'info-circle';
    }
}

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(handleHeaderScroll, 16));
window.addEventListener('scroll', throttle(handleParallaxScroll, 16));

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-tagline');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hero-title,
    .hero-subtitle,
    .hero-buttons,
    .hero-tagline {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(loadingStyle);

// Add error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Initialize with error handling
try {
    // All initialization code is already wrapped in DOMContentLoaded
    console.log('Smart Scholar landing page initialized successfully');
} catch (error) {
    console.error('Error initializing landing page:', error);
}
