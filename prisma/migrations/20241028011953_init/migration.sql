-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL
);
