import { Inter, IBM_Plex_Mono } from "next/font/google"
import Layout from '../components/Layout'
import '../styles/globals.css'

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const mono = IBM_Plex_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['400', '500', '600']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${mono.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
