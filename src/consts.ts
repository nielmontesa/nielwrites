import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Niel Montesa",
  EMAIL: "design@nielmontesa.com",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "This website is a cluttered collection of my writing about art, design, and technology. ",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/nielmontesa/",
  },
  {
    NAME: "medium",
    HREF: "https://nielmontesa.medium.com/",
  },
];
