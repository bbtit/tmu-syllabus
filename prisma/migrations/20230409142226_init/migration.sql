-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "academic_year" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "day_of_week" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "instructor" TEXT,
    "subject_name" TEXT NOT NULL,
    "class_number" TEXT NOT NULL,
    "credits" TEXT NOT NULL,
    "url" TEXT,
    "category" TEXT,
    "faculty_code" TEXT
);
INSERT INTO "new_class" ("academic_year", "category", "class_number", "credits", "day_of_week", "faculty_code", "id", "instructor", "period", "semester", "subject_name", "url") SELECT "academic_year", "category", "class_number", "credits", "day_of_week", "faculty_code", "id", "instructor", "period", "semester", "subject_name", "url" FROM "class";
DROP TABLE "class";
ALTER TABLE "new_class" RENAME TO "class";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
