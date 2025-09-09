import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // includes Popper


function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav className="navbar navbar-expand-lg navbar-light background">
      {/* Brand */}
      <a className="navbar-brand pleft" href="/">
        {t("brand")}
      </a>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item navlink">
            <Link to="/" className="nav-link">
              {t("nav.home")}
            </Link>
          </li>
          <li className="nav-item navlink">
            <Link to="/projects" className="nav-link">
              {t("nav.projects")}
            </Link>
          </li>
          <li className="nav-item navlink">
            <Link to="/contact" className="nav-link">
              {t("nav.contact")}
            </Link>
          </li>
          <li className="nav-item navlink d-flex align-items-center ms-lg-3">
            <div className="btn-group" role="group">
              <button
                onClick={() => changeLanguage("en")}
                className="btn btn-sm btn-outline-primary"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ja")}
                className="btn btn-sm btn-outline-secondary"
              >
                日本語
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
