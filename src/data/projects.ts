import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Doctor Appointment Booking System',
    description: 'A full-stack appointment booking platform with role-based authentication for patients, doctors, and admin, including scheduling and secure online payments.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    githubUrl: 'YOUR_GITHUB_LINK',
    demoUrl: 'YOUR_DEPLOYED_LINK',
    imageUrl: '/projects/doctor.png',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'AI Resume Builder',
    description: 'An intelligent resume builder with authentication, live preview, and shareable links, enabling users to create and manage multiple resumes with customizable templates.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Google Gemini API', 'ImageKit'],
    githubUrl: 'YOUR_GITHUB_LINK',
    demoUrl: 'YOUR_DEPLOYED_LINK',
    imageUrl: '/projects/resume_builder.png',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Social Media Web Application',
    description: 'A full-featured social media platform with authentication, real-time chat, post feeds, and user interactions like follow/unfollow and friend requests.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Clerk', 'Inngest'],
    githubUrl: 'YOUR_GITHUB_LINK',
    demoUrl: 'YOUR_DEPLOYED_LINK',
    imageUrl: '/projects/social_media.png',
    featured: true,
  }
];