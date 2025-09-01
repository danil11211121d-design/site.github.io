function Header({ theme, onThemeToggle, language, onLanguageToggle }) {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header 
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
        style={{ 
          backgroundColor: 'rgba(var(--bg-primary-rgb, 255, 255, 255), 0.8)',
          borderColor: 'var(--border-color)'
        }}
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              NonPry
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hover:text-[var(--primary-color)] transition-colors"
              >
                {getText(language, 'nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-[var(--primary-color)] transition-colors"
              >
                {getText(language, 'nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-[var(--primary-color)] transition-colors"
              >
                {getText(language, 'nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="hover:text-[var(--primary-color)] transition-colors"
              >
                {getText(language, 'nav.reviews')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-[var(--primary-color)] transition-colors"
              >
                {getText(language, 'nav.contact')}
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
                title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              >
                <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-xl`}></div>
              </button>
              
              <button
                onClick={onLanguageToggle}
                className="px-3 py-1 rounded-md text-sm font-medium border border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                {language === 'ru' ? 'EN' : 'RU'}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[var(--border-color)]">
              <div className="flex flex-col space-y-2 pt-4">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-left py-2 hover:text-[var(--primary-color)] transition-colors"
                >
                  {getText(language, 'nav.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left py-2 hover:text-[var(--primary-color)] transition-colors"
                >
                  {getText(language, 'nav.about')}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 hover:text-[var(--primary-color)] transition-colors"
                >
                  {getText(language, 'nav.services')}
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-left py-2 hover:text-[var(--primary-color)] transition-colors"
                >
                  {getText(language, 'nav.reviews')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 hover:text-[var(--primary-color)] transition-colors"
                >
                  {getText(language, 'nav.contact')}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}