-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "theme" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sugestion" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
