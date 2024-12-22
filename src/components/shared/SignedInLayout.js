import SignedInSidebar from "./SignedInSidebar";
import SignedInHeader from "./SignedInHeader";

export default function SignedInTemplate({ customerName, children }) {
  return (
    <div className="flex">
      <SignedInSidebar />
      <div className="flex-grow">
        <SignedInHeader customerName={customerName} />
        <main className="p-6 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  );
}