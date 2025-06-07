'use client';

import React from 'react';
import '@/styles/footer.scss';
import Image from 'next/image';
import { IMAGES } from '../../../../public/images';
import { useResponsive } from '@/hooks';
export const Footer = () => {
    const screen = useResponsive();

    const FooterDesktop = () => {
        return (
            <footer className="footer">
                <div className="footer__grid">
                    <div className="footer__logo">
                        <Image src={IMAGES.landingLogo} alt="WELT Enters" />
                        <p className="footer__company">WELTENTERS FZ LLC</p>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer__column">
                        <p className="footer__heading">FOR MODELS</p>
                        <a href="#">Apply Now</a>
                        <a href="#">FAQs for Applicants</a>
                    </div>
                    <div className="footer__column">
                        <p className="footer__heading">FOR CLIENTS</p>
                        <a href="#">Hire a Model</a>
                        <a href="#">Success Stories</a>
                    </div>
                    <div className="footer__column">
                        <p className="footer__heading">SOCIAL</p>
                        <div className="footer__icons">
                            <Image src={IMAGES.instagram} alt={'instagram'} />
                            <Image src={IMAGES.youtube} alt={'youtube'} />
                            <Image src={IMAGES.tiktok} alt={'tiktok'} />
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copy">
                        <Image
                            src={IMAGES.union}
                            alt={'union'}
                            className="footer__copy__icon"
                        />
                        <span>Copyright © 2024 – All right reserved</span>
                    </div>
                    <div className="footer__lang-btn">
                        <p>English</p>
                        <Image src={IMAGES.arrowDown} alt={'union'} />
                    </div>
                </div>
            </footer>
        );
    };

    const FooterMobile = () => {
        return (
            <footer className="footer">
                <div className="footer__grid">
                    <div className="footer__column">
                        <p className="footer__heading">FOR MODELS</p>
                        <a href="#">Apply Now</a>
                        <a href="#">FAQs for Applicants</a>
                    </div>
                    <div className="footer__column">
                        <p className="footer__heading">FOR CLIENTS</p>
                        <a href="#">Hire a Model</a>
                        <a href="#">Success Stories</a>
                    </div>

                    <div className="footer__logo">
                        <Image
                            src={IMAGES.union}
                            alt={'union'}
                            className="footer__logo__image"
                        />
                        <p className="footer__company">WELTENTERS FZ LLC</p>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>

                        <button>Sign in</button>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__copy">
                            <Image src={IMAGES.instagram} alt={'instagram'} />
                            <Image src={IMAGES.youtube} alt={'youtube'} />
                            <Image src={IMAGES.tiktok} alt={'tiktok'} />
                        </div>
                        <div className="footer__lang-btn">
                            <p>English</p>
                            <Image src={IMAGES.arrowDown} alt={'union'} />
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

    return <>{screen === 'desktop' ? <FooterDesktop /> : <FooterMobile />}</>;
};
