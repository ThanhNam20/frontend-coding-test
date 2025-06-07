import { useState, useEffect } from 'react';

type ScreenType = 'mobile' | 'tablet' | 'desktop';

const getScreenType = (): ScreenType => {
    const width = window.innerWidth;
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
};

export const useResponsive = (): ScreenType => {
    const [screen, setScreen] = useState<ScreenType>(getScreenType());

    useEffect(() => {
        const handleResize = () => {
            setScreen(getScreenType());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screen;
};
