"use client"
import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import Loading from '../../../loading';

const ParentComponent = () => {
  const [employerName, setEmployerName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/employer')
      .then(response => response.json())
      .then(data => {
        setEmployerName(data.employer.name);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <ProfileHeader employerName={employerName} />;
}

export default ParentComponent;