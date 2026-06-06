import logoIcon from '../assets/images/logo-icon.webp';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <img src={logoIcon} alt="Small Little Lemon logo" />
      </div>

      <div className="footer-copy">
        <p>&copy; 2026 Little Lemon. All rights reserved SALIH.</p>
      </div>
    </footer>
  );
}

export default Footer;