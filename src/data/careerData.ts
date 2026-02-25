export interface Career {
  id: string;
  title: string;
  description: string;
  industry: string;
  requiredSkills: string[];
  optionalSkills: string[];
  relatedInterests: string[];
  educationLevels: string[];
  workStyles: string[];
  salaryRange: string;
  growthOutlook: "High" | "Medium" | "Low";
  howToStart: string[];
}

export const SKILLS = [
  "Python", "JavaScript", "SQL", "R", "Java", "C++", "HTML/CSS",
  "Machine Learning", "Data Analysis", "Statistics",
  "Communication", "Leadership", "Problem Solving", "Critical Thinking",
  "Design", "UI/UX", "Project Management", "Marketing",
  "Writing", "Research", "Public Speaking", "Negotiation",
  "Cloud Computing", "DevOps", "Cybersecurity", "Networking",
  "Excel", "Power BI", "Tableau", "Figma", "Photoshop",
  "Sales", "Finance", "Accounting", "Healthcare Knowledge",
] as const;

export const INTERESTS = [
  "Artificial Intelligence", "Healthcare", "Business", "Creativity",
  "Education", "Environment", "Finance", "Gaming",
  "Science", "Social Impact", "Technology", "Entertainment",
  "Sports", "Law", "Media", "Robotics",
] as const;

export const EDUCATION_LEVELS = [
  "High School", "Associate Degree", "Bachelor's (BTech/BSc/BA)",
  "Master's (MTech/MSc/MBA)", "PhD", "Self-Taught / Bootcamp",
] as const;

export const WORK_STYLES = [
  "Remote", "Team-Based", "Leadership", "Research",
  "Creative", "Independent", "Fast-Paced", "Structured",
] as const;

export const INDUSTRIES = [
  "Technology", "Healthcare", "Finance", "Education",
  "Entertainment", "Manufacturing", "Consulting", "Government",
  "Startups", "Non-Profit", "E-Commerce", "Energy",
] as const;

