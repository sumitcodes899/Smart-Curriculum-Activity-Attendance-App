// Smart Scholar Student Login JavaScript

// Sample student data for demonstration
const sampleStudents = [
    {
        id: "0967CS231001",
        name: "AADARSH PUROHIT",
        email: "aadarsh.purohit@studentsmartscholar.edu",
        password: "student123",
        role: "student",
        semester: 1
    },
    {
        id: "0967CS231002",
        name: "ABHIJEET ACHARYA",
        email: "abhijeet.acharya@studentsmartscholar.edu",
        password: "student123",
        role: "student",
        semester: 1
    },
    {
        id: "0967CS231005",
        name: "ADITYA DHAKAD",
        email: "aditya.dhakad@studentsmartscholar.edu",
        password: "student123",
        role: "student",
        semester: 1
    },
    {
        id: "0967CS231064",
        name: "SOURABH VERMA",
        email: "sourabh.verma@studentsmartscholar.edu",
        password: "student123",
        role: "student",
        semester: 5
    },
    {
        id: "0967CS231078",
        name: "YOGISHI PALIWAL",
        email: "yogishi.paliwal@studentsmartscholar.edu",
        password: "student123",
        role: "student",
        semester: 5
    }
];

// Sample faculty data
const sampleFaculty = [
    {
        id: "F001",
        name: "Dr. Sarah Johnson",
        email: "sarah.johnson@smartscholar.edu",
        password: "faculty123",
        role: "faculty",
        department: "Computer Science"
    },
    {
        id: "F002",
        name: "Prof. Michael Chen",
        email: "michael.chen@smartscholar.edu",
        password: "faculty123",
        role: "faculty",
        department: "Mathematics"
    }
];

// Sample admin data
const sampleAdmins = [
    {
        id: "A001",
        name: "Admin User",
        email: "admin@smartscholar.edu",
        password: "admin123",
        role: "admin"
    }
];

// Combine all users
const allUsers = [...sampleStudents, ...sampleFaculty, ...sampleAdmins];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginPage();
    setupEventListeners();
    loadStoredCredentials();
});

// Initialize the login page
function initializeLoginPage() {
    // Add entrance animation
    const loginCard = document.querySelector('.login-card');
    loginCard.style.opacity = '0';
    loginCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        loginCard.style.transition = 'all 0.6s ease';
        loginCard.style.opacity = '1';
        loginCard.style.transform = 'translateY(0)';
    }, 100);
    
    // Initialize form validation
    setupFormValidation();
}

// Setup event listeners
function setupEventListeners() {
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
    
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', handleSignup);
    
    // Toggle between login and signup
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');
    
    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSignupForm();
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLoginForm();
    });
    
    // Real-time form validation
    const inputs = document.querySelectorAll('.form-input, .form-select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Auto-save form data
    const formInputs = document.querySelectorAll('#loginForm input, #signupForm input');
    formInputs.forEach(input => {
        input.addEventListener('input', autoSaveFormData);
    });
}

// Handle login form submission
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    
    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }
    
    // Show loading spinner
    showLoadingSpinner();
    
    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Authenticate user
        const user = authenticateUser(email, password);
        
        if (user) {
            // Store user session
            storeUserSession(user);
            
            // Show success message
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect based on role
            setTimeout(() => {
                redirectUser(user.role);
            }, 1500);
        } else {
            showMessage('Invalid email or password. Please try again.', 'error');
        }
    } catch (error) {
        showMessage('Login failed. Please try again.', 'error');
    } finally {
        hideLoadingSpinner();
    }
}

// Handle signup form submission
async function handleSignup(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('role').value;
    
    // Validate form
    if (!validateSignupForm(fullName, email, password)) {
        return;
    }
    
    // Show loading spinner
    showLoadingSpinner();
    
    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if user already exists
        const existingUser = allUsers.find(user => user.email === email);
        
        if (existingUser) {
            showMessage('An account with this email already exists.', 'error');
            return;
        }
        
        // Create new user (in real app, this would be sent to server)
        const newUser = {
            id: generateUserId(role),
            name: fullName,
            email: email,
            password: password,
            role: role
        };
        
        // Store user session
        storeUserSession(newUser);
        
        // Show success message
        showMessage('Account created successfully! Redirecting...', 'success');
        
        // Redirect based on role
        setTimeout(() => {
            redirectUser(role);
        }, 1500);
        
    } catch (error) {
        showMessage('Account creation failed. Please try again.', 'error');
    } finally {
        hideLoadingSpinner();
    }
}

// Authenticate user
function authenticateUser(email, password) {
    return allUsers.find(user => 
        user.email === email && user.password === password
    );
}

