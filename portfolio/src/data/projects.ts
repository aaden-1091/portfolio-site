export interface Project {
  id:          string;
  slug:        string;
  title:       string;
  company:     string;
  description: string;
  year:        string;
  image:       string;
  tags:        string[];
  badge?:      string;
  category:    "All" | "E-commerce" | "Design Systems" | "SaaS";
}

export const projects: Project[] = [
  {
    id:          "1",
    slug:        "readystudent-admin-portal",
    title:       "Student Management System Design",
    company:     "ReadyTech",
    description: "Redesign an admin portal to streamline workflows for educators and administrators.",
    year:        "2025",
    image:       "/illustrations/cs1-teacher-student.svg",
    tags:        ["SaaS", "UX Design"],
    category:    "SaaS",
  },
  {
    id:          "2",
    slug:        "private-media-ux-uplift",
    title:       "UX Uplift & Pattern Library",
    company:     "Private Media",
    description: "Unify five publications under one pattern library.",
    year:        "2024",
    image:       "/illustrations/cs2-news-reader.svg",
    tags:        ["UX Design", "Design Systems"],
    badge:       "Case Study",
    category:    "Design Systems",
  },
  {
    id:          "3",
    slug:        "target-plp-uplift",
    title:       "Product Listing Uplift",
    company:     "Target Australia",
    description: "Uplift the product listing experience for the Target Australia app.",
    year:        "2023",
    image:       "/illustrations/cs3-shopping-trolley.svg",
    tags:        ["UX Design", "E-commerce"],
    category:    "E-commerce",
  },
  {
    id:          "4",
    slug:        "target-create-a-look",
    title:       "Create a Look",
    company:     "Target Australia",
    description: "Design an outfit curation feature for the Target Australia app.",
    year:        "2024",
    image:       "/illustrations/cs4-mirror-outfit.svg",
    tags:        ["UX Design", "E-commerce"],
    category:    "E-commerce",
  },
];

export const categories = ["All", "E-commerce", "Design Systems", "SaaS"] as const;
export type Category = typeof categories[number];
