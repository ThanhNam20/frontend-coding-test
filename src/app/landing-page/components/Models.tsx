import React from 'react';
import '@/styles/models.scss';
import { IMAGES } from '../../../../public/images';
import Image from 'next/image';

const models = [
    { name: 'SIMON D.', location: 'Dubai', image: IMAGES.slider1 },
    { name: 'CHRISTINE V.', location: 'Burj Khalifa', image: IMAGES.slider2 },
    { name: 'DARON M.', location: 'Dubai', image: IMAGES.slider3 },
    { name: 'VERONICA BR.', location: 'Dubai', image: IMAGES.slider4 },
    { name: 'MAIHUN D.', location: 'Dubai', image: IMAGES.slider5 },
];

export const Models = () => {
    return (
        <section className="models">
            <div className="models__header">
                <h2>Meet our models</h2>
                <div className="models__view-all">
                    <p>View all</p>
                    <Image src={IMAGES.arrowRight} alt="down" />
                </div>
            </div>
            <div className="models__scroll">
                {models.map((model, index) => (
                    <div key={index} className="model-card">
                        <Image
                            src={model.image}
                            alt={model.name}
                            className="model-card__image"
                        />
                        <div className="model-card__info">
                            <h3>{model.name}</h3>
                            <p>{model.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
