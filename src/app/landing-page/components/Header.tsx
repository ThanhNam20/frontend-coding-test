'use client';
import React from 'react';
import '@/styles/header.scss';
import { IMAGES } from '../../../../public/images';
import Image from 'next/image';
import { useResponsive } from '@/hooks';

export const Header = () => {
    const screen = useResponsive();

    const HeaderDesktop = () => {
        return (
            <header className="header">
                <div className="header__logo">
                    <Image src={IMAGES.landingLogo} alt="WELT Enters" />
                </div>
                <nav className="header__nav">
                    <a href="#">Home</a>
                    <div className="dropdown">
                        <a href="#">For Models</a>
                        <Image src={IMAGES.arrowDown} alt="down" />
                    </div>
                    <div className="dropdown">
                        <a href="#">For Client</a>
                        <Image src={IMAGES.arrowDown} alt="down" />
                    </div>
                </nav>
                <button className="header__cta">Start your model career</button>
            </header>
        );
    };

    const HeaderMobile = () => {
        return (
            <header className="header">
                <Image src={IMAGES.arrowLeft} alt="WELT Enters" />
                <div className="header__logo">
                    <Image src={IMAGES.landingLogo} alt="WELT Enters" />
                </div>
                <Image src={IMAGES.hamburger} alt="WELT Enters" />
            </header>
        );
    };

    return <>{screen === 'desktop' ? <HeaderDesktop /> : <HeaderMobile />}</>;
};
