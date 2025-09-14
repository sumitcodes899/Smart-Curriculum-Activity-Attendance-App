// Student Data - Complete List of 78 Students across 5 Semesters
const studentData = [
    // Semester 1 Students (16 students)
    { id: "0967CS231001", name: "AADARSH PUROHIT", semester: 1, attendance: 85, test1: 6.33, test2: 6.43, assignments: "completed", grade: "B", overall: 25 },
    { id: "0967CS231002", name: "ABHIJEET ACHARYA", semester: 1, attendance: 92, test1: 8.19, test2: 8.05, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231004", name: "ABHISHEK CHOUDHARY", semester: 1, attendance: 88, test1: 8.10, test2: 7.74, assignments: "completed", grade: "A", overall: 8 },
    { id: "0967CS231005", name: "ADITYA DHAKAD", semester: 1, attendance: 95, test1: 9.20, test2: 8.90, assignments: "completed", grade: "A", overall: 1 },
    { id: "0967CS231006", name: "ADITYA KUSHWAHA", semester: 1, attendance: 82, test1: 7.50, test2: 7.20, assignments: "completed", grade: "B", overall: 12 },
    { id: "0967CS231007", name: "ADITYA PRATAP SINGH CHOUHAN", semester: 1, attendance: 90, test1: 8.75, test2: 8.50, assignments: "completed", grade: "A", overall: 5 },
    { id: "0967CS231008", name: "AKSHAT TRIPATHI", semester: 1, attendance: 76, test1: 6.80, test2: 6.90, assignments: "overdue", grade: "C", overall: 18 },
    { id: "0967CS231009", name: "AMAN DHAKAD", semester: 1, attendance: 94, test1: 9.10, test2: 8.95, assignments: "completed", grade: "A", overall: 2 },
    { id: "0967CS231010", name: "ANEESH PANDEY", semester: 1, attendance: 87, test1: 8.25, test2: 8.00, assignments: "completed", grade: "A", overall: 9 },
    { id: "0967CS231011", name: "ANIL KUMAR KUSHWAHA", semester: 1, attendance: 89, test1: 8.40, test2: 8.20, assignments: "completed", grade: "A", overall: 7 },
    { id: "0967CS231012", name: "ANKIT KUMAR SHAH", semester: 1, attendance: 83, test1: 7.65, test2: 7.45, assignments: "pending", grade: "B", overall: 14 },
    { id: "0967CS231013", name: "AYUSH PATEL", semester: 1, attendance: 91, test1: 8.85, test2: 8.70, assignments: "completed", grade: "A", overall: 4 },
    { id: "0967CS231014", name: "BRIJESH RAWAT", semester: 1, attendance: 85, test1: 8.00, test2: 7.85, assignments: "completed", grade: "B", overall: 11 },
    { id: "0967CS231015", name: "CHANCHAL GUPTA", semester: 1, attendance: 88, test1: 8.30, test2: 8.15, assignments: "completed", grade: "A", overall: 6 },
    { id: "0967CS231016", name: "CHANDRA KUMAR DAWANDE", semester: 1, attendance: 92, test1: 8.90, test2: 8.75, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231017", name: "DESH DEEP DOHARE", semester: 1, attendance: 79, test1: 7.20, test2: 7.00, assignments: "overdue", grade: "C", overall: 16 },

    // Semester 2 Students (16 students)
    { id: "0967CS231003", name: "ABHINAY SINGH", semester: 2, attendance: 78, test1: 7.86, test2: 7.60, assignments: "pending", grade: "B", overall: 15 },
    { id: "0967CS231018", name: "DEVENDRA SAHU", semester: 2, attendance: 86, test1: 8.15, test2: 8.00, assignments: "completed", grade: "A", overall: 8 },
    { id: "0967CS231019", name: "DEVENDRA SEN", semester: 2, attendance: 93, test1: 9.00, test2: 8.85, assignments: "completed", grade: "A", overall: 2 },
    { id: "0967CS231020", name: "DHARMENDRA KUMAR RAJAK", semester: 2, attendance: 84, test1: 7.95, test2: 7.80, assignments: "pending", grade: "B", overall: 12 },
    { id: "0967CS231021", name: "DIVYANSH GOSWAMI", semester: 2, attendance: 90, test1: 8.60, test2: 8.45, assignments: "completed", grade: "A", overall: 5 },
    { id: "0967CS231022", name: "GARVIT CHOUBEY", semester: 2, attendance: 87, test1: 8.25, test2: 8.10, assignments: "completed", grade: "A", overall: 7 },
    { id: "0967CS231023", name: "HARSH NEMA", semester: 2, attendance: 88, test1: 8.35, test2: 8.20, assignments: "completed", grade: "A", overall: 6 },
    { id: "0967CS231024", name: "HARSHIT KHANNA", semester: 2, attendance: 85, test1: 8.05, test2: 7.90, assignments: "completed", grade: "B", overall: 10 },
    { id: "0967CS231025", name: "JEEYA SHRIVASTAV", semester: 2, attendance: 91, test1: 8.80, test2: 8.65, assignments: "completed", grade: "A", overall: 4 },
    { id: "0967CS231026", name: "KAVYASHANKAR TIWARI", semester: 2, attendance: 89, test1: 8.50, test2: 8.35, assignments: "completed", grade: "A", overall: 9 },
    { id: "0967CS231027", name: "KHUSHI BHATT", semester: 2, attendance: 86, test1: 8.20, test2: 8.05, assignments: "completed", grade: "A", overall: 11 },
    { id: "0967CS231028", name: "KIRAN BHATI", semester: 2, attendance: 92, test1: 8.95, test2: 8.80, assignments: "completed", grade: "A", overall: 1 },
    { id: "0967CS231029", name: "KRISHNA SHARMA", semester: 2, attendance: 83, test1: 7.75, test2: 7.60, assignments: "pending", grade: "B", overall: 14 },
    { id: "0967CS231030", name: "KULDEEP SHUKLA", semester: 2, attendance: 90, test1: 8.70, test2: 8.55, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231031", name: "MADHUSUDAN SUTRADHAR", semester: 2, attendance: 87, test1: 8.30, test2: 8.15, assignments: "completed", grade: "A", overall: 13 },
    { id: "0967CS231032", name: "MANAS PURWAR", semester: 2, attendance: 88, test1: 8.40, test2: 8.25, assignments: "completed", grade: "A", overall: 8 },

    // Semester 3 Students (16 students)
    { id: "0967CS231033", name: "MANSI BANSAL", semester: 3, attendance: 85, test1: 8.10, test2: 7.95, assignments: "completed", grade: "B", overall: 12 },
    { id: "0967CS231034", name: "MAYANK RAWAT", semester: 3, attendance: 91, test1: 8.85, test2: 8.70, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231035", name: "MUKUL VERMA", semester: 3, attendance: 84, test1: 8.00, test2: 7.85, assignments: "completed", grade: "B", overall: 15 },
    { id: "0967CS231036", name: "MUSKAN KUSHWAHA", semester: 3, attendance: 89, test1: 8.55, test2: 8.40, assignments: "completed", grade: "A", overall: 7 },
    { id: "0967CS231037", name: "NAKUL PRATAP SINGH CHAUHAN", semester: 3, attendance: 86, test1: 8.25, test2: 8.10, assignments: "completed", grade: "A", overall: 9 },
    { id: "0967CS231038", name: "NAMAN BICHPURIYA", semester: 3, attendance: 88, test1: 8.35, test2: 8.20, assignments: "completed", grade: "A", overall: 6 },
    { id: "0967CS231039", name: "NAYAN PATHAK", semester: 3, attendance: 85, test1: 8.05, test2: 7.90, assignments: "completed", grade: "B", overall: 11 },
    { id: "0967CS231040", name: "NIKHIL MISHRA", semester: 3, attendance: 91, test1: 8.80, test2: 8.65, assignments: "completed", grade: "A", overall: 4 },
    { id: "0967CS231041", name: "NIMIT PANCHESHWAR", semester: 3, attendance: 89, test1: 8.50, test2: 8.35, assignments: "completed", grade: "A", overall: 8 },
    { id: "0967CS231042", name: "NIYATI BANSAL", semester: 3, attendance: 86, test1: 8.20, test2: 8.05, assignments: "completed", grade: "A", overall: 10 },
    { id: "0967CS231043", name: "OM SINGH BAGEHL", semester: 3, attendance: 0, test1: 0, test2: 0, assignments: "absent", grade: "F", overall: 0 },
    { id: "0967CS231044", name: "OMDEV BHUNJWA", semester: 3, attendance: 92, test1: 8.95, test2: 8.80, assignments: "completed", grade: "A", overall: 2 },
    { id: "0967CS231045", name: "PALAK GUPTA", semester: 3, attendance: 83, test1: 7.75, test2: 7.60, assignments: "pending", grade: "B", overall: 14 },
    { id: "0967CS231046", name: "PALAK SHARMA", semester: 3, attendance: 90, test1: 8.70, test2: 8.55, assignments: "completed", grade: "A", overall: 5 },
    { id: "0967CS231047", name: "PAPUMANI ALI", semester: 3, attendance: 87, test1: 8.30, test2: 8.15, assignments: "completed", grade: "A", overall: 13 },
    { id: "0967CS231048", name: "PIYUSH PANDEY", semester: 3, attendance: 88, test1: 8.40, test2: 8.25, assignments: "completed", grade: "A", overall: 1 },

    // Semester 4 Students (15 students)
    { id: "0967CS231049", name: "PRAGYESH DHAKAD", semester: 4, attendance: 85, test1: 8.10, test2: 7.95, assignments: "completed", grade: "B", overall: 8 },
    { id: "0967CS231050", name: "PREMPIYUSH CHANDRAVANSHI", semester: 4, attendance: 91, test1: 8.85, test2: 8.70, assignments: "completed", grade: "A", overall: 2 },
    { id: "0967CS231051", name: "PUSHPENDRA SAHU", semester: 4, attendance: 84, test1: 8.00, test2: 7.85, assignments: "completed", grade: "B", overall: 12 },
    { id: "0967CS231052", name: "RAHUL DHAKAD", semester: 4, attendance: 89, test1: 8.55, test2: 8.40, assignments: "completed", grade: "A", overall: 6 },
    { id: "0967CS231053", name: "RAJ KEWAT", semester: 4, attendance: 86, test1: 8.25, test2: 8.10, assignments: "completed", grade: "A", overall: 9 },
    { id: "0967CS231054", name: "RASHI SHARMA", semester: 4, attendance: 88, test1: 8.35, test2: 8.20, assignments: "completed", grade: "A", overall: 7 },
    { id: "0967CS231055", name: "RISHI KHADIYAR", semester: 4, attendance: 85, test1: 8.05, test2: 7.90, assignments: "completed", grade: "B", overall: 11 },
    { id: "0967CS231056", name: "RISHIKA SHARMA", semester: 4, attendance: 91, test1: 8.80, test2: 8.65, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231057", name: "ROHIT BAGHEL", semester: 4, attendance: 89, test1: 8.50, test2: 8.35, assignments: "completed", grade: "A", overall: 5 },
    { id: "0967CS231058", name: "ROHIT RAWAT", semester: 4, attendance: 86, test1: 8.20, test2: 8.05, assignments: "completed", grade: "A", overall: 10 },
    { id: "0967CS231059", name: "SANIYA RATHORE", semester: 4, attendance: 92, test1: 8.95, test2: 8.80, assignments: "completed", grade: "A", overall: 1 },
    { id: "0967CS231060", name: "SANJANA TOMAR", semester: 4, attendance: 83, test1: 7.75, test2: 7.60, assignments: "pending", grade: "B", overall: 14 },
    { id: "0967CS231061", name: "SHIVAM DHAKAD", semester: 4, attendance: 90, test1: 8.70, test2: 8.55, assignments: "completed", grade: "A", overall: 4 },
    { id: "0967CS231062", name: "SHIVANSH CHANDEL", semester: 4, attendance: 87, test1: 8.30, test2: 8.15, assignments: "completed", grade: "A", overall: 13 },
    { id: "0967CS231063", name: "SOURABH KUMAR CHOUDHARY", semester: 4, attendance: 88, test1: 8.40, test2: 8.25, assignments: "completed", grade: "A", overall: 8 },

    // Semester 5 Students (15 students)
    { id: "0967CS231064", name: "SOURABH VERMA", semester: 5, attendance: 90, test1: 8.70, test2: 8.55, assignments: "completed", grade: "A", overall: 3 },
    { id: "0967CS231065", name: "SUDEEP PATHAK", semester: 5, attendance: 87, test1: 8.30, test2: 8.15, assignments: "completed", grade: "A", overall: 7 },
    { id: "0967CS231066", name: "SUDHANSHU DUBEY", semester: 5, attendance: 88, test1: 8.40, test2: 8.25, assignments: "completed", grade: "A", overall: 5 },
    { id: "0967CS231067", name: "SUJEET PATEL", semester: 5, attendance: 85, test1: 8.10, test2: 7.95, assignments: "completed", grade: "B", overall: 11 },
    { id: "0967CS231068", name: "SUMIT KUMAR PATEL", semester: 5, attendance: 91, test1: 8.85, test2: 8.70, assignments: "completed", grade: "A", overall: 2 },
    { id: "0967CS231069", name: "SUMIT VISHWAKARMA", semester: 5, attendance: 84, test1: 8.00, test2: 7.85, assignments: "completed", grade: "B", overall: 13 },
    { id: "0967CS231070", name: "SUSHIL MISHRA", semester: 5, attendance: 89, test1: 8.55, test2: 8.40, assignments: "completed", grade: "A", overall: 6 },
    { id: "0967CS231071", name: "SYED ALISHA ALI", semester: 5, attendance: 86, test1: 8.25, test2: 8.10, assignments: "completed", grade: "A", overall: 9 },
    { id: "0967CS231072", name: "TAMANNA RATHORE", semester: 5, attendance: 88, test1: 8.35, test2: 8.20, assignments: "completed", grade: "A", overall: 8 },
    { id: "0967CS231073", name: "TANISHQ YADAV", semester: 5, attendance: 85, test1: 8.05, test2: 7.90, assignments: "completed", grade: "B", overall: 12 },
    { id: "0967CS231074", name: "VAIBHAVRAJ SINGH CHUNDAWAT", semester: 5, attendance: 91, test1: 8.80, test2: 8.65, assignments: "completed", grade: "A", overall: 4 },
    { id: "0967CS231075", name: "VIRENDRA PARIHAR", semester: 5, attendance: 89, test1: 8.50, test2: 8.35, assignments: "completed", grade: "A", overall: 10 },
    { id: "0967CS231076", name: "VISHAL YADAV", semester: 5, attendance: 86, test1: 8.20, test2: 8.05, assignments: "completed", grade: "A", overall: 14 },
    { id: "0967CS231077", name: "YASH BADERIYA", semester: 5, attendance: 92, test1: 8.95, test2: 8.80, assignments: "completed", grade: "A", overall: 1 },
    { id: "0967CS231078", name: "YOGISHI PALIWAL", semester: 5, attendance: 87, test1: 8.35, test2: 8.20, assignments: "completed", grade: "A", overall: 15 }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initAnimations();
    initDashboardPreview();
    initMobileMenu();
    initSmoothScrolling();
    initCounters();
    initStudentDashboard();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .section-header, .cta-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations
function initAnimations() {
    // Animate dashboard cards on hover
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Animate feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Dashboard preview interactions
function initDashboardPreview() {
    const dashboardPreview = document.querySelector('.dashboard-preview');
    const navItems = document.querySelectorAll('.nav-item');
    const cards = document.querySelectorAll('.card');
    const bars = document.querySelectorAll('.bar');
    
    // Animate dashboard preview on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate cards
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                
                // Animate bars
                bars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.animation = 'growUp 1s ease-out';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (dashboardPreview) {
        observer.observe(dashboardPreview);
        
        // Set initial state
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }
    
    // Dashboard navigation interaction
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            navActions.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            navActions.classList.remove('active');
        });
    });
}

// Smooth scrolling for all links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Counter animation for stats
function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                element.textContent = Math.floor(current / 1000) + 'K+';
            } else if (target >= 100) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                let target = 0;
                
                if (text.includes('K+')) {
                    target = parseInt(text.replace('K+', '')) * 1000;
                } else if (text.includes('%')) {
                    target = parseInt(text.replace('%', ''));
                } else {
                    target = parseInt(text.replace('+', ''));
                }
                
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Button click effects
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary, .btn-outline')) {
        // Create ripple effect
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
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary, .btn-outline {
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
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            gap: 15px;
        }
        
        .nav-actions.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            gap: 15px;
        }
        
        .nav-menu {
            display: none;
        }
        
        .nav-actions {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.dashboard-preview');
    
    if (heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Student Dashboard functionality
let currentPage = 1;
const studentsPerPage = 10;
let filteredStudents = [...studentData];

function initStudentDashboard() {
    renderStudentTable();
    setupEventListeners();
    updatePagination();
}

function renderStudentTable() {
    const tableBody = document.getElementById('studentTableBody');
    const startIndex = (currentPage - 1) * studentsPerPage;
    const endIndex = startIndex + studentsPerPage;
    const studentsToShow = filteredStudents.slice(startIndex, endIndex);
    
    tableBody.innerHTML = '';
    
    studentsToShow.forEach(student => {
        const row = createStudentRow(student);
        tableBody.appendChild(row);
    });
}

function createStudentRow(student) {
    const row = document.createElement('div');
    row.className = 'table-row';
    
    const attendanceClass = getAttendanceClass(student.attendance);
    const assignmentClass = getAssignmentClass(student.assignments);
    const gradeClass = getGradeClass(student.grade);
    
    row.innerHTML = `
        <div class="col-student">
            <div class="student-name">${student.name}</div>
            <div class="student-id">${student.id}</div>
        </div>
        <div class="col-attendance">
            <div class="attendance-percentage">${student.attendance}%</div>
            <div class="attendance-bar">
                <div class="attendance-fill ${attendanceClass}" style="width: ${student.attendance}%"></div>
            </div>
        </div>
        <div class="col-tests">
            <div class="test-scores">
                <div class="test-score">${student.test1}</div>
                <div class="test-label">Test 1</div>
                <div class="test-score">${student.test2}</div>
                <div class="test-label">Test 2</div>
            </div>
        </div>
        <div class="col-assignments">
            <span class="assignment-status ${assignmentClass}">
                <i class="fas fa-${getAssignmentIcon(student.assignments)}"></i>
                ${student.assignments.toUpperCase()}
            </span>
        </div>
        <div class="col-grade">
            <span class="grade-badge ${gradeClass}">${student.grade}</span>
        </div>
        <div class="col-actions">
            <button class="btn-action btn-view" onclick="viewStudentReport('${student.id}')">
                <i class="fas fa-eye"></i>
                View
            </button>
            <button class="btn-action btn-download" onclick="downloadStudentReport('${student.id}')">
                <i class="fas fa-download"></i>
                PDF
            </button>
        </div>
    `;
    
    return row;
}

function getAttendanceClass(attendance) {
    if (attendance >= 90) return 'attendance-excellent';
    if (attendance >= 80) return 'attendance-good';
    return 'attendance-average';
}

function getAssignmentClass(assignment) {
    switch(assignment) {
        case 'completed': return 'assignment-completed';
        case 'pending': return 'assignment-pending';
        case 'overdue': return 'assignment-overdue';
        case 'absent': return 'assignment-overdue';
        default: return 'assignment-pending';
    }
}

function getAssignmentIcon(assignment) {
    switch(assignment) {
        case 'completed': return 'check-circle';
        case 'pending': return 'clock';
        case 'overdue': return 'exclamation-triangle';
        case 'absent': return 'times-circle';
        default: return 'clock';
    }
}

function getGradeClass(grade) {
    switch(grade) {
        case 'A': return 'grade-a';
        case 'B': return 'grade-b';
        case 'C': return 'grade-c';
        case 'D': return 'grade-d';
        case 'F': return 'grade-d';
        default: return 'grade-c';
    }
}

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Filter functionality
    const performanceFilter = document.getElementById('performanceFilter');
    performanceFilter.addEventListener('change', handleFilter);
    
    // Pagination
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderStudentTable();
            updatePagination();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderStudentTable();
            updatePagination();
        }
    });
    
    // Export functionality
    const exportBtn = document.getElementById('exportBtn');
    exportBtn.addEventListener('click', exportReport);
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filterStudents();
}

