function About({ language }) {
  try {
    return (
      <section 
        id="about" 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        data-name="about" 
        data-file="components/About.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {getText(language, 'about.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {getText(language, 'about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center mr-4">
                    <div className="icon-user text-2xl text-white"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{getText(language, 'about.consultant.name')}</h3>
                    <p className="text-[var(--text-secondary)]">{getText(language, 'about.consultant.title')}</p>
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {getText(language, 'about.consultant.description')}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="icon-award text-[var(--primary-color)] mr-3 text-xl"></div>
                    <span>{getText(language, 'about.consultant.experience')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="icon-users text-[var(--primary-color)] mr-3 text-xl"></div>
                    <span>{getText(language, 'about.consultant.clients')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="icon-clock text-[var(--primary-color)] mr-3 text-xl"></div>
                    <span>{getText(language, 'about.consultant.availability')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="icon-globe text-[var(--primary-color)] mr-3 text-xl"></div>
                    <span>{getText(language, 'about.consultant.languages')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] p-1 floating-animation">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="NonPry Consultant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[var(--accent-color)] flex items-center justify-center floating-animation" style={{ animationDelay: '1s' }}>
                  <div className="icon-star text-white text-2xl"></div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[var(--secondary-color)] flex items-center justify-center floating-animation" style={{ animationDelay: '1.5s' }}>
                  <div className="icon-heart text-white text-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}