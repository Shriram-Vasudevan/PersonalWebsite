import ProjectCard from '../components/ProjectCard'
import { useState, useEffect, useCallback } from 'react'

const projects = [
  {
    title: 'loop',
    description: 'voice journal. 500+ users in 24 hours.',
    image: '/images/loop.png',
    link: 'https://apps.apple.com/us/app/loop-voice-journal/id6738974660',
    technologies: ['SwiftUI', 'Python', 'CoreData', 'CoreML']
  },
  {
    title: 'Level Up Fitness',
    description: 'fitness app with personalized training.',
    image: '/images/LevelUpFitness.jpeg',
    link: 'https://apps.apple.com/us/app/level-up-fitness-get-moving/id6711331456?platform=iphone',
    technologies: ['SwiftUI', 'AWS', 'Python']
  },
  {
    title: 'Jersey Journeys',
    description: 'personalized New Jersey travel guides.',
    image: '/images/JerseyJourneys.png',
    link: 'https://apps.apple.com/us/app/jersey-journeys/id6480574525',
    technologies: ['SwiftUI', 'UIKit', 'Firebase']
  },
  {
    title: 'ArtXChange',
    description: 'AR marketplace for art.',
    image: '/images/ArtXChange.png',
    link: 'https://apps.apple.com/us/app/artxchange/id1553190024',
    technologies: ['Unity', 'ARKit', 'AWS']
  }
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  useEffect(() => {
    setMounted(true)
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.fadeIn').forEach(el => {
        el.style.opacity = '1';
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [])
  
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);
  
  const filteredProjects = projects.filter(project => {
    const passesSearchFilter = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return passesSearchFilter
  })

  return (
    <div className="py-10 max-w-xl mx-auto px-4">
      <div className="flex flex-col justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-mono lowercase fadeIn" style={{ transitionDelay: '0ms' }}>
            projects<span className="text-[rgb(var(--accent-rgb))]">.</span>
          </h1>
          
          <p className="text-base mt-3 text-[#a0a0a0] max-w-xl fadeIn" style={{ transitionDelay: '100ms' }}>
            things i've built
          </p>
        </div>

        <div className="mt-6 fadeIn relative w-full" style={{ transitionDelay: '200ms' }}>
          <div className="relative">
            <input 
              type="text" 
              placeholder="search projects" 
              className="px-3 py-1.5 pl-8 bg-[rgba(28,28,28,0.8)] border border-[rgba(255,255,255,0.08)] rounded-md text-xs w-full focus:outline-none focus:border-[rgba(255,114,94,0.3)]"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5 top-2 h-3.5 w-3.5 text-[#a0a0a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index} 
            className="fadeIn" 
            style={{ transitionDelay: `${300 + index * 50}ms` }}
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
        <div className="text-center py-12 text-accent">
          No projects match the search query.
        </div>
      )}
    </div>
  )
} 