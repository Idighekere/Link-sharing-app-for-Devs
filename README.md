# 🔗 Devlinks - Link-Sharing App (HNG Stage 5)

A professional link-sharing platform designed for developers to centralize their online presence. Built as a core technical requirement for **HNG11 Stage 5**.

---

## 🚀 Overview

This project is a full-stack implementation of the Frontend Mentor "Devlinks" challenge. It allows users to create a personalized list of social links, customize their profile, and share a live-previewable link with others. 

**Stage 5 Focus:** The primary goal was to demonstrate proficiency in **Full-Stack Integration**, **Global State Management**, and **Cloud Data Persistence** using Next.js and Firebase.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescript.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Backend/DB:** [Firebase Firestore](https://firebase.google.com/docs/firestore)
- **Storage:** [Firebase Storage](https://firebase.google.com/docs/storage) (for Profile Images)
- **Form Handling:** React Hook Form
- **Validation:** Zod

## ✨ Key Features

- **Full-Stack Persistence:** Unlike client-side versions, all links and profile metadata are stored in **Firestore**, ensuring data persists across devices and sessions.
- **Dynamic Image Hosting:** Profile pictures are uploaded directly to **Firebase Storage**, generating permanent URLs stored in the user's profile document.
- **Real-time Mobile Preview:** A side-by-side mobile mockup that synchronizes instantly with form inputs via React state.
- **Strict Validation:** Custom URL validation logic using **Zod** to ensure links match the specific patterns of platforms like GitHub, LinkedIn, and YouTube.
- **HNG Stage 5 Engineering:** Intentionally focused on backend reliability and data synchronization over secondary features like drag-and-drop.

## 🧠 Technical Learnings

- **Asynchronous Data Handling:** Managed complex loading states while fetching user data from Firebase during initial mount.
- **Optimistic UI:** Optimized the user experience so that link updates reflect in the preview immediately before the database write completes.
- **File Processing:** Implemented client-side image validation (size and dimensions) before uploading to Firebase Storage.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/idighekere/hng-stage5-devlinks.git](https://github.com/idighekere/hng-stage5-devlinks.git)

2. **Install dependencies:**

  ```bash
  npm install
   ```
3. **Configure Environment Variables:** Create a .env.local file in the root directory:
```text
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
4. **Run development server:**
```bash
npm run dev
```

## 🔗 Project Links
Live Demo: [https://dev-links-idighs.vercel.app/]

HNG Internship: HNG11 Internship

Developed by Idighekere Udo as part of the HNG11 Frontend Track.

   
