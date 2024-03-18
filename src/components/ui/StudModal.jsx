"use client"
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Bars } from 'react-loader-spinner'
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
import { useRouter } from 'next/navigation';
import {
    Form,

} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { collegeIdMap } from '@/utils/collegeId';
import { set } from 'lodash';


const StudModal = () => {
    const router = useRouter();
    // const { firstName, lastName, email, password, collegeId } =
    const [isloading, setIsloading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => {
        setIsDialogOpen(true);
      };

      const closeDialog = () => {
        setIsDialogOpen(false);
      };
      
    const [studInfo, setstudInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",
        collegeId: "123",

    })

    useEffect(() => {
        if (isloading) {
            closeDialog();
        }
    }, [isloading]);


    const handleChange = (e) => {
        const { name, value } = e.target;


        if (name == "collegename") {
            console.log("collegename", value);
            setstudInfo({
                ...studInfo,
                collegeId: value
            })
        } else {
            setstudInfo({
                ...studInfo,
                [name]: value

            })
        }


    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        closeDialog();
        console.log("submitted");

        if (studInfo.confirmpassword && studInfo.confirmpassword !== studInfo.password) {
            alert("Passwords do not match");
            setIsloading(false);
            return
        }


        //Excluding confirmPassword from the request body
        const { confirmPassword, ...studInfoWithoutConfirmPassword } = studInfo;

        try {
            const response = await fetch("/api/auth/applicant/signUp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studInfoWithoutConfirmPassword),
            });
            console.log('Response: ', response);

            if (!response.ok) {
                
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('DATA', data);
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
        } finally {
            setIsloading(false);
        }
        router.push("/Login/student/verify")
    };



    return (
        <>
            <Form  >
                <form >
                    <DialogContent isOpen={isDialogOpen} onDismiss={closeDialog} className="sm:max-w-[400px] bg-white ">
                        <Dialog />

                        <DialogHeader className="items-center underline font-bold font-2xl opacity-50" >
                            <DialogTitle>SignUp</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className='grid grid-cols-2 gap-3'>
                                <div className="items-center gap-2">
                                    <Label htmlFor="firstName" className="text-right">
                                        FirstName
                                    </Label>
                                    <Input
                                        value={studInfo.firstName}
                                        id="firstName"
                                        className="col-span-3"
                                        placeholder="Angad"
                                        name="firstName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="items-center gap-2">
                                    <Label htmlFor="lastName" className="text-right">
                                        LastName
                                    </Label>
                                    <Input
                                        value={studInfo.lastName}
                                        id="lastName"
                                        placeholder="Singh"
                                        className="col-span-3"
                                        name="lastName"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    college email
                                </Label>
                                <Input
                                    id="username"
                                    placeholder="sshrey844@gmail.com"
                                    className="col-span-3"
                                    name="email"
                                    value={studInfo.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Password
                                </Label>

                                <Input
                                    type="password"
                                    id="password"
                                    className="col-span-3"
                                    name="password"
                                    value={studInfo.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Confirm password
                                </Label>
                                <Input
                                    value={studInfo.confirmpassword}
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    onChange={handleChange}
                                    className="col-span-3"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="title" className="block">
                                    College
                                </label>
                                <select
                                    id="collegename"
                                    name="collegename"

                                    value={studInfo.collegeId}
                                    className="w-full bg-white px-3 py-2 border rounded"
                                    required
                                    onChange={handleChange}
                                >
                                    <option value={collegeIdMap["Goa Engineering College"]}>Goa Engineering College</option>
                                    <option value={collegeIdMap["Padre Conceicao College Of Egineering"]}>Padre Conceicao College Of Engineering</option>
                                    <option value={collegeIdMap["Don Bosco College of Engineering"]}>Don Bosco College of Engineering</option>
                                    <option value={collegeIdMap["Chowgule College of Arts and Science"]}>Chowgule College of Arts and Science</option>
                                    <option value={collegeIdMap["Shree Damodar College of Commerce and Economics"]}>Shree Damodar College of Commerce and Economics</option>                            </select>
                            </div>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <DialogFooter>
                            <DialogClose asChild>
                            <Button type="submit" className="bg-green-500 text-white" onClick={() => setIsloading(true)}>
                                    SignUp
                                </Button>
          </DialogClose>
                              
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </form>
            </Form>
            {
            isloading && 
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: This will add a semi-transparent background
            }}>
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    visible={true}
                />
            </div>
        }



        </>
    )
}

export default StudModal