import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        let's talk
      </h1>

      <p className="text-base md:text-lg leading-relaxed opacity-70 mb-12 max-w-2xl fadeIn delay-1 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        I'm always open to discussing new projects, opportunities, or just connecting.
      </p>

      <div className="space-y-8 max-w-xl fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <div>
          <p className="text-sm opacity-50 mb-2">email</p>
          <a
            href="mailto:shrirammvasudevan@gmail.com"
            className="text-lg opacity-80 hover:opacity-100 transition-opacity animated-border"
          >
            shrirammvasudevan@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm opacity-50 mb-3">connect</p>
          <div className="flex flex-col space-y-2">
            <a
              href="https://github.com/Shriram-Vasudevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base opacity-70 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              github
              <span className="ml-2 opacity-50">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shriram-vasudevan-394671225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base opacity-70 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              linkedin
              <span className="ml-2 opacity-50">↗</span>
            </a>

            <a
              href="https://x.com/shriram_clf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base opacity-70 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              x / twitter
              <span className="ml-2 opacity-50">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 