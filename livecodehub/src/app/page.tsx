import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
import UserForm from "@/components/UserForm";
import { prisma } from "@/lib/prisma";
import TestAPI from "@/components/TestAPI";
export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);
  const user = await prisma.user.findFirst({ where: { id: 1 } });
  return (
    <div className={styles.page}>
      <h3>{user?.username}</h3>
      <UserForm />
      <h1>HOME</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.image}</p>
      <p>{session?.user?.userRole}</p>
      {session ? <Link href={"/api/auth/signout"}>GO out</Link> : <Link href={"/api/auth/signin"}>GO in</Link>}
      <TestAPI />
    </div>
  );
}
