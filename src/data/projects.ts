import AdidasImage from '../assets/images/Adidas.png';
import JobPortalImage from '../assets/images/JobPortal.png';
import SeekhoProductsImage from '../assets/images/SeekhoProducts.png';
import CerebryPrductImage from '../assets/images/CerebryProduct.png';
import SmartSpendingImage from '../assets/images/SmartSpendingProduct.png';
import WellaImage from '../assets/images/WellaProject.png';


export interface ProjectType {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
  role: string;
  duration?: string;
  tools: string[];
  challenges: string;
  solutions: string;
  impact: string;
  link?: string;
}

export const projects: ProjectType[] = [
  {
    id: 'wella-ecommerce-platform',
    title: 'Wella Professionals – E-commerce Promotions Platform',
    shortDescription: 'Led the digital transformation for Wella Professionals by defining system architecture and integrating Talon.One to automate personalized promotions, campaigns, and coupons across their e-commerce platform.',
    description: 'Spearheaded the digital transformation initiative for Wella Professionals, a leading beauty brand, by architecting and implementing a comprehensive e-commerce promotions platform. This project involved deep integration with Talon.One\'s promotion engine to deliver personalized marketing campaigns, dynamic pricing strategies, and automated coupon distribution across multiple touchpoints.',
    coverImage: WellaImage,
    tags: ['E-commerce', 'Digital Transformation', 'System Architecture', 'Marketing Automation', 'API Integration', 'Personalization'],
    role: 'Technical Product Lead',
    tools: ['Talon.One', 'REST APIs', 'Microservices', 'AWS', 'Java', 'SpringBoot', 'SQL', 'Redis', 'Kafka', 'Docker', 'Jenkins'],
    challenges: 'The main challenge was integrating complex promotion logic with existing e-commerce infrastructure while ensuring real-time personalization at scale. Wella needed to move from manual campaign management to automated, data-driven promotions that could adapt to customer behavior and market conditions dynamically.',
    solutions: 'Designed a robust microservices architecture that seamlessly integrated Talon.One\'s promotion engine with Wella\'s existing systems. Implemented real-time data pipelines to enable personalized promotions based on customer segments, purchase history, and behavioral patterns. Created automated workflows for campaign deployment and performance tracking.',
    impact: 'Successfully transformed Wella\'s promotional capabilities, resulting in 40% increase in campaign efficiency and 25% improvement in customer engagement rates. The platform now processes thousands of personalized promotions daily, significantly reducing manual effort while improving targeting accuracy.',
    images: []
  },
  {
    id: 'adidas-labelling',
    title: 'Adidas International Labelling App',
    shortDescription: 'Led development of a critical labelling system for Adidas\' international markets, improving efficiency by 40%.',
    description: 'I took full ownership of developing, maintaining, and managing Adidas\' International Labelling Application, an essential backbone for ensuring every product complies with labelling laws across global markets. From building the core system to overseeing ongoing updates, I made sure the platform stayed rock-solid, scalable, and user-friendly for a global team.',
    coverImage: AdidasImage,
    tags: ['Java', 'SpringBoot', 'Agile Product Development', 'Technical & Business Requirements Analysis', 'Feature Prioritization & Roadmapping'],
    role: 'Senior Systems Engineer',
    tools: ['Java', 'SpringBoot', 'AWS', 'Jenkins', 'SQL', 'Git', 'Microservices', 'Hibernate', 'JIRA', 'Confluence', 'Agile Scrum'],
    challenges: 'The toughest part was navigating the maze of ever-changing, country-specific labelling regulations while keeping the application fast and reliable. On top of that, I had to ensure updates rolled out smoothly without disrupting the tight production timelines Adidas operates on.',
    solutions: 'Built a flexible backend using Java and SpringBoot, supported by AWS to handle high traffic seamlessly. Gathered detailed international labelling requirements by working closely with compliance, legal, and QA teams, translating them into clear technical specifications. Prioritized features and bug fixes based on user feedback and business needs, continuously refining the product roadmap. Coordinated cross-team efforts to maintain steady releases and ensure smooth updates, enabling Adidas to stay compliant across 12+ markets with improved efficiency and fewer errors.',
    impact: 'Drove Agile adoption across cross-functional teams, increasing overall team efficiency by 40% and accelerating release cycles. Enabled Adidas to maintain regulatory compliance seamlessly across 12+ international markets, improving operational reliability and user satisfaction.',
    images: []
  },
  {
    id: 'smart-spending-dashboard',
    title: 'Smart Spending App',
    shortDescription: 'Designed and developed a comprehensive personal finance dashboard that transforms raw transactions into actionable insights.',
    description: 'The Smart Spending Application is a personal finance dashboard designed to empower users with real-time insights into their spending behavior. Built using Java, Spring Boot, SQL for the backend and Angular, HTML, CSS, Bootstrap for the frontend, the application offers an intuitive, visual snapshot of monthly expenses, categorized intelligently for actionable financial decisions.',
    coverImage: SmartSpendingImage,
    tags: ['FinTech', 'Full-Stack Development', 'Product Strategy', 'UX Design', 'Agile Development', 'MVP Definition'],
    role: 'Full-Stack Developer with Product Ownership',
    tools: ['Java', 'Angular', 'Spring Boot', 'SQL', 'JIRA', 'Git', 'HTML', 'CSS', 'JavaScript'],
    challenges: 'Despite the growing need for financial awareness, many users struggle to track their spending across categories, leading to budget leaks and poor financial planning. The challenge was to build an end-to-end solution that not only processes raw transactional data but presents it in a way that's engaging, insightful, and immediately useful, all while maintaining backend robustness and frontend clarity.',
    solutions: 'To address this, I architected and built a full-stack smart dashboard that brought financial data to life. The core experience revolves around two main components: a dynamic monthly overview that uses charts to illustrate categorized spending trends, and a real-time recent transactions feed that surfaces expense details with contextual clarity. I developed APIs to fetch and update transaction data seamlessly, ensuring that the dashboard always reflected the user's current financial state. The UI was crafted to be clean, responsive, and informative, enabling users to go from confusion to clarity in seconds.',
    impact: 'The application did more than track expenses, it transformed financial awareness. By integrating real-time transaction tracking with visual analytics, it improved users' financial transparency by 40%. The smart dashboard empowered users to decode their spending patterns at a glance, enabling smarter, faster decisions around budgeting and saving. This project not only showcased my ability to lead full-stack development but also demonstrated how thoughtful product design can deliver real, measurable value to users.',
  },
  {
    id: 'ats-portal',
    title: 'Advanced ATS Job Portal',
    shortDescription: 'Designed a smart job portal integrated with an ATS to simplify recruitment for both job seekers and recruiters. Enabled skill-based matching, automated application tracking, and streamlined hiring workflows.',
    description: 'As the product manager, I drove the vision and execution of an advanced ATS-integrated job portal designed to transform hiring—simplifying how recruiters find the best talent and how candidates navigate the job search. My role spanned from deep market research to defining the product roadmap, prioritizing features, and aligning cross-functional teams.',
    coverImage: JobPortalImage,
    tags: ['Product Management', 'Product Roadmapping', 'UX Design', 'MVP Scoping', 'Problem Solving'],
    role: 'Associate Product Manager',
    tools: ['JIRA', 'Confluence', 'Trello', 'Slack', 'Figma', 'User Story Mapping', 'Agile Scrum', 'Roadmapping', 'Backlog Prioritization', 'Stakeholder Management', 'Cross-Functional Team Coordination'],
    challenges: 'Aligning diverse stakeholder requirements, from recruiters needing efficient candidate filtering to job seekers seeking intuitive application experiences. Managing scope and priorities without formal product launch resources.',
    solutions: 'Defined the product vision and roadmap based on stakeholder interviews and market research. Created detailed user stories and prioritized features to balance complexity and user impact. Worked closely with design and development teams to translate requirements into functional prototypes and managed sprints to ensure timely progress. Facilitated regular feedback sessions to iterate on usability and feature set.',
    impact: 'Although the product was not launched, the project sharpened my product management skills in stakeholder engagement, backlog prioritization, and cross-team coordination. Delivered a detailed product strategy and prototype that laid strong groundwork for future development and potential market fit.',
    images: []
  },
  {
    id: 'educational-platform',
    title: 'Personalized Education Solutions',
    shortDescription: 'Led the development of a suite of edtech products focused on upskilling and career readiness. Translated ideas into MVPs by aligning user needs with agile execution and cross-functional collaboration.',
    description: 'At Seekho 360, I was brought in during a high-stakes phase where the vision was big, but execution hadn\'t taken off yet. The team aimed to launch three flagship products—Unishala, PowerSchoolz, and the Seekho 360 aggregator app. Each product had a clear audience and strong potential: Unishala was built as a deeply informative blog platform for engineering aspirants and government exam students; PowerSchoolz was envisioned as an intuitive course delivery platform with a strong focus on learner engagement; and the Seekho 360 app aimed to be an all-in-one aggregator for courses ranging from UPSC prep to study abroad programs. My role was to take these early-stage ideas and turn them into actionable, structured, and scalable project blueprints.',
    coverImage: SeekhoProductsImage,
    tags: ['Project Management', 'Product Strategy', 'MVP Definition', 'EdTech', 'Execution Planning', 'Cross-functional Alignment'],
    role: 'Project Manager',
    tools: ['Slack', 'Google Docs', 'Google Sheets', 'Asana', 'Figma', 'Microsoft Excel', 'Notion', 'Canva'],
    challenges: 'The biggest challenge was navigating complete ambiguity. Nothing existed in concrete form, no timelines, no prioritization, and minimal product documentation. With multiple teams moving independently and a lack of centralized visibility, the risk of misalignment and rework was high. On top of that, each product had its own unique vision, making it critical to balance ambition with practical timelines and MVP goals.',
    solutions: 'To bring order to the chaos, I began by establishing clarity across all moving parts. I worked closely with content teams, developers, and founders to define product goals and lock down MVP requirements. I built wireframe references and user journeys in Figma and helped the design team visualize key flows. I created living documentation and single sources of truth in Notion and Google Docs, ensuring everyone—from founders to interns—was on the same page. Weekly sync-ups replaced scattered updates, and I drove structured sprint planning sessions to keep delivery on track. Slowly, we moved from 'ideas in the air' to detailed, trackable product pipelines.',
    impact: 'While the products didn\'t make it to launch, my work laid down the backbone for future execution. I transformed high-level ideas into structured execution frameworks that were ready for handoff to development teams. By bringing in process, visibility, and clarity, I helped the team move from vision to velocity. These foundational systems and roadmaps ensured the company was finally in a position to ship, not just dream.',
    images: []
  },
  {
    id: 'ai-learning',
    title: 'AI-Based Math Learning Platform',
    shortDescription: 'Led project execution for an adaptive math platform that personalizes practice paths using AI. Ensured on-time delivery and alignment with learning outcomes across multiple school deployments.',
    description: 'During my time at Cerebry, I worked at the intersection of education and artificial intelligence, managing a platform designed to deliver adaptive math practice to learners across various geographies. As an Assistant Project Manager Intern, I played a key role in streamlining product delivery and ensuring that the AI-powered system could deliver dynamic, personalized content efficiently and accurately. My role involved coordinating across tech, AI, and academic teams, and transforming a fast-moving startup environment into a well-oiled product delivery machine.',
    coverImage: CerebryPrductImage,
    tags: ['EdTech', 'AI in Education', 'Personalized Learning', 'Agile Project Management', 'Product Operations', 'Cross-Team Collaboration'],
    role: 'Associate PM Intern',
    duration: '4 months',
    tools: ['Notion', 'Slack', 'Confluence', 'Google Sheets', 'Trello', 'Zoom', 'Google Drive'],
    challenges: 'Cerebry was rapidly growing, but operational chaos threatened to stall progress. The core challenge lay in bridging the disconnect between the academic content creators and the AI engineers powering the platform. Without clear workflows, priorities shifted constantly, leading to missed deadlines and duplicated efforts. Critical content frequently bypassed quality checks, causing errors to reach students and undermining trust in the product. The lack of visibility into project status meant problems were identified too late, often resulting in rushed fixes and frustrated teams.',
    solutions: 'To overcome these challenges, I introduced a clear, scalable process that brought structure and predictability to the product delivery cycle. I established defined ownership for every task and created transparent workflows that connected academic content teams with AI engineers seamlessly. By designing a real-time progress tracking system, I gave stakeholders immediate visibility into project status and potential roadblocks, enabling faster decision-making and course correction. I also facilitated regular cross-functional syncs that broke down silos and aligned priorities across teams. These changes transformed the team\'s approach from reactive to proactive, accelerating delivery timelines while improving collaboration and focus.',
    impact: 'These initiatives resulted in a 30% reduction in sprint turnaround time, allowing the team to ship features and content faster and more predictably. The improved efficiency in content delivery empowered the AI engine to serve 25% more personalized questions each week, significantly enhancing the learner experience. Communication overheads were slashed, blockers were addressed faster, and the platform saw measurable improvements in output quality and delivery speed. My contributions not only optimized internal operations but directly impacted the learning outcomes of thousands of students using the Cerebry platform.',
    images: []
  }
];