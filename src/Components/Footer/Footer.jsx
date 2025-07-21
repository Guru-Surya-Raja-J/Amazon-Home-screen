import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    'Get to Know Us': [
      'About Amazon',
      'Careers',
      'Press Releases',
      'Amazon Science'
    ],
    'Connect with Us': [
      'Facebook',
      'Twitter',
      'Instagram',
      'YouTube'
    ],
    'Make Money with Us': [
      'Sell on Amazon',
      'Sell under Amazon Accelerator',
      'Protect and Build Your Brand',
      'Amazon Global Selling',
      'Supply to Amazon',
      'Become an Affiliate',
      'Fulfilment by Amazon',
      'Advertise Your Products',
      'Amazon Pay on Merchants'
    ],
    'Let Us Help You': [
      'COVID-19 and Amazon',
      'Your Account',
      'Returns Centre',
      '100% Purchase Protection',
      'Amazon App Download',
      'Help'
    ]
  };

  return (
    <footer className="footer">
      {/* Back to Top */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="footer-container">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h3 className="footer-heading">{category}</h3>
              <ul className="footer-links">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Footer */}
      <div className="footer-secondary">
        <div className="footer-container">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <img src="https://irp.cdn-website.com/44f53704/dms3rep/multi/amazonaa.png" alt="" />
            </div>
            <div className="footer-options">
              <div className="footer-option">
                {/* <span className="option-icon">🌐 </span> */}
                <i className="fa fa-globe globe-icon"></i>
                <span>English</span>
              </div>
              <div className="footer-option">
                               <img
    src="https://flagcdn.com/w40/in.png"
    alt=""
    width="12"
    height="12"
    className="flag-icon"
  />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
         {/* <div className="footer-country-links"> 
            <div className="country-section">
              <h4>Amazon Websites</h4>
              <div className="country-links">
                <a href="#">Australia</a>
                <a href="#">Brazil</a>
                <a href="#">Canada</a>
                <a href="#">China</a>
                <a href="#">France</a>
                <a href="#">Germany</a>
                <a href="#">Italy</a>
                <a href="#">Japan</a>
                <a href="#">Mexico</a>
                <a href="#">Netherlands</a>
                <a href="#">Poland</a>
                <a href="#">Singapore</a>
                <a href="#">Spain</a>
                <a href="#">Turkey</a>
                <a href="#">United Arab Emirates</a>
                <a href="#">United Kingdom</a>
                <a href="#">United States</a>
              </div>
            </div>
          </div>*/} 

          <div className="footer-services">
            <div className="service-links">
              <a href="#">AbeBooks<br /><span>Books, art &<br />collectibles</span></a>
              <a href="#">Amazon Web Services<br /><span>Scalable Cloud<br />Computing Services</span></a>
              <a href="#">Audible<br /><span>Download<br />Audio Books</span></a>
              <a href="#">IMDb<br /><span>Movies, TV<br />& Celebrities</span></a>
              <a href="#">Shopbop<br /><span>Designer<br />Fashion Brands</span></a>
              <a href="#">Amazon Business<br /><span>Everything For<br />Your Business</span></a>
              <a href="#">Prime Now<br /><span>2-Hour Delivery<br />on Everyday Items</span></a>
            </div>
          </div>

          <div className="footer-legal">
            <div className="legal-links">
              <a href="#">Conditions of Use & Sale</a>
              <a href="#">Privacy Notice</a>
              <a href="#">Interest-Based Ads</a>
            </div>
            <p className="copyright">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;