Here's the updated `README.md` for your HireHub app:

---

# HireHub

Welcome to HireHub! This is a web application designed to bridge the gap between job seekers and recruiters, providing a seamless platform for applying to jobs and managing job applications. Whether you're a candidate looking for your next opportunity or a recruiter seeking the perfect fit for your team, HireHub has got you covered.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

HireHub is a comprehensive job application platform where users can log in either as a candidate or a recruiter. Candidates can search and apply for jobs, track their application status, and receive notifications on the outcome of their applications. Recruiters can post job openings, review applications, and communicate with candidates. Our goal is to streamline the hiring process for both parties, making it efficient and effective.

## Tech Stack

- **Frontend:**
  - React.js
  - Next.js
  - Tailwind CSS
  - shadcn

- **Backend:**
  - Node.js
  - Next.js dynamic API routes

- **Database:**
  - PostgreSQL

- **Services:**
  - Supabase(Storage , PostgreSQL)
  - Uploadthing(Stroge for rendering)
  - Vercel(Hosting)
  - MongoDB(Database SP)
  - Stripe(Payemnt Gateway)
  - Clerk(Authentication)

## Features

- **Authentication using Clerk:**
  - User can sign up for a new account.
  - User can log in to their existing account.
  - User can log out securely.
  - Password reset functionality for forgotten passwords.

- **Register as a Candidate or Recruiter:**
  - Separate registration processes tailored for candidates and recruiters.
  - Role-specific features and interfaces.

- **Profile Management:**
  - Create and update personal profiles with professional information.
  - Manage contact information and resume details.

- **Job Posting:**
  - Recruiters can create new job postings.
  - Edit and manage existing job postings.
  - View a dashboard of all posted jobs.

- **Job Search and Application:**
  - Candidates can search for jobs using keywords and filters.
  - Apply for jobs with a single click.

- **Application Tracking:**
  - Track the status of job applications (accepted, rejected).
  - Receive notifications on application updates.

- **Feed Section:**
  - Upload casual photos and posts to a social feed.
  - View posts from other users.

- **Like Button:**
  - Like and interact with posts on the feed.

- **Premium Membership:**
  - Access exclusive features like highlighted profiles and priority application reviews.
  - Subscription management for upgrading to premium using Stripe.

- **Filters for Finding Jobs:**
  - Use advanced filters such as location, job type, salary range, and industry to find jobs.
  - Save filter preferences for future searches.

- **Dark Mode:**
  - Toggle between light and dark themes for a comfortable viewing experience.
  - Automatically adjust based on system settings.

---

## Getting Started

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- PostgreSQL

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/hirehub.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd hirehub
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=your_postgresql_connection_string
   CLERK_FRONTEND_API=your_clerk_frontend_api
   STRIPE_SECRET_KEY=your_stripe_secret_key
   UPLOADTHING_API_KEY=your_uploadthing_api_key
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Feel free to customize the sections as per your project's specific requirements.