// Validate login form
function validateLoginForm(email, password) {
    let isValid = true;
    
    // Clear previous errors
    clearAllErrors();
    
    if (!email) {
        showFieldError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!password) {
        showFieldError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showFieldError('password', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    return isValid;
}

// Validate signup form
function validateSignupForm(fullName, email, password) {
    let isValid = true;
    
    // Clear previous errors
    clearAllErrors();
    
    if (!fullName) {
        showFieldError('fullName', 'Full name is required');
        isValid = false;
    } else if (fullName.length < 2) {
        showFieldError('fullName', 'Full name must be at least 2 characters');
        isValid = false;
    }
    
    if (!email) {
        showFieldError('signupEmail', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('signupEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!password) {
        showFieldError('signupPassword', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showFieldError('signupPassword', 'Password must be at least 6 characters');
        isValid = false;
    } else if (!isStrongPassword(password)) {
        showFieldError('signupPassword', 'Password must contain at least one letter and one number');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name || field.id;
    
    clearFieldError(e);
    
    switch (fieldName) {
        case 'email':
        case 'signupEmail':
            if (value && !isValidEmail(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
            }
            break;
        case 'password':
        case 'signupPassword':
            if (value && value.length < 6) {
                showFieldError(fieldName, 'Password must be at least 6 characters');
            }
            break;
        case 'fullName':
            if (value && value.length < 2) {
                showFieldError(fieldName, 'Full name must be at least 2 characters');
            }
            break;
    }
}

// Clear field error
function clearFieldError(e) {
    const field = e.target;
    const fieldName = field.name || field.id;
    const errorElement = document.querySelector(`#${fieldName}-error`);
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = 'var(--border-color)';
}

// Clear all errors
function clearAllErrors() {
    const errorElements = document.querySelectorAll('.field-error');
    errorElements.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.style.borderColor = 'var(--border-color)';
    });
}

// Show field error
function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const existingError = document.querySelector(`#${fieldName}-error`);
    
    if (existingError) {
        existingError.remove();
    }
    
    field.style.borderColor = 'var(--primary-color)';
    
    const errorElement = document.createElement('div');
    errorElement.id = `${fieldName}-error`;
    errorElement.className = 'field-error';
    errorElement.style.color = 'var(--primary-color)';
    errorElement.style.fontSize = 'var(--font-size-sm)';
    errorElement.style.marginTop = 'var(--space-1)';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
}

// Setup form validation
function setupFormValidation() {
    // Add real-time validation styles
    const style = document.createElement('style');
    style.textContent = `
        .field-error {
            color: var(--primary-color);
            font-size: var(--font-size-sm);
            margin-top: var(--space-1);
            animation: shake 0.3s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .form-input.error {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
        
        .form-input.success {
            border-color: #10B981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
    `;
    document.head.appendChild(style);
}

// Show signup form
function showSignupForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.classList.add('hidden');
    signupForm.style.display = 'flex';
    signupForm.classList.add('visible');
    
    // Update header
    document.querySelector('.login-subtitle').textContent = 'Create a new account';
    
    // Focus on first input
    setTimeout(() => {
        document.getElementById('fullName').focus();
    }, 300);
}

// Show login form
function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    signupForm.classList.add('hidden');
    setTimeout(() => {
        signupForm.style.display = 'none';
        loginForm.classList.remove('hidden');
        loginForm.classList.add('visible');
    }, 300);
    
    // Update header
    document.querySelector('.login-subtitle').textContent = 'Sign in to your account';
    
    // Focus on email input
    setTimeout(() => {
        document.getElementById('email').focus();
    }, 300);
}

// Show loading spinner
function showLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    spinner.style.display = 'block';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
    
    // Disable all buttons
    const buttons = document.querySelectorAll('.login-btn');
    buttons.forEach(btn => btn.disabled = true);
}

// Hide loading spinner
function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    spinner.style.display = 'none';
    
    // Show appropriate form
    if (signupForm.style.display === 'none' || signupForm.classList.contains('hidden')) {
        loginForm.style.display = 'flex';
    } else {
        signupForm.style.display = 'flex';
    }
    
    // Enable all buttons
    const buttons = document.querySelectorAll('.login-btn');
    buttons.forEach(btn => btn.disabled = false);
}

// Show message
function showMessage(text, type = 'info') {
    const messageContainer = document.getElementById('messageContainer');
    const message = document.getElementById('message');
    const messageText = document.getElementById('messageText');
    
    // Clear previous classes
    message.className = 'message';
    message.classList.add(type);
    
    // Set message content
    messageText.textContent = text;
    
    // Set icon based on type
    const icon = message.querySelector('i');
    switch (type) {
        case 'success':
            icon.className = 'fas fa-check-circle';
            break;
        case 'error':
            icon.className = 'fas fa-exclamation-circle';
            break;
        case 'info':
        default:
            icon.className = 'fas fa-info-circle';
            break;
    }
    
    // Show message with animation
    messageContainer.style.display = 'block';
    messageContainer.style.opacity = '0';
    messageContainer.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        messageContainer.style.transition = 'all 0.3s ease';
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateY(0)';
    }, 100);
    
    // Auto-hide message after 5 seconds
    setTimeout(() => {
        hideMessage();
    }, 5000);
}

