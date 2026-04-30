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
    slug:        "student-management-system-design",
    title:       "Student Management System Design",
    company:     "ReadyTech",
    description: "Redesign an admin portal to streamline workflows for educators and administrators.",
    year:        "2025",
    image:       "/illustrations/cs1-cover.jpg",
    tags:        ["SaaS", "UX Design", "Education"],
    category:    "SaaS",
  },
  {
    id:          "2",
    slug:        "ux-ui-uplift-pattern-library",
    title:       "UX Uplift & Pattern Library",
    company:     "Private Media",
    description: "Unify five publications under one pattern library.",
    year:        "2024",
    image:       "/illustrations/cs2-cover.jpg",
    tags:        ["UX Design", "Design Systems", "Media"],
    badge:       "Case Study",
    category:    "Design Systems",
  },
  {
    id:          "3",
    slug:        "app-plp-uplift",
    title:       "Product Listing Uplift",
    company:     "Target Australia",
    description: "Uplift the product listing experience for the Target Australia app.",
    year:        "2023",
    image:       "/illustrations/cs3-cover.jpg",
    tags:        ["UX Design", "E-commerce", "Retail"],
    category:    "E-commerce",
  },
  {
    id:          "4",
    slug:        "create-a-look",
    title:       "Create a Look",
    company:     "Target Australia",
    description: "Design an outfit curation feature for the Target Australia app.",
    year:        "2024",
    image:       "/illustrations/cs4-cover.jpg",
    tags:        ["UX Design", "E-commerce", "Retail"],
    category:    "E-commerce",
  },
];

export const categories = ["All", "E-commerce", "Design Systems", "SaaS"] as const;
export type Category = typeof categories[number];
