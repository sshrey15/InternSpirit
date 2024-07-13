-- CreateTable
CREATE TABLE "_CollegeToCompetition" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CollegeToCompetition_AB_unique" ON "_CollegeToCompetition"("A", "B");

-- CreateIndex
CREATE INDEX "_CollegeToCompetition_B_index" ON "_CollegeToCompetition"("B");

-- AddForeignKey
ALTER TABLE "_CollegeToCompetition" ADD CONSTRAINT "_CollegeToCompetition_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToCompetition" ADD CONSTRAINT "_CollegeToCompetition_B_fkey" FOREIGN KEY ("B") REFERENCES "Competition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