// Hide message
function hideMessage() {
    const messageContainer = document.getElementById('messageContainer');
    
    messageContainer.style.opacity = '0';
    messageContainer.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 300);
}

// Store user session
function storeUserSession(user) {
    const sessionData = {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        loginTime: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
    
    localStorage.setItem('smartScholarSession', JSON.stringify(sessionData));
    
    // Also store in sessionStorage for current session
    sessionStorage.setItem('smartScholarUser', JSON.stringify(user));
}

// Load stored credentials
function loadStoredCredentials() {
    const storedEmail = localStorage.getItem('smartScholarEmail');
    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
        document.getElementById('password').focus();
    }
}

// Auto-save form data
function autoSaveFormData(e) {
    const field = e.target;
    const fieldName = field.name || field.id;
    
    if (fieldName === 'email') {
        localStorage.setItem('smartScholarEmail', field.value);
    }
}

// Redirect user based on role
function redirectUser(role) {
    const baseUrl = window.location.origin;
    let redirectUrl;
    
    switch (role) {
        case 'student':
            redirectUrl = `${baseUrl}/student-dashboard.html`;
            break;
        case 'faculty':
            redirectUrl = `${baseUrl}/faculty-dashboard.html`;
            break;
        case 'admin':
            redirectUrl = `${baseUrl}/admin-dashboard.html`;
            break;
        default:
            redirectUrl = `${baseUrl}/dashboard.html`;
    }
    
    // In a real application, you would redirect to the actual dashboard
    // For now, we'll show a message with the intended redirect
    showMessage(`Redirecting to ${role} dashboard...`, 'info');
    
    // Simulate redirect (in real app, use window.location.href)
    setTimeout(() => {
        alert(`In a real application, you would be redirected to: ${redirectUrl}`);
    }, 2000);
}

// Generate user ID
function generateUserId(role) {
    const prefix = role === 'student' ? 'S' : role === 'faculty' ? 'F' : 'A';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLetter && hasNumber;
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        
        if (signupForm.style.display === 'none' || signupForm.classList.contains('hidden')) {
            loginForm.dispatchEvent(new Event('submit'));
        } else {
            signupForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear form
    if (e.key === 'Escape') {
        clearAllErrors();
        hideMessage();
    }
    
    // Tab navigation enhancement
    if (e.key === 'Tab') {
        const inputs = document.querySelectorAll('.form-input:not([disabled]), .form-select:not([disabled])');
        const focusedElement = document.activeElement;
        const currentIndex = Array.from(inputs).indexOf(focusedElement);
        
        if (e.shiftKey) {
            // Shift + Tab (backwards)
            if (currentIndex === 0) {
                e.preventDefault();
                inputs[inputs.length - 1].focus();
            }
        } else {
            // Tab (forwards)
            if (currentIndex === inputs.length - 1) {
                e.preventDefault();
                inputs[0].focus();
            }
        }
    }
}

// Add demo credentials info
function showDemoCredentials() {
    const demoInfo = document.createElement('div');
    demoInfo.className = 'demo-credentials';
    demoInfo.innerHTML = `
        <div style="background: var(--bg-secondary); padding: var(--space-4); border-radius: var(--radius-lg); margin-top: var(--space-4); border-left: 4px solid var(--primary-color);">
            <h4 style="color: var(--primary-color); margin-bottom: var(--space-2); font-size: var(--font-size-sm);">Demo Credentials:</h4>
            <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-bottom: var(--space-1);">
                <strong>Student:</strong> aadarsh.purohit@studentsmartscholar.edu / student123
            </p>
            <p style="font-size: var(--font-size-xs); color: var(--text-secondary); margin-bottom: var(--space-1);">
                <strong>Faculty:</strong> sarah.johnson@smartscholar.edu / faculty123
            </p>
            <p style="font-size: var(--font-size-xs); color: var(--text-secondary);">
                <strong>Admin:</strong> admin@smartscholar.edu / admin123
            </p>
        </div>
    `;
    
    document.querySelector('.login-card').appendChild(demoInfo);
}

// Show demo credentials after page load
setTimeout(showDemoCredentials, 2000);

// Add form enhancement styles
const enhancementStyle = document.createElement('style');
enhancementStyle.textContent = `
    .form-input:focus {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
    }
    
    .login-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(220, 38, 38, 0.3);
    }
    
    .signup-link:hover {
        transform: translateY(-1px);
    }
    
    .demo-credentials {
        animation: slideInUp 0.5s ease;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(enhancementStyle);
