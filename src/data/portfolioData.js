import profileImg from '../assets/profile.jpg';

export const personalDetails = {
  name: "Mohd Sajid",
  title: "Java Backend Developer | Full Stack Enthusiast | AI-Augmented Development",
  tagline: "Building Spring Boot Backend REST APIs, Layered Architecture & AI-Augmented Workflows",
  location: "Shahberi, Ghaziabad, UP",
  email: "mohdsajid9600@gmail.com",
  phone: "+91-7500941959",
  github: "https://github.com/mohdsajid9600",
  linkedin: "https://www.linkedin.com/in/mohdsajid9600",
  leetcode: "https://leetcode.com/u/mohdsajid9600/",
  profileImage: profileImg,
  resumeUrl: "/resume.pdf",
  aboutSummary: `Java Backend Developer with a strong foundation in Core Java, Spring Boot, Spring Security, RESTful API design, and JPA/Hibernate, built through hands-on projects covering secure authentication, layered architecture, and production deployment. 

A fast, self-driven learner who actively leverages modern AI-assisted development tools (GitHub Copilot, ChatGPT, prompt engineering) to accelerate coding, debugging, and documentation — reflecting comfort working alongside AI-native workflows that today's engineering teams increasingly rely on. 

Solved 400+ DSA problems on AccioJob & LeetCode, demonstrating solid problem-solving and algorithmic thinking. Genuinely curious about new technologies, quick to pick up new tools, frameworks, and codebases, and enjoys collaborating with new people and teams. Looking to start a career as a Java Backend Developer and grow into a well-rounded, AI-fluent full-stack engineer.`,
  careerObjective: "Looking to start a career as a Java Backend Developer and grow into a well-rounded, AI-fluent full-stack engineer.",
  heroStats: [
    { label: "DSA Problems Solved", value: 400, suffix: "+" },
    { label: "Featured Projects", value: 3, suffix: "+" },
    { label: "Remote Internship", value: 1, suffix: "" },
    { label: "MCA Grade", value: 72.1, suffix: "%" }
  ]
};

