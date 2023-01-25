import astro from "./assets/companies/astro.svg";
import astroMono from "./assets/companies/astro.svg";
import fred from "./assets/speakers/fred.png";
import fredMobile from "./assets/speakers/fred.png";
import fredSmall from "./assets/speakers/fred-small.png";
import fredName from "./assets/speakers/fred-name.svg";
import fredNameSmall from "./assets/speakers/fred-name-small.svg";

import bun from "./assets/companies/bun.png";
import bunMono from "./assets/companies/bun.png";
import jarred from "./assets/speakers/jarred.png";
import jarredMobile from "./assets/speakers/jarred.png";
import jarredSmall from "./assets/speakers/jarred-small.png";
import jarredName from "./assets/speakers/jarred-name.svg";
import jarredNameSmall from "./assets/speakers/jarred-name-small.svg";

import planetscale from "./assets/companies/planetscale.png";
import planetscaleMono from "./assets/companies/planetscale.png";
import aaron from "./assets/speakers/aaron.png";
import aaronMobile from "./assets/speakers/aaron.png";
import aaronSmall from "./assets/speakers/aaron-small.png";
import aaronName from "./assets/speakers/aaron-name.svg";
import aaronNameSmall from "./assets/speakers/aaron-name-small.svg";

import solid from "./assets/companies/solid.svg";
import solidMono from "./assets/companies/solid.svg";
import ryan from "./assets/speakers/ryan.png";
import ryanMobile from "./assets/speakers/ryan.png";
import ryanSmall from "./assets/speakers/ryan-small.png";
import ryanName from "./assets/speakers/ryan-name.svg";
import ryanNameSmall from "./assets/speakers/ryan-name-small.svg";

import cloudflare from "./assets/companies/cloudflare.svg";
import cloudflareMono from "./assets/companies/cloudflare.svg";
import jacob from "./assets/speakers/jacob.png";
import jacobMobile from "./assets/speakers/jacob.png";
import jacobSmall from "./assets/speakers/jacob-small.png";
import jacobName from "./assets/speakers/jacob-name.svg";
import jacobNameSmall from "./assets/speakers/jacob-name-small.svg";

import mongo from "./assets/companies/mongo.svg";
import mongoMono from "./assets/companies/mongo-mono.svg";
import kevin from "./assets/speakers/kevin.png";
import kevinMobile from "./assets/speakers/kevin.png";
import kevinSmall from "./assets/speakers/kevin-small.png";
import kevinName from "./assets/speakers/kevin-name.svg";
import kevinNameSmall from "./assets/speakers/kevin-name-small.svg";

import sst from "./assets/companies/sst.svg";
import sstMono from "./assets/companies/sst-mono.svg";
import dax from "./assets/speakers/dax.png";
import daxMobile from "./assets/speakers/dax-mobile.png";
import daxSmall from "./assets/speakers/dax-small.png";
import daxName from "./assets/speakers/dax-name.svg";
import daxNameSmall from "./assets/speakers/dax-name-small.svg";

import upstash from "./assets/companies/upstash.svg";
import upstashMono from "./assets/companies/upstash.svg";
import enes from "./assets/speakers/enes.png";
import enesMobile from "./assets/speakers/enes-mobile.png";
import enesSmall from "./assets/speakers/enes-small.png";
import enesName from "./assets/speakers/enes-name.svg";
import enesNameSmall from "./assets/speakers/enes-name-small.svg";

import adamdev from "./assets/companies/adam.svg";
import adamdevMono from "./assets/companies/adam-mono.svg";
import adam from "./assets/speakers/adam.png";
import adamMobile from "./assets/speakers/adam-mobile.png";
import adamSmall from "./assets/speakers/adam-small.png";
import adamName from "./assets/speakers/adam-name.svg";
import adamNameSmall from "./assets/speakers/adam-name-small.svg";

