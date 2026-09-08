"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [trailingPos, setTrailingPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .clean-card, label, [data-cursor='hover']"
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setCursorVisible(false);
    const handleMouseEnter = () => setCursorVisible(true);

    const followCursor = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      setTrailingPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(followCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    animationFrameId = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const profilePhotoUrl = "https://media.licdn.com/dms/image/v2/D4E03AQE5_soeAWc6fA/profile-displayphoto-scale_400_400/B4EZ_XdGneHsAg-/0/1786026160034?e=1790208000&v=beta&t=FsLGcmXlmpHWXHq445RBm2JgZZcIZvSw5arR2HQK274";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abhishekkumarranjan965@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const skillsData = [
    {
      category: "Frontend",
      skills: ["Next.js (App Router)", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & Modern CSS"],
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "Payment Integrations (Stripe / Razorpay)"],
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB & Mongoose", "MySQL", "PostgreSQL", "Redis", "Database Schema Design"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git & GitHub", "Docker", "Postman", "Vercel Deployment", "VS Code", "CI/CD Workflows"],
    },
  ];

  const projects = [
    {
      id: "tour-mgmt",
      category: "saas",
      title: "Tour & Guide Management Platform",
      role: "MCA Capstone Project",
      description:
        "A full-stack travel marketplace that connects tourists with verified local tour guides. Includes real-time booking, curated itinerary planning, and a comprehensive review and rating system.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Abhisheksharma004/tour-management-mca-final-year-project",
      badge: "Featured Capstone",
    },
    {
      id: "course-lms",
      category: "saas",
      title: "Course Selling & LMS Platform",
      role: "Full Stack SaaS",
      description:
        "EdTech platform with Stripe checkout integration, role-based dashboards (Admin, Instructor, Student), protected video module delivery, and automated student enrollment.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      github: "https://github.com/Abhisheksharma004",
      badge: "SaaS Platform",
    },
    {
      id: "school-erp",
      category: "enterprise",
      title: "School Management System",
      role: "Institutional ERP",
      description:
        "An enterprise ERP platform for academic institutions managing student admissions, monthly attendance tracking, exam grading, fee structures, and dedicated parent communication.",
      tech: ["React.js", "Express.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Abhisheksharma004",
      badge: "Enterprise ERP",
    },
    {
      id: "hospital-opd",
      category: "enterprise",
      title: "Hospital OPD Management System",
      role: "Healthcare Software",
      description:
        "Web application streamlining outpatient department workflows by automating computer-generated token numbers, queue tracking, and doctor room scheduling.",
      tech: ["React.js", "Node.js", "MySQL / MongoDB", "CSS3"],
      github: "https://github.com/Abhisheksharma004/Hospital-OPD-Management-Project",
      badge: "Healthcare",
    },
    {
      id: "magic-id",
      category: "saas",
      title: "Magic ID Card Print Portal",
      role: "Web Utility Tool",
      description:
        "Cloud-based ID card generator and batch PDF processing system designed for educational institutions and corporate employee credentials.",
      tech: ["Next.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Abhisheksharma004/magic-id-print-web",
      badge: "Web Utility",
    },
    {
      id: "om-sai",
      category: "client",
      title: "Om Sai Fabrication Portal",
      role: "Client Web Application",
      description:
        "Modern corporate showcase and quotation inquiry portal for industrial fabrication services, optimized for responsive speed and client lead generation.",
      tech: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
      github: "https://github.com/Abhisheksharma004/om-sai-fabrication",
      badge: "Client Portal",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Background Grid, Ambient Glow & Interactive Mouse Spotlight */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Grid with radial fade mask */}
        <div className="absolute inset-0 bg-grid mask-radial opacity-40" />

        {/* Interactive Mouse Hover Spotlight Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-150"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.14), rgba(16, 185, 129, 0.04) 40%, transparent 80%)`,
          }}
        />

        {/* Interactive Highlighted Grid revealed right around the mouse cursor */}
        <div
          className="absolute inset-0 bg-grid-active pointer-events-none"
          style={{
            maskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 85%)`,
            WebkitMaskImage: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 85%)`,
            opacity: 0.95,
          }}
        />

        {/* Soft Ambient Light Discs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-emerald-500/[0.025] rounded-full blur-[130px]" />
        <div className="absolute bottom-[15%] -right-32 w-[550px] h-[550px] bg-indigo-500/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* Custom Portfolio Developer Pointer / Cursor (Hidden on touch devices) */}
      <div className="hidden md:block pointer-events-none">
        {/* Outer Trailing Reticle Ring */}
        <div
          className={`custom-cursor-ring ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
          style={{
            transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
            opacity: cursorVisible ? 1 : 0,
          }}
        />
        {/* Inner Precision Glow Dot */}
        <div
          className={`custom-cursor-dot ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""}`}
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
            opacity: cursorVisible ? 1 : 0,
          }}
        />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#090a0f]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-zinc-700 group-hover:border-zinc-500 transition-colors shrink-0">
              <Image
                src={profilePhotoUrl}
                alt="Abhishek Sharma"
                fill
                sizes="32px"
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="font-semibold text-sm tracking-tight text-zinc-200 group-hover:text-white transition-colors block leading-none">
                &lt; Abhishek Sharma /&gt;
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">Full Stack Developer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-zinc-100 transition-colors">
              Education
            </a>
          </nav>

          {/* Action Links */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Abhisheksharma004"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abhisheksharma004/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-xs font-medium text-blue-400 hover:bg-blue-600/20 transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-xs font-semibold text-zinc-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-[#090a0f] border-b border-zinc-800 px-4 py-3 space-y-2 text-sm">
            <a href="#about" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              About
            </a>
            <a href="#skills" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              Skills
            </a>
            <a href="#projects" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              Projects
            </a>
            <a href="#experience" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              Experience
            </a>
            <a href="#education" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              Education
            </a>
            <a href="#contact" onClick={() => setMobileMenu(false)} className="block py-1.5 text-zinc-300">
              Contact
            </a>
            <div className="pt-2 flex gap-2">
              <a
                href="https://github.com/Abhisheksharma004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhisheksharma004/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-blue-600 text-xs text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Wrapper */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-24">
        {/* HERO SECTION */}
        <section id="hero" className="space-y-8 pt-4">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Available for Full-Time Roles & SaaS Projects</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Abhishek Sharma
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                  (Abhishek Kumar Ranjan) • MCA Graduate
                </p>
              </div>

              <p className="text-lg sm:text-xl text-zinc-300 font-medium">
                Full Stack Developer & SaaS Builder based in Saran, Bihar, India. Founder at Jyoti Info Tech.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                Specialized in building scalable full-stack web applications with{" "}
                <span className="text-zinc-200 font-semibold">Next.js</span>,{" "}
                <span className="text-zinc-200 font-semibold">React</span>,{" "}
                <span className="text-zinc-200 font-semibold">Node.js</span>,{" "}
                <span className="text-zinc-200 font-semibold">TypeScript</span>, and{" "}
                <span className="text-zinc-200 font-semibold">MongoDB / MySQL</span>. Focused on clean architecture, secure authentication, and payment integrations.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-sm transition-colors"
                >
                  Get in Touch
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs sm:text-sm font-mono transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>{copiedEmail ? "Copied!" : "abhishekkumarranjan965@gmail.com"}</span>
                </button>
              </div>
            </div>

            {/* Profile Photo Display */}
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-zinc-700 bg-zinc-900 shadow-2xl">
                <Image
                  src={profilePhotoUrl}
                  alt="Abhishek Sharma profile photo"
                  fill
                  priority
                  sizes="(max-width: 768px) 144px, 192px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-2.5 -right-2.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-emerald-400 shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Open to Work</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-800/80">
            <div className="p-4 rounded-xl clean-card">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Years Experience</div>
            </div>
            <div className="p-4 rounded-xl clean-card">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-xs text-zinc-400 mt-0.5">Projects Built</div>
            </div>
            <div className="p-4 rounded-xl clean-card">
              <div className="text-2xl font-bold text-white">2+</div>
              <div className="text-xs text-zinc-400 mt-0.5">SaaS Platforms</div>
            </div>
            <div className="p-4 rounded-xl clean-card">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-zinc-400 mt-0.5">GitHub Repositories</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
            <p className="text-sm text-zinc-400">Background, education, and engineering approach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-zinc-300 leading-relaxed">
            <div className="md:col-span-2 space-y-4">
              <p>
                My full name is <strong className="text-zinc-100">Abhishek Kumar Ranjan</strong> (Abhishek Sharma). I am a Software Developer at <strong className="text-zinc-100">Viros Entrepreneurs IT Solution</strong> in New Delhi, and the Founder of <strong className="text-zinc-100">Jyoti Info Tech Software & IT Solutions</strong>.
              </p>
              <p>
                I completed my <strong className="text-zinc-100">Master of Computer Applications (MCA)</strong> from <strong className="text-zinc-100">Sharda University, Greater Noida</strong> (Grade: 7.8) and my <strong className="text-zinc-100">Bachelor of Computer Applications (BCA)</strong> from <strong className="text-zinc-100">MMHAPU, Patna</strong> (Grade: 73%).
              </p>
              <p>
                I prioritize writing clean, maintainable code, adhering to strong typing with TypeScript, designing intuitive user interfaces, and ensuring robust backend security with role-based permissions and scalable database architectures.
              </p>
            </div>

            <div className="p-5 rounded-2xl clean-card space-y-3">
              <h3 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Quick Details</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-zinc-500 block">Locations</span>
                  <span className="text-zinc-200 font-medium">New Delhi / Garkha, Bihar 🇮🇳</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Highest Education</span>
                  <span className="text-zinc-200 font-medium">MCA • Sharda University</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Undergraduate</span>
                  <span className="text-zinc-200 font-medium">BCA • MMHAPU Patna</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Current Roles</span>
                  <span className="text-zinc-200 font-medium">Software Developer @ Viros & Founder @ Jyoti Info Tech</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-sm text-zinc-400">Core technologies, libraries, and tools I work with.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillsData.map((group, idx) => (
              <div key={idx} className="p-5 rounded-2xl clean-card space-y-3">
                <h3 className="text-sm font-semibold text-zinc-200">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
              <p className="text-sm text-zinc-400">Production web applications and SaaS platforms.</p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-lg border border-zinc-800 self-start sm:self-auto text-xs">
              {[
                { id: "all", label: "All" },
                { id: "saas", label: "SaaS & Web" },
                { id: "enterprise", label: "Enterprise" },
                { id: "client", label: "Client Portals" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${activeCategory === tab.id
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-2xl clean-card flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {project.badge}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      title="View Source on GitHub"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{project.role}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>View Repository</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>
            <p className="text-sm text-zinc-400">Professional software engineering roles, full-time positions, and internships.</p>
          </div>

          <div className="space-y-4">
            {/* Experience 1: Viros Entrepreneurs */}
            <div className="p-6 rounded-2xl clean-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">Software Developer</h3>
                  <div className="text-xs font-medium text-blue-400 mt-0.5">
                    Viros Entrepreneurs IT Solution Private Limited • Full-time
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Jun 2025 – Present • 25/2, Block B, Molarband Extension, Badarpur, New Delhi, Delhi, India • On-site
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Present
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Building and maintaining software systems, network services, backend modules, and full-stack software applications.
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Developing network services, system workflows, and scalable web software components.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Collaborating on core software development, API design, and system architecture.</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                {["Network Services", "Network Systems", "Software Engineering", "Full Stack", "TypeScript", "Node.js"].map((badge, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience 2: Jyoti Info Tech */}
            <div className="p-6 rounded-2xl clean-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">Founder</h3>
                  <div className="text-xs font-medium text-emerald-400 mt-0.5">
                    Jyoti Info Tech Software & IT Solutions. • Full-time
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    May 2021 – Present • Garkha, Bihar, India • Remote
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Present
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Spearheading full-stack product development and software solutions. Architecting School ERPs, Healthcare OPD management software, and cloud-based ID generation tools.
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Engineered School ERPs, OPD Patient Queuing Systems, and Batch ID Print Portals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Implemented secure JWT/OAuth authentication, role-based access control (RBAC), and relational/NoSQL schemas in MongoDB & MySQL.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span>
                  <span>Integrated payment processing gateways (Stripe, Razorpay) with automated webhooks.</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                {["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Stripe API", "SaaS"].map((badge, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience 3: Learntricks Edutech */}
            <div className="p-6 rounded-2xl clean-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">Frontend Developer</h3>
                  <div className="text-xs font-medium text-amber-400 mt-0.5">
                    Learntricks Edutech • Internship
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Jun 2024 – Jul 2024 • 2 mos • Pune District, Maharashtra, India • Remote
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Completed
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Frontend Developer Internship at Learntricks Edutech. Engineered modern, interactive educational web modules, responsive component layouts, and cross-platform UI enhancements.
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Developed modular frontend components with modern JavaScript (ES6+), React, and responsive CSS architectures.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Optimized user experience, interface accessibility, and cross-browser rendering speeds.</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/60">
                {["Frontend Development", "React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive UI", "Git"].map((badge, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-zinc-800">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
            <p className="text-sm text-zinc-400">Academic credentials, universities, and performance records.</p>
          </div>

          <div className="space-y-4">
            {/* Education 1: MCA */}
            <div className="p-6 rounded-2xl clean-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Master of Computer Applications - MCA
                  </h3>
                  <div className="text-xs font-medium text-emerald-400 mt-0.5">
                    Sharda University, Greater Noida • Computer Programming, Specific Applications
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Aug 2023 – Jun 2025
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Grade: 7.8
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Postgraduate degree focusing on advanced computer programming, distributed system architecture, full-stack application design, and modern database management. Developed a production-ready Tour Management Platform with Next.js, TypeScript, and MongoDB for final year capstone.
              </p>
            </div>

            {/* Education 2: BCA */}
            <div className="p-6 rounded-2xl clean-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    Bachelor of Computer Applications - BCA
                  </h3>
                  <div className="text-xs font-medium text-blue-400 mt-0.5">
                    Maulana Mazharul Haque Arabic and Persian University (MMHAPU), Patna
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Apr 2018 – Aug 2021
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Grade: 73%
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Undergraduate degree in Computer Applications covering core data structures, algorithms, relational database systems (RDBMS), object-oriented programming, and computer networking fundamentals.
              </p>
            </div>

            {/* Education 3: 12th */}
            <div className="p-6 rounded-2xl clean-card space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    12th Higher Secondary Education (PCM)
                  </h3>
                  <div className="text-xs font-medium text-zinc-400 mt-0.5">
                    Bihar School Examination Board (BSEB)
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Apr 2016 – Apr 2018
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Grade: 54%
                </span>
              </div>
            </div>

            {/* Education 4: 10th */}
            <div className="p-6 rounded-2xl clean-card space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">
                    10th Secondary School Examination
                  </h3>
                  <div className="text-xs font-medium text-zinc-400 mt-0.5">
                    Bihar School Examination Board (BSEB)
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    Apr 2014 – Apr 2016
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Grade: 62.2%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-6 pt-6 border-t border-zinc-800/80">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">Contact & Inquiries</h2>
            <p className="text-sm text-zinc-400">
              Get in touch for job opportunities, SaaS projects, or freelance development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Info panel */}
            <div className="md:col-span-5 space-y-3">
              <div className="p-5 rounded-2xl clean-card space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Email</div>
                <a
                  href="mailto:abhishekkumarranjan965@gmail.com"
                  className="text-sm font-semibold text-zinc-200 hover:text-white block truncate"
                >
                  abhishekkumarranjan965@gmail.com
                </a>
              </div>

              <div className="p-5 rounded-2xl clean-card space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Company Contact</div>
                <a
                  href="mailto:jyotiinfotech.04@gmail.com"
                  className="text-sm font-semibold text-zinc-200 hover:text-white block truncate"
                >
                  jyotiinfotech.04@gmail.com
                </a>
              </div>

              <div className="p-5 rounded-2xl clean-card space-y-1">
                <div className="text-xs font-mono text-zinc-500 uppercase">Location</div>
                <div className="text-sm font-semibold text-zinc-200">Saran, Bihar, India</div>
                <div className="text-xs text-zinc-400">Open to Remote and On-Site Engagements</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.linkedin.com/in/abhisheksharma004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl clean-card text-center text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  LinkedIn Profile ↗
                </a>
                <a
                  href="https://github.com/Abhisheksharma004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl clean-card text-center text-xs font-semibold text-zinc-200 hover:text-white"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7 p-6 rounded-2xl clean-card">
              {formSent ? (
                <div className="text-center py-10 space-y-2">
                  <div className="text-3xl">✓</div>
                  <h3 className="text-lg font-bold text-white">Message Sent Successfully</h3>
                  <p className="text-xs text-zinc-400">
                    Thank you for reaching out. I will respond to your message as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-xs font-medium text-white hover:bg-zinc-700"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-zinc-700/60 focus:border-blue-500/80 focus:bg-zinc-950/60 focus:ring-1 focus:ring-blue-500/30 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-zinc-700/60 focus:border-blue-500/80 focus:bg-zinc-950/60 focus:ring-1 focus:ring-blue-500/30 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-semibold">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] border border-zinc-700/60 focus:border-blue-500/80 focus:bg-zinc-950/60 focus:ring-1 focus:ring-blue-500/30 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-white/10 active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/80 py-8 bg-[#090a0f] text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Abhishek Sharma (Abhishek Kumar Ranjan). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Abhisheksharma004" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhisheksharma004/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/abhisheksharma004" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              LeetCode
            </a>
            <a href="mailto:abhishekkumarranjan965@gmail.com" className="hover:text-zinc-300">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
