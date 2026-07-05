import '../../globals.css';

export const metadata = {
  title: "Aishwarya Das | B.Tech CSE Student & Full-Stack Developer",
  description: "Portfolio of Aishwarya Das, an aspiring Computer Science & Engineering student at JIS College of Engineering. Exploring Full-Stack Web Development, Java, Python, and hardware systems with a premium, elegant tech aesthetic.",
  keywords: "Aishwarya Das, Portfolio, JIS College of Engineering, Computer Science, CSE, Full-Stack Developer, React, Next.js, Node.js, Express, Mauve Midnight Theme",
  authors: [{ name: "Aishwarya Das" }],
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
