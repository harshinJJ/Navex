import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import "./../styles/contactUs/contactUs.css";

import Dubai from "../assets/Country/Dubai1.png";
import Saudi from "../assets/Country/Saudi1.png";
import India from "../assets/Country/India1.png";
import Pakistan from "../assets/Country/pakistan.png";
import China from "../assets/Country/China.png";
import Bangladesh from "../assets/Country/Bangladesh.png";

import ServiceOffices from "../components/Services/ServiceOffices";

function Contact_Us() {
  const { t: tComp, i18n } = useTranslation("contactUs");

  const { t: tCom } = useTranslation("servicesComponents");

  const isArabic = i18n.language === "ar";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_c6igopj",
        "template_v8yd6a8",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "wn0dCaO-nL8tVrajU",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  const testimonialItems = tComp("testimonials.items", { returnObjects: true });

  return (
    <div style={{ direction: isArabic ? "rtl" : "ltr" }}>
      {/* CONTACT FORM */}
      <div className="cu-wrapper">
        <div className="cu-left">
          <h1 className="cu-title">{tComp("contact.title")}</h1>
          <p className="cu-subtext">{tComp("contact.subtitle")}</p>
        </div>

        <div className="cu-right">
          <form className="cu-form" onSubmit={handleSubmit}>
            <label className="cu-label">{tComp("contact.name")}</label>
            <input
              className="cu-input"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label className="cu-label">{tComp("contact.email")}</label>
            <input
              className="cu-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label className="cu-label">{tComp("contact.message")}</label>
            <textarea
              className="cu-textarea"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <div className="cu-checkbox">
              <input type="checkbox" required />
              <span>{tComp("contact.privacy")}</span>
            </div>

            <button type="submit" className="cu-btn">
              {tComp("contact.btn")}
            </button>

            <a href="https://wa.me/966540972972" className="cu-whatsapp-btn">
              {tComp("contact.whatsapp")}
            </a>
          </form>
        </div>
      </div>

      <section className="testimonial-moving">
        <h2 className="testimonial-title">{tComp("testimonials.title")}</h2>

        <div className="testimonial-marquee">
          <div className="testimonial-track">
            {[...Array(2)].map((_, copyIndex) =>
              testimonialItems.map((item, i) => (
                <div className="testimonial-box" key={`${copyIndex}-${i}`}>
                  <p>{item.text}</p>
                  <h4>– {item.author}</h4>
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      <ServiceOffices
        title1={tCom("offices.title1")}
        title2={tCom("offices.title2")}
        subtitle={tCom("offices.subtitle")}
        offices={[
          { img: Saudi, name: tCom("offices.saudi") },
          { img: India, name: tCom("offices.india") },
          { img: Dubai, name: tCom("offices.uae") },
          { img: Pakistan, name: tCom("offices.pakistan") },
          { img: China, name: tCom("offices.china") },
          { img: Bangladesh, name: tCom("offices.bangladesh") },
        ]}
      />
    </div>
  );
}

export default Contact_Us;
