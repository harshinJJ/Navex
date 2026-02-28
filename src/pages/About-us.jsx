import "./../styles/aboutus/aboutPage.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutHero from "../assets/Aboutus/about-hero.png";
import aboutcard1 from "../assets/Aboutus/aboutuscard1.png";
import aboutusbg from "../assets/Aboutus/about-us-bg.png";
import { FaShip, FaBoxes, FaUsers } from "react-icons/fa";
import partner1 from "../assets/Aboutus/p1.png";
import partner2 from "../assets/Aboutus/p2.png";
import partner3 from "../assets/Aboutus/p3.png";
import partner4 from "../assets/Aboutus/p4.png";
import partner5 from "../assets/Aboutus/p5.png";
import partner6 from "../assets/Aboutus/p6.png";
export default function About_us() {
  const { t } = useTranslation("aboutPage");
  const partnerLogos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
  ];
  const smoothReveal = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const smoothStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const values = t("values.items", { returnObjects: true });
  const metrics = t("performance.metrics", { returnObjects: true });
  const members = t("team.members", { returnObjects: true });

  const icons = [<FaShip />, <FaBoxes />, <FaUsers />];

  const metricValues = [98, 94, 96, 99, 97, 95];

  const ProgressBar = ({ label, value }) => (
    <motion.div
      className="progress-item"
      variants={smoothReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="progress-header">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardReveal = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="about-wrapper">
      {/* ================= HERO ================= */}

      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.h1
          className="about-title"
          variants={smoothReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {t("hero.title").split(" ")[0]}{" "}
          <span className="highlight">{t("hero.title").split(" ")[1]}</span>
        </motion.h1>
      </section>

      {/* ================= VALUES ================= */}

      <section className="about-values-section">
        <div className="about-values-container">
          <motion.div
            className="about-values-left"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="about-values-tag" variants={smoothReveal}>
              {t("values.tag")}
            </motion.span>

            <motion.h2 className="about-values-title" variants={smoothReveal}>
              {t("values.title")}
            </motion.h2>

            <motion.div className="about-values-list">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  className="about-values-row"
                  variants={smoothReveal}
                >
                  <div className="about-values-icon">{icons[index]}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-values-right"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={aboutcard1} alt="About" />
          </motion.div>
        </div>
      </section>

      {/* ================= PERFORMANCE ================= */}

      <section
        className="about-performance-section"
        style={{ backgroundImage: `url(${aboutusbg})` }}
      >
        <div className="about-performance-overlay"></div>

        <div className="about-performance-container">
          <motion.div
            className="about-performance-top"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="about-performance-title"
              variants={smoothReveal}
            >
              {t("performance.title")}
            </motion.h2>

            <motion.p
              className="about-performance-desc"
              variants={smoothReveal}
            >
              {t("performance.description")}
            </motion.p>
          </motion.div>

          <div className="about-performance-progress-wrapper">
            <div className="about-progress-column">
              {metrics.slice(0, 3).map((metric, index) => (
                <ProgressBar
                  key={index}
                  label={metric}
                  value={metricValues[index]}
                />
              ))}
            </div>

            <div className="about-progress-column">
              {metrics.slice(3, 6).map((metric, index) => (
                <ProgressBar
                  key={index}
                  label={metric}
                  value={metricValues[index + 3]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= TEAM ================= */}

      <section className="about-team-section">
        <div className="about-team-container">
          {/* LEFT SIDE */}
          <motion.div
            className="about-team-left"
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="about-team-tag">{t("team.tag")}</span>

            <h2 className="about-team-title">
              {t("team.titleLine1")} <br />
              {t("team.titleLine2")}
            </h2>

            <p className="about-team-desc">{t("team.description")}</p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="about-team-grid"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="about-team-card"
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="about-team-initial">{member.initial}</div>

                <div className="about-team-content">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ================= CERTIFICATION & PARTNERS ================= */}

      <section className="about-cert-section">
        <div className="about-cert-container">
          <motion.span
            className="about-cert-tag"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Certified & Trusted
          </motion.span>

          <motion.h2
            className="about-cert-title"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            20+ Years of Excellence
          </motion.h2>

          <motion.p
            className="about-cert-desc"
            variants={smoothReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Recognized as a reliable industry leader with long-standing
            partnerships across the globe. Our certifications and partners
            reflect our commitment to quality and professionalism.
          </motion.p>

          <motion.div
            className="about-cert-logos"
            variants={smoothStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={i}
                className="partner-logo-card"
                variants={smoothReveal}
              >
                <img src={logo} alt={`Partner ${i + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
