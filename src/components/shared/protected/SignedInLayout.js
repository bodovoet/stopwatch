import SignedInHeader from "@/components/shared/protected/SignedInHeader";
import SignedInSidebar from "@/components/shared/protected/SignedInSidebar";

export default function SignedInLayout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <SignedInSidebar />
      </aside>
      <div className="main-content">
        <header className="header">
          <SignedInHeader />
        </header>
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}