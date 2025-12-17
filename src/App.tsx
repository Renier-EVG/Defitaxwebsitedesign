import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { SignUpPage } from './pages/SignUpPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';

type Page = 'home' | 'services' | 'blog' | 'article' | 'signup' | 'faq' | 'contact' | 'pricing';

// Map page names to URL paths
const pageToPath: Record<Page, string> = {
  home: '/',
  services: '/services',
  blog: '/blog',
  article: '/article',
  signup: '/signup',
  faq: '/faq',
  contact: '/contact',
  pricing: '/pricing',
};

// Map URL paths to page names
const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/services': 'services',
  '/blog': 'blog',
  '/article': 'article',
  '/signup': 'signup',
  '/faq': 'faq',
  '/contact': 'contact',
  '/pricing': 'pricing',
};

export default function App() {
  // Initialize page based on current URL
  const getInitialPage = (): Page => {
    const path = window.location.pathname;
    return pathToPage[path] || 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage());
  const [previousPage, setPreviousPage] = useState<Page>('home');
  const [articleData, setArticleData] = useState<any>(null);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  // Google Tag Manager
  useEffect(() => {
    try {
      // Ensure window object is properly extended
      const w = window as any;
      
      // Initialize dataLayer if it doesn't exist
      w.dataLayer = w.dataLayer || [];
      
      // Define MetaCRM placeholder to prevent errors from external scripts
      if (typeof w.metacrm === 'undefined') {
        w.metacrm = {
          init: () => {},
          track: () => {},
          identify: () => {},
        };
      }
      
      // Define MetaCRMWidget placeholder to prevent errors
      if (typeof w.MetaCRMWidget === 'undefined') {
        w.MetaCRMWidget = {
          init: () => {},
          track: () => {},
          identify: () => {},
        };
      }
      
      // Prevent duplicate GTM initialization
      if (w.gtmInitialized) return;
      w.gtmInitialized = true;
      
      // Defer GTM loading to avoid conflicts with React initialization
      setTimeout(() => {
        // GTM Script
        (function(w: any, d: Document, s: string, l: string, i: string) {
          w[l] = w[l] || [];
          w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s) as HTMLScriptElement,
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          
          // Add error handling for script loading
          j.onerror = function() {
            console.warn('GTM script failed to load');
          };
          
          if (f && f.parentNode) {
            f.parentNode.insertBefore(j, f);
          }
        })(w, document, 'script', 'dataLayer', 'GTM-KZ375S9J');
      }, 100);
    } catch (error) {
      console.error('Error initializing GTM:', error);
    }
  }, []);

  const handleNavigate = (page: string, sectionOrData?: any) => {
    // Check if sectionOrData is a string (section) or an object (article data)
    const isSection = typeof sectionOrData === 'string';
    
    // Store the current page as previous page before navigating
    setPreviousPage(currentPage);
    setCurrentPage(page as Page);
    
    // Update browser URL
    const newPath = pageToPath[page as Page];
    if (newPath && window.location.pathname !== newPath) {
      window.history.pushState({ page }, '', newPath);
    }
    
    if (!isSection && sectionOrData) {
      setArticleData(sectionOrData);
    }
    
    if (isSection) {
      // Store the section to scroll to after navigation
      setPendingSection(sectionOrData);
    } else {
      // Normal navigation without section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Track page view in GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'page_view',
        page_path: newPath,
        page_title: page,
      });
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      const page = pathToPage[path] || 'home';
      setPreviousPage(currentPage);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPage]);

  // Effect to handle section scrolling after page change
  useEffect(() => {
    if (pendingSection) {
      // Wait for the page to render
      setTimeout(() => {
        const element = document.getElementById(pendingSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setPendingSection(null);
      }, 100);
    }
  }, [currentPage, pendingSection]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-KZ375S9J"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      
      {currentPage !== 'signup' && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
        {currentPage === 'article' && <ArticlePage article={articleData} onNavigate={handleNavigate} />}
        {currentPage === 'signup' && <SignUpPage onNavigate={handleNavigate} previousPage={previousPage} />}
        {currentPage === 'faq' && <FAQPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'pricing' && <PricingPage onNavigate={handleNavigate} />}
      </main>

      {currentPage !== 'signup' && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}