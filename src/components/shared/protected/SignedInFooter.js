export default function SignedInFooter() {
    return (
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Stopwatch App. All rights reserved.</p>
      </footer>
    );
  }