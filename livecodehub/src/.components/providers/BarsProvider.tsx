"use client";
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UserBar from '../userBar/UserBar';
import { usePathname } from 'next/navigation';
const BarsProvider = ({ children }: { children: React.ReactNode }) => {
    const [ishidden, setishidden] = useState(true);
    const pathname = usePathname();
    const hiddenPaths = new Set(["/auth/login", "/auth/signup", "/landing"]);

    if (ishidden && !hiddenPaths.has(pathname)) {
        setishidden(false);
    };

    if (!ishidden && hiddenPaths.has(pathname)) {
        setishidden(true);
    };
    return (
        <>
            {!ishidden && <Sidebar />}
            {children}
            {!ishidden && <UserBar />}
        </>
    );
}

export default BarsProvider;
