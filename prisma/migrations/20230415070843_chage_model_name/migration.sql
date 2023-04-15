/*
  Warnings:

  - You are about to drop the `class` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "class";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ClassInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "academicYear" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "instructor" TEXT,
    "subjectName" TEXT NOT NULL,
    "classNumber" TEXT NOT NULL,
    "credits" TEXT NOT NULL,
    "url" TEXT,
    "category" TEXT,
    "facultyCode" TEXT
);
