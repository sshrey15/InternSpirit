"use client";
import React, { useState, useEffect, useContext } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';
import Animation from "@/components/ui/Animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  useAuthContext } from "@/context/AuthContext";

const Page = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
      
  const { isLoggedIn, setIsLoggedIn} = useAuthContext();


  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin({
      ...login,
      [name]: value,

    
    })

  }


  useEffect(() => {
    console.log(isLoggedIn);
}, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/applicant/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
  
      const data = await response.json();
  
      if (data.message === "success") {
        console.log(data);
        setIsLoggedIn(true);
        alert("Login Successful");
        router.push("/Dashboard/student");
    } else if (data.message === "Invalid email" || "Invalid password") {
        // Check if the error is due to incorrect email or password
        console.log("bkl  ")
        console.log(data.message)
        alert(data.message);
      } else {
        console.error(data);
      }
    } catch (err) {
      console.error(err);
    
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="w-full p-10 flex justify-center items-center">
        <Card className="w-1/2 p-5">
          <CardHeader>
            <CardTitle className="font-semibold ">SignIn</CardTitle>
            <p className="text-text-gray text-sm">
              Dont have account
              <Button variant="link" className="text-hero-bg -ml-3">
                create account
              </Button>
            </p>
          </CardHeader>
          <CardContent>
            <CardDescription className="flex relative flex-col gap-4 w-full">
              <Input
                type="email"
                id="email"
                name="email"
                value={login.email}
                placeholder="Email address"
                className="col-span-3"
                onChange={handleChange}
                required
              />

              <Input
                type="password"
                id="email"
                name= "password"
                value={login.password}
                placeholder="Password"
                className="col-span-3 mt-2"
                onChange={handleChange}
                required
              />
            </CardDescription>
          </CardContent>
          <form onSubmit={handleSubmit}>
          <CardFooter>
          <Button type="submit" className={`bg-hero-bg w-full text-white ${isLoading ? <Animation/> : ''}`}>Sign In</Button>          </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Page;
