import Link from "next/link";
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      company: "Palantir Technologies",
      role: "Meritocracy Fellow / Software Engineer",
      description: [
        "Developing AI Agents infrastructure within Foundry platform to enable automated workflows",
        "Designing and implementing frontend interfaces to enhance user experience"
      ]
    },
    {
      company: "Mural Pay",
      role: "Software Engineer Intern",
      description: [
        "Built Chinese payment rails, unlocked $10mm+ in transactions",
        "Developed new API endpoints for internal services and third-party integrations",
        "Built AI KYC/AML compliance system and security check services validating $100mm+ in payment volume",
        "Initiated development of autonomous, agent-powered frontends that evolve based on user behavior"
      ]
    },
    {
      company: "Omnicure",
      role: "Software Engineer",
      description: [
        "Built WebRTC in-app calling solution within Unity deployed across iOS, Android, and Web platforms",
        "Implemented in-call AR features for real-time critical care, including digital markers that track body movements with <50 ms latency",
        "Designed and developed website with 200k+ visits"
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section with Background */}
      <div className="relative -mx-8 md:-mx-12 mb-16 md:mb-24 overflow-hidden">
        <div
          className="px-8 md:px-12 py-32 md:py-40 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')",
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight text-white">
                building intelligent systems
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                software engineer working on AI infrastructure, payment systems, and healthcare technology
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief About */}
      <div className="mb-20 fadeIn opacity-0 max-w-3xl" style={{ opacity: mounted ? 1 : 0 }}>
        <p className="text-sm md:text-base leading-relaxed opacity-70 mb-4">
          I build systems that solve real problems. From AI agent infrastructure at Palantir to payment rails processing millions in transactions at Mural Pay, I focus on creating robust, well-engineered solutions.
        </p>

        <p className="text-sm md:text-base leading-relaxed opacity-70">
          Currently working on autonomous systems and exploring the intersection of AI and enterprise software.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <h2 className="text-2xl font-light mb-12 tracking-tight">experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 timeline-line pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb))]"></div>

              <div>
                <h3 className="text-xl font-medium mb-1">{exp.company}</h3>
                <p className="text-sm opacity-60 mb-4">{exp.role}</p>

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
    </div>
  );
}
