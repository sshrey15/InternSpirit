"use client"
import React,{useState} from 'react';
export const LoadingContext = React.createContext();

export const CollegeIdProvider = ({children}) => {
    const [collegeId,setcollegeId] = useState(' ');

    return (
        <LoadingContext.Provider value={{loading,setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

