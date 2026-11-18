import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Lowell Dave Agnir. All rights reserved.</p>
        <a href="#" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
