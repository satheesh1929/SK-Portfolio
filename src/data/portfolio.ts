export interface Project {
  slug: string;
  title: string;
  category: "WEB DEVELOPMENT" | "AI / COMPUTER VISION" | "IOT" | "AGRITECH" | "RESEARCH";
  shortDescription: string;
  description: string;
  problem: string;
  approach: string;
  whatIBuilt: string;
  myContribution: string;
  results?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  isFeatured: boolean;
  pipeline?: string[]; // E.g. ["Input", "Processing", "Output"]
  futureImprovements?: string[];
  challenges?: string;
  lessonsLearned?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  type: "Full-Time" | "Internship" | "Contract" | "Short Term" | "Part-Time";
  contributions: string[];
  technologies?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  category: "Software & Programming" | "Engineering & Technology" | "Professional Development";
  credentialUrl?: string;
  description?: string;
}

export interface Publication {
  title: string;
  paperId: string;
  conference: string;
  year: string;
  status: string;
  authors: string[];
  abstractPreview?: string;
  paperUrl?: string;
}

export interface Skill {
  name: string;
  proficiency: "Core" | "Working Knowledge" | "Familiar";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
  courses: string[];
}

export interface Achievement {
  title: string;
  context: string;
  year: string;
  category: "Technical" | "General";
  description?: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    shortName: string;
    primaryTitle: string;
    tagline: string;
    availability: string;
    resumePath: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  about: {
    story: string[];
    currently: string[];
  };
  skillCategories: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  publications: Publication[];
  certifications: Certification[];
  achievements: Achievement[];
  education: Education;
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Satheesh Kumar S",
    shortName: "SK",
    primaryTitle: "Software Developer • Frontend Developer • AI & IoT Builder",
    tagline: "Final-year B.Tech Agricultural Engineering student building practical software, AI, IoT, and AgriTech solutions — from production websites to intelligent agricultural systems.",
    availability: "Open to internship and 2027 fresher opportunities",
    resumePath: "/assets/S.%20Satheesh%20Kumar_Resume.pdf",
    socials: {
      github: "https://github.com/satheesh1929",
      linkedin: "https://www.linkedin.com/in/satheesh-kumar-aspiring-developer",
      email: "satheeshkumar.tech29@gmail.com",
    },
  },
  about: {
    story: [
      "I am a final-year B.Tech Agricultural Engineering student (Batch: 2023-2027) actively transitioning into the software and technology industry. By combining engineering principles with modern software workflows, I bridge the gap between physical systems and digital logic.",
      "My passion lies in frontend development, Python application building, AI/computer vision models, and IoT prototyping. I leverage my specialized agricultural background as a strong domain advantage, allowing me to build robust, practical solutions that address real-world challenges in smart agriculture and beyond.",
      "I enjoy solving problems from basic system designs to production-ready websites. My focus is on writing clean code, building responsive user interfaces, and implementing edge-based computer vision workflows.",
    ],
    currently: [
      "Completing final year of B.Tech Agricultural Engineering at KIT, Coimbatore",
      "Building full-stack web applications and AI/Computer Vision models",
      "Deepening skills in Java, Python, React, Next.js, and APIs",
      "Actively seeking internships and software developer entry-level roles",
    ],
  },
  skillCategories: [
    {
      title: "Programming",
      skills: [
        { name: "Python", proficiency: "Core" },
        { name: "Java", proficiency: "Working Knowledge" },
        { name: "JavaScript", proficiency: "Core" },
        { name: "TypeScript", proficiency: "Working Knowledge" },
        { name: "SQL", proficiency: "Familiar" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", proficiency: "Core" },
        { name: "CSS3", proficiency: "Core" },
        { name: "React", proficiency: "Working Knowledge" },
        { name: "Next.js", proficiency: "Working Knowledge" },
        { name: "Tailwind CSS", proficiency: "Core" },
        { name: "Responsive Web Design", proficiency: "Core" },
      ],
    },
    {
      title: "Backend & Application Dev",
      skills: [
        { name: "Flask", proficiency: "Working Knowledge" },
        { name: "REST APIs", proficiency: "Working Knowledge" },
        { name: "Node.js", proficiency: "Familiar" },
      ],
    },
    {
      title: "AI / Computer Vision",
      skills: [
        { name: "OpenCV", proficiency: "Working Knowledge" },
        { name: "YOLO (v11)", proficiency: "Working Knowledge" },
        { name: "Roboflow", proficiency: "Core" },
        { name: "AI API Integration", proficiency: "Working Knowledge" },
      ],
    },
    {
      title: "IoT / Embedded Prototyping",
      skills: [
        { name: "Arduino IDE", proficiency: "Core" },
        { name: "ESP32 / ESP8266", proficiency: "Core" },
        { name: "Sensors & Actuators", proficiency: "Core" },
        { name: "Hardware Integration", proficiency: "Core" },
      ],
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git & GitHub", proficiency: "Core" },
        { name: "VS Code", proficiency: "Core" },
        { name: "Vercel", proficiency: "Working Knowledge" },
        { name: "QGIS", proficiency: "Familiar" },
        { name: "SolidWorks", proficiency: "Familiar" },
      ],
    },
  ],
  experiences: [
    {
      role: "Tech Head",
      organization: "Mugavari Thazhai",
      period: "June 2024 - Present",
      type: "Part-Time",
      contributions: [
        "Directing all technical operations, digital branding, and e-commerce infrastructure.",
        "Designed and built the responsive brand website (mugavarithazhai.in) resulting in a direct-to-customer channel.",
        "Developed custom dynamic catalog display and a streamlined WhatsApp ordering pipeline to reduce purchase friction.",
        "Managing site assets, domains, search visibility, and localized performance optimization.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "WhatsApp Business APIs"],
    },
    {
      role: "Python Full Stack Developer Virtual Intern",
      organization: "AICTE / EduSkills (supported by corporate partnerships)",
      period: "October 2024 - December 2024 (10 Weeks)",
      type: "Internship",
      contributions: [
        "Completed structured training and virtual project milestones on full-stack application concepts.",
        "Built responsive frontend templates integrated with backend Python (Flask) API routing.",
        "Practiced local database operations, schemas setup, and user authentication workflows.",
      ],
      technologies: ["Python", "Flask", "HTML", "CSS", "SQL", "Git"],
    },
    {
      role: "Industrial Intern",
      organization: "Harrisons Malayalam Ltd (RPG Group)",
      period: "May 2024 (Short Term)",
      type: "Short Term",
      contributions: [
        "Studied industrial food processing workflows focusing on Tea Manufacturing (CTC process) and quality validation.",
        "Analyzed operational machinery, sensor tracking, and preventive maintenance setups in production lines.",
      ],
    },
    {
      role: "Field Intern",
      organization: "COODU (NGO)",
      period: "December 2023 (Short Term)",
      type: "Short Term",
      contributions: [
        "Collaborated with community leads to document rural development and water conservation initiatives.",
        "Prepared presentations and documentation summaries for English-speaking project evaluations.",
      ],
    },
  ],
  projects: [
    {
      slug: "seedgrade",
      title: "SeedGrade",
      category: "AI / COMPUTER VISION",
      shortDescription: "AI-powered seed quality assessment system utilizing computer vision for instant grading validation.",
      description: "SeedGrade is an interdisciplinary solution bridging agricultural operations with edge-based AI. It aims to replace tedious manual inspections of agricultural seeds with automated visual analysis.",
      problem: "Traditional seed classification and quality grading rely on physical sampling under magnifying glasses or slow laboratory tests. This process introduces human subjectivity and slows down supply chains.",
      approach: "Using a mobile setup equipped with macro-lenses, we capture high-resolution seed spreads under consistent lighting. The visual input is evaluated by image processing and machine learning classifiers to determine physical compliance, damages, and foreign matter.",
      whatIBuilt: "Designed the OpenCV image preprocessing pipeline and custom web interface. Built algorithms to crop individual seed segments and classify them according to standard agricultural grading grids.",
      myContribution: "Created the frontend testing dashboard, wrote image segmenters, and structured validation scripts.",
      results: [
        "84.2% average classification agreement with standard manual lab grading tests.",
        "100% rejection rate for invalid non-seed inputs, preventing system classification noise.",
        "187 ms average edge processing latency per sample analysis.",
      ],
      techStack: ["Python", "OpenCV", "JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/satheesh1929",
      isFeatured: true,
      pipeline: ["Image Capture", "Preprocessing & Grayscale", "Contour Detection", "Bounding Segment Extraction", "AI Grading & Validation", "API Output / UI Render"],
      futureImprovements: [
        "Incorporate deep learning YOLO networks for highly occluded seed detection.",
        "Implement bluetooth scale sync for combined weight-volume density classification.",
      ],
      challenges: "Varying seed colors and glares from light sources created contour detection gaps. Solved by implementing adaptive thresholding and normalized color-masking pipelines.",
      lessonsLearned: "Agricultural domain parameters must be translated into pixel tolerances; field validation is essential to align mathematical algorithms with agricultural realities.",
    },
    {
      slug: "scode360",
      title: "SCODE360",
      category: "WEB DEVELOPMENT",
      shortDescription: "A production-grade agency website developed with a responsive modern layout.",
      description: "SCODE360 is a full-featured digital agency portal showing portfolio solutions, contact triggers, and animation paths built for commercial agency presentation.",
      problem: "Local digital service providers require highly polished, fast-loading portfolios to highlight service cataloging and generate customer conversions directly in the browser.",
      approach: "Created a scalable Next.js project with TypeScript to enforce page logic, styled it using custom utility classes in Tailwind, and added interactive animations via Framer Motion.",
      whatIBuilt: "Constructed the modular component structure, optimized image assets to WebP formats, and configured automated routing pipelines for production environments.",
      myContribution: "Wrote core layout configurations, implemented animated section transitions, and set up metadata structures for optimal search visibility.",
      results: [
        "Lighthouse score of 95+ on SEO and performance indices.",
        "Fully optimized touch interactions across mobile viewport configurations.",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/satheesh1929/scode360",
      isFeatured: true,
      futureImprovements: [
        "Integrate dynamic blog CMS functionality using a headless MDX wrapper.",
        "Integrate real-time consulting schedule bookings directly with Google Calendar.",
      ],
      challenges: "Heavy component layouts reduced initialization performance on lower-tier mobile hardware. Resolved by applying lazy loading to below-the-fold media elements.",
      lessonsLearned: "Static generation features in Next.js provide an enormous performance advantage over client-rendered pages for content-heavy sites.",
    },
    {
      slug: "drone-phenomics",
      title: "Drone Phenomics",
      category: "AI / COMPUTER VISION",
      shortDescription: "Precision crop & weed segmentation workflow using YOLOv11 and canopy analysis models.",
      description: "An automated computer vision script designed to processes high-resolution drone photography to extract canopy coverage and map crop vs. weed density in fields.",
      problem: "Traditional field monitoring requires walking row-by-row, which is labor-intensive and fails to scale. Immediate weed alerts are necessary to optimize pesticide usage.",
      approach: "Analyzed drone imaging data sets by annotating crop zones in Roboflow, training custom YOLOv11 models, and running inference scripts to calculate agricultural indices.",
      whatIBuilt: "Developed the image annotation workflows, configured Databricks pipelines for model execution, and wrote post-processing scripts to calculate canopy cover percentages.",
      myContribution: "Wrote python parser to convert YOLO output bounding boxes into vegetation density maps.",
      results: [
        "Identified crop rows and weed infestations from high-altitude views.",
        "Accurately extracted vegetation canopy coverage fractions for water-use estimation.",
      ],
      techStack: ["YOLOv11", "Roboflow", "Python", "Databricks", "Computer Vision"],
      isFeatured: true,
      pipeline: ["UAV Image Stitching", "Roboflow Data Augmentation", "YOLOv11 Object Localization", "Canopy Extraction", "Density Heatmapping"],
      futureImprovements: [
        "Incorporate multispectral image band processing (NDVI extraction).",
        "Deploy model on localized edge hardware for drone-mounted real-time spraying trigger signals.",
      ],
      challenges: "Varying sunlight shadows skewed early greenness index masks. Solved by transforming color bands to HSV space and applying adaptive threshold filters.",
      lessonsLearned: "Data labeling quality dominates model performance. Standardizing annotations is vital in variable outdoor fields.",
    },
    {
      slug: "wildlife-intrusion",
      title: "IoT Wildlife Intrusion System",
      category: "IOT",
      shortDescription: "Research prototype for detecting animal encroachment in crop zones using connected sensors.",
      description: "A hybrid IoT system utilizing environmental sensors, motion detectors, and localized warning alerts to guard farm perimeters from animal intrusions.",
      problem: "Crop damage caused by wild animals leads to massive economic losses for farmers and increases human-wildlife conflicts near forest edges.",
      approach: "Constructed sensor clusters using Arduino and ESP nodes. The hardware tracks intrusion parameters and streams data packets to a central receiver, triggering local sound/light deterring systems and remote alerts.",
      whatIBuilt: "Wrote micro-controller logic for sensor reading intervals, integrated threshold logic for warning signals, and built a data logging prototype.",
      myContribution: "Designed the hardware circuit diagram, wrote low-power sleep state intervals, and collaborated on paper documentation.",
      results: [
        "Drafted research paper accepted for presentation at the IMACSI-26 conference (Paper ID: IMACSI-253).",
        "Successfully simulated solar-powered operation cycles for 48 hours without grid supply.",
      ],
      techStack: ["Arduino IDE", "ESP8266/ESP32", "PIR Sensors", "Ultrasonic Transducers", "IoT Protocols"],
      isFeatured: true,
      pipeline: ["Sensor Trigger", "Local Microcontroller Processing", "Deterrent Activation (Sound/Light)", "Data Stream to Hub", "WhatsApp/SMS Alert Setup"],
      futureImprovements: [
        "Integrate ESP32-CAM to perform edge-based image classification to identify the exact intruder species.",
        "Implement a mesh network configuration (ESP-Mesh) to cover wide multi-acre farmland perimeters.",
      ],
      challenges: "High battery draw during active Wi-Fi data broadcasts drained power packs. Fixed by implementing deep sleep protocols, only waking the system during sensor interrupts.",
      lessonsLearned: "Physical enclosures require durable water protection for outdoor agricultural deployments; field packaging is as important as circuit design.",
    },
    {
      slug: "smart-irrigation",
      title: "Smart Irrigation & Fertilizer System",
      category: "IOT",
      shortDescription: "A smart environmental monitor recommending watering schedules based on soil moisture inputs.",
      description: "An embedded system prototype providing soil status monitoring and automatic water valve control based on crops' ambient needs.",
      problem: "Water scarcity demands micro-irrigation solutions that react to actual soil hydration levels rather than running on rigid time-based loops.",
      approach: "Used DHT11 sensors, soil hygrometers, and Arduino micro-controllers. Logged readings to local LCD panels and used relay switches to trigger micro-water pumps.",
      whatIBuilt: "Constructed the breadboard prototype, wrote watering threshold logic, and calibrated moisture sensors across sand, loam, and clay types.",
      myContribution: "Developed the sensor calibration algorithms and built the relay switching logic.",
      techStack: ["Arduino", "DHT11 Sensor", "Soil Moisture Sensor", "Relays", "Liquid Crystal Display (LCD)"],
      isFeatured: false,
      pipeline: ["Moisture Reading", "Threshold Comparator", "Relay Control Signal", "Watering/Fertigation recommendation display"],
    },
    {
      slug: "zap-apparels",
      title: "Zap Apparels",
      category: "WEB DEVELOPMENT",
      shortDescription: "Modern product presentation frontend optimized for sports clothing catalogs.",
      description: "An interactive, responsive product gallery showcasing custom athletic apparel designs with responsive filters and layout structures.",
      problem: "Sportswear catalogs need fast-loading, highly visible image grids with custom sizing tags to facilitate mobile product searches.",
      approach: "Built with standard semantic HTML structures, styled via Tailwind CSS modules, and optimized for smooth transitions during product filters.",
      whatIBuilt: "Designed the product showcase layout, implemented responsive filtering logic, and custom image galleries.",
      myContribution: "Created user interface components and verified layouts across diverse devices.",
      techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design"],
      isFeatured: false,
    },
    {
      slug: "mugavari-thazhai-site",
      title: "Mugavari Thazhai Portal",
      category: "WEB DEVELOPMENT",
      shortDescription: "Official brand portal for custom agricultural products with WhatsApp shopping triggers.",
      description: "A fast, static catalog showcasing direct agricultural products. Features an inline order generator that creates WhatsApp checkout messages.",
      problem: "Traditional complex checkout systems deter non-technical buyers. A simple visual display with a direct chat link maximizes local orders.",
      approach: "Constructed a highly lightweight, static portal structure. Focused on high-quality visuals, rapid load times on mobile connections, and custom pricing models.",
      whatIBuilt: "Developed the storefront catalog, pricing calculator, and the WhatsApp checkout link generator.",
      myContribution: "Lead developer managing deployment and performance profiling.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Github Pages"],
      liveUrl: "https://mugavarithazhai.in/",
      isFeatured: false,
    },
  ],
  publications: [
    {
      title: "IOT-FACILITATED PREDATOR ENCROACHMENT THROUGH OUTDOORS BY EMPLOYING DATA COLLECTION",
      paperId: "IMACSI-253",
      conference: "IMACSI-26 (International Conference on Intelligent Machine Learning & Connected Systems)",
      year: "2026",
      status: "Accepted for Presentation",
      authors: ["J. Akshaya", "S. Satheesh Kumar", "D. Hemalatha"],
      abstractPreview: "This research paper proposes a solar-powered, wireless sensor network designed for agricultural boundary defense. Utilizing localized sensor hubs, it captures intrusion metrics and triggers real-time sound deterrents and remote notifications, offering a cost-efficient method to protect farmlands from animal encroachment.",
    },
  ],
  certifications: [
    {
      name: "Internet of Things (IoT)",
      issuer: "NPTEL / Swayam (IIT)",
      year: "2025",
      category: "Engineering & Technology",
      description: "Elite certificate representing advanced competencies in IoT architectures, protocols, and micro-controllers.",
    },
    {
      name: "Basic Python",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Software & Programming",
      description: "Foundational programming certificate covering lists, dictionaries, OOP concepts, and script automation.",
    },
    {
      name: "Python Full Stack Developer Virtual Internship",
      issuer: "AICTE / EduSkills",
      year: "2023",
      category: "Software & Programming",
      description: "10-week intensive training program on frontend technologies and Python (Flask) backend databases.",
    },
    {
      name: "Drone Intelligent System Training",
      issuer: "IIT Delhi - IHFC (I-Hub Foundation for Cobotics)",
      year: "2023",
      category: "Engineering & Technology",
      description: "Hands-on certification covering UAV assemblies, sensor payloads, calibrations, and autopilot configurations.",
    },
    {
      name: "Product Design & Manufacturing",
      issuer: "NPTEL / Swayam",
      year: "2023",
      category: "Engineering & Technology",
      description: "Study of product engineering, CAD systems, material selection, and manufacturing protocols.",
    },
    {
      name: "Food Safety Supervisor (Basic Manufacturing)",
      issuer: "FOSTAC / FSSAI",
      year: "2023",
      category: "Professional Development",
      description: "Certified qualification in sanitary standards, safety protocols, and quality compliance frameworks.",
    },
    {
      name: "Prompt Engineering with Generative AI",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Software & Programming",
      description: "Techniques to construct precise instructions, optimize LLM responses, and leverage AI in code generation.",
    },
    {
      name: "Advanced Excel",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Professional Development",
      description: "Data analysis tools, lookup logic, dashboards, and automated macro sheets.",
    },
    {
      name: "Time Management",
      issuer: "Infosys Springboard",
      year: "2024",
      category: "Professional Development",
      description: "Workplace prioritization, goal setting structures, and efficient execution methods.",
    },
  ],
  achievements: [
    {
      title: "Drone Phenomics Hackathon Participant",
      context: "Tamil Nadu Agricultural University (TNAU) Roboflow",
      year: "2024",
      category: "Technical",
      description: "Developed canopy analytics and crop/weed classification scripts under 36 hours using YOLOv11.",
    },
    {
      title: "Robotics Workshop Attendee (KRIZEN '24)",
      context: "KIT Coimbatore",
      year: "2024",
      category: "Technical",
      description: "Participated in workshops regarding Trends and Challenges in Robotics and Automation.",
    },
    {
      title: "Survey Smarts / Event Competitor",
      context: "KIT Technical Symposiums",
      year: "2024",
      category: "Technical",
      description: "Competed in agricultural technical slide decks and general coding challenges.",
    },
    {
      title: "YUTIRA 2025 Second Prize",
      context: "Fireless Cooking Event",
      year: "2025",
      category: "General",
      description: "Won second place in culinary styling and preparation under pressure.",
    },
  ],
  education: {
    degree: "B.Tech Agricultural Engineering",
    institution: "KIT - Kalaignarkarunanidhi Institute of Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 - 2027",
    focus: "Bridging mechanical systems, IoT monitoring, and software tools to optimize smart agriculture and environmental fields.",
    courses: [
      "IoT & Smart Sensing Systems Systems",
      "Python Programming & Application Building",
      "Hydraulics & Fluid Machinery Systems",
      "Remote Sensing, GIS & QGIS Mapping Applications",
      "Farm Machinery Design & SolidWorks CAD Drafting",
    ],
  },
};
