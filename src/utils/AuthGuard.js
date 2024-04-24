"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {parseCookies} from 'nookies'


import { useAuthContext } from '@/context/AuthContext';

const AuthGuard = ({ children, redirect }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      router.push(redirect);
    }
  }, [isLoggedIn, redirect, router]);

  return children;
};

export default AuthGuard;