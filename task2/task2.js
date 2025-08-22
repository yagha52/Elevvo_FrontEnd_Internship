// Form validation and submission
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form fields
const fields = {
    fullName: document.getElementById('fullName'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
};

// Error message elements
const errorElements = {
    fullName: document.getElementById('fullNameError'),
    email: document.getElementById('emailError'),
    subject: document.getElementById('subjectError'),
    message: document.getElementById('messageError')
};

// Validation rules
const validationRules = {
    fullName: {
        required: true,
        minLength: 2,
        message: 'Please enter your full name (at least 2 characters)'
    },
    email: {
        required: true,
        pattern: emailRegex,
        message: 'Please enter a valid email address'
    },
    subject: {
        required: true,
        minLength: 3,
        message: 'Please enter a subject (at least 3 characters)'
    },
    message: {
        required: true,
        minLength: 10,
        message: 'Please enter a message (at least 10 characters)'
    }
};

// Show error message
function showError(fieldName, message) {
    const field = fields[fieldName];
    const errorElement = errorElements[fieldName];

    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Clear error message
function clearError(fieldName) {
    const field = fields[fieldName];
    const errorElement = errorElements[fieldName];

    field.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Validate single field
function validateField(fieldName) {
    const field = fields[fieldName];
    const rules = validationRules[fieldName];
    const value = field.value.trim();

    clearError(fieldName);

    if (rules.required && !value) {
        showError(fieldName, rules.message);
        return false;
    }

    if (rules.minLength && value.length < rules.minLength) {
        showError(fieldName, rules.message);
        return false;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
        showError(fieldName, rules.message);
        return false;
    }

    return true;
}

// Validate all fields
function validateForm() {
    let isValid = true;

    Object.keys(fields).forEach(fieldName => {
        if (!validateField(fieldName)) {
            isValid = false;
        }
    });

    return isValid;
}

// Add real-time validation
Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];

    field.addEventListener('blur', () => {
        validateField(fieldName);
    });

    field.addEventListener('input', () => {
        if (field.classList.contains('error')) {
            validateField(fieldName);
        }
    });
});

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading"></span>Sending...';

    // Simulate API call
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success message
        successMessage.classList.add('show');

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);

    } catch (error) {
        console.error('Error submitting form:', error);
    } finally {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
    }
});

// Clear success message when user starts typing again
Object.values(fields).forEach(field => {
    field.addEventListener('input', () => {
        if (successMessage.classList.contains('show')) {
            successMessage.classList.remove('show');
        }
    });
});