export const techCategories = [
  {
    id: "java",
    name: "Java Ecosystem",
    icon: "FaJava",
    skills: [
      { name: "Core Java (JDK 8-17)", level: 95, icon: "FaJava", highlight: "Core Java, Collections Framework, JDK 8-17" },
      { name: "Spring Boot", level: 92, icon: "SiSpringboot", highlight: "REST API Design, Layered Architecture" },
      { name: "Spring Security", level: 88, icon: "SiSpringsecurity", highlight: "Role-based authorization, Principal /me APIs" },
      { name: "Spring Data JPA & Hibernate ORM", level: 90, icon: "SiHibernate", highlight: "JPA-based persistence, Entity Mapping" },
      { name: "Spring MVC", level: 90, icon: "SiSpring", highlight: "DispatcherServlet, Controller-Service-Repository" }
    ]
  },
  {
    id: "backend",
    name: "API & Backend Practices",
    icon: "FaServer",
    skills: [
      { name: "RESTful API Design", level: 95, icon: "FaServer", highlight: "Layered Controller-Service-Repository architecture" },
      { name: "Security & Auth (RBAC)", level: 90, icon: "FaLock", highlight: "Session-based Auth, Role-based authorization" },
      { name: "Global Exception Handling", level: 92, icon: "FaServer", highlight: "Input validation & Global Exception Handling" },
      { name: "Pagination & Filtering", level: 88, icon: "FaServer", highlight: "Pagination & filtering for scalable data access" }
    ]
  },
  {
    id: "ai",
    name: "AI-Augmented Development",
    icon: "FaBrain",
    skills: [
      { name: "GitHub Copilot", level: 95, icon: "SiGithubcopilot", highlight: "Code generation, Debugging & Documentation" },
      { name: "ChatGPT & Prompt Engineering", level: 95, icon: "SiOpenai", highlight: "Prompt engineering for backend & frontend generation" },
      { name: "AI Tool Adoption", level: 90, icon: "FaBrain", highlight: "Quick adoption of AI developer tooling & workflows" }
    ]
  },
  {
    id: "database",
    name: "Database Systems",
    icon: "FaDatabase",
    skills: [
      { name: "MySQL", level: 90, icon: "SiMysql", highlight: "Schema design, Query optimization, CRUD operations" },
      { name: "SQL", level: 88, icon: "FaDatabase", highlight: "Relational queries & JPA-based persistence" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Web",
    icon: "FaCode",
    skills: [
      { name: "React JS", level: 85, icon: "FaReact", highlight: "AI-assisted frontend generation & integration" },
      { name: "JavaScript (ES6+)", level: 88, icon: "SiJavascript", highlight: "Web frontend logic & asynchronous calls" },
      { name: "HTML5 & CSS3", level: 90, icon: "FaCode", highlight: "Semantic layout, CSS3, JSP & JSTL" }
    ]
  },
  {
    id: "tools",
    name: "Tools, Platforms & Deployment",
    icon: "FaTools",
    skills: [
      { name: "Git & GitHub", level: 92, icon: "FaGithub", highlight: "Version control & repository management" },
      { name: "Postman & Maven", level: 90, icon: "SiPostman", highlight: "API testing, Dependency management with Maven" },
      { name: "IntelliJ IDEA & Swagger UI", level: 95, icon: "SiIntellijidea", highlight: "IDE development & API documentation" },
      { name: "Apache Tomcat", level: 85, icon: "SiApachetomcat", highlight: "Servlet container deployment" },
      { name: "Render & Vercel", level: 90, icon: "SiVercel", highlight: "Render (Backend), Vercel (Frontend)" }
    ]
  }
];

export const experiences = [
  {
    id: "nativesofttech",
    company: "NativeSoftTech",
    role: "Java Backend Developer Intern",
    location: "Remote",
    period: "April 2025 – May 2025",
    type: "Internship",
    description: "Completed a one-month remote internship applying Core Java and OOP concepts to real backend development tasks.",
    highlights: [
      "Completed a one-month remote internship applying Core Java and OOP concepts to real backend development tasks.",
      "Collaborated remotely with a new team, quickly ramping up on unfamiliar codebases and delivering assigned tasks within set timelines.",
      "Worked on MySQL schema design and query optimization, improving database response time and application performance.",
      "Gained hands-on exposure to debugging, problem-solving, and the full software development lifecycle."
    ],
    tech: ["Core Java", "OOP Concepts", "MySQL", "Query Optimization", "Git", "Backend Debugging"]
  }
];

export const projects = [
  {
    id: "easytrip",
    title: "EasyTrip - Cab Booking Backend Application",
    subtitle: "Spring Boot cab booking REST API with role-based authorization & email notifications",
    category: "Full Stack / Backend",
    featured: true,
    badge: "Render + Vercel",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/mohdsajid9600",
    liveDemo: "https://easytrip-demo.vercel.app",
    description: "Designed and deployed a full-featured cab booking REST API with complete CRUD operations, session-based authentication, and role-based authorization for Customer, Driver, and Admin roles.",
    keyFeatures: [
      "End-to-End Ownership: Designed and deployed a full-featured cab booking REST API with complete CRUD operations, session-based authentication, and role-based authorization for Customer, Driver, and Admin roles.",
      "Security & Robustness: Implemented ownership-based access control, Principal-based '/me' APIs, global exception handling, request validation, and pagination & filtering for scalable data access.",
      "Core Booking Lifecycle: Built cab registration, booking creation, enum-based status tracking, and automated email notifications end to end.",
      "AI-Augmented Workflow: Used AI coding assistants to speed up boilerplate generation, debugging, and API documentation, and integrated the Spring Boot backend with an AI-generated frontend.",
      "Clean Architecture & Delivery: Followed layered architecture best practices and independently deployed the backend on Render and frontend on Vercel."
    ],
    techStack: ["Spring Boot", "Spring Security", "REST API", "JPA/Hibernate", "MySQL", "Render", "Vercel"]
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    subtitle: "Role-based web application for Patient, Doctor, and Admin appointment scheduling",
    category: "Java Enterprise",
    featured: true,
    badge: "Apache Tomcat",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/mohdsajid9600",
    liveDemo: "#",
    description: "Built a role-based web application with Patient, Doctor, and Admin modules for appointment scheduling, following the MVC pattern with a JSP + Bootstrap UI, deployed on Apache Tomcat.",
    keyFeatures: [
      "Role-Based Access: Dedicated modules for Patient, Doctor, and Admin roles.",
      "Appointment Scheduling: Streamlined appointment booking and management.",
      "MVC Architecture: Followed Model-View-Controller pattern with JSP + Bootstrap UI.",
      "Deployed Server: Deployed and tested on Apache Tomcat web server."
    ],
    techStack: ["Java Servlets", "JDBC", "MySQL", "JSP", "MVC", "Apache Tomcat", "Bootstrap"]
  },
  {
    id: "product-management",
    title: "Product Management System - CRUD Web App",
    subtitle: "Full CRUD product management application demonstrating clean MVC architecture & ORM persistence",
    category: "Java Enterprise",
    featured: false,
    badge: "Spring MVC",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/mohdsajid9600",
    liveDemo: "#",
    description: "Developed a full CRUD product management application using Spring MVC, JPA, and MySQL with a JSTL-based JSP UI, demonstrating clean MVC architecture and ORM-based data persistence.",
    keyFeatures: [
      "Full CRUD Operations: Complete product catalog creation, retrieval, updating, and deletion.",
      "Spring ORM & JPA: ORM-based data persistence with MySQL database.",
      "JSTL-based UI: Dynamic server-rendered UI using JSP and JSTL tag libraries."
    ],
    techStack: ["Spring MVC", "Spring ORM", "JPA", "MySQL", "JSP", "JSTL"]
  }
];

export const certifications = [
  {
    id: "acciojob-java",
    title: "Java Full Stack Development",
    issuer: "AccioJob",
    date: "Pursuing (Expected Completion: August 2026)",
    status: "In Progress",
    credentialId: "AccioJob Full Stack",
    description: "Comprehensive training in Core Java, Data Structures & Algorithms, Spring Boot, RESTful APIs, and full stack web development.",
    skillsCovered: ["Core Java", "Spring Boot", "REST APIs", "DSA", "SQL"],
    link: "https://acciojob.com/"
  },
  {
    id: "letsupgrade-bootcamps",
    title: "Java Bootcamp, JavaScript Bootcamp, HTML & CSS",
    issuer: "Let's Upgrade",
    date: "Completed",
    status: "Verified",
    credentialId: "Let's Upgrade Certification",
    description: "Bootcamp certifications covering Java fundamentals, modern JavaScript, and HTML5/CSS3 web development.",
    skillsCovered: ["Java Core", "JavaScript", "HTML5", "CSS3"],
    link: "https://letsupgrade.in/"
  },
  {
    id: "scaler-simplilearn",
    title: "Spring Boot | Git & Java Hibernate",
    issuer: "Scaler Academy | Simplilearn",
    date: "Completed",
    status: "Verified",
    credentialId: "Scaler & Simplilearn Certification",
    description: "Specialized certifications in Spring Boot development, Git version control, and Java Hibernate ORM persistence.",
    skillsCovered: ["Spring Boot", "Git", "Hibernate ORM", "JPA"],
    link: "https://www.scaler.com/"
  }
];

export const achievements = [
  {
    id: "leetcode-400",
    title: "400+ DSA Problems Solved",
    platform: "LeetCode / AccioJob",
    icon: "FaTrophy",
    metric: "400+",
    description: "Solved 400+ Data Structures & Algorithms problems on LeetCode and AccioJob platform, demonstrating solid problem-solving and algorithmic thinking."
  },
  {
    id: "ai-augmented",
    title: "AI-Augmented Development Workflows",
    platform: "GitHub Copilot & ChatGPT",
    icon: "FaRobot",
    metric: "AI Native",
    description: "Actively leverages GitHub Copilot and ChatGPT for code generation, debugging, and API documentation to accelerate modern engineering workflows."
  },
  {
    id: "mca-degree",
    title: "Master of Computer Applications (72.1%)",
    platform: "AKTU, Lucknow (2024 – 2026)",
    icon: "FaGraduationCap",
    metric: "MCA",
    description: "Postgraduate CS degree focusing on Advanced Data Structures, Software Engineering, Database Management, and Java Full Stack Development."
  }
];

export const educationList = [
  {
    id: "mca",
    degree: "MCA - Master of Computer Applications",
    institution: "AKTU, Lucknow",
    period: "2024 – 2026",
    grade: "72.1% Marks",
    details: "Strong foundation in software development, data structures & algorithms, database management, computer networks, and scalable application development."
  },
  {
    id: "btech",
    degree: "B.Tech - Civil Engineering",
    institution: "AKTU, Lucknow",
    period: "2017 – 2021",
    grade: "83% Marks",
    details: "Strong analytical and structural thinking foundation; completed industrial training in Road Pavement Design."
  }
];

export const services = [
  {
    id: "backend-dev",
    title: "Java Backend & RESTful API Design",
    icon: "FaServer",
    description: "Designing and building secure RESTful APIs using Core Java, Spring Boot, Spring Security (RBAC), and JPA/Hibernate with clean Controller-Service-Repository architecture.",
    features: [
      "RESTful API Design & CRUD Operations",
      "Spring Security & Role-Based Authorization",
      "Global Exception Handling & Input Validation",
      "Pagination & Filtering for Scalable Access"
    ]
  },
  {
    id: "database-design",
    title: "MySQL Schema Design & Query Optimization",
    icon: "FaDatabase",
    description: "Creating relational database schemas in MySQL, optimizing queries for improved application performance, and managing JPA-based data persistence.",
    features: [
      "MySQL Schema Design & CRUD Operations",
      "Query Optimization & Latency Improvement",
      "JPA & Hibernate Entity Mapping",
      "ORM Data Persistence"
    ]
  },
  {
    id: "ai-augmented",
    title: "AI-Augmented Development & Tooling",
    icon: "FaBrain",
    description: "Leveraging modern AI assistants (GitHub Copilot, ChatGPT, prompt engineering) to accelerate code generation, debugging, documentation, and frontend-backend integration.",
    features: [
      "AI-Assisted Code Generation & Boilerplate",
      "Prompt Engineering for Debugging & Docs",
      "AI Frontend Generation & Integration",
      "Exploring Spring AI & LLM Patterns"
    ]
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Development",
    icon: "FaLaptopCode",
    description: "Developing end-to-end web applications with Java/Spring backends, MySQL databases, and JSP or React user interfaces deployed on Render and Vercel.",
    features: [
      "Spring Boot & React JS Integration",
      "Java Servlets, JDBC, JSP & MVC Pattern",
      "Deployment on Render (Backend) & Vercel (Frontend)",
      "Apache Tomcat Deployment"
    ]
  }
];

export const codeSnippets = {
  javaController: `// EasyTrip Cab Booking - Role-Based REST Controller (Spring Boot)
@RestController
@RequestMapping("/api/v1/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/request")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<BookingResponseDto> createBooking(
            @Valid @RequestBody BookingRequestDto request,
            Principal principal) {
        BookingResponseDto response = bookingService.requestCab(request, principal.getName());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/me")
    public ResponseEntity<Page<BookingResponseDto>> getMyBookings(
            @PageableDefault(size = 10, sort = "createdDate", direction = Sort.Direction.DESC) Pageable pageable,
            Principal principal) {
        return ResponseEntity.ok(bookingService.getPassengerHistory(principal.getName(), pageable));
    }
}`,
  aiPromptWorkflow: `// AI-Augmented Workflow - Copilot & Prompt Engineering
/**
 * Prompt: Generate a Spring Boot @ControllerAdvice global exception handler
 * for ResourceNotFoundException and role-based authorization validation.
 */
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDetails> handleResourceNotFound(ResourceNotFoundException ex) {
        ErrorDetails error = new ErrorDetails(new Date(), ex.getMessage(), "404 NOT_FOUND");
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}`
};

export const testimonials = [
  {
    id: "1",
    name: "NativeSoftTech Internship Review",
    role: "Remote Internship Focus",
    company: "NativeSoftTech",
    quote: "Applied Core Java and OOP concepts to real backend development tasks, collaborating remotely to optimize MySQL schema design and improve database response time.",
    avatar: profileImg
  },
  {
    id: "2",
    name: "AccioJob & LeetCode Milestone",
    role: "Problem Solving Highlights",
    company: "AccioJob & LeetCode",
    quote: "Solved 400+ DSA problems demonstrating strong algorithmic thinking, core data structures, and solid coding fundamentals.",
    avatar: profileImg
  }
];
