'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import GalleryModal from '../GalleryModal/GalleryModal';
import { galleryData } from '@/data/galleryData';
import testimonialsOnePageData from '@/data/TestimonialsOnePageDtata';
import styles from './galleryone.module.css';

const { tagLine, title, items } = testimonialsOnePageData;

const GalleryOne = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedImages, setDisplayedImages] = useState(galleryData?.slice(0, 9) || []);
    const [hasMore, setHasMore] = useState(true);

    const galleryRef = useRef(null);
    const scrollInterval = useRef(null);

    useEffect(() => {
        startScrolling();
        return () => stopScrolling(); // Cleanup on unmount
    }, []);

    const startScrolling = () => {
        if (galleryRef.current) {
            stopScrolling(); // Clear existing interval
            scrollInterval.current = setInterval(() => {
                if (galleryRef.current) {
                    galleryRef.current.scrollLeft += 1;
                }
            }, 20);
        }
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
        }
    };

    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        if (galleryData?.length) {
            const newIndex = (currentIndex + 1) % galleryData.length;
            setCurrentIndex(newIndex);
            setClickedImg(galleryData[newIndex].src);
        }
    };

    const handelRotationLeft = () => {
        if (galleryData?.length) {
            const newIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
            setCurrentIndex(newIndex);
            setClickedImg(galleryData[newIndex].src);
        }
    };

    const loadMoreImages = () => {
        const filteredImages = galleryData?.filter(({ alt }) =>
            alt.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];

        if (displayedImages.length >= filteredImages.length) {
            setHasMore(false);
            return;
        }
        setDisplayedImages((prev) => [...prev, ...filteredImages.slice(prev.length, prev.length + 9)]);
    };

    return (
        <section className={styles.galleryOne}>
            <Container fluid>
                <div 
                    className={styles.galleryScrollContainer} 
                    ref={galleryRef} 
                    onMouseEnter={stopScrolling} 
                    onMouseLeave={startScrolling}
                >
                    {displayedImages.map(({ id, src, alt }, index) => (
                        <div key={id} className={styles.galleryItem}>
                            <Image
                                src={src}
                                alt={alt}
                                width={250}  // Increased width
                                height={180} // Increased height
                                className={styles.trendingImage}
                            />
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="text-center mt-4">
                        <button className={styles.loadMoreBtn} onClick={loadMoreImages}>
                            Load More
                        </button>
                    </div>
                )}
            </Container>

            {clickedImg && (
                <GalleryModal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                    currentIndex={currentIndex}
                    length={galleryData?.length || 0}
                />
            )}

            {/* Testimonials Section */}
            <section className="testimonials-one testimonials-one--page" style={{
                padding: "80px 0",
                background: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
            }}>
                <Container>
                    <div className="sec-title-two text-center" style={{ marginBottom: "50px", color: "#01579B", opacity: 0, animation: "fadeIn 1s ease-in-out forwards" }}>
                        <h6 className="sec-title-two__tagline" style={{
                            fontSize: "16px", fontWeight: "600", letterSpacing: "1px", background: "rgba(2, 136, 209, 0.1)", padding: "5px 15px", borderRadius: "20px", display: "inline-block", color: "#0277BD",
                        }}>
                            {tagLine}
                        </h6>
                        <h3 className="sec-title-two__title" style={{ fontSize: "36px", fontWeight: "700", color: "#01579B", textShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                            {title}
                        </h3>
                    </div>
                    <Row className="gutter-y-30">
                        {items.map(({ id, icon, content, name, designation, rating }) => (
                            <Col key={id} lg={4} md={6} style={{ paddingBottom: "30px" }}>
                                <div className="testimonials-card" style={{
                                    background: "rgba(255, 255, 255, 0.9)", borderRadius: "16px", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", padding: "40px", textAlign: "center", backdropFilter: "blur(10px)", opacity: 0, animation: "fadeInUp 0.8s ease-in-out forwards",
                                }}>
                                    <div className="testimonials-card__quote" style={{ fontSize: "50px", color: "#0288D1", marginBottom: "15px", animation: "glow 1.5s infinite alternate" }}>
                                        <i className={icon}></i>
                                    </div>
                                    <div className="testimonials-card__content" style={{ fontSize: "16px", lineHeight: "1.8", color: "#01579B", fontStyle: "italic", marginBottom: "20px" }}>
                                        {content}
                                    </div>
                                    <h3 className="testimonials-card__name" style={{ fontSize: "20px", fontWeight: "700", color: "#01579B", marginBottom: "5px" }}>
                                        {name}
                                    </h3>
                                    <p className="testimonials-card__designation" style={{ fontSize: "14px", color: "#0288D1", marginBottom: "15px" }}>
                                        {designation}
                                    </p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default GalleryOne;
