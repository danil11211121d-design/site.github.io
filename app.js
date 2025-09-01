class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [theme, setTheme] = React.useState(() => {
      return localStorage.getItem('theme') || 'light';
    });
    
    const [language, setLanguage] = React.useState(() => {
      return localStorage.getItem('language') || 'ru';
    });

    React.useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);

    React.useEffect(() => {
      localStorage.setItem('language', language);
      document.documentElement.setAttribute('lang', language);
    }, [language]);

    React.useEffect(() => {
      initAnimations();
    }, []);

    const toggleTheme = () => {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleLanguage = () => {
      setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
    };

    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header 
          theme={theme} 
          onThemeToggle={toggleTheme}
          language={language}
          onLanguageToggle={toggleLanguage}
        />
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);