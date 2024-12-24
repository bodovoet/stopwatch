import Header from "@/components/shared/public/Header";
import Footer from "@/components/shared/public/Footer";
import "@/layout/globals.css";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background-primary)]">
      <header>
        <Header />
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}