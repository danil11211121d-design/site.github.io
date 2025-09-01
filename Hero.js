function Hero({ language }) {
  try {
    return (
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center px-4 pt-20"
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">NonPry</span>
              <br />
              <span className="text-[var(--text-primary)]">
                {getText(language, 'hero.title')}
              </span>
            </h1>
          </div>

          <div className="slide-in-right" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              {getText(language, 'hero.subtitle')}
            </p>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary pulse-glow"
              >
                {getText(language, 'hero.cta.primary')}
              </button>
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg font-medium border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300"
              >
                {getText(language, 'hero.cta.secondary')}
              </button>
            </div>
          </div>

          <div className="floating-animation" style={{ animationDelay: '0.6s' }}>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center shadow-2xl">
              <div className="icon-message-circle text-4xl text-white"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">1000+</div>
              <div className="text-[var(--text-secondary)]">{getText(language, 'hero.stats.clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
              <div className="text-[var(--text-secondary)]">{getText(language, 'hero.stats.support')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">98%</div>
              <div className="text-[var(--text-secondary)]">{getText(language, 'hero.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}