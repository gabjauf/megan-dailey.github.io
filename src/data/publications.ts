// Add new publications here. They are grouped by year and sorted newest first.
// Optional fields: venue, doi, pdf (a URL, or a file placed in public/).
export type Publication = {
  title: string;
  authors: string[];
  year: number;
  type: "Article" | "Ph.D. thesis" | "Conference" | "Chapter";
  venue?: string;
  doi?: string;
  pdf?: string;
};

export const publications: Publication[] = [
  {
    title: "Using allophonic variation in L2 word recognition: French listeners’ processing of English vowel nasalization",
    authors: ["Megan M. Dailey", "Camille Straboni", "Sharon Peperkamp"],
    year: 2024,
    type: "Article",
    venue: "<i>Second Language Research</i>, 40(4), 865–886",
  },
  {
    title: "Late bilingual perception of phonetic and sociophonetic cues",
    authors: ["Megan Dailey"],
    year: 2024,
    type: "Ph.D. thesis",
    venue: "Université Paris Sciences et Lettres",
  },
  {
    title: "Explicit vs. implicit awareness of sociophonetic cues in L1 and L2 listeners",
    authors: ["Megan M. Dailey", "Sharon Peperkamp"],
    year: 2023,
    type: "Article",
  },
];
