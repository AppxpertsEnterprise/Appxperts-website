'use client'
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const ScrollTriggerCount = ({ count }) => {
    const [trigger, setTrigger] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTrigger(entry.isIntersecting);
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref}>
            {trigger && <CountUp className='count-text' end={count} duration={1.5} />}
        </div>
    );
};

export default ScrollTriggerCount;
