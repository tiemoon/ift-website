import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Bot,
  ShieldCheck,
  Database,
  Brain,
  Cpu,
  Cloud,
  TrendingUp,
  Code2,
  Clock,
  Users,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

// ── IFT Brand Mark ─────────────────────────────────────────────────────────────
// Diamond shape with a horizontal line — the "frontier" / horizon symbolism.
function IFTLogo({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IFT"
    >
      <path d="M20 2L38 20L20 38L2 20Z" stroke="currentColor" strokeWidth="2.5" />
      <line x1="7.5" y1="20" x2="32.5" y2="20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// ── Course data ─────────────────────────────────────────────────────────────────
const courses = [
  {
    id: "agentic-ai",
    icon: Bot,
    title: "Agentic AI Software Development",
    short: "Build autonomous AI agents that plan, reason, and act using modern LLM frameworks and orchestration tools.",
    duration: "40 Hours",
    level: "Intermediate – Advanced",
    format: "Online / In-person",
    description:
      "Learn to design and build AI agents that can autonomously execute complex tasks using tool use, memory, and multi-agent coordination. This course takes you from the fundamentals of agent architecture to deploying production-ready agentic systems.",
    modules: [
      { title: "Agent Foundations", hours: "8h", desc: "LLM reasoning patterns, agent loops, ReAct framework, and prompt engineering for agents." },
      { title: "Tool Use & Function Calling", hours: "10h", desc: "Connecting agents to APIs, databases, browsers, and custom tools with structured outputs." },
      { title: "Memory & Context Management", hours: "8h", desc: "Short-term vs long-term memory, vector stores, and RAG integration for agent workflows." },
      { title: "Multi-Agent Systems", hours: "8h", desc: "Orchestrator-subagent patterns, agent communication, and parallelization strategies." },
      { title: "Production Deployment", hours: "6h", desc: "Monitoring, evaluation, guardrails, and deploying agents to production environments." },
    ],
    outcomes: [
      "Design autonomous agents using modern LLM frameworks",
      "Connect agents to real-world tools and APIs",
      "Build multi-agent workflows for complex tasks",
      "Evaluate and monitor agentic systems in production",
    ],
    who: "Developers with Python knowledge who want to build the next generation of AI-powered applications.",
    capstone: "Build an agentic research assistant that autonomously gathers, analyzes, and synthesizes information from multiple sources.",
  },
  {
    id: "ai-native",
    icon: Code2,
    title: "AI-Native Software Development",
    short: "Design and build full-stack applications with AI embedded at every layer of the stack.",
    duration: "48 Hours",
    level: "Intermediate",
    format: "Online / In-person",
    description:
      "Move beyond adding AI as a feature — learn to architect software where AI is the foundation. This course covers LLM integration, retrieval-augmented generation, AI-powered APIs, and building products users love.",
    modules: [
      { title: "AI Product Design", hours: "8h", desc: "UX for AI apps, designing for uncertainty, and product thinking for LLM-powered products." },
      { title: "LLM Integration Patterns", hours: "10h", desc: "API integration, streaming responses, prompt management, and cost optimization." },
      { title: "RAG Systems", hours: "10h", desc: "Embeddings, vector databases, chunking strategies, and knowledge-grounded applications." },
      { title: "Full-Stack AI Apps", hours: "12h", desc: "End-to-end AI applications with React, Node.js, and Python backends." },
      { title: "Deployment & Scaling", hours: "8h", desc: "CI/CD for AI apps, performance optimization, monitoring, and cost management at scale." },
    ],
    outcomes: [
      "Build full-stack applications powered by LLMs",
      "Implement RAG systems for knowledge-grounded AI",
      "Design AI-first user experiences",
      "Deploy and scale AI applications in production",
    ],
    who: "Full-stack developers and product engineers who want to build AI-powered products from the ground up.",
    capstone: "Build a production-ready AI SaaS application with user authentication, knowledge base integration, and streaming responses.",
  },
  {
    id: "cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security",
    short: "Comprehensive training on securing digital systems, threat detection, ethical hacking, and incident response.",
    duration: "36 Hours",
    level: "Beginner – Intermediate",
    format: "Online / In-person",
    description:
      "Build the skills to protect systems, detect threats, and respond to security incidents. This course covers both offensive and defensive security with real-world labs and hands-on exercises.",
    modules: [
      { title: "Security Fundamentals", hours: "6h", desc: "CIA triad, threat landscape, common attack vectors, and security principles." },
      { title: "Network Security", hours: "8h", desc: "Firewalls, VPNs, intrusion detection, packet analysis, and network hardening." },
      { title: "Ethical Hacking & Penetration Testing", hours: "10h", desc: "Vulnerability scanning, exploitation techniques, and responsible disclosure." },
      { title: "Application Security", hours: "6h", desc: "OWASP Top 10, secure coding practices, and web application security testing." },
      { title: "Incident Response", hours: "6h", desc: "Detection, containment, forensics, and post-incident reporting." },
    ],
    outcomes: [
      "Identify and mitigate common security vulnerabilities",
      "Conduct ethical penetration tests on systems",
      "Implement network and application security controls",
      "Respond effectively to security incidents",
    ],
    who: "IT professionals, developers, and aspiring security engineers building a solid cybersecurity foundation.",
    capstone: "Complete a full security assessment of a simulated corporate environment, including a vulnerability report and remediation plan.",
  },
  {
    id: "data-engineering",
    icon: Database,
    title: "Data Engineering",
    short: "Master modern data pipelines, ETL processes, cloud warehousing, and real-time data architectures.",
    duration: "44 Hours",
    level: "Intermediate",
    format: "Online / In-person",
    description:
      "Learn to design and build robust data infrastructure that powers analytics, AI, and business intelligence. From ingestion to transformation to serving, this course covers the full modern data stack.",
    modules: [
      { title: "Data Pipeline Fundamentals", hours: "8h", desc: "ETL vs ELT, batch vs streaming, data formats, and pipeline orchestration with Airflow." },
      { title: "SQL & Data Modeling", hours: "8h", desc: "Advanced SQL, dimensional modeling, data vault, and schema design for analytics." },
      { title: "Apache Spark & Big Data", hours: "10h", desc: "Distributed processing, PySpark, DataFrames, and handling large-scale datasets." },
      { title: "Cloud Data Platforms", hours: "10h", desc: "Snowflake, BigQuery, and Redshift for cloud-native data warehousing." },
      { title: "Real-Time Data & Streaming", hours: "8h", desc: "Kafka, event-driven architectures, and building real-time data pipelines." },
    ],
    outcomes: [
      "Build scalable data pipelines for batch and streaming data",
      "Design efficient data models for analytics use cases",
      "Work with cloud data platforms and modern data stacks",
      "Process large datasets with distributed computing frameworks",
    ],
    who: "Software engineers and analysts looking to specialize in data infrastructure and become professional data engineers.",
    capstone: "Design and build an end-to-end data pipeline from raw source data to analytics-ready data marts in the cloud.",
  },
  {
    id: "machine-learning",
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    short: "From ML fundamentals to neural networks, computer vision, NLP, and production model deployment.",
    duration: "52 Hours",
    level: "Beginner – Advanced",
    format: "Online / In-person",
    description:
      "A comprehensive journey through machine learning and deep learning, grounded in practical implementation. Learn to build, train, evaluate, and deploy models that solve real-world problems.",
    modules: [
      { title: "ML Fundamentals", hours: "10h", desc: "Supervised and unsupervised learning, model evaluation, feature engineering, and Scikit-learn." },
      { title: "Deep Learning", hours: "12h", desc: "Neural networks, backpropagation, PyTorch/TensorFlow, and training deep models." },
      { title: "Computer Vision", hours: "10h", desc: "CNNs, image classification, object detection, and vision transformer models." },
      { title: "Natural Language Processing", hours: "10h", desc: "Text classification, transformers, BERT, and fine-tuning pre-trained models." },
      { title: "MLOps & Deployment", hours: "10h", desc: "Model packaging, REST APIs for ML, model monitoring, and continuous training pipelines." },
    ],
    outcomes: [
      "Build and train machine learning and deep learning models",
      "Apply ML to computer vision and NLP problems",
      "Deploy models as production APIs and services",
      "Set up monitoring and retraining pipelines",
    ],
    who: "Developers, analysts, and students building practical ML expertise from foundations to production deployment.",
    capstone: "Build and deploy a complete ML system — from data collection to a live prediction API with a monitoring dashboard.",
  },
  {
    id: "iot-embedded",
    icon: Cpu,
    title: "IoT & Embedded Systems",
    short: "Design and build connected devices, sensor networks, and intelligent cyber-physical systems.",
    duration: "32 Hours",
    level: "Beginner – Intermediate",
    format: "Online / In-person",
    description:
      "Learn the foundations of Internet of Things development, from embedded programming and hardware interfacing to cloud connectivity and edge AI. Build real smart devices from day one.",
    modules: [
      { title: "Embedded Systems Foundations", hours: "6h", desc: "Microcontrollers, GPIO, sensors, actuators, and embedded C/MicroPython programming." },
      { title: "IoT Protocols & Connectivity", hours: "8h", desc: "MQTT, HTTP, BLE, LoRa, and designing reliable IoT communication architectures." },
      { title: "Cloud & Edge Integration", hours: "8h", desc: "Connecting devices to AWS IoT / Azure IoT Hub, data ingestion, and edge processing." },
      { title: "Edge AI & TinyML", hours: "6h", desc: "Deploying ML models on microcontrollers, TensorFlow Lite, and on-device inference." },
      { title: "Industry 4.0 Applications", hours: "4h", desc: "Smart manufacturing, predictive maintenance, and industrial IoT case studies." },
    ],
    outcomes: [
      "Program microcontrollers and interface with sensors and actuators",
      "Design and implement IoT communication protocols",
      "Connect devices to cloud IoT platforms",
      "Deploy AI models at the edge on constrained devices",
    ],
    who: "Engineers, students, and makers interested in building the physical layer of the connected world.",
    capstone: "Build a complete smart monitoring system with sensor nodes, a cloud dashboard, and anomaly detection using edge AI.",
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    short: "Design scalable cloud-native systems, automate infrastructure, and build modern CI/CD pipelines.",
    duration: "40 Hours",
    level: "Intermediate",
    format: "Online / In-person",
    description:
      "Learn to architect, deploy, and operate cloud-native applications at scale. This course covers the full DevOps lifecycle — from infrastructure as code to observability — on major cloud platforms.",
    modules: [
      { title: "Cloud Fundamentals", hours: "8h", desc: "AWS / Azure / GCP core services, networking, IAM, and cloud-native design principles." },
      { title: "Containerization & Orchestration", hours: "10h", desc: "Docker, Kubernetes, Helm, and managing containerized workloads at scale." },
      { title: "CI/CD Pipelines", hours: "8h", desc: "GitHub Actions, automated testing, deployment strategies, and release management." },
      { title: "Infrastructure as Code", hours: "8h", desc: "Terraform, CloudFormation, and managing infrastructure programmatically." },
      { title: "Observability & SRE", hours: "6h", desc: "Logging, metrics, tracing, alerting, and applying SRE principles in production." },
    ],
    outcomes: [
      "Design and deploy scalable cloud-native architectures",
      "Automate infrastructure provisioning with IaC tools",
      "Build reliable CI/CD pipelines for any application",
      "Implement observability and on-call best practices",
    ],
    who: "Software engineers and system administrators becoming proficient in modern cloud infrastructure and DevOps practices.",
    capstone: "Architect and deploy a microservices application on Kubernetes with full CI/CD automation and an observability stack.",
  },
  {
    id: "digital-transformation",
    icon: TrendingUp,
    title: "Digital Transformation & Leadership",
    short: "Lead technology-driven organizational change, innovation strategy, and digital adoption across enterprises.",
    duration: "24 Hours",
    level: "All Levels",
    format: "Online / In-person",
    description:
      "Equip yourself with the strategic and practical tools to lead digital transformation initiatives. Learn how modern organizations adopt technology, drive change, and build a culture of continuous innovation.",
    modules: [
      { title: "Digital Strategy", hours: "6h", desc: "Digital maturity models, technology assessment, and building a transformation roadmap." },
      { title: "Agile & Lean Transformation", hours: "6h", desc: "Agile frameworks, lean principles, and scaling agile across organizations." },
      { title: "Change Management", hours: "6h", desc: "Stakeholder alignment, communication strategies, and overcoming organizational resistance." },
      { title: "Innovation Frameworks", hours: "6h", desc: "Design thinking, innovation labs, and measuring the ROI of digital initiatives." },
    ],
    outcomes: [
      "Build and communicate a digital transformation strategy",
      "Apply agile and lean principles to drive organizational change",
      "Manage stakeholders and lead change initiatives",
      "Design innovation programs and measure outcomes",
    ],
    who: "Managers, team leads, entrepreneurs, and anyone responsible for leading technology adoption in their organization.",
    capstone: "Develop a digital transformation roadmap for a real or simulated organization, including a stakeholder plan and success metrics.",
  },
];

// ── Workshop data ───────────────────────────────────────────────────────────────
const workshops = [
  {
    id: "chatgpt-ai",
    label: "Workshop 01",
    title: "AI Foundations & ChatGPT Masterclass",
    duration: "1 Day · 8 Hours",
    topics: [
      "How large language models and ChatGPT actually work",
      "Prompt engineering fundamentals and best practices",
      "ChatGPT for professional productivity and creative work",
      "Connecting AI to your workflows with APIs",
      "Hands-on labs with real-world AI use cases",
    ],
    who: "Professionals and students who want to quickly understand and leverage AI in their daily work.",
  },
  {
    id: "ml-practice",
    label: "Workshop 02",
    title: "Machine Learning in Practice",
    duration: "1 Day · 8 Hours",
    topics: [
      "Core ML concepts without heavy mathematical prerequisites",
      "Hands-on with Python, Pandas, and Scikit-learn",
      "Building and evaluating classification and regression models",
      "Solving real business problems with data",
      "Introduction to neural networks and where to go next",
    ],
    who: "Developers and analysts who want practical ML skills without a heavy academic background.",
  },
  {
    id: "claude-coding",
    label: "Workshop 03",
    title: "Claude Coding Accelerator",
    duration: "1 Day · 8 Hours",
    topics: [
      "Using Claude as an intelligent coding and debugging assistant",
      "Claude Code: terminal-based AI-driven development",
      "Building complete features with AI pair programming",
      "Effective prompting strategies for code generation",
      "Refactoring, reviewing, and testing code with AI",
    ],
    who: "Developers who want to dramatically increase their coding speed and quality using Claude.",
  },
  {
    id: "agentic-workshop",
    label: "Workshop 04",
    title: "Agentic AI & Automation",
    duration: "1 Day · 8 Hours",
    topics: [
      "What agentic AI is and why it is transforming software",
      "Building your first AI agent with Python in hours",
      "Tool use, function calling, and real API integration",
      "Automating repetitive workflows with AI agents",
      "Introduction to multi-agent systems and orchestration",
    ],
    who: "Tech-savvy professionals ready to move beyond prompting into building real AI agents.",
  },
];

// ── Components ──────────────────────────────────────────────────────────────────
function CourseCard({ course, onClick }) {
  const Icon = course.icon;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      onClick={() => onClick(course)}
      className="cursor-pointer group border border-black/10 rounded-2xl p-6 hover:border-black/25 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
          <Icon className="h-5 w-5 text-black/65" />
        </div>
        <span className="text-xs text-black/45 border border-black/10 rounded-full px-3 py-1 shrink-0 ml-2">
          {course.duration}
        </span>
      </div>
      <h3 className="font-medium text-base mb-2 leading-snug">{course.title}</h3>
      <p className="text-sm text-black/55 leading-6">{course.short}</p>
      <div className="mt-5 flex items-center text-sm font-medium text-black/55 group-hover:text-black transition-colors">
        View course{" "}
        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </motion.div>
  );
}

function WorkshopCard({ workshop }) {
  return (
    <div className="border border-black/10 rounded-2xl p-8 hover:border-black/20 transition-colors">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs text-black/35 font-mono tracking-wide">{workshop.label}</span>
        <span className="text-xs border border-black/10 rounded-full px-3 py-1 text-black/50">
          {workshop.duration}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-5 leading-snug">{workshop.title}</h3>
      <ul className="space-y-2.5 mb-6">
        {workshop.topics.map((topic, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-black/60 leading-6">
            <span className="mt-2.5 w-1 h-1 bg-black/25 rounded-full shrink-0" />
            {topic}
          </li>
        ))}
      </ul>
      <div className="border-t border-black/10 pt-5 flex items-end justify-between gap-4 flex-wrap">
        <p className="text-sm text-black/45 leading-5 max-w-xs">{workshop.who}</p>
        <a
          href="mailto:info@iftbd.com"
          className="shrink-0 inline-flex items-center text-sm font-medium text-black/60 hover:text-black transition-colors"
        >
          Register interest <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function CourseDetail({ course, onBack }) {
  const Icon = course.icon;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <IFTLogo size={24} />
            <span className="font-semibold tracking-tight">Institute of Frontier Technology</span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-black/55 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to programs
          </button>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-black/35 hover:text-black mb-10 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All programs
          </button>

          <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center mb-6">
            <Icon className="h-6 w-6 text-black/65" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">{course.title}</h1>
          <p className="text-lg leading-8 text-black/65 max-w-3xl">{course.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 text-sm text-black/65">
              <Clock className="h-4 w-4" /> {course.duration}
            </div>
            <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 text-sm text-black/65">
              <Users className="h-4 w-4" /> {course.level}
            </div>
            <div className="flex items-center gap-2 border border-black/10 rounded-full px-4 py-2 text-sm text-black/65">
              <BookOpen className="h-4 w-4" /> {course.format}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="border-t border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8">Curriculum</h2>
            <div className="space-y-3">
              {course.modules.map((module, i) => (
                <div key={i} className="border border-black/10 rounded-2xl p-6 hover:border-black/20 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-black/30 font-mono tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-medium">{module.title}</h3>
                      </div>
                      <p className="text-sm text-black/55 leading-6 ml-8">{module.desc}</p>
                    </div>
                    <span className="shrink-0 text-xs text-black/40 border border-black/10 rounded-full px-3 py-1">
                      {module.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capstone */}
        <section className="border-t border-black/10 bg-black/[0.02]">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-4">Capstone Project</h2>
            <p className="text-lg text-black/65 leading-8 max-w-3xl">{course.capstone}</p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-t border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8">What you'll be able to do</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {course.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-black/30 shrink-0" />
                  <p className="text-black/65">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who */}
        <section className="border-t border-black/10 bg-black/[0.02]">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-4">Who this is for</h2>
            <p className="text-lg text-black/65 leading-8 max-w-3xl">{course.who}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between gap-8 flex-wrap">
              <div>
                <h2 className="text-2xl font-semibold">Ready to enroll?</h2>
                <p className="mt-2 text-black/55">Contact us to register for the next cohort.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@iftbd.com"
                  className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center hover:bg-black/85 transition-colors"
                >
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <button
                  onClick={onBack}
                  className="border border-black/15 text-black/75 px-6 py-3 rounded-full text-sm font-medium hover:border-black/35 hover:text-black transition-colors"
                >
                  View all programs
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/10 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-black/40">
            <IFTLogo size={16} className="opacity-40" />
            Institute of Frontier Technology
          </div>
        </footer>
      </main>
    </div>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────────
export default function UltraMinimalIFT() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
    setTimeout(() => {
      document.getElementById("skilldevelopment")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <IFTLogo size={24} />
            <span className="font-semibold tracking-tight">Institute of Frontier Technology</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#skilldevelopment" className="hover:text-black">Skill development</a>
            <a href="#workshops" className="hover:text-black">Workshops</a>
            <a href="#research" className="hover:text-black">Research</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 space-y-3 text-sm">
            <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skilldevelopment" className="block" onClick={() => setMenuOpen(false)}>Skill development</a>
            <a href="#workshops" className="block" onClick={() => setMenuOpen(false)}>Workshops</a>
            <a href="#research" className="block" onClick={() => setMenuOpen(false)}>Research</a>
            <a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="relative">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-[80vh] object-cover"
            alt="IFT campus"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-semibold leading-tight"
            >
              A new benchmark for building
              <br />
              high-demand skills in frontier technology
            </motion.h1>
            <p className="mt-6 max-w-xl text-white/80">
              Clean, modern, and globally aligned training environment focused on innovation, research, and future-ready talent.
            </p>
            <div className="mt-6">
              <a
                href="#skilldevelopment"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium inline-flex items-center hover:bg-white/90 transition-colors"
              >
                Our Programs <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-lg leading-8 text-black/70">
            The Institute of Frontier Technology is positioned as a next-generation academic institution focused on
            advanced digital capability, interdisciplinary learning, and applied research. The design intentionally
            removes clutter and communicates clarity, confidence, and global ambition.
          </p>
        </section>

        {/* FULL WIDTH IMAGE */}
        <section>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-[70vh] object-cover"
            alt="Technology workspace"
          />
        </section>

        {/* SKILL DEVELOPMENT */}
        <section id="skilldevelopment" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">Skill development</h2>
          <p className="mt-4 text-lg text-black/60 max-w-2xl leading-8">
            Industry-aligned programs designed to build deep expertise in the technologies shaping our world.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onClick={handleCourseSelect} />
            ))}
          </div>
        </section>

        {/* FULL WIDTH IMAGE */}
        <section>
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80"
            className="w-full h-[70vh] object-cover"
            alt="Learning environment"
          />
        </section>

        {/* WORKSHOPS */}
        <section id="workshops" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold">Workshops</h2>
          <p className="mt-4 text-lg text-black/60 max-w-2xl leading-8">
            Intensive one-day workshops to rapidly build hands-on skills in the most in-demand areas of AI and technology.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {workshops.map((w) => (
              <WorkshopCard key={w.id} workshop={w} />
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="max-w-5xl mx-auto px-6 py-24 border-t border-black/10">
          <h2 className="text-3xl font-semibold">Research</h2>
          <p className="mt-6 text-lg leading-8 text-black/70">
            Research is presented as a core institutional pillar — focused on artificial intelligence, cyber systems,
            connected infrastructure, and digital innovation. The minimal design gives research more authority and
            clarity.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-10 text-black/70">
            <div>
              <p className="font-medium text-black">Address</p>
              <p className="mt-2">Purana Paltan, Dhaka, Bangladesh</p>
            </div>
            <div>
              <p className="font-medium text-black">Email</p>
              <p className="mt-2">info@iftbd.com</p>
            </div>
            <div>
              <p className="font-medium text-black">Phone</p>
              <p className="mt-2">+8801X97682625</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-black/10 py-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-black/45">
            <IFTLogo size={16} className="opacity-45" />
            Institute of Frontier Technology
          </div>
        </footer>
      </main>
    </div>
  );
}
