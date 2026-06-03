import logoHorizontal from '../assets/images/logo-horizontal.webp';

function Header() {
  return (
    <header className="site-header">
      <a href="#home" aria-label="Little Lemon home page">
        <img
          src={logoHorizontal}
          className="header-logo"
          alt="Little Lemon logo"
        />
      </a>
    </header>
  );
}

export default Header;