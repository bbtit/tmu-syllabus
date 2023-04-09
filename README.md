# My Next.js Template

- Next.js
- TypeScript
- TailwindCSS
- Prisma
- Postgresql
- Docker
- ESLint
- Prettier
- Husky

# Get started

1. コンテナを立ち上げ
   ```zsh
   $ docker-compose up
   ```
1. コンテナの確認
   ```zsh
   $ docker ps
   ```
1. コンテナの中に入る
   ```zsh
   $ docker container exec -it postgres bash
   ```
1. コンテナ内にログインしデータベース一覧を確認
   ```zsh
   $ psql -l
   ```
1. `prisma/schema.prisma`にモデルを追加

1. `.env`に`DATABASE_URL`を記述
   ```zsh
   DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@HOST:PORT/POSTGRES_DB
   ```
   ```zsh
   DATABASE_URL="postgresql://root:secret@localhost:5432/mydb"
   ```
1. マイグレーションの実行
   ```zsh
   $ npx prisma migrate dev --name init
   ```
1. postgres コンテナ内でデータベースの選択とテーブル一覧取得
   ```zsh
   $ docker container exec -it postgres bash
   $ psql -d mydb
   $ \dt;
   ```
1. Prisma Studio を開く
   ```zsh
   $ npx prisma studio
   ```
1. ファイルを作成しデータベースクライアントを作成

   ```zsh
   $ mkdir lib
   $ touch lib/prisma.ts
   ```

   ```ts twoslash
   import { PrismaClient } from '@prisma/client';

   let prisma: PrismaClient;

   if (process.env.NODE_ENV === 'production') {
     prisma = new PrismaClient();
   } else {
     const globalWithPrisma = global as typeof globalThis & {
       prisma: PrismaClient;
     };
     if (!globalWithPrisma.prisma) {
       globalWithPrisma.prisma = new PrismaClient();
     }
     prisma = globalWithPrisma.prisma;
   }

   export default prisma;
   ```
