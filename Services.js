function Services({ language }) {
  try {
    const services = [
      {
        icon: 'headphones',
        titleKey: 'services.support.title',
        descKey: 'services.support.description'
      },
      {
        icon: 'book-open',
        titleKey: 'services.training.title',
        descKey: 'services.training.description'
      },
      {
        icon: 'settings',
        titleKey: 'services.setup.title',
        descKey: 'services.setup.description'
      },
      {
        icon: 'shield-check',
        titleKey: 'services.security.title',
        descKey: 'services.security.description'
      },
      {
        icon: 'zap',
        titleKey: 'services.optimization.title',
        descKey: 'services.optimization.description'
      },
      {
        icon: 'users',
        titleKey: 'services.consultation.title',
        descKey: 'services.consultation.description'
      }
    ];

    return (
      <section 
        id="services" 
        className="py-20 px-4"
        data-name="services" 
        data-file="components/Services.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {getText(language, 'services.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {getText(language, 'services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`icon-${service.icon} text-2xl text-white`}></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-[var(--primary-color)] transition-colors">
                  {getText(language, service.titleKey)}
                </h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {getText(language, service.descKey)}
                </p>
                
                <div className="mt-6 flex items-center text-[var(--primary-color)] group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">{getText(language, 'services.learnMore')}</span>
                  <div className="icon-arrow-right text-sm"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {getText(language, 'services.cta')}
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}