import { Milestone, ProjectGroup, ProjectItem, TeamMember } from "@/types";
import { CLO_IMAGE, publicImage } from "@/lib/images";

export const COMPANY_NAME = "Dani Real Estate and Developers LLP";
export const SLOGAN = "Guiding You Home";

export const storyParagraphs = [
  "Our journey began in 2008, when our CEO, Muhammad Saeed, then serving as a Revenue Officer at PTCL, took his first step into real estate with a modest 1-kanal plotting project. What started small was driven by a clear vision, determination, and the courage to begin.",
  "Over the next one and a half decades, that single step evolved into a journey shaped by experience, resilience, and continuous growth. Through market challenges, key decisions, successes, and setbacks, a strong foundation was built—rooted in integrity and practical knowledge.",
  "In 2021, Dani Real Estate & Developers was formally incorporated as a Limited Liability Partnership (LLP) under the Securities and Exchange Commission of Pakistan (SECP). Today, the company stands as a reflection of that journey—committed to creating value, building trust, and shaping future-ready developments.",
];

export const milestones: Milestone[] = [
  {
    year: "2008",
    title: "The First Step",
    desc: "Muhammad Saeed begins with a 1-kanal plotting project while at PTCL",
  },
  {
    year: "2021",
    title: "LLP Incorporated",
    desc: "Formally registered under SECP as Dani Real Estate & Developers LLP",
  },
  {
    year: "2025",
    title: "Karlugh Subsidiary",
    desc: "Karlugh Real Estate & Property Developers LLP established",
  },
  {
    year: "Today",
    title: "Guiding You Home",
    desc: "Delivering housing, commercial, and flagship developments across Haripur",
  },
];

export const boardOfDirectors: TeamMember[] = [
  {
    id: "ceo",
    name: "Muhammad Saeed",
    role: "Chief Executive Officer",
    initials: "MS",
    image: publicImage("CEO Muhammad Saeed.jpeg"),
    bio: "Muhammad Saeed, a retired Accounts Officer at PTCL, brings 18 years of experience in real estate, construction, and development. He has successfully managed high-profile projects, demonstrating a strong ability to navigate complex regulations and deliver exceptional results. His collaborative leadership style fosters innovation and drives the company's strategic vision.",
  },
  {
    id: "coo",
    name: "Imran Rasheed",
    role: "Chief Operating Officer",
    initials: "IR",
    image: publicImage("COO Imran Rasheed.jpeg"),
    bio: "Imran Rasheed, with a Master's in Business Administration, has over a decade of experience in real estate, construction, and development. He excels in operational efficiency and project management, implementing best practices to optimize workflows. Known for his analytical problem-solving and strong stakeholder relationships, Imran ensures projects are completed on time and within budget.",
  },
  {
    id: "cfo",
    name: "Danial Saeed",
    role: "Chief Finance Officer",
    initials: "DS",
    image: publicImage("CFO Danial Saeed.jpeg"),
    bio: "Danial Saeed, a qualified Chartered Accountant, specializes in real estate financials and costing, with three years of experience ensuring financial integrity. His attention to detail and analytical skills enable him to develop financial models that support strategic decisions. Danial effectively manages budgets and identifies cost-saving opportunities, ensuring the company's financial stability.",
  },
];

