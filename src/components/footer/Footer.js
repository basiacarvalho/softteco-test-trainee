import './Footer.css';

function Footer({children}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">© {currentYear} EasyNotes</p>
      {children}
    </footer>
  );
}

export default Footer;