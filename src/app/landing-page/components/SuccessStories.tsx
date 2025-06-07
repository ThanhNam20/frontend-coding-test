'use client';

import React from 'react';
import '@/styles/successStory.scss';
import Image from 'next/image';
import { IMAGES } from '../../../../public/images';
import { useResponsive } from '@/hooks';

export const SuccessStories = () => {
    const screen = useResponsive();

    return (
        <section className="success">
            <div className="success__text">
                <h2>Our Success Stories</h2>
                {screen === 'desktop' && (
                    <>
                        <button className="btn">Apply Now</button>
                        <span className="caption">to Start Your Journey!</span>
                    </>
                )}
            </div>
            <div className="success__card">
                <Image
                    src={IMAGES.banner2}
                    alt="Success Story"
                    className="success__img"
                />
                <div className="success__story">
                    <div className="success__story__text">
                        <p className="label">Uliana&apos;s Story</p>
                        <h3>
                            From Local to <br /> International
                        </h3>
                    </div>

                    <div className="success__slider">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="success__nav">
                        <button>
                            <Image
                                src={IMAGES.arrowBoldLeft}
                                alt="Previous"
                                className="arrow"
                            />
                        </button>
                        <button>
                            <Image
                                src={IMAGES.arrowBoldRight}
                                alt="Previous"
                                className="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {screen === 'mobile' && (
                <div className="success__text__mobile">
                    <button className="btn">Apply Now</button>
                    <span className="caption">to Start Your Journey!</span>
                </div>
            )}
        </section>
    );
};
