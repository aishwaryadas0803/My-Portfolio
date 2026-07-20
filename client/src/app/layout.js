import '../../globals.css';

export const metadata = {
  metadataBase: new URL('https://aishwaryadas.vercel.app'),
  title: "Aishwarya Das | B.Tech CSE Student & Full-Stack Developer",
  description: "Portfolio of Aishwarya Das, an aspiring Computer Science & Engineering student at JIS College of Engineering. Exploring Full-Stack Web Development, Java, Python, and hardware systems with a premium, elegant tech aesthetic.",
  keywords: "Aishwarya Das, Portfolio, JIS College of Engineering, Computer Science, CSE, Full-Stack Developer, React, Next.js, Node.js, Express",
  authors: [{ name: "Aishwarya Das" }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Aishwarya Das | Portfolio",
    description: "Portfolio of Aishwarya Das — B.Tech CSE Student & Full-Stack Developer",
    url: 'https://aishwaryadas.vercel.app',
    siteName: 'Aishwarya Das Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 1000,
        alt: 'Aishwarya Das',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aishwarya Das | Portfolio",
    description: "Portfolio of Aishwarya Das — B.Tech CSE Student & Full-Stack Developer",
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-darkBg-primary text-offwhite min-h-screen flex flex-col selection:bg-girly-pink/30 selection:text-offwhite">
        {children}
      </body>
    </html>
  );
}
