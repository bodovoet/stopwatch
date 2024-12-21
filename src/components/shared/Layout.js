import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import '@/layout/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}