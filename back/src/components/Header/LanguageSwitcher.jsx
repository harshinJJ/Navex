export default function LanguageSwitcher({ i18n, changeLang }) {
  return (
    <div className="lang-dropdown">
      <div className="lang-trigger">
        {i18n.language === "en" ? "EN" : "AR"} ▼
      </div>

      <div className="lang-menu">
        <span onClick={() => changeLang("en")}>English</span>
        <span onClick={() => changeLang("ar")}>العربية</span>
      </div>
    </div>
  );
}
