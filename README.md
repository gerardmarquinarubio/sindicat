# How to start

1. ``npm i``
2. ``cp .env.example .env``
3. Edit .env with your postgress DB
4. ``cp .env.local.example .env.local``
5. Edit .env.local with your own keys
6. ``npx prisma migrate reset``
7. ``npx prisma db push``
8. ``npm run dev``