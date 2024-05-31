import { useEffect, useState } from "react"

/**
 *	Checks to see if the window is scrolled
 */
export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        /** Cleans up  */
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    return scrolled
}
