import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/home/about.css";
import bg from "../../assets/about/about.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const { t } = useTranslation("home");

  return (
    <section
      id="about"
      className="brand-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay"></div>

      <div className="brand-layout">
        {/* LEFT MAIN CONTENT */}
        <motion.div
          className="about-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            {t("about.title1")} <br /> <span>{t("about.title2")}</span>
          </h1>

          <p className="intro-text">{t("about.description")}</p>

          {/* THREE BLACK CARDS */}
          <div className="info-cards">
            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>01.</h2>
              <h3>{t("about.card1.title")}</h3>
              <p>{t("about.card1.text")}</p>
            </motion.div>

            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>02.</h2>
              <h3>{t("about.card2.title")}</h3>
              <p>{t("about.card2.text")}</p>
            </motion.div>

            <motion.div
              className="card"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>03.</h2>
              <h3>{t("about.card3.title")}</h3>
              <p>{t("about.card3.text")}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT VISION / MISSION / VALUES */}
        <motion.div
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{t("about.vision.title")}</h3>
            <p>{t("about.vision.text")}</p>
          </motion.div>

          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{t("about.mission.title")}</h3>
            <p>{t("about.mission.text")}</p>
          </motion.div>

          <motion.div
            className="vm-block"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>{t("about.values.title")}</h3>
            <p>{t("about.values.text")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
