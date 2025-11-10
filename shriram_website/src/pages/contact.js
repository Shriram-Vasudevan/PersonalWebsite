import { useState, useEffect } from 'react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="py-16 md:py-24 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-light mb-6 tracking-tight fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        let's talk
      </h1>

      <p className="text-sm md:text-base leading-relaxed opacity-60 mb-12 fadeIn delay-1 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        open to discussing new projects, opportunities, or just connecting.
      </p>

      <div className="space-y-8 fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <div>
          <p className="text-xs opacity-40 mb-2 uppercase tracking-wider">email</p>
          <a
            href="mailto:shrirammvasudevan@gmail.com"
            className="text-base opacity-70 hover:opacity-100 transition-opacity"
          >
            shrirammvasudevan@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs opacity-40 mb-3 uppercase tracking-wider">connect</p>
          <div className="flex flex-col space-y-2.5">
            <a
              href="https://github.com/Shriram-Vasudevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              github
              <span className="ml-2 opacity-40">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shriram-vasudevan-394671225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              linkedin
              <span className="ml-2 opacity-40">↗</span>
            </a>

            <a
              href="https://x.com/shriram_clf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity inline-flex items-center"
            >
              x / twitter
              <span className="ml-2 opacity-40">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 