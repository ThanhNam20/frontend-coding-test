import React from 'react';
import '@/styles/whyChoose.scss';
import { IMAGES } from '../../../../public/images';
import Image from 'next/image';

export const WhyChoose = () => {
    return (
        <section className="whyChoose">
            <div className="whyChoose__content">
                <h2>Why Choose</h2>
                <Image
                    src={IMAGES.landingLogo}
                    alt="WELT Enters"
                    className="whyChoose__content__logo"
                />

                <div className="whyChoose__text">
                    <div className="whyChoose__text__title">
                        <Image
                            src={IMAGES.checkBox}
                            alt="Global Opportunities"
                            className="whyChoose__icon"
                        />
                        <p>Access global opportunities</p>
                    </div>

                    <div className="whyChoose__text__title">
                        <Image
                            src={IMAGES.checkBox}
                            alt="Global Opportunities"
                            className="whyChoose__icon"
                        />
                        <p>Join a supportive and professional team</p>
                    </div>

                    <div className="whyChoose__text__title">
                        <Image
                            src={IMAGES.checkBox}
                            alt="Global Opportunities"
                            className="whyChoose__icon"
                        />
                        <p>Get featured in high-profile events and campaigns</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
