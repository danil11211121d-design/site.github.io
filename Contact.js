function Contact({ language }) {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setSubmitStatus(null), 3000);
      }, 1500);
    };

    return (
      <section 
        id="contact" 
        className="py-20 px-4"
        data-name="contact" 
        data-file="components/Contact.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {getText(language, 'contact.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {getText(language, 'contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <div className="card">
                <h3 className="text-2xl font-bold mb-6">{getText(language, 'contact.info.title')}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] flex items-center justify-center mr-4">
                      <div className="icon-user text-white text-xl"></div>
                    </div>
                    <div>
                      <p className="font-medium">{getText(language, 'contact.consultant.name')}</p>
                      <p className="text-[var(--text-secondary)]">{getText(language, 'contact.consultant.position')}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mr-4">
                      <div className="icon-message-circle text-white text-xl"></div>
                    </div>
                    <div>
                      <p className="font-medium">NonPry Messenger</p>
                      <p className="text-[var(--text-secondary)]">@nonpry_consultant</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)] flex items-center justify-center mr-4">
                      <div className="icon-mail text-white text-xl"></div>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-[var(--text-secondary)]">support@nonpry.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mr-4">
                      <div className="icon-clock text-white text-xl"></div>
                    </div>
                    <div>
                      <p className="font-medium">{getText(language, 'contact.hours.title')}</p>
                      <p className="text-[var(--text-secondary)]">{getText(language, 'contact.hours.time')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      {getText(language, 'contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      {getText(language, 'contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors"
                      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">
                      {getText(language, 'contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-colors resize-none"
                      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? getText(language, 'contact.form.sending') : getText(language, 'contact.form.send')}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
                      {getText(language, 'contact.form.success')}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}