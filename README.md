# AI Trainer

AI Trainer is a modern career-assistance web application built with **Next.js**, **Prisma**, and **TailwindCSS**. It provides tools to streamline the job application process, including resume building, AI-generated cover letters, interview preparation, and more.

---

## Features

- **Resume Builder**  
  Create and manage resumes with a customizable entry form and structured templates.

- **AI Cover Letter Generator**  
  Generate personalized cover letters, preview them, and manage saved versions.

- **Interview Preparation**  
  Access mock interview quizzes, view results, and track performance using interactive charts and stats.

- **Onboarding Flow**  
  Guided onboarding process for new users.

- **Authentication**  
  Sign-up and sign-in system with session handling.

- **Dashboard**  
  Centralized dashboard to navigate and manage career tools.

---

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), PostCSS
- **Database:** [Prisma](https://www.prisma.io/) ORM with migrations
- **Linting:** ESLint
- **Other Tools:** Inngest, Middleware

---

## Project Structure

```
ai-trainer/
├── app/                    # Next.js App Router structure
│   ├── (main)/            # Main application pages (resume, interview, cover letter, dashboard, onboarding)
│   ├── (auth)/            # Authentication pages (sign-up, sign-in)
│   ├── api/               # API routes
│   ├── lib/               # Helpers and schema utilities
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── prisma/                # Prisma schema and migrations
├── components.json        # Component registry
├── package.json           # Dependencies and scripts
├── tailwind.config.mjs    # TailwindCSS configuration
├── next.config.mjs        # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
└── tests/                 # Test scripts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-trainer.git
cd ai-trainer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and configure your database and other secrets:

```env
DATABASE_URL="your_database_url"
NEXTAUTH_SECRET="your_auth_secret"
```

### 4. Run Prisma migrations

```bash
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
```

App will be available at: [http://localhost:3000](http://localhost:3000)

---

## Testing

```bash
npm run test
```

---
