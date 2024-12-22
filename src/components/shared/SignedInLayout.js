import Header from "@/components/shared/SignedInHeader";
import Footer from "@/components/shared/SignedInFooter";

export default function SignedInLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}