import { Roboto_Mono } from "next/font/google"
import Layout from '../components/Layout'
import '../styles/globals.css'

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ['300', '400', '500']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={robotoMono.variable}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
