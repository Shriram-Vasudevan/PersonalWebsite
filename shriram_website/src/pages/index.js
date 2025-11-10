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
        "Built new agent-usable Ontology-querying tools",
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
    <div className="py-16 md:py-24">
      {/* Personal Letter Section */}
      <div className="mb-20 fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
          shriram vasudevan
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-4">
            I'm a software engineer passionate about building products that make a difference.
            My work spans AI infrastructure, fintech, healthcare technology, and research.
          </p>

          <p className="text-base md:text-lg leading-relaxed opacity-80">
            I believe in creating thoughtful, well-engineered solutions that solve real problems.
            Whether it's developing AI agent systems at Palantir, building payment infrastructure
            that processes millions in transactions, or creating critical healthcare tools, I focus
            on making technology that truly works.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-medium opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            get in touch →
          </Link>
        </div>
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
