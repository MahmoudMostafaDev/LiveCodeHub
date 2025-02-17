"use client"
import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        async function Test() {
            const res = await fetch("/api/courses/lastcourse", { method: "GET" });
            const data = await res.json();
            console.log(data);
        }
        Test();
    }, [])
    return (
        <div>

        </div>
    );
}

export default Page;
