import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="py-16">
      <h1 className="text-3xl font-mono lowercase mb-4 fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        contact<span className="accent-text">.</span>
      </h1>
      
      <div className="relative">
        <div className="absolute right-0 top-0 w-40 h-40 bg-gradient-to-bl from-[rgba(98,144,255,0.03)] to-transparent rounded-full blur-xl"></div>
      </div>
      
      <p className="text-lg mb-12 text-accent max-w-2xl fadeIn delay-1 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        i'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl">
        <div className="fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          <h2 className="text-xl font-mono lowercase mb-6 flex items-center">
            <span className="text-[rgb(var(--accent-rgb))]">✦</span>
            <span className="ml-2">get in touch</span>
          </h2>
          
          <div className="space-y-6">
            <div className="group hover-lift p-4 rounded-lg border border-[rgba(138,138,138,0.1)] bg-[rgba(42,42,42,0.2)] transition-colors hover:bg-[rgba(42,42,42,0.3)]">
              <p className="text-sm text-accent mb-2 font-mono">email:</p>
              <a 
                href="mailto:shrirammvasudevan@gmail.com" 
                className="font-mono lowercase text-lg hover:text-[rgb(var(--accent-rgb))] transition-colors"
              >
                shrirammvasudevan@gmail.com
              </a>
            </div>
            
            <div className="p-4 rounded-lg border border-[rgba(138,138,138,0.1)] bg-[rgba(42,42,42,0.2)] hover-lift hover:bg-[rgba(42,42,42,0.3)] transition-colors">
              <p className="text-sm text-accent mb-2 font-mono">location:</p>
              <p className="font-mono lowercase text-lg">morristown, nj</p>
            </div>
          </div>
        </div>
        
        <div className="fadeIn delay-3 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          <h2 className="text-xl font-mono lowercase mb-6 flex items-center">
            <span className="text-[rgb(var(--accent-secondary-rgb))]">✦</span>
            <span className="ml-2">elsewhere</span>
          </h2>
          
          <div className="space-y-6">
            <div className="group hover-lift">
              <p className="text-sm text-accent mb-1 font-mono">github:</p>
              <a 
                href="https://github.com/Shriram-Vasudevan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono lowercase inline-flex items-center animated-border"
              >
                shriram-vasudevan
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[rgb(var(--accent-rgb))]">↗</span>
              </a>
            </div>
            
            <div className="group hover-lift">
              <p className="text-sm text-accent mb-1 font-mono">linkedin:</p>
              <a 
                href="https://www.linkedin.com/in/shriram-vasudevan-394671225/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono lowercase inline-flex items-center animated-border"
              >
                shriram-vasudevan
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[rgb(var(--accent-secondary-rgb))]">↗</span>
              </a>
            </div>
            
            <div className="group hover-lift">
              <p className="text-sm text-accent mb-1 font-mono">X:</p>
              <a 
                href="https://x.com/shriram_clf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono lowercase inline-flex items-center animated-border"
              >
                @shriram-clf
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[rgb(var(--accent-rgb))]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 p-6 border border-[rgba(138,138,138,0.1)] rounded-lg bg-[rgba(42,42,42,0.2)] max-w-3xl fadeIn delay-4 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <h3 className="text-lg font-mono lowercase mb-3 flex items-center">
          <span className="mr-2">💬</span> leave a message
        </h3>
        
        <p className="text-sm text-accent mb-4">
          Feel free to reach out with questions, opportunities, or just to say hello!
        </p>
        
        <button 
          className="px-4 py-2 bg-[rgba(255,114,94,0.15)] hover:bg-[rgba(255,114,94,0.25)] text-[rgb(var(--accent-rgb))] text-sm rounded-md font-mono lowercase transition duration-300 hover-lift"
          onClick={() => window.location.href = 'mailto:hello@shriramvasudevan.com'}
        >
          send email
        </button>
      </div>
    </div>
  )
} 