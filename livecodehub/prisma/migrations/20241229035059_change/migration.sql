-- AlterTable
ALTER TABLE "streak" ADD COLUMN     "lastAction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "counterData" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "todayCounter" INTEGER NOT NULL DEFAULT 0;
