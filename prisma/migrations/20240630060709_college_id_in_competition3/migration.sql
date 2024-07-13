/*
  Warnings:

  - You are about to drop the `_CollegeToCompetition` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CollegeToCompetition" DROP CONSTRAINT "_CollegeToCompetition_A_fkey";

-- DropForeignKey
ALTER TABLE "_CollegeToCompetition" DROP CONSTRAINT "_CollegeToCompetition_B_fkey";

-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "collegeId" TEXT;

-- DropTable
DROP TABLE "_CollegeToCompetition";

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE SET NULL ON UPDATE CASCADE;
