import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../../styles/Services/services.css";

import serviceHero from "../../assets/services/Transportation1.png";
import whybg from "../../assets/services/logistics.png";

import Dubai from "../../assets/Country/Dubai1.png";
import Saudi from "../../assets/Country/Saudi1.png";
import India from "../../assets/Country/India1.png";
import Pakistan from "../../assets/Country/pakistan.png";
import China from "../../assets/Country/China.png";
import Bangladesh from "../../assets/Country/Bangladesh.png";

import { FaCogs, FaGlobe, FaShieldAlt, FaHeadset } from "react-icons/fa";
import {
  FaClipboardList,
  FaCalendarAlt,
  FaLocationArrow,
} from "react-icons/fa";

import { FaTruckFast } from "react-icons/fa6";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import ServiceWhy from "../../components/Services/ServiceWhy";
import ServiceOffices from "../../components/Services/ServiceOffices";

import {
  smoothReveal,
  softSection,
  softStagger,
  softItem,
} from "../../animations/serviceAnimations";
function Transportation() {
  const { t, i18n } = useTranslation("transportation");
  const { t: tComp } = useTranslation("servicesComponents");
  const isArabic = i18n.language === "ar";

  return (
    <div
      className="services-wrapper"
      dir={isArabic ? "rtl" : "ltr"}
      style={{ textAlign: isArabic ? "right" : "left" }}
    >
      {/* HERO */}
      <section
        className="services-hero"
        style={{ backgroundImage: `url(${serviceHero})` }}
      >
        <motion.h1
          className="services-title"
          variants={smoothReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {t("hero.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="highlight">
            {t("hero.title").split(" ").slice(-1)}
          </span>
        </motion.h1>
      </section>

      {/* CONTENT BLOCK */}
      <section className="services-content">
        <div className="container services-grid">
          <motion.div
            className="services-left"
            variants={softStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="services-heading" variants={softItem}>
              {t("heading")}
            </motion.h2>

            <motion.h4 className="services-subheading" variants={softItem}>
              {t("subheading")}
            </motion.h4>

            <motion.p variants={softItem}>{t("p1")}</motion.p>
            <motion.p variants={softItem}>{t("p2")}</motion.p>
            <motion.p variants={softItem}>{t("p3")}</motion.p>
            <motion.p variants={softItem}>{t("p4")}</motion.p>
            <motion.p variants={softItem}>{t("p5")}</motion.p>
          </motion.div>

          {/* PROCESS SECTION */}
          <motion.div
            className="process-box"
            variants={softSection}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="process-label">{t("process.title")}</h3>

            <motion.div
              className="process-flow"
              variants={softStagger}
              initial="hidden"
              whileInView="visible"
            >
              {/* Step 1 */}
              <motion.div className="process-item" variants={softItem}>
                <FaClipboardList className="process-icon" />
                <p>{t("process.book")}</p>
              </motion.div>

              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 2 */}
              <motion.div className="process-item" variants={softItem}>
                <FaCalendarAlt className="process-icon" />
                <p>{t("process.pack")}</p>
              </motion.div>

              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 3 */}
              <motion.div className="process-item" variants={softItem}>
                <FaTruckFast className="process-icon" />
                <p>{t("process.move")}</p>
              </motion.div>

              <motion.div variants={softItem}>
                {isArabic ? (
                  <FaArrowLeftLong className="process-arrow" />
                ) : (
                  <FaArrowRightLong className="process-arrow" />
                )}
              </motion.div>

              {/* Step 4 */}
              <motion.div className="process-item" variants={softItem}>
                <FaLocationArrow className="process-icon" />
                <p>{t("process.delivery")}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServiceWhy
        bgImage={whybg}
        title1={tComp("why.title1")}
        title2={tComp("why.title2")}
        items={[
          { title: tComp("why.card1.title"), text: tComp("why.card1.text") },
          { title: tComp("why.card2.title"), text: tComp("why.card2.text") },
          { title: tComp("why.card3.title"), text: tComp("why.card3.text") },
          { title: tComp("why.card4.title"), text: tComp("why.card4.text") },
        ]}
        icons={[FaCogs, FaGlobe, FaShieldAlt, FaHeadset]}
        softSection={softSection}
        softStagger={softStagger}
        softItem={softItem}
      />
      <ServiceOffices
        title1={tComp("offices.title1")}
        title2={tComp("offices.title2")}
        subtitle={tComp("offices.subtitle")}
        offices={[
          { img: Saudi, name: tComp("offices.saudi") },
          { img: India, name: tComp("offices.india") },
          { img: Dubai, name: tComp("offices.uae") },
          { img: Pakistan, name: tComp("offices.pakistan") },
          { img: China, name: tComp("offices.china") },
          { img: Bangladesh, name: tComp("offices.bangladesh") },
        ]}
      />
    </div>
  );
}

export default Transportation;
