import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Layout({ children, title = 'shriram vasudevan' }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(var(--background-rgb))]">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Shriram Vasudevan's personal website" />
        <link rel="icon" href="/images/pfp.png" />
      </Head>
      
      <header className="py-4 px-8 md:px-12 border-b border-[rgba(200,200,200,0.3)] sticky top-0 backdrop-blur-sm bg-[rgba(250,250,250,0.95)] z-10">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-base font-normal tracking-tight hover:opacity-70 transition-opacity">
            shriram vasudevan
          </Link>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-sm">
            <Link href="/" className={`${router.pathname === '/' ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity`}>
              home
            </Link>
            <Link href="/contact" className={`${router.pathname === '/contact' ? 'opacity-100' : 'opacity-50 hover:opacity-100'} transition-opacity`}>
              contact
            </Link>
          </div>

          <Link
            href="/contact"
            className="px-4 py-2 bg-black text-white text-xs hover:bg-[rgba(0,0,0,0.85)] transition-colors"
          >
            contact
          </Link>
        </nav>
      </header>
      
      <main className="flex-grow px-8 md:px-12 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <footer className="py-8 px-8 md:px-12 border-t border-[rgba(200,200,200,0.3)]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} shriram vasudevan</p>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Shriram-Vasudevan"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shriram-vasudevan-394671225/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://x.com/shriram_clf"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 