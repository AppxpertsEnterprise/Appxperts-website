'use client'
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const ScrollTriggerCount = ({ count }) => {
    const [trigger, setTrigger] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTrigger(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of element is in view
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref}>
            {trigger && <CountUp className='count-text' end={count} duration={1.5} />}
        </div>
    );
};

export default ScrollTriggerCount;
