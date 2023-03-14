import '@/component/component/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return {
    <Component {...pageProps} />
  }
}