export const careers: Career[] = [
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze complex data to help organizations make better decisions using statistics and machine learning.",
    industry: "Technology",
    requiredSkills: ["Python", "Statistics", "Machine Learning", "SQL"],
    optionalSkills: ["R", "Power BI", "Tableau", "Cloud Computing"],
    relatedInterests: ["Artificial Intelligence", "Technology", "Science", "Business"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)", "PhD"],
    workStyles: ["Remote", "Research", "Team-Based"],
    salaryRange: "$90,000 – $160,000",
    growthOutlook: "High",
    howToStart: [
      "Learn Python and Statistics fundamentals",
      "Complete a data science bootcamp or course",
      "Build portfolio projects with real datasets",
      "Get certified in cloud platforms (AWS/GCP)",
      "Apply for junior data analyst roles",
    ],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Design intuitive and delightful digital experiences by understanding user needs and behaviors.",
    industry: "Technology",
    requiredSkills: ["UI/UX", "Design", "Figma", "Research"],
    optionalSkills: ["HTML/CSS", "JavaScript", "Photoshop", "Communication"],
    relatedInterests: ["Creativity", "Technology", "Entertainment", "Social Impact"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Self-Taught / Bootcamp", "Associate Degree"],
    workStyles: ["Creative", "Team-Based", "Remote"],
    salaryRange: "$75,000 – $130,000",
    growthOutlook: "High",
    howToStart: [
      "Learn UX design principles and Figma",
      "Study user research methodologies",
      "Build a portfolio with 3-5 case studies",
      "Take on freelance or volunteer projects",
      "Apply for junior UX designer positions",
    ],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description: "Build and maintain software applications that solve real-world problems at scale.",
    industry: "Technology",
    requiredSkills: ["JavaScript", "Python", "Problem Solving", "HTML/CSS"],
    optionalSkills: ["Java", "C++", "Cloud Computing", "DevOps", "SQL"],
    relatedInterests: ["Technology", "Gaming", "Artificial Intelligence", "Science"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Self-Taught / Bootcamp", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Remote", "Team-Based", "Fast-Paced", "Independent"],
    salaryRange: "$85,000 – $170,000",
    growthOutlook: "High",
    howToStart: [
      "Master a programming language (Python or JavaScript)",
      "Learn data structures and algorithms",
      "Build full-stack projects for your portfolio",
      "Contribute to open-source projects",
      "Apply for internships or junior dev roles",
    ],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    description: "Drive product strategy and execution by bridging business, technology, and user needs.",
    industry: "Technology",
    requiredSkills: ["Communication", "Leadership", "Problem Solving", "Project Management"],
    optionalSkills: ["SQL", "Data Analysis", "Marketing", "UI/UX"],
    relatedInterests: ["Business", "Technology", "Social Impact", "Education"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Leadership", "Team-Based", "Fast-Paced"],
    salaryRange: "$100,000 – $180,000",
    growthOutlook: "High",
    howToStart: [
      "Understand product development lifecycle",
      "Learn analytics tools and basic SQL",
      "Get certified in Agile/Scrum methodologies",
      "Build side projects to demonstrate product thinking",
      "Transition from adjacent roles (engineering, design, marketing)",
    ],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect organizations from cyber threats by monitoring, detecting, and responding to security incidents.",
    industry: "Technology",
    requiredSkills: ["Cybersecurity", "Networking", "Problem Solving", "Critical Thinking"],
    optionalSkills: ["Python", "Cloud Computing", "SQL", "DevOps"],
    relatedInterests: ["Technology", "Science", "Law", "Business"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Self-Taught / Bootcamp", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Independent", "Structured", "Remote"],
    salaryRange: "$80,000 – $140,000",
    growthOutlook: "High",
    howToStart: [
      "Learn networking fundamentals (CompTIA Network+)",
      "Get CompTIA Security+ certification",
      "Practice on CTF platforms (HackTheBox, TryHackMe)",
      "Study common vulnerabilities and penetration testing",
      "Apply for SOC analyst or junior security roles",
    ],
  },
  {
    id: "marketing-manager",
    title: "Digital Marketing Manager",
    description: "Plan and execute marketing campaigns to grow brand awareness and drive business results.",
    industry: "E-Commerce",
    requiredSkills: ["Marketing", "Communication", "Writing", "Data Analysis"],
    optionalSkills: ["Design", "Public Speaking", "Excel", "SQL"],
    relatedInterests: ["Business", "Creativity", "Entertainment", "Media"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)", "Self-Taught / Bootcamp"],
    workStyles: ["Creative", "Team-Based", "Fast-Paced"],
    salaryRange: "$65,000 – $120,000",
    growthOutlook: "Medium",
    howToStart: [
      "Learn digital marketing fundamentals (Google certifications)",
      "Master SEO, SEM, and social media marketing",
      "Build a personal brand or blog",
      "Get hands-on with analytics tools",
      "Apply for marketing coordinator roles",
    ],
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Analyze financial data to help businesses make investment decisions and manage risk.",
    industry: "Finance",
    requiredSkills: ["Finance", "Excel", "Data Analysis", "Critical Thinking"],
    optionalSkills: ["SQL", "Python", "Statistics", "Accounting", "Power BI"],
    relatedInterests: ["Finance", "Business", "Science", "Technology"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Structured", "Independent", "Team-Based"],
    salaryRange: "$70,000 – $130,000",
    growthOutlook: "Medium",
    howToStart: [
      "Get a degree in finance, accounting, or economics",
      "Master Excel and financial modeling",
      "Pursue CFA or other financial certifications",
      "Learn Python for financial analysis",
      "Apply for junior analyst positions at banks or firms",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI/ML Engineer",
    description: "Design and deploy artificial intelligence and machine learning models to automate and enhance systems.",
    industry: "Technology",
    requiredSkills: ["Python", "Machine Learning", "Statistics", "Data Analysis"],
    optionalSkills: ["Cloud Computing", "SQL", "R", "DevOps"],
    relatedInterests: ["Artificial Intelligence", "Technology", "Robotics", "Science"],
    educationLevels: ["Master's (MTech/MSc/MBA)", "PhD", "Bachelor's (BTech/BSc/BA)"],
    workStyles: ["Research", "Remote", "Independent"],
    salaryRange: "$110,000 – $200,000",
    growthOutlook: "High",
    howToStart: [
      "Master Python and mathematics (linear algebra, calculus)",
      "Complete ML courses (Andrew Ng, fast.ai)",
      "Build and deploy ML models on real data",
      "Publish research or blog posts about your work",
      "Apply for ML engineer or research roles",
    ],
  },
  {
    id: "healthcare-admin",
    title: "Healthcare Administrator",
    description: "Manage healthcare facilities and ensure efficient delivery of medical services.",
    industry: "Healthcare",
    requiredSkills: ["Leadership", "Communication", "Project Management", "Healthcare Knowledge"],
    optionalSkills: ["Finance", "Data Analysis", "Excel", "Negotiation"],
    relatedInterests: ["Healthcare", "Social Impact", "Business", "Education"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Leadership", "Structured", "Team-Based"],
    salaryRange: "$70,000 – $120,000",
    growthOutlook: "Medium",
    howToStart: [
      "Get a degree in healthcare administration or public health",
      "Gain experience in healthcare settings",
      "Learn healthcare regulations and compliance",
      "Develop leadership and management skills",
      "Pursue MHA or MBA in healthcare management",
    ],
  },
  {
    id: "content-creator",
    title: "Content Creator / Writer",
    description: "Create engaging content across platforms — from blogs and social media to video and podcasts.",
    industry: "Entertainment",
    requiredSkills: ["Writing", "Communication", "Creative", "Marketing"],
    optionalSkills: ["Design", "Photoshop", "Public Speaking", "UI/UX"],
    relatedInterests: ["Creativity", "Entertainment", "Media", "Education"],
    educationLevels: ["High School", "Bachelor's (BTech/BSc/BA)", "Self-Taught / Bootcamp"],
    workStyles: ["Creative", "Independent", "Remote"],
    salaryRange: "$40,000 – $100,000",
    growthOutlook: "Medium",
    howToStart: [
      "Start a blog, YouTube channel, or social media presence",
      "Learn SEO and content marketing basics",
      "Build a portfolio of published work",
      "Network with other creators and brands",
      "Monetize through freelancing or brand partnerships",
    ],
  },
  {
    id: "cloud-architect",
    title: "Cloud Solutions Architect",
    description: "Design and oversee cloud infrastructure strategies for organizations moving to the cloud.",
    industry: "Technology",
    requiredSkills: ["Cloud Computing", "Networking", "DevOps", "Problem Solving"],
    optionalSkills: ["Python", "Cybersecurity", "SQL", "Java"],
    relatedInterests: ["Technology", "Business", "Science", "Artificial Intelligence"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)", "Self-Taught / Bootcamp"],
    workStyles: ["Remote", "Leadership", "Independent"],
    salaryRange: "$120,000 – $200,000",
    growthOutlook: "High",
    howToStart: [
      "Get certified in AWS, Azure, or GCP",
      "Learn infrastructure as code (Terraform, CloudFormation)",
      "Gain experience as a cloud engineer or sysadmin",
      "Understand networking, security, and cost optimization",
      "Build architecture portfolios with real-world scenarios",
    ],
  },
  {
    id: "management-consultant",
    title: "Management Consultant",
    description: "Advise organizations on strategy, operations, and transformation to improve performance.",
    industry: "Consulting",
    requiredSkills: ["Problem Solving", "Communication", "Critical Thinking", "Leadership"],
    optionalSkills: ["Excel", "Data Analysis", "Public Speaking", "Finance"],
    relatedInterests: ["Business", "Finance", "Social Impact", "Education"],
    educationLevels: ["Bachelor's (BTech/BSc/BA)", "Master's (MTech/MSc/MBA)"],
    workStyles: ["Fast-Paced", "Team-Based", "Leadership"],
    salaryRange: "$85,000 – $180,000",
    growthOutlook: "Medium",
    howToStart: [
      "Develop strong analytical and communication skills",
      "Get an MBA or relevant master's degree",
      "Practice case study interviews",
      "Network with consultants at top firms",
      "Apply to consulting firms or start freelancing",
    ],
  },
];

export interface UserProfile {
  education: string;
  skills: string[];
  interests: string[];
  workStyles: string[];
  industry: string;
}

export interface CareerMatch {
  career: Career;
  matchPercentage: number;
  skillMatch: number;
  interestMatch: number;
  educationFit: number;
  industryFit: number;
  workStyleFit: number;
  reasoning: string;
  matchedSkills: string[];
  missingSkills: string[];
}

export function getRecommendations(profile: UserProfile): CareerMatch[] {
  const matches: CareerMatch[] = careers.map((career) => {
    // Skill matching (weight: 35%)
    const allCareerSkills = [...career.requiredSkills, ...career.optionalSkills];
    const matchedSkills = profile.skills.filter((s) => allCareerSkills.includes(s));
    const requiredMatched = profile.skills.filter((s) => career.requiredSkills.includes(s));
    const skillScore = career.requiredSkills.length > 0
      ? (requiredMatched.length / career.requiredSkills.length) * 0.7 +
        (matchedSkills.length / allCareerSkills.length) * 0.3
      : 0;

    // Interest matching (weight: 25%)
    const matchedInterests = profile.interests.filter((i) => career.relatedInterests.includes(i));
    const interestScore = career.relatedInterests.length > 0
      ? matchedInterests.length / career.relatedInterests.length
      : 0;

    // Education fit (weight: 15%)
    const educationScore = career.educationLevels.includes(profile.education) ? 1 : 0.3;

    // Industry alignment (weight: 15%)
    const industryScore = career.industry === profile.industry ? 1 :
      profile.industry === "" ? 0.5 : 0.2;

    // Work style fit (weight: 10%)
    const matchedStyles = profile.workStyles.filter((w) => career.workStyles.includes(w));
    const workStyleScore = career.workStyles.length > 0
      ? matchedStyles.length / Math.max(career.workStyles.length, profile.workStyles.length)
      : 0;

    const totalScore = Math.round(
      (skillScore * 35 + interestScore * 25 + educationScore * 15 + industryScore * 15 + workStyleScore * 10)
    );

    const missingSkills = career.requiredSkills.filter((s) => !profile.skills.includes(s));

    // Generate reasoning
    const reasons: string[] = [];
    if (requiredMatched.length > 0) reasons.push(`your ${requiredMatched.join(", ")} skills`);
    if (matchedInterests.length > 0) reasons.push(`interest in ${matchedInterests.join(", ")}`);
    if (educationScore === 1) reasons.push(`${profile.education} background`);
    if (industryScore === 1) reasons.push(`preference for ${profile.industry}`);

    const reasoning = reasons.length > 0
      ? `Matches ${reasons.join(" + ")}.`
      : "Explore this career to discover if it's right for you.";

    return {
      career,
      matchPercentage: Math.min(totalScore, 100),
      skillMatch: Math.round(skillScore * 100),
      interestMatch: Math.round(interestScore * 100),
      educationFit: Math.round(educationScore * 100),
      industryFit: Math.round(industryScore * 100),
      workStyleFit: Math.round(workStyleScore * 100),
      reasoning,
      matchedSkills: matchedSkills,
      missingSkills,
    };
  });

  return matches.sort((a, b) => b.matchPercentage - a.matchPercentage);
}
