import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// EN FILES
import enHome from "./locales/en/home/translation.json";
import enHeader from "./locales/en/header/translation.json";
import enFooter from "./locales/en/footer/translation.json";
import enAboutPage from "./locales/en/aboutPage/translation.json";
import enServicesComponents from "./locales/en/Services/translation.json";
import enAirFreight from "./locales/en/Freight-Forwarding/enAirFreight.json";
import enOceanFreight from "./locales/en/Freight-Forwarding/enOceanFreight.json";
import enRoadFreight from "./locales/en/Freight-Forwarding/enRoadfreight.json";
import enSeaAirFreight from "./locales/en/Freight-Forwarding/enSeaAirfreight.json";
import enLinerShipping from "./locales/en/Other-services/enLinerShipping.json";
import enCustomsClearance from "./locales/en/Other-services/enCustomsClearance.json";
import enWarehouse3pl from "./locales/en/Other-services/enWarehouse3pl.json";
import enprojectLogistics from "./locales/en/Other-services/enprojectLogistics.json";
import enTransportation from "./locales/en/Other-services/enTransportation.json";
import enbuyersConsole from "./locales/en/Other-services/enbuyersConsole.json";
import envalueAddedService from "./locales/en/Other-services/envalueAddedService.json";
import encontactUs from "./locales/en/contactUs/translation.json";

// AR FILES
import arHome from "./locales/ar/home/translation.json";
import arHeader from "./locales/ar/header/translation.json";
import arFooter from "./locales/ar/footer/translation.json";
import arAboutPage from "./locales/ar/aboutPage/translation.json";
import arServicesComponents from "./locales/ar/Services/translation.json";
import arAirFreight from "./locales/ar/Freight-Forwarding/arAirFreight.json";
import arOceanFreight from "./locales/ar/Freight-Forwarding/arOceanFreight.json";
import arRoadFreight from "./locales/ar/Freight-Forwarding/arRoadfreight.json";
import arSeaAirFreight from "./locales/ar/Freight-Forwarding/arSeaAirfreight.json";
import arLinerShipping from "./locales/ar/Other-services/arLinerShipping.json";
import arCustomsClearance from "./locales/ar/Other-services/arCustomsClearance.json";
import arWarehouse3pl from "./locales/ar/Other-services/arWarehouse3pl.json";
import arprojectLogistics from "./locales/ar/Other-services/arprojectLogistics.json";
import arTransportation from "./locales/ar/Other-services/arTransportation.json";
import arbuyersConsole from "./locales/ar/Other-services/arbuyersConsole.json";
import arvalueAddedService from "./locales/ar/Other-services/arvalueAddedService.json";
import arcontactUs from "./locales/ar/contactUs/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        header: enHeader,
        footer: enFooter,
        aboutPage: enAboutPage,
        servicesComponents: enServicesComponents,
        airFreight: enAirFreight,
        oceanFreight: enOceanFreight,
        roadFreight: enRoadFreight,
        seaairFreight: enSeaAirFreight,
        linerShipping: enLinerShipping,
        customsclearance: enCustomsClearance,
        warehouse3pl: enWarehouse3pl,
        projectLogistics: enprojectLogistics,
        transportation: enTransportation,
        buyersConsole: enbuyersConsole,
        valueAddedService: envalueAddedService,
        contactUs: encontactUs,
      },
      ar: {
        home: arHome,
        header: arHeader,
        footer: arFooter,
        aboutPage: arAboutPage,
        servicesComponents: arServicesComponents,
        airFreight: arAirFreight,
        oceanFreight: arOceanFreight,
        roadFreight: arRoadFreight,
        seaairFreight: arSeaAirFreight,
        linerShipping: arLinerShipping,
        customsclearance: arCustomsClearance,
        warehouse3pl: arWarehouse3pl,
        projectLogistics: arprojectLogistics,
        transportation: arTransportation,
        buyersConsole: arbuyersConsole,
        valueAddedService: arvalueAddedService,
        contactUs: arcontactUs,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
