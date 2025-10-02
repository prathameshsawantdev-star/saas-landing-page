import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // 1. Define the media query constant for dark mode
  const DARK_MODE_QUERY = '(prefers-color-scheme: dark)';
  
  // 2. Initialize state based on the current system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if window and matchMedia are available (for SSR compatibility)
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia(DARK_MODE_QUERY).matches;
    }
    return false; // Default to light mode if not in a browser environment
  });

  useEffect(() => {
    // 3. Check for browser support
    if (!window.matchMedia) {
      return;
    }

    // 4. Create the MediaQueryList object and listener function
    const mediaQueryList = window.matchMedia(DARK_MODE_QUERY);

    const listener = (e:any) => {
      // Update the state whenever the preference changes
      setIsDarkMode(e.matches);
    };

    // 5. Attach the listener (using addEventListener is preferred for modern browsers)
    mediaQueryList.addEventListener('change', listener);

    // 6. Cleanup function: remove the listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []); // Run only once on mount

  // Return the current mode state
  return isDarkMode;
};

export default useDarkMode;