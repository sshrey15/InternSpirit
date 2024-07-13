/*
  Warnings:

  - You are about to drop the `_ApplicantToEliteGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ApplicantToEliteGroup" DROP CONSTRAINT "_ApplicantToEliteGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApplicantToEliteGroup" DROP CONSTRAINT "_ApplicantToEliteGroup_B_fkey";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "eliteGroupId" TEXT;

-- DropTable
DROP TABLE "_ApplicantToEliteGroup";

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_eliteGroupId_fkey" FOREIGN KEY ("eliteGroupId") REFERENCES "EliteGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
