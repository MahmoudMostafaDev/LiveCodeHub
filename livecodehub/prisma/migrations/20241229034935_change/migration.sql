-- CreateTable
CREATE TABLE "streak" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "streak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "streak_user_id_key" ON "streak"("user_id");

-- AddForeignKey
ALTER TABLE "streak" ADD CONSTRAINT "fk_streak_user" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
