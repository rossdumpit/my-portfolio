import { useState, useEffect } from 'react';

const useBreakpoint = () => {
    const getBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 576) return 'xs';
        if (width >= 576 && width < 768) return 'sm';
        if (width >= 768 && width < 992) return 'md';
        if (width >= 992 && width < 1200) return 'lg';
        if (width >= 1200 && width < 1400) return 'xl';
        return 'xxl'; 
    };
  
    const [breakpoint, setBreakpoint] = useState(getBreakpoint());

    useEffect(() => {
        const handleResize = () => {
        setBreakpoint(getBreakpoint());
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint;
};

export default useBreakpoint;
