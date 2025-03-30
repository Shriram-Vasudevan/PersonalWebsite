import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, link, technologies }) {
  return (
    <div className="project-card rounded-lg overflow-hidden bg-[rgba(42,42,42,0.3)] flex flex-col h-full">
      <div className="relative w-full aspect-video group overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[rgba(42,42,42,0.7)]">
            <span className="text-3xl">✨</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-transparent opacity-60"></div>
      </div>
      <div className="p-5 flex flex-col flex-grow relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[rgba(255,114,94,0.05)] to-transparent rounded-bl-3xl"></div>
        
        <h3 className="text-lg mb-2 font-mono lowercase relative">
          {title}
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[rgb(var(--accent-rgb))]"></span>
        </h3>
        <p className="text-sm text-accent mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-[rgba(18,18,18,0.6)] text-xs rounded font-mono lowercase border border-[rgba(138,138,138,0.15)] hover:border-[rgba(138,138,138,0.3)] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <Link 
            href={link}
            className="text-xs font-mono underline underline-offset-4 self-end hover:text-[rgb(var(--accent-rgb))] text-accent transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            view project →
          </Link>
        )}
      </div>
    </div>
  )
} 