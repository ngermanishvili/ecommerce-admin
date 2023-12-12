
import { useState, useEffect } from 'react'

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false)
    const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return '';
    }
    return origin;
}

// use origin is hook that returns the origin of the current page. for example if the page is https://example.com/dashboard/1234/billboards/1234, the origin will be https://example.com. This is useful for the api alerts in the dashboard pages.