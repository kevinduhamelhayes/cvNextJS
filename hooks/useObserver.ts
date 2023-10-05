import { useEffect, useState } from 'react'

type ObserverOptions = {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number | number[]
}


export default function useObserver (options: ObserverOptions){
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {

    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {

      setInView(entry.isIntersecting)

    }, options)

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, options])

  return [setRef, inView]
}