import { useEffect, useState } from 'react'

type ObserverOptions = {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number | number[]
}
interface ObserverParams {
  options: ObserverOptions
  elementRef: React.RefObject<HTMLElement>
}


export default function useObserver (options, elementRef){
  const [inView, setInView] = useState(false)

  useEffect(() => {

    if (!elementRef) return

    const observer = new IntersectionObserver(([entry]) => {

      setInView(entry.isIntersecting)

    }, options)

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [elementRef, options])

  return  {inView}
}