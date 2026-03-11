/**
 * DOVEAIA Infogérance - Main JavaScript
 * Navigation, Tabs, FAQ et interactions générales
 */

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initPricingTabs();
    initMobileMenu();
    initSmoothScroll();
    initFAQ();
    initFormValidation();
    initAnimations();
});

/**
 * Navigation - Header scroll effect
 */
function initNavigation() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

/**
 * Pricing Tabs
 */
function initPricingTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');

            // Close all
            faqItems.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open clicked if it was closed
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

/**
 * Form Validation
 */
function initFormValidation() {
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            if (!data.name || !data.email || !data.project) {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification('Veuillez entrer une adresse email valide.', 'error');
                return;
            }

            console.log('Form data:', data);
            showNotification('Votre demande a bien été envoyée. Nous vous recontacterons rapidement.', 'success');
            form.reset();
        });
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Show notification
 */
function showNotification(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';

    const bgColor = type === 'success' ? '#059669' : type === 'error' ? '#EF4444' : '#059669';

    notification.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:16px 24px;background:' + bgColor + ';color:white;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:flex;align-items:center;gap:12px;z-index:9999;animation:slideIn 0.3s ease';
    notification.innerHTML = '<span>' + message + '</span><button style="background:none;border:none;color:white;font-size:20px;cursor:pointer">&times;</button>';

    document.body.appendChild(notification);

    notification.querySelector('button').addEventListener('click', function() {
        notification.remove();
    });

    setTimeout(function() {
        if (notification.parentNode) notification.remove();
    }, 5000);
}

/**
 * Intersection Observer for animations
 */
function initAnimations() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-card, .pricing-card, .tech-category, .sla-card, .incident-card, .scope-item').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Inject dynamic styles
var dynStyle = document.createElement('style');
dynStyle.textContent = '\
@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}\
.animate-in{opacity:1!important;transform:translateY(0)!important}\
@media(max-width:768px){\
.nav-links{position:fixed;top:70px;left:0;right:0;background:white;flex-direction:column;padding:20px;gap:16px;box-shadow:0 4px 12px rgba(0,0,0,0.1);transform:translateY(-100%);opacity:0;pointer-events:none;transition:all 0.3s ease}\
.nav-links.active{transform:translateY(0);opacity:1;pointer-events:all;display:flex}\
.mobile-menu-btn.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}\
.mobile-menu-btn.active span:nth-child(2){opacity:0}\
.mobile-menu-btn.active span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}\
}';
document.head.appendChild(dynStyle);
