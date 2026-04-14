import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DevValidationWrapper } from "@/components/dev/ValidationChecker";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { VercelAnalytics } from "@/components/analytics/VercelAnalytics";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
});

export const metadata: Metadata = {
  title: {
  default: "Bashee Bilal - Full Stack Developer",
  template: "%s | Bashee Bilal Portfolio"
},
  description: "Full Stack Developer specializing in MERN stack, building scalable web applications with modern technologies and real-world impact.",
  keywords: [
   "Full Stack Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "MongoDB",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Socket.IO",
    "API Integration",
    "Docker",
    "Git",
    "Cloud Deployment",
    "Computer Science",
    "Portfolio",
    "Bashee Bilal"
  ],
  authors: [{ name: "Bashee Bilal" }],
  creator: "Bashee Bilal",
  publisher: "Bashee Bilal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mohmmad-akeeb-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Bashee Bilal - Full Stack Developer',
    description: "Full Stack Developer specializing in MERN stack, building scalable web applications with modern technologies and real-world impact.",
    siteName: 'Bashee Bilal Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Bashee Bilal - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bashee Bilal - Full Stack Developer',
    description: "Full Stack Developer specializing in MERN stack, building scalable web applications with modern technologies and real-world impact.",
    images: ['/og-image.svg'],
    creator: '@basheebilal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/resume.pdf" as="document" type="application/pdf" />
        <link rel="preload" href="/profile-placeholder.svg" as="image" type="image/svg+xml" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Theme initialization script to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = theme || systemTheme;
                  document.documentElement.classList.add(initialTheme);
                  document.documentElement.setAttribute('data-theme', initialTheme);
                  document.documentElement.style.colorScheme = initialTheme;
                } catch (e) {
                  document.documentElement.classList.add('light');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bashee Bilal",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer specializing in MERN stack, building scalable web applications with modern technologies and real-world impact.",
              "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://mohmmad-akeeb-portfolio.vercel.app',
              "sameAs": [
                "https://linkedin.com/in/bashee-bilal",
                "https://github.com/basheebilalwani"
              ],
              "knowsAbout": [
                "Full Stack Development",
                "MERN Stack",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "REST APIs",
                "JWT Authentication",
                "Socket.IO",
                "Web Development",
                "Responsive Design",
                "API Integration",
                "Docker",
                "Git",
                "Cloud Deployment"
              ],
              "alumniOf": "Central University of Kashmir",
              "worksFor": {
                "@type": "Organization",
                "name": "Full Stack Developer"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DevValidationWrapper>
          {children}
        </DevValidationWrapper>
        
        {/* Analytics */}
        <GoogleAnalytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
