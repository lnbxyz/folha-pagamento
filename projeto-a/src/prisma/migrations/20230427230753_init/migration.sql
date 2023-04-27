-- CreateTable
CREATE TABLE "Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "calculada" BOOLEAN NOT NULL DEFAULT false,
    "funcionario" TEXT NOT NULL
);
