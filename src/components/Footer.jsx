import React from "react";

function Footer() {
  return (
    <footer className="page-footer green darken-1">
      <div className="container">
        <div className="row">
          <div className="col s12 center-align">
            <p className="white-text">
              Файл создал ученик РТУ МИРЭА — <strong>Шмаров Андрей</strong> 🎓
            </p>
            <p>
              <a
                href="https://github.com/Zer01105" 
                target="_blank"
                rel="noreferrer"
                className="grey-text text-lighten-4"
              >
                Мой Github
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center-align">
          © {new Date().getFullYear()} Movies App
        </div>
      </div>
    </footer>
  );
}

export default Footer;