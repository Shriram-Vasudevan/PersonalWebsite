import Image from 'next/image'
import Link from 'next/link'
import { useState, memo } from 'react'

const ProjectCard = memo(function ProjectCard({ title, description, image, link, technologies }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card w-full max-w-xl mx-auto mb-6 overflow-hidden rounded-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={link || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex flex-col">
          {/* Image container */}
          <div className="w-full rounded-t-xl overflow-hidden bg-[rgb(var(--background-rgb))]">
            <div className="relative aspect-[16/9] overflow-hidden flex items-center justify-center">
              {image ? (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={image}
                    alt={title}
                    width={640}
                    height={360}
                    className={`object-contain w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 640px"
                    quality={75}
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[rgb(var(--background-rgb))]">
                  <span className="text-3xl">✨</span>
                </div>
              )}
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-10' : 'opacity-0'}`}></div>
            </div>
          </div>

          
          <div className={`w-full bg-[rgb(var(--background-rgb))] p-4 transition-all duration-300 ${isHovered ? 'bg-[rgba(var(--background-rgb),0.8)]' : ''}`}>
            <div className="flex justify-between items-start mb-1">
            </div>
            
            <h3 className={`text-xl font-bold text-[rgb(var(--foreground-rgb))] mb-1 transition-colors duration-300 ${isHovered ? 'text-[rgb(var(--accent-rgb))]' : ''}`}>
              {title}
            </h3>
            
            <p className="text-[rgba(var(--foreground-rgb),0.8)] text-xs mb-2 line-clamp-2">{description}</p>
          </div>

          <div className="bg-[rgba(0,0,0,0.2)] py-2 px-3 rounded-b-xl flex justify-between items-center border-t border-[rgba(255,255,255,0.05)]">
            <div className="flex gap-1.5 flex-wrap">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className={`px-1.5 py-0.5 bg-[rgba(0,0,0,0.3)] text-xs rounded text-[rgb(var(--foreground-rgb))] font-mono transition-colors duration-300 ${isHovered ? 'bg-[rgba(0,0,0,0.4)]' : ''}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2 items-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${isHovered ? 'translate-x-0.5 translate-y-[-0.5px]' : ''}`}
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke={isHovered ? 'rgb(var(--accent-rgb))' : 'rgb(var(--foreground-rgb))'} 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
});

export default ProjectCard;