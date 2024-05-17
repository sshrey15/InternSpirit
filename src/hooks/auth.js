import { useState, useEffect } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const cookies = parseCookies();
      const loggedIn = 'applicantCookie' in cookies || 'employerCookie' in cookies;
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  const login = () => {
    setCookie(null, 'applicantCookie', 'true', {
      expires,
      path: '/',
    });
    setIsLoggedIn(true);
  };

  const logout = () => {
    destroyCookie(null, 'applicantCookie');
    destroyCookie(null, 'employerCookie');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout, setIsLoggedIn };
};