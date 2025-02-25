'use client'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import Masonry from "react-masonry-component";
import Image from 'next/image';
import GalleryModal from '../GalleryModal/GalleryModal';
import { galleryData } from '@/data/galleryData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './galleryone.module.css';

const GalleryOne = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [clickedImg, setClickedImg] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayedImages, setDisplayedImages] = useState(galleryData.slice(0, 9));
    const [hasMore, setHasMore] = useState(true);

    const handleClick = (src, index) => {
        setCurrentIndex(index);
        setClickedImg(src);
    };

    const handelRotationRight = () => {
        const totalLength = galleryData.length;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
        setClickedImg(galleryData[(currentIndex + 1) % totalLength].src);
    };

    const handelRotationLeft = () => {
        const totalLength = galleryData.length;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLength) % totalLength);
        setClickedImg(galleryData[(currentIndex - 1 + totalLength) % totalLength].src);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredImages = galleryData.filter(({ alt }) =>
        alt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setDisplayedImages(filteredImages.slice(0, displayedImages.length));
    }, [searchTerm]);

    const loadMoreImages = () => {
        if (displayedImages.length >= filteredImages.length) {
            setHasMore(false);
            return;
        }
        setDisplayedImages((prev) => [
            ...prev,
            ...filteredImages.slice(prev.length, prev.length + 9),
        ]);
    };

    return (
        <section className={styles.galleryOne}>
            <Container fluid>
                <InputGroup className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search images..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </InputGroup>
                <Masonry className={`${styles.masonryLayout} row position-relative`}>
                    {displayedImages.map(({ id, src, alt, md, lg }, index) => (
                        <Col key={id} md={md} lg={lg} className={styles.galleryItem}>
                            <div className={styles.galleryCard} onClick={() => handleClick(src, index)}>
                                <Image
                                    src={src}
                                    alt={alt}
                                    layout="intrinsic"
                                    width={400}
                                    height={300}
                                    className={styles.trendingImage}
                                />
                            </div>
                        </Col>
                    ))}
                </Masonry>
                {hasMore && (
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={loadMoreImages}>Load More</button>
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
                    length={galleryData.length}
                />
            )}
        </section>
    );
};

export default GalleryOne;
