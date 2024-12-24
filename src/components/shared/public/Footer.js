export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">About OpenSeam</h3>
          <p className="footer-description">
            OpenSeam provides cutting-edge solutions for garment manufacturing analytics, empowering factories with real-time insights.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/public/About" className="footer-link">About Us</a></li>
            <li><a href="/public/Support" className="footer-link">Support</a></li>
            <li><a href="/public/Privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/public/Terms" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            Email: <a href="mailto:info@openseam.com" className="footer-link">info@openseam.com</a>
          </p>
          <p className="footer-contact">
            Phone: <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} OpenSeam. All rights reserved.</p>
      </div>
    </footer>
  );
}