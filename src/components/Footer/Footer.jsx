import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="footer-content">
        <h5>Copyright &copy;{new Date().getFullYear()} CycList</h5>
      </div>
    </div>
  );
};

export default Footer;
