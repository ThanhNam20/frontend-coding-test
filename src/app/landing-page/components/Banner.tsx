import React from 'react';
import '@/styles/banner.scss';

export const Hero = () => {
    return (
        <section className="banner">
            <div className="banner__image"></div>
            <div className="banner__text">
                <h1>
                    Unlock Your <br />
                    <span>Modeling Potential</span>
                </h1>
                <p>
                    Discover endless opportunities, connect with top agencies,
                    and showcase your talent
                </p>
                <button className="btn">Apply Now</button>
            </div>
        </section>
    );
};
