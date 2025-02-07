// import { prisma } from "@/lib/prisma";
// import { randomBytes, scrypt } from "crypto";
// import { signIn } from "next-auth/react";
// import { promisify } from "util";
// import { validateUsername } from "@/utils/Validate";

// export async function POST(request: Request) {
//   console.log("createfUser");
//   const { username, password } = await request.json();
//   if (!username || !password) {
//     return Response.json(
//       { message: "Missing username or password", code: 101 },
//       { status: 400 }
//     );
//   }

//   if (validateUsername(username.trim()).code !== 1)
//     return Response.json(validateUsername(username), { status: 400 });

//   if (password < 3 || password > 50)
//     return Response.json(
//       { message: "Password must be between 3 and 50 characters", code: 102 },
//       { status: 400 }
//     );
//   const isHere = !!(await prisma.user.findFirst({
//     where: { username: username.trim() },
//   }));
//   if (isHere)
//     return Response.json(
//       { message: "Username is already taken", code: 103 },
//       { status: 400 }
//     );
//   const validUsername = username.trim();
//   const hashedPassword = await hashPassword(password);
//   const user = await prisma.user.create({
//     data: {
//       username: validUsername,
//       password: hashedPassword,
//     },
//     select: { id: true, username: true },
//   });

//   return Response.json(user, { status: 200 });
// }

// async function hashPassword(password: string) {
//   const scryptAsync = promisify(scrypt);
//   const salt = randomBytes(16).toString("hex");
//   const hashed = await scryptAsync(password, salt, 64);
//   return `${hashed}:${salt}`;
// }
