import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl">
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Footer />
    </div>  
  );
}


