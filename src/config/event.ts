export interface EventConfig {
  name: string;
  seriesName: string;
  edition: string;
  tagline: string;
  headline: string;
  subheadline: string;
  institution: {
    name: string;
    shortName: string;
    campus: string;
    city: string;
    state: string;
    country: string;
  };
  dates: {
    start: string;
    end: string;
    display: string;
    year: number;
    daysCount: number;
  };
  registration: {
    url: string;
    label: string;
    type: "official_external";
    formPlatform: string;
  };
  disclaimer: {
    badge: string;
    shortNotice: string;
    fullDisclosure: string;
  };
}

export const EVENT_CONFIG: EventConfig = {
  name: "Interswitch Pan-African Discovery Series",
  seriesName: "Pan-African Discovery Series",
  edition: "EKSU 2026",
  tagline: "Inspiring Innovation, Igniting African Potential",
  headline: "Your next big idea deserves to be discovered.",
  subheadline:
    "Three days of technology, creativity, and entrepreneurship at Ekiti State University. Bring your ideas, sharpen your skills, and connect with fellow builders and industry mentors.",
  institution: {
    name: "Ekiti State University",
    shortName: "EKSU",
    campus: "Main Campus",
    city: "Ado-Ekiti",
    state: "Ekiti State",
    country: "Nigeria",
  },
  dates: {
    start: "2026-10-28",
    end: "2026-10-30",
    display: "October 28–30, 2026",
    year: 2026,
    daysCount: 3,
  },
  registration: {
    url: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=Im2p0gje4Ui8Q3jnDZV-g8z25rvyRgVMu6zygv-MEEBUNVEwMlpVSkM3SlcwSlRFTjhDS1ZNWFZTOS4u&route=shorturl",
    label: "Register for EKSU Discovery Series",
    type: "official_external",
    formPlatform: "Microsoft Forms (Official Registration Link)",
  },
  disclaimer: {
    badge: "Independent Concept Proposal",
    shortNotice: "Independent student & community showcase concept for Discovery Series 2026 · EKSU.",
    fullDisclosure:
      "This website is an independently developed community and product concept designed to inform students, build momentum, and facilitate registration for the announced Interswitch Pan-African Discovery Series at Ekiti State University (EKSU). It is not an official corporate property of Interswitch Group or Ekiti State University. All event marks and names belong to their respective owners.",
  },
};

export interface ActivityTrack {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badgeStyle: "cyan" | "orange-gradient" | "navy";
  tag: string;
  highlights: string[];
}

export const EVENT_ACTIVITIES: ActivityTrack[] = [
  {
    id: "hackathons",
    title: "Hackathon",
    badgeStyle: "navy",
    tag: "Collaborative Sprint",
    shortDesc: "Intensive team sprints tackling critical problems across African commerce, payments, logistics, and digital services.",
    fullDesc:
      "Form teams, collaborate with multidisciplinary peers, and build functioning prototypes in focused challenges designed to push your problem-solving capabilities.",
    highlights: [
      "Real-world problem briefs",
      "Interdisciplinary teams of devs, designers & strategists",
      "Rapid prototype development and validation",
    ],
  },
  {
    id: "design-thinking",
    title: "Design Thinking Session",
    badgeStyle: "orange-gradient",
    tag: "User-Centered Design",
    shortDesc: "Hands-on empathy mapping, problem framing, and interactive prototyping methods led by seasoned design mentors.",
    fullDesc:
      "Master the process of discovering unmet user needs, rapid UX ideation, and turning abstract concepts into intuitive digital experiences.",
    highlights: [
      "Customer empathy & problem definition",
      "Wireframing and rapid clickable UI prototyping",
      "Testing usability before writing code",
    ],
  },
  {
    id: "workshops",
    title: "Entrepreneurship Workshop",
    badgeStyle: "cyan",
    tag: "Venture Building",
    shortDesc: "Essential foundations for translating campus technology projects into viable, sustainable startup businesses.",
    fullDesc:
      "Learn how to validate business models, understand customer acquisition, manage unit economics, and prepare for investor conversations.",
    highlights: [
      "Business model canvas & value proposition",
      "Validating market demand for African tech products",
      "Go-to-market strategies for student founders",
    ],
  },
  {
    id: "integration",
    title: "Product Integration Session",
    badgeStyle: "cyan",
    tag: "Hands-on Tech Integration",
    shortDesc: "Practical engineering masterclasses on integrating real payment gateways, APIs, and modern cloud architectures.",
    fullDesc:
      "Explore enterprise-grade fintech APIs, webhook handling, security compliance, and frictionless digital transaction flows with live code walk-throughs.",
    highlights: [
      "Modern API authentication and webhook security",
      "Payment gateway integration patterns",
      "Production-ready deployment & telemetry",
    ],
  },
  {
    id: "grand-pitch",
    title: "Grand Pitch",
    badgeStyle: "orange-gradient",
    tag: "Main Stage Competition",
    shortDesc: "The ultimate stage where finalist teams present their prototypes and pitches before a panel of industry judges.",
    fullDesc:
      "Demonstrate your working software, articulate your team's solution, and compete for top recognition, prizes, and future ecosystem opportunities.",
    highlights: [
      "Live 5-minute pitch & prototype demonstration",
      "Constructive feedback from industry experts",
      "Spotlight before the entire campus community",
    ],
  },
  {
    id: "prizes",
    title: "Amazing Prizes to be won",
    badgeStyle: "navy",
    tag: "Participant Recognition",
    shortDesc: "Prizes, gifts, and ecosystem opportunities to reward outstanding innovation, team effort, and creativity.",
    fullDesc:
      "Standout student teams and active participants will be celebrated with prizes and gifts announced by the event organizers during the ceremonies.",
    highlights: [
      "Award categories announced during the sessions",
      "Gifts and ecosystem perks for winning projects",
      "Direct pathway to mentorship and growth",
    ],
  },
];

