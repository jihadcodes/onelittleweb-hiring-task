export const NAV_LINKS = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Blog",      href: "#blog" },
  { label: "Resources", href: "#resources" },
];

// Hero Section
export const HERO_DESIGN_WIDTH = 1440;
export const HERO_DESIGN_HEIGHT = 584;

export const HERO_FLOATING_IMAGES = [
  {
    src: "/images/Hero/image1.png",
    alt: "Airbnb",
    width: "7%",
    left: "18%",
    top: "32%",
    rotate: "-4.84deg",
    animationClass: "animate-hero-float-1",
  },
  {
    src: "/images/Hero/image3.png",
    alt: "Booking",
    width: "4.5%",
    left: "74.5%",
    top: "35%",
    rotate: "27.61deg",
    animationClass: "animate-hero-float-2",
  },
  {
    src: "/images/Hero/image2.png",
    alt: "App 2",
    width: "5.2%",
    left: "21%",
    top: "75%",
    rotate: "0deg",
    animationClass: "animate-hero-float-3",
  },
  {
    src: "/images/Hero/image4.png",
    alt: "App 4",
    width: "6.2%",
    left: "70%",
    top: "75%",
    rotate: "-7.38deg",
    animationClass: "animate-hero-float-4",
  },
];

// TrustedBy Section's data here
export const LOGOS = [
  { name: "Partner 1", src: "/images/TrustedBy/partnar1.png" },
  { name: "Partner 2", src: "/images/TrustedBy/partnar2.png" },
  { name: "Partner 3", src: "/images/TrustedBy/partnar3.png" },
  { name: "Partner 4", src: "/images/TrustedBy/partnar4.png" },
  { name: "Partner 5", src: "/images/TrustedBy/partnar5.png" },
  { name: "Partner 6", src: "/images/TrustedBy/partnar6.png" },
  { name: "Partner 7", src: "/images/TrustedBy/partnar7.png" },
];
 
export const SERVICES = [
  {
    icon: "/images/Services/service1.png",
    title: "Manage Property Listings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Services/service2.png",
    title: "Manage Customer Bookings",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Services/service3.png",
    title: "Schedule House Cleaning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Services/service4.png",
    title: "Monitor Guest Reviews",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Services/service5.png",
    title: "Track & Report Expenses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/Services/service6.png",
    title: "Guest Inquiry & Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const billingPlans = [
  {
    id: 1,
    planName: "Freebie",
    tagline: "Ideal for individuals who need quick access to basic features.",
    cost: { monthly: 0, annually: 0 },
    featured: false,
    capabilities: [
      { feature: "20,000+ of PNG & SVG graphics", available: true },
      { feature: "Access to 100 million stock images", available: true },
      { feature: "Upload custom icons and fonts", available: false },
      { feature: "Unlimited Sharing", available: false },
      { feature: "Upload graphics & video in up to 4k", available: false },
      { feature: "Unlimited Projects", available: false },
      { feature: "Instant Access to our design system", available: false },
      { feature: "Create teams to collaborate on designs", available: false },
    ],
  },
  {
    id: 2,
    planName: "Professional",
    tagline: "Ideal for individuals who need advanced features and tools for client work.",
    cost: { monthly: 25, annually: 19 },
    featured: true,
    capabilities: [
      { feature: "20,000+ of PNG & SVG graphics", available: true },
      { feature: "Access to 100 million stock images", available: true },
      { feature: "Upload custom icons and fonts", available: true },
      { feature: "Unlimited Sharing", available: true },
      { feature: "Upload graphics & video in up to 4k", available: true },
      { feature: "Unlimited Projects", available: true },
      { feature: "Instant Access to our design system", available: false },
      { feature: "Create teams to collaborate on designs", available: false },
    ],
  },
  {
    id: 3,
    planName: "Enterprise",
    tagline: "Ideal for businesses who need personalized services and security for large teams.",
    cost: { monthly: 100, annually: 75 },
    featured: false,
    capabilities: [
      { feature: "20,000+ of PNG & SVG graphics", available: true },
      { feature: "Access to 100 million stock images", available: true },
      { feature: "Upload custom icons and fonts", available: true },
      { feature: "Unlimited Sharing", available: true },
      { feature: "Upload graphics & video in up to 4k", available: true },
      { feature: "Unlimited Projects", available: true },
      { feature: "Instant Access to our design system", available: true },
      { feature: "Create teams to collaborate on designs", available: true },
    ],
  },
];

export const partnerTools = [
  {
    label: "PriceLabs",
    imagePath: "/images/ToolsImg/tool1.png",
    width: 174,
    height: 46,
  },
  {
    label: "Wheelhouse",
    imagePath: "/images/ToolsImg/tool2.png",
    width: 210,
    height: 27,
  },
  {
    label: "Beyond Pricing",
    imagePath: "/images/ToolsImg/tool3.png",
    width: 193,
    height: 31,
  },
  {
    label: "Hostfully",
    imagePath: "/images/ToolsImg/tool4.png",
    width: 151,
    height: 56,
  },
  {
    label: "Guesty",
    imagePath: "/images/ToolsImg/tool5.png",
    width: 135,
    height: 55,
  },
  {
    label: "Lodgify",
    imagePath: "/images/ToolsImg/tool6.png",
    width: 193,
    height: 31,
  },
  {
    label: "Tool 7",
    imagePath: "/images/ToolsImg/tool4.png",
    width: 151,
    height: 56,
  },
  {
    label: "Tool 8",
    imagePath: "/images/ToolsImg/tool5.png",
    width: 135,
    height: 55,
  },
  {
    label: "Tool 9",
    imagePath: "/images/ToolsImg/tool6.png",
    width: 193,
    height: 31,
  },
];
 

export const testimonials = [
  { id: 1, 
  name: "Esther Howard", 
  image: "/images/Testimonials/Ellipse 21.png", 
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
  stars: 4 },
  { id: 2, name: "Esther Howard", image: "/images/Testimonials/Ellipse 21 (1).png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 3, name: "Esther Howard", image: "/images/Testimonials/Ellipse 21.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 4, name: "Robert Fox", image: "/images/Testimonials/Ellipse 21 (1).png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
  { id: 5, name: "Robert Fox", image: "/images/Testimonials/Ellipse 21.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", stars: 4 },
]


// FAQ data for the FAQ section
export const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
]

export const FOOTER_LINKS = {
  Company:   ["About", "Features", "Works", "Career"],
  Help:      ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  Resources: ["Free eBooks", "Development Tutorial", "How to – Blog", "Youtube Playlist"],
};

// HowItWorksSection --------->
export const STEPS = [
  {
    num: "01",
    label: "Add requirements\n& sign up today",
    topIcon: "/images/Work/work_top1.png",
    icon: "/images/Work/work1.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 72,
    mainIconHeight: 58,
    plusIcon: false,
  },
  {
    num: "02",
    label: "Connect with your CSM &\nonboarding team",
    topIcon: "/images/Work/work_top2.png",
    icon: "/images/Work/work2.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 108,
    mainIconHeight: 123,
    plusIcon: false,
  },
  {
    num: "03",
    label: "Meet your STR\nAssistant next week",
    topIcon: "/images/Work/work_top3.png",
    icon: "/images/Work/work3.png",
    iconWidth: 76,
    iconHeight: 76,
    mainIconWidth: 70,
    mainIconHeight: 58,
    plusIcon: true,
  },
];

// WhyChooseUsSection --------->
export const WHY_CHOOSE_US = {
  heading: "Few Reasons Why you\nChoose us?",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  features: [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
  ],
};
