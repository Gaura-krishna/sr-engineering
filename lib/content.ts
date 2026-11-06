export const site = {
  name: "SR Engineering Design Solutions",
  url: "https://www.srengineeringdesignsolutions.com",
  phone: "+919281202550",
  phoneDisplay: "+91 92812 02550",
  email: "srengineeringdesignsolutions@gmail.com",
  location: "Manthani-Hyderabad, Telangana State, India",
  social: {
    instagram: "https://www.instagram.com/sr_engineering_design_solution/",
    facebook: "https://www.facebook.com/profile.php?id=61595230563865",
    whatsapp: "https://wa.me/919281202550",
    linkedin: "https://www.linkedin.com/in/sr-engineering-design-solutions-52a98141a/",
    youtube: "https://www.youtube.com",
  },
};

// export const navLinks = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#services", label: "Services" },
//   { href: "#expertise", label: "Expertise" },
//   { href: "#opportunities", label: "Training & Opportunities" },
//   { href: "#projects", label: "Projects" },
//   { href: "#contact", label: "Contact" },
// ] as const;

export const services = [
  {
    number: "01",
    title: "BIM Modeling",
    description:
      "Accurate 3D modeling with structured BIM workflows for project-ready deliverables.",
    image: "/images-services/BIM-Modeling.jpg",
  },
  {
    number: "02",
    title: "BIM Coordination",
    description:
      "Seamless multidisciplinary coordination to reduce conflicts and improve constructability.",
    image: "/images-services/BIM-Coordination.png",
  },
  {
    number: "03",
    title: "Clash Detection",
    description:
      "Identify and resolve design conflicts early, saving time, rework and project cost.",
    image: "/images-services/Clash-Detection.jpg",
  },
  {
    number: "04",
    title: "MEP Design & Drafting",
    description:
      "MEPF design and drafting services with an emphasis on accuracy and coordination.",
    image: "/images-services/MEP-Design-Drafting.jpg",
  },
  {
    number: "05",
    title: "Shop Drawings",
    description:
      "Detailed drawings supporting fabrication, installation and site execution.",
    image: "/images-services/Shop-Drawings.jpg",
  },
  {
    number: "06",
    title: "Construction Documentation",
    description:
      "Complete and organized construction documentation prepared for execution.",
    image: "/images-services/3d-Modeling.jpg",
  },
] as const;

export const serviceOptions = [
  "BIM Modeling",
  "BIM Coordination",
  "Clash Detection",
  "MEP Design & Drafting",
  "Shop Drawings",
  "Construction Documentation",
  "Training / Opportunities",
  "Other",
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "End-to-end BIM and engineering design solutions delivering precise, coordinated and construction-ready outcomes for Residential, Commercial, Middle East and International projects.",
  url: `${site.url}/`,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/image.png`,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.3850",
    longitude: "78.4867",
  },
  sameAs: [
    site.social.instagram,
    site.social.facebook,
    site.social.linkedin,
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00",
  serviceType: [
    "BIM Modeling",
    "BIM Coordination",
    "Clash Detection",
    "MEP Design & Drafting",
    "Shop Drawings",
    "Construction Documentation",
    "Structural Engineering",
    "Architecture Design",
  ],
  
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];