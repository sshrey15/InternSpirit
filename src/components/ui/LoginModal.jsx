"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Email: ${email}, Password: ${password}`);
    // After successful login, you can redirect the user to a specific page
    // router.push('/some-page');
  };

  return (
    <Form>
      <form>
        <DialogContent className="sm:max-w-[400px] bg-white ">
          <DialogHeader className="items-center underline font-bold font-2xl opacity-50" >
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email:
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="col-span-3"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password:
              </Label>
              <Input
                type="password"
                id="password"
                className="col-span-3"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className="bg-green-500 text-white">
                  Login
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Form>
  );
}

export default LoginModal;