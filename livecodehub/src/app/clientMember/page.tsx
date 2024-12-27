"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
const Page = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/api/auth/signin?callbackUrl=/clientMember");
        }
    });
    console.log(session);
    return (
        <div>
            <h1>Client Member</h1>
        </div>
    );
}
export default Page;
