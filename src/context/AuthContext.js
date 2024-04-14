// src/context/AuthContext.js
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import {parseCookies} from 'nookies'

import { useAuth } from '@/hooks/auth';

const AuthContext = createContext(
  {
    isLoggedIn: false,
    setIsLoggedIn: () => {}
  }
);
export function AuthProvider({ children }) {
  const auth = useAuth();
  

  
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}