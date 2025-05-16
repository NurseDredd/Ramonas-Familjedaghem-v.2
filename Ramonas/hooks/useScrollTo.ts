import { useCallback } from 'react';

interface ScrollOptions {
  behavior?: ScrollBehavior;
}

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { behavior = 'smooth' } = options;
    const element = document.getElementById(elementId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior,
        block: 'start'
      });
    }
  }, []);

  return scrollTo;
};