import logo from "../assets/Home/Navex-global.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./../styles/header.css";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };
  const { t, i18n } = useTranslation("header");
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/ar";

  const changeLang = (lang) => {
    const currentPath = window.location.pathname;

    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    let newPath = currentPath;

    if (lang === "ar") {
      newPath = currentPath.startsWith("/ar")
        ? currentPath
        : "/ar" + (currentPath === "/" ? "" : currentPath);
    }

    if (lang === "en") {
      newPath = currentPath.replace("/ar", "");
      if (newPath === "") newPath = "/";
    }

    navigate(newPath);
    setMenuOpen(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.startsWith("/ar")) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
    }
  }, []);

  const langPrefix = i18n.language === "ar" ? "/ar" : "";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setShowHeader(window.scrollY > 80);
      else setShowHeader(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className={`nav-header ${showHeader ? "visible" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <div
          className="logo-wrapper"
          onClick={() => navigate(`${langPrefix}/`)}
        >
          <img src={logo} alt="Navex Logo" className="logo-img" />
          <span className="logo-text">{t("header.logo")}</span>
        </div>

        {/* DESKTOP NAV */}
        {/* DESKTOP NAV */}
        <nav className="center-nav desktop-nav">
          <div className="center-nav-inner">
            <Link className="center-nav-item" to={`${langPrefix}/`}>
              Home
            </Link>

            {/* ABOUT */}
            <div className="dropdown">
              <span className="center-nav-item dropdown-title">
                About <span className="arrow">▼</span>
              </span>
              <div className="dropdown-menu">
                <Link to={`${langPrefix}/about`}>About Us</Link>
                <Link to={`${langPrefix}/our-team`}>Our Team</Link>
              </div>
            </div>

            {/* FREIGHT FORWARDING */}
            <div className="dropdown">
              <span className="center-nav-item dropdown-title">
                Freight Forwarding <span className="arrow">▼</span>
              </span>
              <div className="dropdown-menu">
                <Link to={`${langPrefix}/air-freight`}>Air Freight</Link>
                <Link to={`${langPrefix}/ocean-freight`}>Ocean Freight</Link>
                <Link to={`${langPrefix}/road-freight`}>Road Freight</Link>
                <Link to={`${langPrefix}/international-freight`}>
                  International Freight Forwarding
                </Link>
                <Link to={`${langPrefix}/sea-air`}>Sea-Air Freight</Link>
              </div>
            </div>

            {/* OTHER SERVICES */}
            <div className="dropdown">
              <span className="center-nav-item dropdown-title">
                Other Services <span className="arrow">▼</span>
              </span>

              <div className="dropdown-menu">
                <Link to={`${langPrefix}/liner-shipping`}>Liner Shipping</Link>

                <Link to={`${langPrefix}/customs-clearance`}>
                  Customs Clearance
                </Link>

                <Link to={`${langPrefix}/warehouse-3pl`}>Warehouse & 3PL</Link>

                <Link to={`${langPrefix}/project-logistics`}>
                  Project Logistics
                </Link>

                <Link to={`${langPrefix}/transportation`}>Transportation</Link>

                <Link to={`${langPrefix}/buyers-console`}>Buyer’s Consol</Link>

                <Link to={`${langPrefix}/value-added`}>
                  Value Added Services
                </Link>

                <Link to={`${langPrefix}/coastal-shipping`}>
                  Coastal Shipping
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* DESKTOP RIGHT SIDE */}
        <div className="right-actions">
          <Link className="contact-btn" to={`${langPrefix}/contact`}>
            Contact Us
          </Link>

          <div className="lang-dropdown">
            <div className="lang-trigger">
              {i18n.language === "en" ? "EN" : "AR"}
              <span className="arrow">▼</span>
            </div>

            <div className="lang-menu">
              <span onClick={() => changeLang("en")}>English</span>
              <span onClick={() => changeLang("ar")}>العربية</span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link to={`${langPrefix}/`} onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {/* ABOUT */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => toggleMobileDropdown("about")}
            >
              About <span className="arrow">▼</span>
            </div>

            {mobileDropdown === "about" && (
              <div className="mobile-submenu">
                <Link
                  to={`${langPrefix}/about`}
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to={`${langPrefix}/our-team`}
                  onClick={() => setMenuOpen(false)}
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => toggleMobileDropdown("freight")}
            >
              Freight Forwarding <span className="arrow">▼</span>
            </div>

            {mobileDropdown === "freight" && (
              <div className="mobile-submenu">
                <Link
                  to={`${langPrefix}/air-freight`}
                  onClick={() => setMenuOpen(false)}
                >
                  Air Freight
                </Link>
                <Link
                  to={`${langPrefix}/ocean-freight`}
                  onClick={() => setMenuOpen(false)}
                >
                  Ocean Freight
                </Link>
                <Link
                  to={`${langPrefix}/road-freight`}
                  onClick={() => setMenuOpen(false)}
                >
                  Road Freight
                </Link>
                <Link
                  to={`${langPrefix}/international-freight`}
                  onClick={() => setMenuOpen(false)}
                >
                  International Freight
                </Link>
                <Link
                  to={`${langPrefix}/sea-air`}
                  onClick={() => setMenuOpen(false)}
                >
                  Sea-Air Freight
                </Link>
              </div>
            )}
          </div>

          {/* OTHER SERVICES */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => toggleMobileDropdown("services")}
            >
              Other Services <span className="arrow">▼</span>
            </div>

            {mobileDropdown === "services" && (
              <div className="mobile-submenu">
                <Link
                  to={`${langPrefix}/liner-shipping`}
                  onClick={() => setMenuOpen(false)}
                >
                  Liner Shipping
                </Link>
                <Link
                  to={`${langPrefix}/customs-clearance`}
                  onClick={() => setMenuOpen(false)}
                >
                  Customs Clearance
                </Link>
                <Link
                  to={`${langPrefix}/warehouse-3pl`}
                  onClick={() => setMenuOpen(false)}
                >
                  Warehouse & 3PL
                </Link>
                <Link
                  to={`${langPrefix}/project-logistics`}
                  onClick={() => setMenuOpen(false)}
                >
                  Project Logistics
                </Link>
                <Link
                  to={`${langPrefix}/transportation`}
                  onClick={() => setMenuOpen(false)}
                >
                  Transportation
                </Link>
                <Link
                  to={`${langPrefix}/buyers-console`}
                  onClick={() => setMenuOpen(false)}
                >
                  Buyer’s Consol
                </Link>
                <Link
                  to={`${langPrefix}/value-added`}
                  onClick={() => setMenuOpen(false)}
                >
                  Value Added Services
                </Link>
                <Link
                  to={`${langPrefix}/coastal-shipping`}
                  onClick={() => setMenuOpen(false)}
                >
                  Coastal Shipping
                </Link>
              </div>
            )}
          </div>

          <Link to={`${langPrefix}/contact`} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <div className="mobile-language">
            <span onClick={() => changeLang("en")}>English</span>
            <span onClick={() => changeLang("ar")}>العربية</span>
          </div>
        </div>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
