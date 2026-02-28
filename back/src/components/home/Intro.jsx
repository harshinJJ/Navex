import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/home/intro.css";

export default function Intro() {
  const { t } = useTranslation("home");

  return (
    <section id="intro" className="intro-section">
      <div className="intro-container">
        <motion.div
          className="intro-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="intro-heading">
            {t("intro.heading")} <span>{t("intro.headingSpan")}</span>
          </h2>

          <p className="intro-subtext">{t("intro.text")}</p>
        </motion.div>

        <motion.div
          className="intro-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="intro-image"></div>
          <div className="floating-card">
            <h4>{t("intro.cardTitle")}</h4>
            <p>{t("intro.cardText")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
