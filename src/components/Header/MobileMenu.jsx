import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  mobileDropdown,
  toggleMobileDropdown,
  langPrefix,
  changeLang,
}) {
  const { t, i18n } = useTranslation("header");
  const location = useLocation();
  const currentPath = location.pathname;

  const freightList = [
    { route: "/air-freight", label: t("air") },
    { route: "/ocean-freight", label: t("ocean") },
    { route: "/road-freight", label: t("road") },
    { route: "/sea-air", label: t("seaAir") },
  ];

  const servicesList = [
    { route: "/project-logistics", label: t("project") },
    { route: "/customs-clearance", label: t("customs") },
    { route: "/warehouse-3pl", label: t("warehouse") },
    { route: "/transportation", label: t("transport") },
    { route: "/value-added", label: t("value") },
    { route: "/buyers-console", label: t("buyers") },
  ];

  const isActive = (route) => currentPath === `${langPrefix}${route}`;

  return (
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
      {/* HOME */}
      <Link
        to={`${langPrefix}/`}
        className={isActive("/") ? "active" : ""}
        onClick={() => setMenuOpen(false)}
      >
        {t("home")}
      </Link>

      {/* ABOUT */}
      <Link
        to={`${langPrefix}/about`}
        className={isActive("/about") ? "active" : ""}
        onClick={() => setMenuOpen(false)}
      >
        {t("aboutUs")}
      </Link>

      {/* FREIGHT DROPDOWN */}
      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("freight")}
        >
          {t("freight")} ▼
        </div>

        {mobileDropdown === "freight" && (
          <div className="mobile-submenu">
            {freightList.map((item, index) => (
              <Link
                key={index}
                to={`${langPrefix}${item.route}`}
                className={isActive(item.route) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* SERVICES DROPDOWN */}
      <div className="mobile-dropdown">
        <div
          className="mobile-dropdown-title"
          onClick={() => toggleMobileDropdown("services")}
        >
          {t("services")} ▼
        </div>

        {mobileDropdown === "services" && (
          <div className="mobile-submenu">
            {servicesList.map((item, index) => (
              <Link
                key={index}
                to={`${langPrefix}${item.route}`}
                className={isActive(item.route) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CONTACT */}
      <Link
        to={`${langPrefix}/contact`}
        className={isActive("/contact") ? "active" : ""}
        onClick={() => setMenuOpen(false)}
      >
        {t("contact")}
      </Link>

      {/* LANGUAGE SWITCH */}
      <div className="mobile-language">
        <span
          onClick={() => changeLang("en")}
          className={i18n.language === "en" ? "active" : ""}
        >
          {t("english")}
        </span>

        <span
          onClick={() => changeLang("ar")}
          className={i18n.language === "ar" ? "active" : ""}
        >
          {t("arabic")}
        </span>
      </div>
    </div>
  );
}
