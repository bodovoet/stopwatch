export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} OpenSeam. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="/public/Privacy" className="hover:text-gray-600">Privacy Policy</a>
          <a href="/public/Terms" className="hover:text-gray-600">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}