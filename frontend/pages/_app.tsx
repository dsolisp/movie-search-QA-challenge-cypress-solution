import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Global state - bad practice
let globalFavorites: any[] = [];
let globalMovies: any[] = [];
let globalLoading = false;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
