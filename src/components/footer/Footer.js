import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">© {currentYear} EasyNotes</p>
    </footer>
  );
}

export default Footer;