import Image from "next/image";
import Link from "next/link";
import StatusItem from "../components/StatusItem";
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-12 py-16">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-mono lowercase mb-2 fadeIn opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          shriram vasudevan<span className="accent-text">.</span>
        </h1>
        
        <div className="mb-10 fadeIn delay-3 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          <div className="border-l-2 border-[rgba(255,114,94,0.3)] pl-4 py-1 mb-6">
            <h2 className="text-sm font-mono lowercase mb-4 accent-text">currently:</h2>
            
            <StatusItem icon="💻">
              building something special in the <Link href="/projects" className="animated-border">edtech</Link> space (details soon)
            </StatusItem>
            <StatusItem icon="🦀">
               marketing{" "}  
               <a 
                href="https://apps.apple.com/us/app/loop-voice-journal/id6738974660" 
                style={{color: "#A28497"}} 
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer">
                loop
              </a>, an intelligent audio journal
            </StatusItem>
            <StatusItem icon="🎓">
              learning <span className="accent-text">rust</span> & researching <span className="accent-text-secondary">nlp querying</span>
            </StatusItem>
            <StatusItem icon="💼">
              at{" "}
              <a
                href="https://omnicure.com"
                style={{ color: "#a054e4" }}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                omnicure
              </a>
              , where I work on telemedicine software
          </StatusItem>


          </div>
          
          <div className="border-l-2 border-[rgba(98,144,255,0.3)] pl-4 py-1">
            <h2 className="text-sm font-mono lowercase mb-4 accent-text-secondary">interests:</h2>
            
            <StatusItem icon="🚀">
              mobile apps & web development
            </StatusItem>
            <StatusItem icon="🎨">
              ui/ux design
            </StatusItem>
            <StatusItem icon="🤖">
              ml/ai & computer vision applications
            </StatusItem>
          </div>
        </div>
        
        <div className="flex gap-4 fadeIn delay-4 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
          <Link 
            href="/projects"
            className="px-5 py-2.5 bg-[rgba(255,114,94,0.15)] hover:bg-[rgba(255,114,94,0.25)] text-[rgb(var(--accent-rgb))] text-sm inline-block rounded-md font-mono lowercase transition duration-300 hover-lift"
          >
            see my work →
          </Link>
          
          <Link 
            href="/contact"
            className="px-5 py-2.5 border border-[rgba(138,138,138,0.3)] hover:border-[rgba(138,138,138,0.5)] text-sm inline-block rounded-md font-mono lowercase transition duration-300 hover-lift"
          >
            get in touch
          </Link>
        </div>
      </div>
      
      <div className="w-full md:w-1/3 flex justify-center items-start fadeIn delay-2 opacity-0" style={{ opacity: mounted ? 1 : 0 }}>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(255,114,94,0.3)] to-[rgba(98,144,255,0.3)] rounded-full blur opacity-60"></div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-[rgba(138,138,138,0.3)]">
            <div className="w-full h-full flex items-center justify-center bg-[rgba(42,42,42,0.7)]">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
