import React from "react";
import { useEffect, useRef } from "react";
export default function FadeInPage({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && ref.current) {
                (ref.current as HTMLElement).classList.add('animate-fadeIn')
                
            }
        }, { threshold: 0.1 })
        if (ref.current) observer.observe(ref.current as Element)
            return () => observer.disconnect()
    }, [])          
    return (
        <div ref={ref} className="opacity-0">
            {children}
        </div>
    )

        
}

