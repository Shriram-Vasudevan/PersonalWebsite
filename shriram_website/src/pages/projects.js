import ProjectCard from '../components/ProjectCard'
import { useState, useEffect } from 'react'

// Sample projects data - you can replace with your actual projects
const projects = [
  {
    title: 'project one',
    description: 'a powerful tool that helps users accomplish important tasks with ease and efficiency.',
    image: '/images/project1.png',
    link: 'https://example.com/project1',
    technologies: ['react', 'node.js', 'mongodb']
  },
  {
    title: 'project two',
    description: 'an innovative solution that transforms how teams collaborate and share information.',
    image: '/images/project2.png',
    link: 'https://example.com/project2',
    technologies: ['next.js', 'typescript', 'tailwind']
  },
  {
    title: 'project three',
    description: 'a sleek interface for visualizing complex data in a simple and intuitive way.',
    image: '/images/project3.png',
    link: 'https://example.com/project3',
    technologies: ['python', 'flask', 'postgresql']
  },
  {
    title: 'project four',
    description: 'an experimental prototype exploring new interaction models for mobile devices.',
    image: '/images/project4.png',
    link: 'https://example.com/project4',
    technologies: ['swift', 'arkit', 'core ml']
  }
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Filter categories
  const allTechnologies = ['all', 'react', 'next.js', 'python', 'swift']
  
  // Filtered projects
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter))

  return (
    <div className="py-16">
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-3xl font-mono lowercase fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          projects<span className="accent-text">.</span>
        </h1>
        
        <div className="relative hidden md:block">
          <div className="absolute top-0 right-0 -mt-10 -mr-10">
            <div className="text-6xl rotate-12 opacity-5">✨</div>
          </div>
        </div>
      </div>
      
      <p className="text-lg mb-8 text-accent max-w-2xl fadeIn delay-1 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        a collection of things i've built, from small experiments to larger applications.
      </p>
      
      <div className="mb-8 fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech, index) => (
            <button
              key={index}
              className={`px-3 py-1.5 text-xs font-mono lowercase rounded-md transition-all duration-300 ${
                activeFilter === tech
                  ? 'bg-[rgba(255,114,94,0.15)] text-[rgb(var(--accent-rgb))]'
                  : 'bg-[rgba(42,42,42,0.3)] hover:bg-[rgba(42,42,42,0.5)]'
              }`}
              onClick={() => setActiveFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="opacity-0 fadeIn" 
            style={{ 
              opacity: mounted ? 1 : 0,
              animationDelay: `${0.3 + index * 0.1}s`
            }}
          >
            <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-accent">
          No projects match the selected filter.
        </div>
      )}
    </div>
  )
} 