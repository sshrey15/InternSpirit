"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Animation from './Animations';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { useRouter } from 'next/navigation'

const EmployerModal = () => {
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const [employeInfo, setEmployeInfo] = useState({
        name: "",
        email: "",
        passwordHash: "",
        confirmpassword: "",
        companyName: "",
        companyLocation: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;



        setEmployeInfo({
            ...employeInfo,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        closeDialog();
        console.log("submitted")

        if (employeInfo.passwordHash !== employeInfo.confirmpassword) {
            alert("passwords do not match")
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/employer/signUp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employeInfo),
            })
            console.log('Response: ', response);
            console.log('data: ', employeInfo)

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            console.log('Data: ', data);
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
        }
       
        setIsLoading(false);

        router.push("/Login/employer")


    }




    return (
        <>
            <Form  >
                <form >
                    <DialogContent isOpen={isDialogOpen} onDismiss={closeDialog} className="sm:max-w-[400px] bg-white ">
                        <Dialog />

                        <DialogHeader className="items-center underline font-bold font-2xl opacity-50" >
                            <DialogTitle>Employer SignUp</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className='grid grid-cols-1 gap-3'>
                                <div className="items-center gap-2">
                                    <Label htmlFor="firstName" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        value={employeInfo.name}
                                        id="firstName"
                                        className="col-span-6"
                                        placeholder="Angad"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className="items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    email
                                </Label>
                                <Input
                                    id="username"
                                    placeholder="sshrey844@gmail.com"
                                    className="col-span-3"
                                    name="email"
                                    value={employeInfo.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-3'>
                                <div className="items-center gap-2">
                                    <Label htmlFor="firstName" className="text-right">
                                        Company Name
                                    </Label>
                                    <Input
                                         value={employeInfo.companyName}
                                        id="firstName"
                                        className="col-span-3 "
                                        placeholder="Google"
                                        name="companyName"
                                     onChange={handleChange}
                                    />
                                </div>
                                <div className="items-center gap-2">
                                    <Label htmlFor="lastName" className="text-right">
                                        City
                                    </Label>
                                    <Input
                                        value={employeInfo.companyLocation}
                                        id="lastName"
                                        placeholder="Pune "
                                        className="col-span-3"
                                        name="companyLocation"
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Password
                                </Label>

                                <Input
                                    type="password"
                                    id="password"
                                    className="col-span-3"
                                    name="passwordHash"
                                    value={employeInfo.passwordHash}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Confirm password
                                </Label>
                                <Input
                                    value={employeInfo.confirmpassword}
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    onChange={handleChange}
                                    className="col-span-3"
                                />
                            </div>


                        </div>
                        <form onSubmit={handleSubmit} >
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button type="submit" className="bg-hero-bg text-white" >
                                        SignUp
                                    </Button>
                                </DialogClose>

                            </DialogFooter>

                        </form>
                        {isLoading && <Animation />}
                    </DialogContent>
                </form>
            </Form>
        </>
    )
}

export default EmployerModal