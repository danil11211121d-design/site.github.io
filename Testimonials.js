function Testimonials({ language }) {
  try {
    const testimonials = [
      {
        nameKey: 'testimonials.client1.name',
        roleKey: 'testimonials.client1.role',
        textKey: 'testimonials.client1.text',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face'
      },
      {
        nameKey: 'testimonials.client2.name',
        roleKey: 'testimonials.client2.role', 
        textKey: 'testimonials.client2.text',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      {
        nameKey: 'testimonials.client3.name',
        roleKey: 'testimonials.client3.role',
        textKey: 'testimonials.client3.text', 
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      }
    ];

    return (
      <section 
        id="testimonials" 
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        data-name="testimonials" 
        data-file="components/Testimonials.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {getText(language, 'testimonials.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {getText(language, 'testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={getText(language, testimonial.nameKey)}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-[var(--primary-color)]"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="icon-star text-[var(--accent-color)] text-sm mr-1"></div>
                    ))}
                  </div>
                </div>

                <blockquote className="text-[var(--text-secondary)] mb-6 italic leading-relaxed">
                  "{getText(language, testimonial.textKey)}"
                </blockquote>

                <div>
                  <h4 className="font-bold text-lg">{getText(language, testimonial.nameKey)}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{getText(language, testimonial.roleKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}
