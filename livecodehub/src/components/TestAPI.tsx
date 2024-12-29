import { cookies } from 'next/headers';
import React from 'react';

const TestAPI = async () => {
    // const sessionToken = await cookies()
    // console.log(sessionToken)
    // const res = await fetch("http://localhost:3000/api/courses/continue", { method: "GET", headers: { Cookie: (await cookies()).toString() } });
    // console.log(await res.json());
    // const res = await fetch("http://localhost:3000/api/courses/popular", { method: "GET", headers: { Cookie: (await cookies()).toString() } });
    // console.log(await res.json());
    // const res = await fetch("http://localhost:3000/api/courses/lastcourse", { method: "GET", headers: { Cookie: (await cookies()).toString() } });
    // console.log(await res.json());
    // const res = await fetch("http://localhost:3000/api/user/streak", { method: "GET", headers: { Cookie: (await cookies()).toString() } });
    // if (res.status === 200) console.log(await res.json());
    const res = await fetch("http://localhost:3000/api/user/todaylessons", { method: "GET", headers: { Cookie: (await cookies()).toString() } });
    if (res.status === 200) console.log(await res.json());
    return (
        <div>

        </div>
    );
}

export default TestAPI;
