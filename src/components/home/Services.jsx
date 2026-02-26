import "../../styles/home/services.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/services/img1.webp";
import img2 from "../../assets/services/img2.jpg";
import img3 from "../../assets/services/img3.png";
import img4 from "../../assets/services/img4.webp";
import img5 from "../../assets/services/img5.jpg";
import img6 from "../../assets/services/img6.jpg";

export default function Services() {
  const { t } = useTranslation("home");

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">
        {t("services.title1")} <span>{t("services.title2")}</span>
      </h2>

      <p className="services-subtitle">{t("services.subtitle")}</p>

      <div className="services-container">
        <ServiceCard
          img={img1}
          title={t("services.items.air.title")}
          desc={t("services.items.air.desc")}
        />

        <ServiceCard
          img={img2}
          title={t("services.items.ocean.title")}
          desc={t("services.items.ocean.desc")}
        />

        <ServiceCard
          img={img3}
          title={t("services.items.road.title")}
          desc={t("services.items.road.desc")}
        />

        <ServiceCard
          img={img4}
          title={t("services.items.project.title")}
          desc={t("services.items.project.desc")}
        />

        <ServiceCard
          img={img5}
          title={t("services.items.transport.title")}
          desc={t("services.items.transport.desc")}
        />

        <ServiceCard
          img={img6}
          title={t("services.items.customs.title")}
          desc={t("services.items.customs.desc")}
        />
      </div>
    </section>
  );
}

function ServiceCard({ img, title, desc }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => ref.current && observer.unobserve(ref.current);
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`service-card-wrapper ${visible ? "visible" : ""}`}
    >
      <div className="service-img-box">
        <img src={img} alt={title} />
      </div>

      <div className="service-text-box">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
