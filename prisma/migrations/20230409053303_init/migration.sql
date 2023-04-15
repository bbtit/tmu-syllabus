-- CreateTable
CREATE TABLE "class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "academic_year" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "day_of_week" TEXT NOT NULL,
    "period" INTEGER NOT NULL,
    "instructor" TEXT NOT NULL,
    "subject_name" TEXT NOT NULL,
    "class_number" TEXT NOT NULL,
    "credits" INTEGER NOT NULL,
    "url" TEXT,
    "category" TEXT NOT NULL,
    "faculty_code" TEXT NOT NULL
);
