import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Layout({ children, title = 'shriram vasudevan' }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])
  
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--background-rgb))]">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Shriram Vasudevan's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="py-6 px-6 md:px-12 border-b border-[rgba(138,138,138,0.1)] sticky top-0 backdrop-blur-sm bg-[rgba(18,18,18,0.8)] z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/" className="text-lg font-mono lowercase tracking-tighter hover-lift animated-border">
            sv<span className="accent-text">.</span>
          </Link>
          <div className="flex space-x-8 text-sm font-mono lowercase">
            <Link href="/" className={`${router.pathname === '/' ? 'accent-text' : 'opacity-70 hover:opacity-100'} transition duration-300 hover-lift`}>
              home
            </Link>
            <Link href="/projects" className={`${router.pathname === '/projects' ? 'accent-text' : 'opacity-70 hover:opacity-100'} transition duration-300 hover-lift`}>
              projects
            </Link>
            <Link href="/contact" className={`${router.pathname === '/contact' ? 'accent-text' : 'opacity-70 hover:opacity-100'} transition duration-300 hover-lift`}>
              contact
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow px-6 md:px-12 max-w-6xl mx-auto w-full">
        {children}
      </main>
      
      <footer className="py-8 px-6 md:px-12 border-t border-[rgba(138,138,138,0.1)]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
          <p className="text-xs font-mono text-accent">© {new Date().getFullYear()} shriram vasudevan</p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-[rgb(var(--accent-rgb))] transition-colors duration-300 hover-lift"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-[rgb(var(--accent-secondary-rgb))] transition-colors duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-[rgb(var(--accent-rgb))] transition-colors duration-300 hover-lift"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
          
          <div>
            <button 
              className="px-3 py-1 rounded-md bg-[rgba(138,138,138,0.1)] hover:bg-[rgba(138,138,138,0.2)] font-mono text-xs lowercase transition duration-300"
              onClick={() => alert('Dark mode is always enabled for this site!')}
            >
              <span className="mr-2">☾</span>dark mode
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
} 