import { useState, useEffect } from 'react';
import { parseCookies } from 'nookies';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Get the initial value from local storage
    const value = localStorage.getItem('isLoggedIn');
    return value === 'true';
  });

  useEffect(() => {
    const checkLoginStatus = () => {
      const cookies = parseCookies();
      const loggedIn = 'applicantCookie' in cookies || 'employerCookie' in cookies;      setIsLoggedIn(loggedIn);

      // Store the value in local storage
      localStorage.setItem('isLoggedIn', loggedIn);
    };

    // Run checkLoginStatus when the component mounts
    checkLoginStatus();
  }, []); // Empty dependency array means this runs once on mount

  return { isLoggedIn, setIsLoggedIn };
};