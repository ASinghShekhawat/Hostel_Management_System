import "./Footer.scss";
function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Hostel Website <i>MBM</i> is an initiative designed to simplify
                hostel accommodation and streamline management processes. The
                platform provides two dedicated user interfaces—one for students
                and one for the administration—with clearly defined access
                rights. It helps reduce confusion during hostel allotment
                procedures and ensures that students can easily access all
                essential information after admission.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://www.mbm.ac.in/" rel="noreferrer"
                    target="_blank">About Us</a>
                </li>
                <li>
                  <a href="https://www.mbm.ac.in/" rel="noreferrer"
                    target="_blank">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.mbm.ac.in/" rel="noreferrer"
                    target="_blank">Contribute</a>
                </li>
                <li>
                  <a href="https://www.mbm.ac.in/" rel="noreferrer"
                    target="_blank">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.mbm.ac.in/" rel="noreferrer"
                    target="_blank">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  Developed by &nbsp;
                  <a 
                    href="https://aditya-shekhawat.netlify.app/" 
                    rel="noreferrer"
                    target="_blank" 
                    className="developer-link"
                  >
                    Aditya Shekhawat
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ASinghShekhawat/" rel="noreferrer"
                    target="_blank">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/er-aditya-shekhawat-0b7625200/" rel="noreferrer"
                    target="_blank">Linkedin</a>
                </li>
                <li>
                  <a href="mailto:shekhawataddy@gmail.com" rel="noreferrer"
                    target="_blank">Mail</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2025 All Rights Reserved by
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://aditya-shekhawat.netlify.app/"
                >
                  {" "}
                  Addy
                </a>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="portfolio"
                    rel="noreferrer"
                    target="_blank"
                    href="https://aditya-shekhawat.netlify.app/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32v32 64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128H352c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5l16.1-21.5 16.1-21.5c7.4-9.8 19-15.6 31.2-15.7s23.9 5.4 31.5 15.1l79 105.3zM256 192c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112 50.1-112 112-112zm0 352c-13.3 0-24-10.7-24-24V428.3c-27.3-7.5-52.3-22.5-72.3-43.2l-55.9 55.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55.9-55.9c-20.7-20-35.6-45-43.2-72.3H32c-13.3 0-24-10.7-24-24s10.7-24 24-24h50.9c7.5-27.3 22.5-52.3 43.2-72.3L70.2 103.6c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l55.9 55.9c20-20.7 45-35.6 72.3-43.2V32c0-13.3 10.7-24 24-24s24 10.7 24 24v50.9c27.3 7.5 52.3 22.5 72.3 43.2l55.9-55.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55.9 55.9c20.7 20 35.6 45 43.2 72.3H480c13.3 0 24 10.7 24 24s-10.7 24-24 24h-50.9c-7.5 27.3-22.5 52.3-43.2 72.3l55.9 55.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55.9-55.9c-20 20.7-45 35.6-72.3 43.2V520c0 13.3-10.7 24-24 24zm24-288c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V256z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ASinghShekhawat/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/er-aditya-shekhawat-0b7625200/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/adiii_shekhawat/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