export const karlughTeam: TeamMember[] = [
  {
    id: "chairman",
    name: "Colonel Kamal Aman Khan (Rtd)",
    role: "Chairman and Partner 1",
    initials: "KK",
    image: publicImage("Chairman Karlugh Kamal Aman Khan.jpeg"),
    bio: "Colonel Kamal Aman Khan (Rtd) is a seasoned executive with 38 years of experience in leadership and administrative roles. His strategic vision has earmarked his ancestral family lands for the project \"Aman Enclave,\" demonstrating his commitment to sustainable development. Known for his strong ethical reputation, Col. Kamal leads the Board of Directors in achieving the company's objectives with integrity.",
  },
  {
    id: "karlugh-ceo",
    name: "Muhammad Saeed",
    role: "Chief Executive Officer and Partner 2",
    initials: "MS",
    image: publicImage("CEO Muhammad Saeed.jpeg"),
    bio: "Muhammad Saeed, a retired Accounts Officer at PTCL, brings 18 years of experience in real estate, construction, and development. He has successfully managed high-profile projects, demonstrating a strong ability to navigate complex regulations and deliver exceptional results. His collaborative leadership style fosters innovation and drives the company's strategic vision.",
  },
  {
    id: "karlugh-coo",
    name: "Imran Rasheed",
    role: "Chief Operating Officer and Partner 3",
    initials: "IR",
    image: publicImage("COO Imran Rasheed.jpeg"),
    bio: "Imran Rasheed, with a Master's in Business Administration, has over a decade of experience in real estate, construction, and development. He excels in operational efficiency and project management, implementing best practices to optimize workflows. Known for his analytical problem-solving and strong stakeholder relationships, Imran ensures projects are completed on time and within budget.",
  },
  {
    id: "karlugh-cfo",
    name: "Danial Saeed",
    role: "Chief Finance Officer",
    initials: "DS",
    image: publicImage("CFO Danial Saeed.jpeg"),
    bio: "Danial Saeed, a qualified Chartered Accountant, specializes in real estate financials and costing, with three years of experience ensuring financial integrity. His attention to detail and analytical skills enable him to develop financial models that support strategic decisions. Danial effectively manages budgets and identifies cost-saving opportunities, ensuring the company's financial stability.",
  },
  {
    id: "karlugh-clo",
    name: "Muhammad Zarak Aman Khan",
    role: "Chief Legal Officer & Board Member",
    initials: "MZ",
    image: CLO_IMAGE,
    bio: "Muhammad Zarak Aman Khan serves as Chief Legal Officer and a valued Board Member of Karlugh Real Estate and Property Developers. He is a young and highly skilled legal professional with strong expertise in corporate and regulatory law. His strategic legal insight and sound judgment play a key role in guiding the company's governance, compliance, and long-term development framework, ensuring all projects are executed with legal integrity and professionalism.",
  },
];

export const subsidiaryStory = [
  "Karlugh Real Estate & Property Developers LLP is a subsidiary of Dani Real Estate Group, established to further expand the group's vision and development footprint.",
  "Incorporated in 2025, the company operates as a strategic extension of the group, combining experience with a forward-looking approach to modern real estate development.",
  "The venture is formed in partnership with the primary landowner, Col (R) Kamal Aman Khan, bringing together strong leadership, credibility, and on-ground expertise to deliver high-value projects.",
];

export const deliveredProjects: ProjectGroup[] = [
  {
    category: "Housing Developments",
    items: [
      {
        title: "China Town",
        detail:
          "27 Kanal residential project, completed between 2015–2017 at Sarai Salah, GT Road, Haripur",
      },
      {
        title: "Danial Gardens",
        detail:
          "104 Kanal housing development, completed between 2018–2021 at Nartopa Road, Haripur",
      },
      {
        title: "Dani Hills",
        detail: "150 Kanal farmhouse land project, successfully delivered and sold",
      },
    ],
  },
  {
    category: "Construction Projects",
    items: [
      {
        title: "Anish Cottages – Phase 1",
        detail:
          "8 residential units (4 Marla), completed and sold at Chapper Road, Haripur",
      },
      {
        title: "Wisdom Model School",
        detail:
          "50+ room educational facility, completed in 2016 at Chapper Road, Haripur",
      },
      {
        title: "Admore Petrol Pump",
        detail:
          "Fully approved and operational facility, completed in 2015 at Main Chapper Road, Haripur",
      },
      {
        title: "Commercial Markets",
        detail: "Development of 25+ retail shops, completed between 2017–2020",
      },
    ],
  },
];

export const ongoingProjects: ProjectItem[] = [
  {
    title: "Dani Hills – Phase 2",
    detail: "100 Kanal farmhouse land and residential development",
  },
  {
    title: "Haripur Hills",
    detail:
      "Flagship 3000 Kanal housing project in collaboration with Khyber Pakhtunkhwa Housing Authority, located in the scenic hills of Mankarai, Haripur",
  },
  {
    title: "Aman Enclave",
    detail: "350 Kanal residential housing society at Mankarai, Haripur",
  },
  {
    title: "Anish Cottages – Phase 2",
    detail:
      "4 Marla residential units currently under development, with inventory available at Chapper Road, Haripur",
  },
  {
    title: "Premium Farmhouse Estate",
    detail:
      "71 Kanal state-of-the-art farmhouse featuring modern construction, horticulture, water management systems, swimming pool, jacuzzi, and sauna",
  },
];
