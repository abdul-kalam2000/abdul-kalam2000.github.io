import { useState, useEffect } from "react";
import {
  ArrowDownToLine, Github, Linkedin, Mail, MapPin, Phone,
  ExternalLink, FileText, Globe, ChevronRight
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";


// ================================
// CONFIG (Edit these safely)
// ================================
const PROFILE = {
  name: "Abdul Kalam Mansoor",
  title: "Graduate Computer Engineering Student — Embedded Systems, Secure OS, Firmware",
  location: "Jersey City, New Jersey",
  phone: "", // Leave blank to hide phone from UI
  email: "abdulkalammansoor3@gmail.com",
  linkedin: "#", // e.g., "https://www.linkedin.com/in/abdulkalammansoor/"
  github: "#",   // e.g., "https://github.com/abdulkalammansoor"
  resumeUrl: "sandbox:/mnt/data/Abdul_Kalam_Mansoor_resume.pdf"
};

const SECTIONS = {
  about: {
    summary:
      "Graduate Computer Engineering student focusing on Embedded Systems, Secure Operating Systems, and Firmware. Proficient in C++ with hands-on projects across IoT and full-stack, seeking a Summer 2025 internship to contribute to real products.",
    highlights: [
      "F-1 Visa (CPT Eligible)",
      "IoT & Embedded Projects",
      "C/C++ • Java • Python (basic)",
      "Git • VS Code • Arduino IDE"
    ]
  },
  education: [
    {
      school: "City College of New York (CUNY)",
      degree: "M.S. in Computer Engineering",
      time: "Expected May 2026",
      details: ["Focus: Embedded Systems, Secure OS, Advanced Architecture"]
    },
    {
      school: "Chandigarh University, Punjab, India",
      degree: "B.E. in Computer Science & Engineering",
      time: "July 2024",
      details: []
    }
  ],
  training: [
    {
      title: "Core Java Training — InternShala",
      time: "Jun 2022 – Jul 2022",
      bullets: [
        "Covered Java basics to GUI apps.",
        "Built a console-based Quiz Game (political, math, CS modes) with real-time scoring and ASCII results."
      ]
    }
  ],
  research: [
    {
      title:
        "Mitigating E-Commerce Security Risks with Blockchain: A Multi-Layered Architecture (2024)",
      note: "Published in an International Journal; explores blockchain-based protection in e-commerce.",
      link: "#"
    }
  ],
  projects: [
    {
      name: "Smart Streetlight System",
      tags: ["IoT", "Arduino", "LDR", "Automation"],
      bullets: [
        "Energy-efficient lighting using ambient-aware automation and traffic conditions.",
        "Wireless monitoring with Arduino control and LDR sensors.",
        "Integrated rolling speed-breaker energy recovery mechanism."
      ],
      repo: "#",
      demo: "#"
    },
    {
      name: "Ride-Sharing Mobile App",
      tags: ["MERN", "Realtime", "Location Tracking"],
      bullets: [
        "Real-time ride-sharing with enhanced passenger safety and location tracking."
      ],
      repo: "#",
      demo: "#"
    }
  ],
  skills: {
    technical: [
      "C",
      "C++",
      "Java",
      "Python (basic)",
      "Bash (basic)",
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Git",
      "GitHub",
      "Visual Studio",
      "Arduino IDE"
    ],
    coursework: [
      "Secure Operating Systems",
      "Real-Time & Embedded Systems",
      "Advanced Computer Architecture",
      "Internet of Things (IoT)",
      "Advanced Algorithms",
      "Database Systems I"
    ],
    certifications: [
      "Data Mining (Proctored)",
      "Software Testing (Proctored)",
      "AI For Everyone (DeepLearning.AI)",
      "Python for Everybody",
      "Computer Vision for Engineering & Science"
    ],
    soft: [
      "Listening",
      "Leadership",
      "Time Management",
      "Multitasking",
      "Decision Making",
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Communication",
      "Initiative"
    ]
  },
  languages: [
    { name: "English", note: "B2 – IELTS" },
    { name: "Nepali", note: "Native" },
    { name: "Bhojpuri", note: "Native" },
    { name: "Hindi", note: "Native" },
    { name: "Urdu", note: "Proficient" },
    { name: "Arabic", note: "Basic" }
  ]
};

// ================================
// Small UI helpers
// ================================
function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Icon className="h-6 w-6" />
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

function Pill({ children }) {
  return <span className="px-3 py-1 rounded-full border text-sm">{children}</span>;
}

function LinkButton({ href, children, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Button variant="outline" className="rounded-2xl">
        {Icon ? <Icon className="h-4 w-4 mr-2" /> : null}
        {children}
      </Button>
    </a>
  );
}

// ================================
// Self-tests (basic runtime checks)
// These run once on mount and log to console.
// ================================
function usePortfolioSelfTests() {
  useEffect(() => {
    try {
      console.assert(typeof PROFILE.name === "string" && PROFILE.name.length > 0, "PROFILE.name missing");
      console.assert(Array.isArray(SECTIONS.projects) && SECTIONS.projects.length >= 1, "Projects should be an array with at least 1 item");
      console.assert(Array.isArray(SECTIONS.languages) && SECTIONS.languages.every(l => l.name && l.note), "Languages should be array of {name, note}");
      console.assert(typeof SECTIONS.about.summary === "string", "About summary must be string");
      console.log("✅ Portfolio self-tests passed");
    } catch (e) {
      console.error("❌ Portfolio self-tests failed", e);
    }
  }, []);
}

// ================================
// Main Component
// ================================
export default function Portfolio() {
  usePortfolioSelfTests();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold">AKM · Portfolio</a>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#languages" className="hover:underline">Languages</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href={PROFILE.resumeUrl} className="hover:underline" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">{PROFILE.name}</h1>
            <p className="mt-3 text-muted-foreground">{PROFILE.title}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {PROFILE.location}
              </span>
              {PROFILE.phone ? (
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-4 w-4" /> {PROFILE.phone}
                </span>
              ) : null}
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1 underline"
              >
                <Mail className="h-4 w-4" /> {PROFILE.email}
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {PROFILE.linkedin !== "#" ? (
                <LinkButton href={PROFILE.linkedin} icon={Linkedin}>LinkedIn</LinkButton>
              ) : null}
              {PROFILE.github !== "#" ? (
                <LinkButton href={PROFILE.github} icon={Github}>GitHub</LinkButton>
              ) : null}
              <LinkButton href={PROFILE.resumeUrl} icon={FileText}>Download Resume</LinkButton>
            </div>
          </div>

          <Card className="md:col-span-2 rounded-2xl border-dashed">
            <CardContent className="p-5">
              <SectionTitle icon={Globe} title="Focus Areas" subtitle="What I build & study" />
              <div className="flex flex-wrap gap-2">
                {SECTIONS.about.highlights.map(h => (
                  <Pill key={h}>{h}</Pill>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{SECTIONS.about.summary}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle icon={ExternalLink} title="Projects" subtitle="Selected builds & apps" />
        <div className="grid md:grid-cols-2 gap-6">
          {SECTIONS.projects.map(p => (
            <Card key={p.name} className="rounded-2xl">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {p.repo !== "#" ? (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="underline text-sm">Repo</a>
                    ) : null}
                    {p.demo !== "#" ? (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="underline text-sm">Demo</a>
                    ) : null}
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle icon={ChevronRight} title="Skills & Coursework" subtitle="Technical stack and academics" />
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {SECTIONS.skills.technical.map(s => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Relevant Coursework</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {SECTIONS.skills.coursework.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Certifications</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {SECTIONS.skills.certifications.map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-2xl mt-6">
          <CardContent className="p-5">
            <h3 className="font-semibold mb-3">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SECTIONS.skills.soft.map(s => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Education & Research */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle icon={FileText} title="Education & Research" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Education</h3>
              <ul className="space-y-4">
                {SECTIONS.education.map(e => (
                  <li key={e.school}>
                    <div className="font-medium">{e.school}</div>
                    <div className="text-sm text-muted-foreground">{e.degree} • {e.time}</div>
                    {e.details && e.details.length > 0 ? (
                      <ul className="list-disc pl-5 mt-1 text-sm space-y-1">
                        {e.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Research</h3>
              <ul className="space-y-3">
                {SECTIONS.research.map(r => (
                  <li key={r.title} className="text-sm">
                    <div className="font-medium">{r.title}</div>
                    <div className="text-muted-foreground">{r.note}</div>
                    {r.link !== "#" ? (
                      <a
                        href={r.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline inline-flex items-center gap-1 mt-1"
                      >
                        Read more <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle icon={Globe} title="Languages" />
        <div className="flex flex-wrap gap-2">
          {SECTIONS.languages.map(l => (
            <Pill key={l.name}>{l.name} — {l.note}</Pill>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle icon={Mail} title="Contact" />
        <Card className="rounded-2xl">
          <CardContent className="p-5">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Email</div>
                <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              </div>
              {PROFILE.phone ? (
                <div>
                  <div className="text-muted-foreground">Phone</div>
                  <div>{PROFILE.phone}</div>
                </div>
              ) : null}
              <div>
                <div className="text-muted-foreground">Location</div>
                <div>{PROFILE.location}</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {PROFILE.linkedin !== "#" ? (
                <LinkButton href={PROFILE.linkedin} icon={Linkedin}>LinkedIn</LinkButton>
              ) : null}
              {PROFILE.github !== "#" ? (
                <LinkButton href={PROFILE.github} icon={Github}>GitHub</LinkButton>
              ) : null}
              <LinkButton href={PROFILE.resumeUrl} icon={ArrowDownToLine}>Resume (PDF)</LinkButton>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <span>Built with React & Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
