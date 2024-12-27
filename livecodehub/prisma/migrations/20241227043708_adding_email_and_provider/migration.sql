/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "provider" AS ENUM ('GITHUB', 'GOOGLE', 'CREDENTIALS');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "email" VARCHAR(60),
ADD COLUMN     "provider" "provider" NOT NULL DEFAULT 'CREDENTIALS',
ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
