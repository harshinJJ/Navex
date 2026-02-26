import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/home/whychoose.css";
import worldMap from "../../assets/whychoose/world-dark-lines.png";
import { useRef } from "react";

export default function WhyChoose() {
  const { t, i18n } = useTranslation("home");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mapX = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={sectionRef}
      className={`next-section ${i18n.language === "ar" ? "rtl-mode" : ""}`}
    >
      <div className="next-wrapper">
        <motion.div
          className="next-left"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.h2 className="next-title">
            {t("why.heading1")}
            <br />
            <span>{t("why.heading2")}</span>
          </motion.h2>

          <motion.p className="next-sub">{t("why.subtext")}</motion.p>

          <motion.button
            className="next-btn"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            {t("common.contact")}
          </motion.button>
        </motion.div>

        <motion.div className="next-right">
          <motion.img
            src={worldMap}
            alt="world map"
            className="next-map"
            style={{ x: mapX }}
          />
        </motion.div>
      </div>
    </section>
  );
}