export interface AudienceGroup {
  role: string;
  tagline: string;
  description: string;
  whatYouGain: string[];
  recommendedActivities: string[];
}

export const AUDIENCE_GROUPS: AudienceGroup[] = [
  {
    role: "Software Developers & Programmers",
    tagline: "Build scalable software, test new stacks, and showcase code",
    description:
      "Whether you are building your first web app or architecting distributed systems, test your capabilities in real-time hack sprints and master modern engineering best practices.",
    whatYouGain: [
      "Practical experience building under hackathon conditions",
      "Exposure to enterprise-grade payment and platform architectures",
      "Direct code critique and engineering mentorship",
    ],
    recommendedActivities: ["Hackathon Challenge", "Technical API Workshop", "Talent Showcase"],
  },
  {
    role: "UI/UX Designers & Product Creatives",
    tagline: "Craft high-empathy African digital experiences",
    description:
      "User research, design systems, and rapid prototyping are critical to product adoption. Partner with developers to turn abstract requirements into human-friendly software.",
    whatYouGain: [
      "Cross-functional collaboration with engineering peers",
      "Design portfolio case study built on a real problem",
      "Mentorship from experienced digital product designers",
    ],
    recommendedActivities: ["Product Design Track", "Interdisciplinary Hackathon", "Project Pitching"],
  },
  {
    role: "AI, Data & Cybersecurity Enthusiasts",
    tagline: "Explore data intelligence, model applications, and system resilience",
    description:
      "Dive into applied machine learning, practical data science, and security fundamentals essential for resilient African infrastructure and trustworthy financial systems.",
    whatYouGain: [
      "Contextual application of ML/AI to localized problems",
      "Hands-on awareness of defensive application security",
      "Networking with data practitioners and security analysts",
    ],
    recommendedActivities: ["Data/AI Technical Sessions", "Security Workshops", "Mentorship Circles"],
  },
  {
    role: "Campus Founders & Aspiring Entrepreneurs",
    tagline: "Transform campus projects into sustainable ventures",
    description:
      "Bring your university final-year project, software tool, or community initiative to the forefront. Learn how to validate users, test market appetite, and pitch with clarity.",
    whatYouGain: [
      "Clear feedback on value proposition and user discovery",
      "Guidance on building minimum viable products (MVPs)",
      "Connections with potential co-founders and ecosystem partners",
    ],
    recommendedActivities: ["Entrepreneurship Masterclasses", "Project Showcase", "Founder Mentorship"],
  },
  {
    role: "Students Seeking Growth & Career Mentorship",
    tagline: "Find your path, build your network, and level up",
    description:
      "New to the tech ecosystem? You do not need years of experience to attend. Come learn where your talents fit, discover modern tech career roadmaps, and meet inspiring peers.",
    whatYouGain: [
      "Clarity on high-demand tech skill paths and learning resources",
      "Direct answers to career questions from practicing professionals",
      "Belonging to an active, motivated campus builder community",
    ],
    recommendedActivities: ["Keynote Sessions", "Career Q&A Panels", "Networking Mixers"],
  },
];

export interface ScheduleDay {
  dayNumber: number;
  dateStr: string;
  dayOfWeek: string;
  theme: string;
  summary: string;
  focusTracks: string[];
  statusNotice: string;
}

