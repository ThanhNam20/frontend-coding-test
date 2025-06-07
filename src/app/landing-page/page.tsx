import {
    Hero,
    Models,
    SuccessStories,
    WhyChoose,
    LookingForModels,
    Footer,
} from '@/app/landing-page/components';
import { Header } from '@/app/landing-page/components/Header';

import '@/styles/landingPage.scss';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Header />
            <Hero />
            <Models />
            <SuccessStories />
            <WhyChoose />
            <LookingForModels />
            <Footer />
        </div>
    );
}
