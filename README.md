# URL Shortener

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeORM](https://typeorm.io/)
- [Koa.js](https://koajs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

1. Clone the project

   ```
   git clone https://sgts.gitlab-dedicated.com/joshua_david_ang/url-shortener-fe.git
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Set up environment variables

- Create the file `.env.local` at the root folder
- Enter the following code

  ```
    NEXT_PUBLIC_SEND_URL=http://localhost:3001/sendUrl
    NEXT_PUBLIC_LONG_URL_IS_EXIST=http://localhost:3001/isExist
  ```

4. Run the project in development environment

   ```
   npm run dev
   ```

## Acknowledgements

Developed by [@Joshua](https://www.linkedin.com/in/joshuadavidang/)
