import Link from "next/link";
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      company: "Currently",
      role: "Building",
      description: [
        "Exploring ambitious projects"
      ]
    },
    {
      company: "Palantir Technologies",
      role: "Meritocracy Fellow / Software Engineer",
      period: "2025",
      description: [
        "Built agent infrastructure for Foundry",
        "Worked on frontend interfaces"
      ]
    },
    {
      company: "Mural Pay",
      role: "Software Engineer Intern",
      period: "2025",
      description: [
        "Chinese payment rails - $10mm+ in transactions",
        "API endpoints for internal/third-party services",
        "AI KYC/AML compliance - $100mm+ payment volume",
        "Agent-powered adaptive frontends"
      ]
    },
    {
      company: "Omnicure",
      role: "Software Engineer",
      period: "2024",
      description: [
        "WebRTC calling in Unity - iOS, Android, Web",
        "AR features for critical care - <50ms latency",
        "Website - 200k+ visits"
      ]
    }
  ]

  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
          shriram vasudevan
        </h1>
        <p className="text-base md:text-lg leading-relaxed opacity-70">
          18, trying discipline.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <h2 className="text-2xl font-light mb-12 tracking-tight">experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 timeline-line pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb))] timeline-dot"></div>

              <div>
                <h3 className="text-xl font-medium mb-1">{exp.company}</h3>
                <p className="text-sm opacity-60 mb-4">
                  {exp.role}
                  {exp.period && <span className="ml-2">· {exp.period}</span>}
                </p>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-sm opacity-70 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Beyond Work */}
      <div className="fadeIn delay-3 opacity-0 mt-20" style={{ opacity: mounted ? 1 : 0 }}>
        <h2 className="text-2xl font-light mb-8 tracking-tight">beyond work</h2>

        <div className="relative pl-8 border-l-2 timeline-line">
          <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb))] timeline-dot"></div>

          <div className="space-y-4">
            <p className="text-base opacity-70 leading-relaxed">
              I build mobile apps in my spare time. Cumulatively over 100k downloads across various projects.
            </p>
            <p className="text-sm opacity-50">
              iOS, Android, cross-platform development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
