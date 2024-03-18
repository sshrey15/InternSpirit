"use client"
import { Heading1 } from 'lucide-react';
import React, { useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Shrey</h1>
      <form onSubmit={handleSubmit} className="bg-blue-200 p-6 rounded shadow-md justify-center items-center  w-1/2">
        <label className="block mb-2">
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 p-2 w-full border rounded" />
        </label>
        <label className="block mb-2">
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 p-2 w-full border rounded" />
        </label>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </>
  );
}

export default Page;