"use client"

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const UserForm = () => {
    async function handleChange(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const name = (e.target as HTMLInputElement)?.name as any;
        const values = (e.target as HTMLInputElement)?.value as any;
        // signIn("credentials", { name, value });
        // const ob = { username: name as string, password: value as string }

        const res = await fetch("/api/createUser", {
            method: "POST",
            body: JSON.stringify({ username: name.value as string, password: values.value }),
        });

        if (res.status === 200) signIn("credentials", { username: name.value as string, password: values.value as string });

    }
    return (
        <div>
            <form onSubmit={handleChange}>
                <input type="text" name="name" />
                <input type="text" name="value" />
                <button>dep</button>
            </form>
        </div>
    );
}

export default UserForm;
