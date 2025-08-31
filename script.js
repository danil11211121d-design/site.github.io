// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация темы
    initTheme();
    
    // Инициализация языка
    initLanguage();
    
    // Инициализация параллакс эффекта
    initParallax();
    
    // Инициализация плавной прокрутки
    initSmoothScroll();
    
    // Инициализация меню для мобильных устройств
    initMobileMenu();
    
    // Инициализация формы обратной связи
    initContactForm();
    
    // Инициализация анимаций при прокрутке
    initScrollAnimations();
});

// Управление темой (светлая/тёмная)
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Проверяем сохранённую тему или предпочтения системы
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Обработчик переключения темы
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Управление языком (русский/английский)
function initLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLang = 'ru'; // По умолчанию русский
    
    // Загрузка сохранённого языка
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    }
    
    // Обработчик переключения языка
    languageToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        updateLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });
}

// Обновление текстов на выбранном языке
function updateLanguage(lang) {
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
    
    // Все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Placeholders для input элементов
    document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Локализованные тексты
const translations = {
    'ru': {
        'hero_title': 'Безопасность ваших сообщений — наш приоритет',
        'hero_description': 'NonPry использует передовые технологии шифрования для защиты вашей приватности в мессенджере. Оставайтесь на связи без риска утечки данных.',
        'hero_button': 'Узнать больше',
        'message_1': 'Привет! Как дела с проектом?',
        'message_2': 'Все отлично! Документы защищены NonPry',
        'message_3': 'Отлично! Тогда отправляй их мне',
        'message_placeholder': 'Введите сообщение...',
        'features_title': 'Наши возможности',
        'feature_1_title': 'End-to-End шифрование',
        'feature_1_text': 'Все сообщения защищены современными алгоритмами шифрования. Доступ к переписке есть только у вас и получателя.',
        'feature_2_title': 'Самоуничтожение сообщений',
        'feature_2_text': 'Устанавливайте таймер для автоматического удаления сообщений после прочтения. Контролируйте историю переписки.',
        'feature_3_title': 'Анонимные чаты',
        'feature_3_text': 'Общайтесь без раскрытия личных данных. Создавайте временные анонимные комнаты для конфиденциальных бесед.',
        'feature_4_title': 'Кроссплатформенность',
        'feature_4_text': 'NonPry доступен на всех устройствах: smartphones, tablets, desktops. Синхронизация между устройствами в реальном времени.',
        'about_title': 'О NonPry',
        'about_text_1': 'NonPry был создан в 2020 году командой экспертов по кибербезопасности с более чем 15-летним опытом работы в области защиты данных.',
        'about_text_2': 'Наша миссия — обеспечить право каждого человека на приватность в цифровую эпоху. Мы верим, что общение должно быть безопасным и конфиденциальным.',
        'about_text_3': 'NonPry использует открытые протоколы шифрования, проверенные международным сообществом криптографов. Наш код проходит регулярный аудит безопасности.',
        'contact_title': 'Свяжитесь с нами',
        'contact_info': 'Контактная информация',
        'contact_text': 'Есть вопросы о NonPry? Хотите узнать больше о наших решениях для кибербезопасности? Свяжитесь с нами удобным способом.',
        'form_name': 'Ваше имя',
        'form_email': 'Email',
        'form_message': 'Сообщение',
        'form_button': 'Отправить сообщение',
        'footer_text': 'Инновационное решение для защиты вашей приватности в мессенджере',
        'footer_links': 'Ссылки',
        'footer_legal': 'Правовая информация',
        'footer_privacy': 'Политика конфиденциальности',
        'footer_terms': 'Условия использования',
        'footer_rights': 'Все права защищены'
    },
    'en': {
        'hero_title': 'Your message security is our priority',
        'hero_description': 'NonPry uses advanced encryption technologies to protect your privacy in the messenger. Stay connected without the risk of data leakage.',
        'hero_button': 'Learn more',
        'message_1': 'Hi! How is the project going?',
        'message_2': 'Everything is great! Documents are protected by NonPry',
        'message_3': 'Great! Then send them to me',
        'message_placeholder': 'Type a message...',
        'features_title': 'Our Features',
        'feature_1_title': 'End-to-End Encryption',
        'feature_1_text': 'All messages are protected by modern encryption algorithms. Only you and the recipient have access to the correspondence.',
        'feature_2_title': 'Self-Destructing Messages',
        'feature_2_text': 'Set a timer for automatic deletion of messages after reading. Control your chat history.',
        'feature_3_title': 'Anonymous Chats',
        'feature_3_text': 'Communicate without revealing personal data. Create temporary anonymous rooms for confidential conversations.',
        'feature_4_title': 'Cross-Platform',
        'feature_4_text': 'NonPry is available on all devices: smartphones, tablets, desktops. Real-time synchronization between devices.',
        'about_title': 'About NonPry',
        'about_text_1': 'NonPry was created in 2020 by a team of cybersecurity experts with over 15 years of experience in data protection.',
        'about_text_2': 'Our mission is to ensure everyone\'s right to privacy in the digital age. We believe that communication should be secure and confidential.',
        'about_text_3': 'NonPry uses open encryption protocols verified by the international community of cryptographers. Our code undergoes regular security audits.',
        'contact_title': 'Contact Us',
        'contact_info': 'Contact Information',
        'contact_text': 'Have questions about NonPry? Want to learn more about our cybersecurity solutions? Contact us in any convenient way.',
        'form_name': 'Your Name',
        'form_email': 'Email',
        'form_message': 'Message',
        'form_button': 'Send Message',
        'footer_text': 'Innovative solution for protecting your privacy in messenger',
        'footer_links': 'Links',
        'footer_legal': 'Legal',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Use',
        'footer_rights': 'All rights reserved'
    }
};

// Параллакс эффект для фона
function initParallax() {
    const parallaxItems = document.querySelectorAll('.parallax-item');
    
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        parallaxItems.forEach(item => {
            const depth = parseFloat(item.getAttribute('data-depth'));
            const moveX = x * depth;
            const moveY = y * depth;
            
            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Плавная прокрутка к якорям
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню, если открыто
                const navMenu = document.getElementById('nav-menu');
                navMenu.classList.remove('active');
            }
        });
    });
}

// Мобильное меню
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Форма обратной связи
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь будет код для отправки данных формы
            // В реальном проекте можно использовать EmailJS, Formspree или другой сервис
            
            // Имитация успешной отправки
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Отправка...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('Сообщение успешно отправлено! В реальном приложении это отправило бы данные на сервер.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
}

// Анимации при прокрутке
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .hexagon');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}