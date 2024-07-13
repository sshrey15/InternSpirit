"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


import { useAuthContext } from '@/context/AuthContext';

const AuthGuard = ({ children, redirect }) => {
  const router = useRouter();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(redirect);
      console.log(isLoggedIn);
    }
  }, [router,isLoggedIn, redirect, ]);

  return children;
};

export default AuthGuard;