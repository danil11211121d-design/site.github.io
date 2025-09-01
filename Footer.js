function Footer({ language }) {
  try {
    return (
      <footer 
        className="py-12 px-4 border-t border-[var(--border-color)]"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        data-name="footer" 
        data-file="components/Footer.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">NonPry</div>
              <p className="text-[var(--text-secondary)] mb-6 max-w-md">
                {getText(language, 'footer.description')}
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div className="icon-message-circle text-white"></div>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--secondary-color)] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div className="icon-mail text-white"></div>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div className="icon-phone text-white"></div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{getText(language, 'footer.services')}</h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li><a href="#services" className="hover:text-[var(--primary-color)] transition-colors">{getText(language, 'services.support.title')}</a></li>
                <li><a href="#services" className="hover:text-[var(--primary-color)] transition-colors">{getText(language, 'services.training.title')}</a></li>
                <li><a href="#services" className="hover:text-[var(--primary-color)] transition-colors">{getText(language, 'services.setup.title')}</a></li>
                <li><a href="#services" className="hover:text-[var(--primary-color)] transition-colors">{getText(language, 'services.consultation.title')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{getText(language, 'footer.contact')}</h4>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                <li className="flex items-center">
                  <div className="icon-message-circle mr-2 text-sm"></div>
                  @nonpry_consultant
                </li>
                <li className="flex items-center">
                  <div className="icon-mail mr-2 text-sm"></div>
                  support@nonpry.com
                </li>
                <li className="flex items-center">
                  <div className="icon-clock mr-2 text-sm"></div>
                  24/7
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
              © 2025 NonPry. {getText(language, 'footer.copyright')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                {getText(language, 'footer.privacy')}
              </a>
              <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors">
                {getText(language, 'footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}