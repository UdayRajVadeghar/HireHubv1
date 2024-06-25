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
  - Next.js API routes

- **Database:**
  - PostgreSQL

- **Services:**
  - Supabase
  - Uploadthing
  - Vercel
  - MongoDB
  - Stripe
  - Clerk

## Features

### For Candidates:
1. **Authentication using Clerk:** Secure and seamless user authentication.
2. **Register as a Candidate or Recruiter:** Tailored registration process for different user roles.
3. **Profile Management:** Create and update your profile with personal and professional information.
4. **Job Search and Application:** Search for jobs based on various filters and apply with a single click.
5. **Application Tracking:** Keep track of your job applications and their statuses.
6. **Feed Section:** Upload casual photos to the feed.
7. **Like Button:** Interact with posts on the feed.
8. **Premium Membership:** Access exclusive features with a premium membership.
9. **Filters for Finding Jobs:** Advanced filtering options to find the perfect job.
10. **Dark Mode:** Switch between light and dark modes for a comfortable viewing experience.

### For Recruiters:
1. **Authentication using Clerk:** Secure and seamless user authentication.
2. **Register as a Recruiter:** Tailored registration process for recruiters.
3. **Profile Management:** Create and update your recruiter profile.
4. **Job Posting:** Create and manage job postings easily.
5. **Application Review:** Review applications from candidates and update their statuses.
6. **Feed Section:** Upload casual photos to the feed.
7. **Like Button:** Interact with posts on the feed.
8. **Premium Membership:** Access exclusive features with a premium membership.
9. **Filters for Finding Candidates:** Advanced filtering options to find the perfect candidate.
10. **Dark Mode:** Switch between light and dark modes for a comfortable viewing experience.

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
