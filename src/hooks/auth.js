"use client"
import { useState, useEffect } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // On initial run, check if 'isLoggedIn' is stored in localStorage
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  });

  useEffect(() => {
    const checkLoginStatus = () => {
      const cookies = parseCookies();
      const loggedIn = 'applicantCookie' in cookies || 'employerCookie' in cookies;
      
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    // Whenever 'isLoggedIn' changes, store it in localStorage
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);


  const login = () => {
    setCookie(null, 'applicantCookie', 'true', {
      expires: new Date(Date.now() + 24 * 3600 * 1000),
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