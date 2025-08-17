// Get DOM elements
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const body = document.body;

// Toggle sidebar function
function toggleSidebar() {
    const isActive = sidebar.classList.contains('active');

    if (isActive) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

// Open sidebar
function openSidebar() {
    sidebar.classList.add('active');
    sidebarToggle.classList.add('active');
    overlay.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarToggle.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = ''; // Restore scrolling
}

// Event listeners
sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = sidebarToggle.contains(e.target);
    const isSidebarOpen = sidebar.classList.contains('active');

    if (!isClickInsideSidebar && !isClickOnToggle && isSidebarOpen) {
        closeSidebar();
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Add active state animation
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = '';
        }, 150);

        // Close sidebar on mobile after clicking a link
        if (window.innerWidth <= 768) {
            setTimeout(closeSidebar, 300);
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        // Keep sidebar behavior consistent across screen sizes
        const isActive = sidebar.classList.contains('active');
        if (isActive) {
            // Adjust toggle button position smoothly
            sidebarToggle.style.transition = 'left 0.4s ease';
        }
    }
});