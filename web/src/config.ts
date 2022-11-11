import bun from "./assets/companies/bun.png";
import bunMono from "./assets/companies/bun-mono.png";
import jarred from "./assets/speakers/jarred.png";
import jarredSmall from "./assets/speakers/jarred-small.png";
import jarredName from "./assets/speakers/jarred-name.png";
import jarredNameSmall from "./assets/speakers/jarred-name-small.png";

import planetscale from "./assets/companies/planetscale.png";
import planetscaleMono from "./assets/companies/planetscale-mono.png";
import sam from "./assets/speakers/fred.png";
import samSmall from "./assets/speakers/fred-small.png";
import samName from "./assets/speakers/fred-name.png";
import samNameSmall from "./assets/speakers/fred-name-small.png";

import upstash from "./assets/companies/planetscale.png";
import upstashMono from "./assets/companies/upstash-mono.png";
import enes from "./assets/speakers/fred.png";
import enesSmall from "./assets/speakers/fred-small.png";
import enesName from "./assets/speakers/fred-name.png";
import enesNameSmall from "./assets/speakers/fred-name-small.png";

import astro from "./assets/companies/planetscale.png";
import astroMono from "./assets/companies/upstash-mono.png";
import fred from "./assets/speakers/fred.png";
import fredSmall from "./assets/speakers/fred-small.png";
import fredName from "./assets/speakers/fred-name.png";
import fredNameSmall from "./assets/speakers/fred-name-small.png";

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
  talkTitle: string;
  talkDescription: string;
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
  jarredsumner: {
    name: "Jarred Sumner",
    twitter: "jarredsumner",
    link: "https://bun.sh",
    title: "CEO at Bun",
    company: "Bun",
    color: "hsla(39, 95%, 77%, 1)",
    talkTitle: "The Future of Node",
    talkDescription:
      "In this talk we'll look at how Bun is making Node a lot better for building serverless applications.",
    logo: { src: bun, width: "312", height: "125" },
    logoSmall: { src: bun, width: "215", height: "85" },
    logoMono: { src: bunMono, width: "145", height: "57" },
    logoMonoSmall: { src: bunMono, width: "108", height: "43" },
    profile: { src: jarred, width: "524", height: "554" },
    profileSmall: { src: jarredSmall, width: "94", height: "94" },
    nameImage: { src: jarredName, width: "544", height: "67" },
    nameImageSmall: { src: jarredNameSmall, width: "350", height: "106" },
    shareImagePath: "/jarred.png",
  },
  isamlambert: {
    name: "Sam Lambert",
    twitter: "isamlambert",
    link: "https://planetscale.com",
    title: "CEO at PlanetScale",
    company: "PlanetScale",
    color: "hsla(34, 90%, 51%, 1)",
    talkTitle: "The Future of SQL",
    talkDescription:
      "In this talk we'll look at how PlanetScale is making SQL a lot better for building serverless applications.",
    logo: { src: planetscale, width: "324", height: "81" },
    logoSmall: { src: planetscale, width: "246", height: "61" },
    logoMono: { src: planetscaleMono, width: "169", height: "27" },
    logoMonoSmall: { src: planetscaleMono, width: "169", height: "27" },
    profile: { src: sam, width: "616", height: "575" },
    profileSmall: { src: samSmall, width: "94", height: "94" },
    nameImage: { src: samName, width: "535", height: "68" },
    nameImageSmall: { src: samNameSmall, width: "226", height: "104" },
    shareImagePath: "/enes.png",
  },
  enesakar: {
    name: "Enes Akar",
    twitter: "enesakar",
    link: "https://upstash.com",
    title: "CTO at Upstash",
    company: "Upstash",
    color: "hsla(34, 90%, 51%, 1)",
    talkTitle: "The Future of Redis",
    talkDescription:
      "In this talk we'll look at how Upstash is making Redis a lot better for building serverless applications.",
    logo: { src: upstash, width: "324", height: "81" },
    logoSmall: { src: upstash, width: "235", height: "68" },
    logoMono: { src: upstashMono, width: "143", height: "41" },
    logoMonoSmall: { src: upstashMono, width: "110", height: "32" },
    profile: { src: enes, width: "616", height: "575" },
    profileSmall: { src: enesSmall, width: "94", height: "94" },
    nameImage: { src: enesName, width: "535", height: "68" },
    nameImageSmall: { src: enesNameSmall, width: "226", height: "104" },
    shareImagePath: "/enes.png",
  },
  fredschott: {
    name: "Fred K. Schott",
    twitter: "fredschott",
    link: "https://astro.build",
    title: "CEO at Astro",
    company: "Astro",
    color: "hsla(34, 90%, 51%, 1)",
    talkTitle: "The Future of SPAs",
    talkDescription:
      "In this talk we'll look at how Astro is making SPAs a lot better for building serverless applications.",
    logo: { src: astro, width: "324", height: "81" },
    logoSmall: { src: astro, width: "235", height: "68" },
    logoMono: { src: astroMono, width: "143", height: "41" },
    logoMonoSmall: { src: astroMono, width: "110", height: "32" },
    profile: { src: fred, width: "616", height: "575" },
    profileSmall: { src: fredSmall, width: "94", height: "94" },
    nameImage: { src: fredName, width: "535", height: "68" },
    nameImageSmall: { src: fredNameSmall, width: "226", height: "104" },
    shareImagePath: "/enes.png",
  },
};
