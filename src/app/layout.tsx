import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Docteur Robot | Clinique de Demain",
  description:
    "Plateforme immersive pour préparer votre visite chez un docteur robot : explorez les technologies, planifiez une consultation et découvrez nos protocoles.",
  metadataBase: new URL("https://agentic-77428e10.vercel.app"),
  openGraph: {
    title: "Docteur Robot",
    description:
      "Préparez votre rendez-vous avec un docteur robot : simulateur de consultation, calendrier intelligent et guide des protocoles.",
    url: "https://agentic-77428e10.vercel.app",
    siteName: "Docteur Robot",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://agentic-77428e10.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-shell">
          <header className="app-header">
            <p className="app-banner">
              Rendez-vous immersif avec <strong>Docteur Robot</strong> - clinique augmentée ouverte 24/7.
            </p>
          </header>
          {children}
          <footer className="app-footer">
            <span>© {currentYear} Clinique Synapse - Médecine augmentée pour tous.</span>
            <nav>
              <a href="#experiences">Expérience</a>
              <a href="#protocoles">Protocoles</a>
              <a href="#contact">Contact</a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
