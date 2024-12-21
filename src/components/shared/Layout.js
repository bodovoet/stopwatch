import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import '@/layout/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-8">{children}</main>
      </div>
      <Footer />
    </>
  );
}