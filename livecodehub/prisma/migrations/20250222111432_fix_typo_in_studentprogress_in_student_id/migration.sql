/*
  Warnings:

  - You are about to drop the column `studetId` on the `studentProgress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `studentProgress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `studentProgress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "studentProgress" DROP CONSTRAINT "studentProgress_studetId_fkey";

-- DropIndex
DROP INDEX "studentProgress_studetId_key";

-- AlterTable
ALTER TABLE "studentProgress" DROP COLUMN "studetId",
ADD COLUMN     "studentId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "studentProgress_studentId_key" ON "studentProgress"("studentId");

-- AddForeignKey
ALTER TABLE "studentProgress" ADD CONSTRAINT "studentProgress_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
