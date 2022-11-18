import astro from "./assets/companies/astro.svg";
import astroMono from "./assets/companies/astro.svg";
import fred from "./assets/speakers/fred.png";
import fredSmall from "./assets/speakers/fred-small.png";
import fredName from "./assets/speakers/fred-name.svg";
import fredNameSmall from "./assets/speakers/fred-name-small.svg";

import upstash from "./assets/companies/upstash.svg";
import upstashMono from "./assets/companies/upstash.svg";
import enes from "./assets/speakers/enes.png";
import enesSmall from "./assets/speakers/enes-small.png";
import enesName from "./assets/speakers/enes-name.svg";
import enesNameSmall from "./assets/speakers/enes-name-small.svg";

import solid from "./assets/companies/solid.svg";
import solidMono from "./assets/companies/solid.svg";
import ryan from "./assets/speakers/ryan.png";
import ryanSmall from "./assets/speakers/ryan-small.png";
import ryanName from "./assets/speakers/ryan-name.svg";
import ryanNameSmall from "./assets/speakers/ryan-name-small.svg";

import mongo from "./assets/companies/mongo.svg";
import mongoMono from "./assets/companies/mongo-mono.svg";
import kevin from "./assets/speakers/kevin.png";
import kevinSmall from "./assets/speakers/kevin-small.png";
import kevinName from "./assets/speakers/kevin-name.svg";
import kevinNameSmall from "./assets/speakers/kevin-name-small.svg";

import sst from "./assets/companies/sst.svg";
import sstMono from "./assets/companies/sst-mono.svg";
import dax from "./assets/speakers/dax.png";
import daxSmall from "./assets/speakers/dax-small.png";
import daxName from "./assets/speakers/dax-name.svg";
import daxNameSmall from "./assets/speakers/dax-name-small.svg";

import neon from "./assets/companies/neon.svg";
import neonMono from "./assets/companies/neon.svg";
import raouf from "./assets/speakers/raouf.png";
import raoufSmall from "./assets/speakers/raouf-small.png";
import raoufName from "./assets/speakers/raouf-name.svg";
import raoufNameSmall from "./assets/speakers/raouf-name-small.svg";

interface Site {
  title: string;
  repo: string;
  description: string;
}

interface Image {
  src: string;
  width: string;
  height: string;
}

interface Speaker {
  name: string;
  twitter: string;
  link: string;
  title: string;
  company: string;
  color: string;
  talkTitle?: string;
  talkDescription?: string;
  logo: Image;
  logoSmall: Image;
  logoMono: Image;
  logoMonoSmall: Image;
  profile: Image;
  profileSmall: Image;
  nameImage: Image;
  nameImageSmall: Image;
  shareImagePath: string;
}

export const SITE: Site = {
  title: "Is serverless ready?",
  repo: "https://github.com/jayair/isserverlessready",
  description:
    "A virtual showcase of the next generation of serverless tools and creators.",
};

