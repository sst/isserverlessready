interface Speaker {
  name: string;
  twitter: string;
  link: string;
  title: string;
  company: string;
  color: string;
  talkTitle: string;
  talkDescription: string;
}

const speakers: Record<string, Speaker> = {
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
  },
};

export default speakers;
