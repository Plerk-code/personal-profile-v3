import { useEffect } from 'react';

interface AnalyticsProps {
  measurementId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    if (!measurementId || typeof window === 'undefined') return;

    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [measurementId]);

  return null;
};

export default Analytics;
