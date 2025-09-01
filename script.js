// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Переключение языка (заглушка)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', () => {
        alert('Функция смены языка будет реализована в будущем!');
    });
    
    // Мобильное меню
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Параллакс эффект
    document.addEventListener('mousemove', (e) => {
        const parallaxItems = document.querySelectorAll('.parallax-item');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        parallaxItems.forEach(item => {
            const depth = parseFloat(item.getAttribute('data-depth'));
            const moveX = x * depth;
            const moveY = y * depth;
            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Кнопка "Наверх"
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Анимации при прокрутке
    const animatedElements = document.querySelectorAll('.feature-card, .about-content, .contact-form, .contact-info');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Обработка формы
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Здесь будет отправка формы
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;
        
        // Имитация отправки
        setTimeout(() => {
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    // Эффект печатной машинки для заголовка
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent = originalText.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Запускаем эффект только если пользователь не предпочитает уменьшенное движение
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroTitle.textContent = '';
        setTimeout(typeWriter, 1000);
    }
    
    // Конфиденциальность сообщений в чате
    const messages = document.querySelectorAll('.message p');
    messages.forEach(message => {
        message.addEventListener('click', () => {
            message.textContent = 'Сообщение защищено ✓';
            setTimeout(() => {
                message.textContent = message.getAttribute('data-i18n') ? 
                    document.querySelector(`[data-i18n="${message.getAttribute('data-i18n')}"]`).textContent : 
                    message.getAttribute('data-original') || originalText;
            }, 2000);
        });
    });
    
    // Эффект частиц при клике
    document.addEventListener('click', (e) => {
        const particles = document.createElement('div');
        particles.style.position = 'fixed';
        particles.style.left = `${e.clientX}px`;
        particles.style.top = `${e.clientY}px`;
        particles.style.width = '5px';
        particles.style.height = '5px';
        particles.style.borderRadius = '50%';
        particles.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
        particles.style.pointerEvents = 'none';
        particles.style.zIndex = '9999';
        document.body.appendChild(particles);
        
        // Анимация
        const keyframes = [
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0 }
        ];
        
        const timing = {
            duration: 1000,
            iterations: 1,
            fill: 'forwards'
        };
        
        particles.animate(keyframes, timing).onfinish = () => {
            document.body.removeChild(particles);
        };
    });
    
    // Изменение фона навигации при прокрутке
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(31, 41, 55, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                navbar.style.background = 'rgba(31, 41, 55, 0.95)';
            }
        }
    });
});