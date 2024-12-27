import React from 'react';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
const Page = async () => {
    const session = await getServerSession(options);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/member");
    }
    return (
        <div>
            <h1>Client Member</h1>
        </div>
    );
}

export default Page;
