import bun from "./images/companies/bun.png";
import bunMono from "./images/companies/bun-mono.png";
import jarred from "./images/speakers/jarred.png";
import jarredName from "./images/speakers/jarred-name.png";

import planetscale from "./images/companies/planetscale.png";
import planetscaleMono from "./images/companies/planetscale-mono.png";
import sam from "./images/speakers/fred.png";
import samName from "./images/speakers/fred-name.png";

import upstash from "./images/companies/planetscale.png";
import upstashMono from "./images/companies/upstash-mono.png";
import enes from "./images/speakers/fred.png";
import enesName from "./images/speakers/fred-name.png";

import astro from "./images/companies/planetscale.png";
import astroMono from "./images/companies/upstash-mono.png";
import fred from "./images/speakers/fred.png";
import fredName from "./images/speakers/fred-name.png";

interface Site {
  title: string;
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
  logoMono: Image;
  profile: Image;
  nameImage: Image;
}

export const SITE: Site = {
  title: "Is serverless ready?",
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
    logoMono: { src: bunMono, width: "145", height: "57" },
    profile: { src: jarred, width: "524", height: "554" },
    nameImage: { src: jarredName, width: "544", height: "67" },
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
    logoMono: { src: planetscaleMono, width: "169", height: "27" },
    profile: { src: sam, width: "616", height: "575" },
    nameImage: { src: samName, width: "535", height: "68" },
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
    logoMono: { src: upstashMono, width: "143", height: "41" },
    profile: { src: enes, width: "616", height: "575" },
    nameImage: { src: enesName, width: "535", height: "68" },
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
    logoMono: { src: astroMono, width: "143", height: "41" },
    profile: { src: fred, width: "616", height: "575" },
    nameImage: { src: fredName, width: "535", height: "68" },
  },
};
