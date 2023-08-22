
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-rights">
          <img src="./img/Group 16.svg" alt="logo" />
          <p>© 2020 Startupz. All rights reserved.</p>
        </div>
        <div className="footer-companies">
          <h5>Companies</h5>
          <div className="footer-companies-text">
            <a href="">Tolq</a>
            <a href="">LegalSite</a>
            <a href="">Codekeeper</a>
            <a href="">Feedback Labs</a>
          </div>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <div className="footer-companies-text">
            <p>
              World Trade Center - The Hague Prinses Margrietplantsoen 33 2595
              AM The Hague The Netherlands
            </p>
            <a href="">Send us an email</a>
          </div>
        </div>
        <div>
          <h5>Follow us</h5>
          <div className="social">
            <img src="./img/twitter.svg" alt="tweeter" />
            <img src="./img/Linkedin.svg" alt="linkedin" />
            <img src="./img/instagram.svg" alt="Instagram" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
