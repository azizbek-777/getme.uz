import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'

// Custom hook for tracking previous value
function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function CustomCursor() {
  const cursorRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleCursorEvents = (e) => {
      if (e.type === 'mousemove') {
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
          }
          setIsVisible(true)
        })
      } else {
        setIsVisible(false)
      }
    }

    // Add event listeners
    window.addEventListener('mousemove', handleCursorEvents, { passive: true })
    window.addEventListener('mouseleave', handleCursorEvents)
    window.addEventListener('mouseout', handleCursorEvents)
    window.addEventListener('blur', handleCursorEvents)

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleCursorEvents)
      window.removeEventListener('mouseleave', handleCursorEvents)
      window.removeEventListener('mouseout', handleCursorEvents)
      window.removeEventListener('blur', handleCursorEvents)
    }
  }, [])

  // Early return for improved performance
  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed w-8 h-8 border border-zinc-800 dark:border-white rounded-full transition-transform duration-50 ease-out pointer-events-none z-[9999]"
    />
  )
}

export default function App({ Component, pageProps, router }) {
  const previousPathname = usePrevious(router.pathname)

  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <Header />
      <main className="flex-grow mx-auto max-w-4xl">
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}