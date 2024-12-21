import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "@/layout/globals.css";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      {/* The flex-grow ensures the main content expands to push the footer down */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}