export const SPEAKERS: Record<string, Speaker> = {
  fredschott: {
    name: "Fred K. Schott",
    twitter: "fredschott",
    link: "https://astro.build",
    title: "CEO at Astro",
    company: "Astro",
    color: "hsla(22, 100%, 50%, 1)",
    talkTitle: undefined,
    talkDescription: undefined,
    logo: { src: astro, width: "243", height: "80" },
    logoSmall: { src: astro, width: "235", height: "68" },
    logoMono: { src: astroMono, width: "144", height: "47" },
    logoMonoSmall: { src: astroMono, width: "110", height: "32" },
    profile: { src: fred, width: "616", height: "575" },
    profileSmall: { src: fredSmall, width: "94", height: "94" },
    nameImage: { src: fredName, width: "535", height: "68" },
    nameImageSmall: { src: fredNameSmall, width: "226", height: "104" },
    shareImagePath: "/fred.png",
  },
  enesakar: {
    name: "Enes Akar",
    twitter: "enesakar",
    link: "https://upstash.com",
    title: "CEO at Upstash",
    company: "Upstash",
    color: "hsla(162, 100%, 46%, 1)",
    talkTitle: "Serverless Data and Upstash",
    talkDescription:
      "Why we started Upstash? What use cases do we excel in? How are we different from other Redis/Kafka providers? What makes Upstash true serverless? And how is Upstash designed for the Edge?",
    logo: { src: upstash, width: "297", height: "86" },
    logoSmall: { src: upstash, width: "235", height: "68" },
    logoMono: { src: upstashMono, width: "152", height: "44" },
    logoMonoSmall: { src: upstashMono, width: "110", height: "32" },
    profile: { src: enes, width: "730", height: "580" },
    profileSmall: { src: enesSmall, width: "94", height: "94" },
    nameImage: { src: enesName, width: "534", height: "68" },
    nameImageSmall: { src: enesNameSmall, width: "226", height: "104" },
    shareImagePath: "/enes.png",
  },
  RyanCarniato: {
    name: "Ryan Carniato",
    twitter: "RyanCarniato",
    link: "https://www.solidjs.com",
    title: "Creator of SolidJS",
    company: "SolidJS",
    color: "hsla(211, 43%, 51%, 1)",
    talkTitle: undefined,
    talkDescription: undefined,
    logo: { src: solid, width: "382", height: "71" },
    logoSmall: { src: solid, width: "235", height: "68" },
    logoMono: { src: solidMono, width: "164", height: "30" },
    logoMonoSmall: { src: solidMono, width: "110", height: "32" },
    profile: { src: ryan, width: "536", height: "506" },
    profileSmall: { src: ryanSmall, width: "94", height: "94" },
    nameImage: { src: ryanName, width: "535", height: "68" },
    nameImageSmall: { src: ryanNameSmall, width: "226", height: "104" },
    shareImagePath: "/ryan.png",
  },
  kjerniga: {
    name: "Kevin Jernigan",
    twitter: "kjerniga",
    link: "https://www.mongodb.com",
    title: "Principal Product Manager at MongoDB",
    company: "MongoDB",
    color: "hsla(79, 100%, 51%, 1)",
    talkTitle: "MongoDB Atlas",
    talkDescription:
      "MongoDB Atlas: the most flexible data platform for building serverless applications. Enjoy the flexibility of MongoDB with the added benefit of instant, elastic scaling and an operations-based pricing model that only charges for what you use. Join Kevin Jernigan, Principal Product Manager at MongoDB and Suraj Shetty, Senior Solutions Architect to learn more.",
    logo: { src: mongo, width: "363", height: "91" },
    logoSmall: { src: mongo, width: "235", height: "68" },
    logoMono: { src: mongoMono, width: "156", height: "39" },
    logoMonoSmall: { src: mongoMono, width: "110", height: "32" },
    profile: { src: kevin, width: "532", height: "532" },
    profileSmall: { src: kevinSmall, width: "94", height: "94" },
    nameImage: { src: kevinName, width: "576", height: "68" },
    nameImageSmall: { src: kevinNameSmall, width: "226", height: "104" },
    shareImagePath: "/kevin.png",
  },
  thdxr: {
    name: "Dax Raad",
    twitter: "thdxr",
    link: "https://sst.dev",
    title: "Core Team at SST",
    company: "SST",
    color: "hsla(39, 95%, 77%, 1)",
    talkTitle: undefined,
    talkDescription: undefined,
    logo: { src: sst, width: "281", height: "81" },
    logoSmall: { src: sst, width: "235", height: "68" },
    logoMono: { src: sstMono, width: "114", height: "33" },
    logoMonoSmall: { src: sstMono, width: "110", height: "32" },
    profile: { src: dax, width: "524", height: "554" },
    profileSmall: { src: daxSmall, width: "94", height: "94" },
    nameImage: { src: daxName, width: "330", height: "68" },
    nameImageSmall: { src: daxNameSmall, width: "226", height: "104" },
    shareImagePath: "/dax.png",
  },
  raoufdevrel: {
    name: "Raouf Chebri",
    twitter: "raoufdevrel",
    link: "https://neon.tech",
    title: "Developer Advocate at Neon",
    company: "Neon",
    color: "hsla(64, 95%, 60%, 1)",
    talkTitle: "Neon — Serverless Postgres",
    talkDescription:
      "In this presentation, we’ll see how decoupling Postgres’ storage and compute means for developers.",
    logo: { src: neon, width: "293", height: "82" },
    logoSmall: { src: neon, width: "235", height: "68" },
    logoMono: { src: neonMono, width: "126", height: "35" },
    logoMonoSmall: { src: neonMono, width: "110", height: "32" },
    profile: { src: raouf, width: "881", height: "616" },
    profileSmall: { src: raoufSmall, width: "94", height: "94" },
    nameImage: { src: raoufName, width: "494", height: "68" },
    nameImageSmall: { src: raoufNameSmall, width: "226", height: "104" },
    shareImagePath: "/raouf.png",
  },
};