function handleFilter() {
    filterStudents();
}

function filterStudents() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const performanceFilter = document.getElementById('performanceFilter').value;
    
    filteredStudents = studentData.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                            student.id.toLowerCase().includes(searchTerm);
        
        let matchesPerformance = true;
        if (performanceFilter) {
            const avgScore = (student.test1 + student.test2) / 2;
            switch(performanceFilter) {
                case 'excellent':
                    matchesPerformance = avgScore >= 9.0;
                    break;
                case 'good':
                    matchesPerformance = avgScore >= 8.0 && avgScore < 9.0;
                    break;
                case 'average':
                    matchesPerformance = avgScore >= 7.0 && avgScore < 8.0;
                    break;
                case 'below':
                    matchesPerformance = avgScore < 7.0;
                    break;
            }
        }
        
        return matchesSearch && matchesPerformance;
    });
    
    currentPage = 1;
    renderStudentTable();
    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function viewStudentReport(studentId) {
    const student = studentData.find(s => s.id === studentId);
    if (student) {
        alert(`Viewing detailed report for ${student.name}\n\n` +
              `Student ID: ${student.id}\n` +
              `Attendance: ${student.attendance}%\n` +
              `Test 1: ${student.test1}\n` +
              `Test 2: ${student.test2}\n` +
              `Assignments: ${student.assignments}\n` +
              `Grade: ${student.grade}\n` +
              `Overall Rank: ${student.overall}`);
    }
}

function downloadStudentReport(studentId) {
    const student = studentData.find(s => s.id === studentId);
    if (student) {
        // Simulate PDF download
        const link = document.createElement('a');
        link.href = '#';
        link.download = `${student.name}_Report.pdf`;
        link.click();
        
        alert(`Downloading PDF report for ${student.name}`);
    }
}

function exportReport() {
    // Create CSV content
    const headers = ['Student ID', 'Name', 'Attendance %', 'Test 1', 'Test 2', 'Assignments', 'Grade', 'Overall Rank'];
    const csvContent = [
        headers.join(','),
        ...filteredStudents.map(student => [
            student.id,
            `"${student.name}"`,
            student.attendance,
            student.test1,
            student.test2,
            student.assignments,
            student.grade,
            student.overall
        ].join(','))
    ].join('\n');
    
    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'student_report.csv';
    link.click();
    window.URL.revokeObjectURL(url);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroElements = document.querySelectorAll('.hero-content > *');
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
    
    .hero-content > * {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
`;
document.head.appendChild(loadingStyle);