export const EVENT_SCHEDULE_DAYS: ScheduleDay[] = [
  {
    dayNumber: 1,
    dateStr: "October 28, 2026",
    dayOfWeek: "Wednesday",
    theme: "Discovery, Orientation & Problem Definition",
    summary:
      "Setting the stage for African technological self-reliance. Official kickoff, announcement of hackathon problem statements, team formation, and foundational masterclasses.",
    focusTracks: [
      "Opening Keynote & Event Orientation",
      "Hackathon Problem Statements & Team Formation",
      "Technical Architecture Masterclass",
      "Evening Mentorship Check-in",
    ],
    statusNotice: "Confirmed date · Detailed session time slots will be published prior to event",
  },
  {
    dayNumber: 2,
    dateStr: "October 29, 2026",
    dayOfWeek: "Thursday",
    theme: "Deep Build, Technical Sessions & Mentorship",
    summary:
      "The engine room of the series. Teams enter deep development sprints while technical breakout workshops cover API integration, UX design, and secure systems.",
    focusTracks: [
      "Continuous Hackathon Sprint & Code Reviews",
      "Hands-on API & Fintech Architecture Workshop",
      "Product Strategy & User Experience Clinics",
      "One-on-One Project Mentorship Sessions",
    ],
    statusNotice: "Confirmed date · Hands-on breakout tracks and workshop venues will be announced",
  },
  {
    dayNumber: 3,
    dateStr: "October 30, 2026",
    dayOfWeek: "Friday",
    theme: "Talent Showcase, Pitch Demonstrations & Recognition",
    summary:
      "The culmination of three intense days. Teams present their working prototypes to judges, followed by ecosystem feedback, project recognition, and celebration.",
    focusTracks: [
      "Final Code Freeze & Demonstration Setup",
      "Live Project & Talent Showcase Presentations",
      "Panel Discussion: Scaling Campus Tech in Nigeria",
      "Presentation of Recognition, Prizes & Closing",
    ],
    statusNotice: "Confirmed date · Final showcase agenda and judging panel will be published",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Registration" | "Participation" | "Schedule";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "General",
    question: "What is the Interswitch Pan-African Discovery Series?",
    answer:
      "The Interswitch Pan-African Discovery Series is an initiative aimed at empowering African university students through technology, hands-on learning, hackathons, mentorship, and entrepreneurship opportunities, connecting campus talent with the broader technology ecosystem.",
  },
  {
    category: "General",
    question: "When and where is the EKSU edition taking place?",
    answer:
      "The event is scheduled for October 28–30, 2026 at Ekiti State University (EKSU) in Ado-Ekiti, Ekiti State, Nigeria. Specific hall and auditorium venues on campus will be communicated to registered participants.",
  },
  {
    category: "Participation",
    question: "Who is eligible to participate in the Discovery Series?",
    answer:
      "The series welcomes university students across disciplines—including software engineering, computer science, product design, data science, cybersecurity, and aspiring student founders. Both beginners eager to learn and experienced builders looking to showcase projects are encouraged to attend.",
  },
  {
    category: "Registration",
    question: "How do I register for the event?",
    answer:
      "Registration is completed online via the official Microsoft Forms registration portal. Click any 'Register Now' button on this site to be redirected directly to the official form. Ensure you provide accurate contact details so organizers can reach you.",
  },
  {
    category: "Participation",
    question: "What activities are planned during the three days?",
    answer:
      "The official announcement highlights hackathons and innovation challenges, hands-on technical workshops, mentorship and networking sessions, project and talent showcasing, and entrepreneurship opportunities designed to catalyze student innovation.",
  },
  {
    category: "Participation",
    question: "Are prizes and gifts being awarded?",
    answer:
      "Yes, the event announcement mentions prizes and gifts for participants, alongside mentorship and entrepreneurship support. Specific categories, award criteria, and prize details are determined by the event organizers and will be confirmed during the event.",
  },
  {
    category: "Schedule",
    question: "Is the minute-by-minute schedule finalized?",
    answer:
      "The dates (October 28–30, 2026) and core themes across the 3-day format are confirmed. Specific daily session times, speaking schedules, and room allocations will be announced closer to the event date.",
  },
  {
    category: "General",
    question: "Is this website an official Interswitch or EKSU page?",
    answer:
      "No. This website is an independently created product and design concept developed to inform prospective attendees and celebrate the event. All registration links direct visitors to the authentic, official Microsoft Forms registration document provided by the organizers.",
  },
];
