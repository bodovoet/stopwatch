export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      {/* Applied left-aligned content and adjusted font size */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-700">
        <div>
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Your App Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}