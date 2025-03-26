'use client'
import funFactTwoData from '@/data/FunFactTwoData';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from "react-countup";

const FunFactTwo = () => {
    const [counterOn, setCounterOn] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setCounterOn(entry.isIntersecting);
            },
            { threshold: 0.5 } // Adjust visibility threshold
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="funfact-two">
            <div className="container">
                <ul className="list-unstyled funfact-two__list">
                    {funFactTwoData.map(({ id, icon, text, count }) => (
                        <li key={id} className="funfact-two__item count-box">
                            <div className="funfact-two__icon"><i className={icon}></i></div>
                            <div className="funfact-two__content">
                                <h3 className="funfact-two__count">
                                    {counterOn && (
                                        <CountUp className='count-text' end={count} duration={1.5} />
                                    )}
                                </h3>
                                <p className="funfact-two__text">{text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FunFactTwo;
