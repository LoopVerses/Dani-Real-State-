export interface Property {
  id: string;
  title: string;
  type: "Residential" | "Commercial" | "Plot";
  status: "For Sale" | "For Rent";
  price: number;
  priceLabel: string;
  city: "Karachi" | "Lahore" | "Islamabad";
  area: number;
  beds?: number;
  baths?: number;
  image: string;
  featured: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  role: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  title: string;
  detail: string;
}

export interface ProjectGroup {
  category: string;
  items: ProjectItem[];
}
