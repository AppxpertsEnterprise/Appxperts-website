"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import slideTextData from '@/data/SlideTextData';
import JarallaxImage from '../Jarallax/JarallaxImage';

// Dynamically import Jarallax and disable SSR
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
    ssr: false,
});

const { bg, lists } = slideTextData;

const SlideText = ({ pageTitle }) => {
    return (
        <section className={`slide-text ${pageTitle === "homeSix" ? "slide-text--home-six" : ""}`}>
            {/* Corrected imgPosition value */}
            <Jarallax className="slide-text__bg" speed={0.2} imgPosition="center center">
                <JarallaxImage src={bg.src} />
            </Jarallax>

            <div className="slide-text__wrap">
                <ul className="slide-text__list list-unstyled">
                    {
                        lists.map((l, i) => <li key={i}>{l}</li>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default SlideText;
