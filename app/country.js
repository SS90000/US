/* Country settings for this repository's finders. Labels are [English, French]; the US site is English only. */
"use strict";
const COUNTRY = {
  code: "US",
  name: ["United States", "États-Unis"],
  inName: ["in the United States", "aux États-Unis"],
  locale: ["en-US", "fr-CA"], mapName: "USA",
  langs: ["en"],
  unit: "mi",
  dists: [10, 25, 50, 100, 250],
  region: ["State", "État"],
  regionAny: ["Anywhere in the US", "Partout aux États-Unis"],
  regionFr: {},
  center: [39, -98], zoom: 4,
  privacyLaw: ["applicable US privacy law", "les lois américaines applicables sur la protection de la vie privée"],
  support: {
    oncology: ["For cancer information and support, the National Cancer Institute's Cancer Information Service is 1-800-4-CANCER (1-800-422-6237).",
               "Service d'information sur le cancer du National Cancer Institute : 1-800-422-6237."],
    other: ["For health advice, contact your doctor or a nurse advice line from your health plan.",
            "Pour des conseils de santé, communiquez avec votre médecin ou la ligne infirmière de votre assurance."]
  },
  notAffiliated: ["ClinicalTrials.gov, the U.S. National Library of Medicine or the National Cancer Institute", "ClinicalTrials.gov, la National Library of Medicine des États-Unis ou le National Cancer Institute"]
};