import neon from "./assets/companies/neon.svg";
import neonMono from "./assets/companies/neon.svg";
import raouf from "./assets/speakers/raouf.png";
import raoufMobile from "./assets/speakers/raouf-mobile.png";
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
  profileMobile: Image;
  nameImage: Image;
  nameImageSmall: Image;
  shareImagePath: string;
  episodeUrl?: string;
}

export const SITE: Site = {
  title: "Is serverless ready?",
  repo: "https://github.com/serverless-stack/isserverlessready",
  description:
    "A virtual showcase of the next generation of serverless tools and creators.",
};

export const SPEAKERS: Record<string, Speaker> = {
  FredKSchott: {
    name: "Fred K. Schott",
    twitter: "FredKSchott",
    link: "https://astro.build",
    title: "CEO at Astro",
    company: "Astro",
    color: "hsla(22, 100%, 50%, 1)",
    talkTitle: "Designing Astro for a Serverless World",
    talkDescription:
      "Explore through the challenges and exciting opportunities that face web frameworks like Astro, SvelteKit, Remix and others as they attempt to bridge the gap between the present and the future of the web.",
    logo: { src: astro, width: "243", height: "80" },
    logoSmall: { src: astro, width: "235", height: "68" },
    logoMono: { src: astroMono, width: "108", height: "35" },
    logoMonoSmall: { src: astroMono, width: "110", height: "32" },
    profile: { src: fred, width: "616", height: "575" },
    profileSmall: { src: fredSmall, width: "94", height: "94" },
    profileMobile: { src: fredMobile, width: "616", height: "575" },
    nameImage: { src: fredName, width: "535", height: "68" },
    nameImageSmall: { src: fredNameSmall, width: "226", height: "104" },
    shareImagePath: "/fred.png",
  },
  jarredsumner: {
    name: "Jarred Sumner",
    twitter: "jarredsumner",
    link: "https://bun.sh",
    title: "CEO at Bun",
    company: "Bun",
    color: "hsla(39, 95%, 77%, 1)",
    talkTitle: "A new serverless runtime",
    talkDescription:
      "Bun is a fast all-in-one JavaScript serverless runtime. Bundle, transpile, install and run JavaScript & TypeScript projects — all in Bun.",
    logo: { src: bun, width: "315", height: "124" },
    logoSmall: { src: bun, width: "215", height: "85" },
    logoMono: { src: bunMono, width: "104", height: "41" },
    logoMonoSmall: { src: bunMono, width: "108", height: "43" },
    profile: { src: jarred, width: "524", height: "554" },
    profileSmall: { src: jarredSmall, width: "94", height: "94" },
    profileMobile: { src: jarredMobile, width: "343", height: "362" },
    nameImage: { src: jarredName, width: "554", height: "67" },
    nameImageSmall: { src: jarredNameSmall, width: "206", height: "106" },
    shareImagePath: "/jarred.png",
  },
  RyanCarniato: {
    name: "Ryan Carniato",
    twitter: "RyanCarniato",
    link: "https://www.solidjs.com",
    title: "Creator of SolidJS",
    company: "SolidJS",
    color: "hsla(211, 43%, 51%, 1)",
    talkTitle: "Rethinking Isomorphic JavaScript with SolidStart",
    talkDescription:
      "SolidStart is a new meta-framework built on SolidJS. Join creator Ryan Carniato as he explores the role of composable primitives in defining the server/client divide. And how with a little imagination we can deliver modern interactive experiences with the least amount of JavaScript.",
    logo: { src: solid, width: "382", height: "71" },
    logoSmall: { src: solid, width: "235", height: "68" },
    logoMono: { src: solidMono, width: "135", height: "25" },
    logoMonoSmall: { src: solidMono, width: "110", height: "32" },
    profile: { src: ryan, width: "536", height: "506" },
    profileSmall: { src: ryanSmall, width: "94", height: "94" },
    profileMobile: { src: ryanMobile, width: "536", height: "506" },
    nameImage: { src: ryanName, width: "535", height: "68" },
    nameImageSmall: { src: ryanNameSmall, width: "226", height: "104" },
    shareImagePath: "/ryan.png",
  },
  thdxr: {
    name: "Dax Raad",
    twitter: "thdxr",
    link: "https://sst.dev",
    title: "Core Team at SST",
    company: "SST",
    color: "hsla(39, 95%, 77%, 1)",
    talkTitle: "How SST makes serverless ready",
    talkDescription:
      "Let's take a tour of everything that's new in SST v2. And how it makes serverless finally ready!",
    logo: { src: sst, width: "281", height: "81" },
    logoSmall: { src: sst, width: "235", height: "68" },
    logoMono: { src: sstMono, width: "86", height: "25" },
    logoMonoSmall: { src: sstMono, width: "110", height: "32" },
    profile: { src: dax, width: "508", height: "538" },
    profileSmall: { src: daxSmall, width: "93", height: "94" },
    profileMobile: { src: daxMobile, width: "338", height: "358" },
    nameImage: { src: daxName, width: "330", height: "68" },
    nameImageSmall: { src: daxNameSmall, width: "226", height: "104" },
    shareImagePath: "/dax.png",
    episodeUrl: "https://www.youtube.com/watch?v=qEKUNZWbj-8",
  },
  aarondfrancis: {
    name: "Aaron Francis",
    twitter: "aarondfrancis",
    link: "https://planetscale.com",
    title: "Educator at PlanetScale",
    company: "PlanetScale",
    color: "hsla(34, 90%, 51%, 1)",
    talkTitle: "A database built for serverless",
    talkDescription:
      "We look at how our connection pooling, scaling, read regions, and serverless driver makes PlanetScale a database built for serverless.",
    logo: { src: planetscale, width: "324", height: "52" },
    logoSmall: { src: planetscale, width: "242", height: "39" },
    logoMono: { src: planetscaleMono, width: "116", height: "19" },
    logoMonoSmall: { src: planetscale, width: "124", height: "20" },
    profile: { src: aaron, width: "616", height: "575" },
    profileSmall: { src: aaronSmall, width: "93", height: "94" },
    profileMobile: { src: aaronMobile, width: "375", height: "441" },
    nameImage: { src: aaronName, width: "535", height: "68" },
    nameImageSmall: { src: aaronNameSmall, width: "298", height: "104" },
    shareImagePath: "/aaron.png",
  },
  //  JacobMGEvans: {
  //    name: "Jacob MG Evans",
  //    twitter: "JacobMGEvans",
  //    link: "https://www.cloudflare.com/en-ca/",
  //    title: "FullStack Cloudflare Workers",
  //    company: "Cloudflare",
  //    color: "hsla(31, 100%, 48%, 1)",
  //    talkTitle: "How Workers Work for You",
  //    talkDescription:
  //      'An overview of Cloudflare Workers, the continued endeavors towards DX and the role Cloudflare CLI "Wrangler" plays in that.',
  //    logo: { src: cloudflare, width: "329", height: "48" },
  //    logoSmall: { src: cloudflare, width: "251", height: "37" },
  //    logoMono: { src: cloudflareMono, width: "116", height: "17" },
  //    logoMonoSmall: { src: cloudflare, width: "119", height: "17" },
  //    profile: { src: jacob, width: "729", height: "558" },
  //    profileSmall: { src: jacobSmall, width: "93", height: "94" },
  //    profileMobile: { src: jacobMobile, width: "375", height: "382" },
  //    nameImage: { src: jacobName, width: "576", height: "68" },
  //    nameImageSmall: { src: jacobNameSmall, width: "291", height: "104" },
  //    shareImagePath: "/jacob.png",
  //  },
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
    logoMono: { src: upstashMono, width: "114", height: "33" },
    logoMonoSmall: { src: upstashMono, width: "110", height: "32" },
    profile: { src: enes, width: "730", height: "580" },
    profileSmall: { src: enesSmall, width: "94", height: "94" },
    profileMobile: { src: enesMobile, width: "375", height: "343" },
    nameImage: { src: enesName, width: "534", height: "68" },
    nameImageSmall: { src: enesNameSmall, width: "226", height: "104" },
    shareImagePath: "/enes.png",
  },
  kjerniga: {
    name: "Kevin Jernigan",
    twitter: "kjerniga",
    link: "https://www.mongodb.com",
    title: "Principal Product Manager at MongoDB",
    company: "MongoDB",
    color: "hsla(79, 100%, 51%, 1)",
    talkTitle:
      "The most flexible data platform for building serverless applications",
    talkDescription:
      "Enjoy the flexibility of MongoDB with the added benefit of instant, elastic scaling and an operations-based pricing model that only charges for what you use. Join Kevin Jernigan, Principal Product Manager at MongoDB and Suraj Shetty, Senior Solutions Architect to learn more.",
    logo: { src: mongo, width: "363", height: "91" },
    logoSmall: { src: mongo, width: "235", height: "68" },
    logoMono: { src: mongoMono, width: "117", height: "29" },
    logoMonoSmall: { src: mongoMono, width: "110", height: "32" },
    profile: { src: kevin, width: "532", height: "532" },
    profileSmall: { src: kevinSmall, width: "94", height: "94" },
    profileMobile: { src: kevinMobile, width: "532", height: "532" },
    nameImage: { src: kevinName, width: "576", height: "68" },
    nameImageSmall: { src: kevinNameSmall, width: "226", height: "104" },
    shareImagePath: "/kevin.png",
  },
  adamdotdev: {
    name: "Adam Elmore",
    twitter: "adamdotdev",
    link: "https://adam.dev",
    title: "AWS DevTools Hero",
    company: "Adam.dev",
    color: "hsla(167, 70%, 48%, 1)",
    talkTitle: "Serverless at Twitter scale",
    talkDescription:
      "A look at how you can use serverless architecture to build systems that can handle all of Twitters traffic, without managing any of the infrastructure yourself.",
    logo: { src: adamdev, width: "302", height: "45" },
    logoSmall: { src: adamdev, width: "242", height: "36" },
    logoMono: { src: adamdevMono, width: "116", height: "17" },
    logoMonoSmall: { src: adamdevMono, width: "119", height: "18" },
    profile: { src: adam, width: "524", height: "554" },
    profileSmall: { src: adamSmall, width: "93", height: "93" },
    profileMobile: { src: adamMobile, width: "373", height: "394" },
    nameImage: { src: adamName, width: "453", height: "68" },
    nameImageSmall: { src: adamNameSmall, width: "291", height: "104" },
    shareImagePath: "/adam.png",
  },
  raoufdevrel: {
    name: "Raouf Chebri",
    twitter: "raoufdevrel",
    link: "https://neon.tech",
    title: "Developer Advocate at Neon",
    company: "Neon",
    color: "hsla(64, 95%, 60%, 1)",
    talkTitle: "Is Serverless Postgres Ready?",
    talkDescription:
      "In this presentation, we’ll see how decoupling Postgres’ storage and compute means for developers.",
    logo: { src: neon, width: "293", height: "82" },
    logoSmall: { src: neon, width: "235", height: "68" },
    logoMono: { src: neonMono, width: "95", height: "26" },
    logoMonoSmall: { src: neonMono, width: "110", height: "32" },
    profile: { src: raouf, width: "881", height: "616" },
    profileSmall: { src: raoufSmall, width: "94", height: "94" },
    profileMobile: { src: raoufMobile, width: "375", height: "455" },
    nameImage: { src: raoufName, width: "494", height: "68" },
    nameImageSmall: { src: raoufNameSmall, width: "226", height: "104" },
    shareImagePath: "/raouf.png",
  },
};

export const NEXT_SPEAKER: Speaker = SPEAKERS.FredKSchott;
export const NEXT_DATE = "Feb 1";

export const PAST_SPEAKERS: Speaker[] = [SPEAKERS.thdxr];
