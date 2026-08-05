export interface Project {
  id:          string;
  slug:        string;
  title:       string;
  company:     string;
  description: string;
  year:        string;
  image:       string;
  tags:        string[];
  category:    "All" | "E-commerce" | "Design Systems" | "SaaS";
  hidden?:     boolean;
}

export const projects: Project[] = [
  {
    id:          "1",
    slug:        "student-management-system-design",
    title:       "Student Management System Design",
    company:     "ReadyTech",
    description: "Redesign an admin portal to streamline workflows for educators and administrators.",
    year:        "2025",
    image:       "/illustrations/cs1-cover.png",
    tags:        ["SaaS", "UX Design", "Education"],
    category:    "SaaS",
  },
  {
    id:          "2",
    slug:        "ux-ui-uplift-pattern-library",
    title:       "UX Uplift & UI Pattern Library",
    company:     "Private Media",
    description: "Unify four publications under one pattern library.",
    year:        "2024",
    image:       "/illustrations/cs2-cover.png",
    tags:        ["UX Design", "Design Systems", "Media"],
    category:    "Design Systems",
  },
  {
    id:          "3",
    slug:        "app-plp-uplift",
    title:       "Retail App Product Listing Uplift",
    company:     "Target Australia",
    description: "Redesign a product listing experience to reduce browsing friction and lift add-to-cart conversion.",
    year:        "2023",
    image:       "/illustrations/cs3-cover.png",
    tags:        ["UX Design", "E-commerce", "Retail"],
    category:    "E-commerce",
  },
  {
    id:          "4",
    slug:        "create-a-look",
    title:       "Create a Look — Digital Retail Experience",
    company:     "Target Australia",
    description: "Design an outfit curation feature to drive multi-item purchases and increase average basket value.",
    year:        "2024",
    image:       "/illustrations/cs4-cover.png",
    tags:        ["UX Design", "E-commerce", "Retail"],
    category:    "E-commerce",
  },
];

export const categories = ["All", "E-commerce", "Design Systems", "SaaS"] as const;
export type Category = typeof categories[number];
