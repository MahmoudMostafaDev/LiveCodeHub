import React from 'react';
import Image from 'next/image';
const UserProfile = ({ username, image = "/utils/pf.png" }: { username: string, image: string }) => {
    return (
        <>
            <Image src={image} width={100} height={100} alt="Profile Picture" />
            <h3>{username}</h3>
        </>
    );
}

export default UserProfile;
