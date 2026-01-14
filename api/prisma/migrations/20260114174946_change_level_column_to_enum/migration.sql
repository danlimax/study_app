/*
  Warnings:

  - The `level` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'AVANCED');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "level",
ADD COLUMN     "level" "Level" NOT NULL DEFAULT 'BEGINNER';
