'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { blogDetailsData } from '@/data/BlogDetailsData';
import BlogSidebar from '../BlogSideBar/BlogSideBar';
import { usePathname } from 'next/navigation';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Extract data from blogDetailsData
const {
    image,
    meta: { category: { href: categoryHref, name: categoryText }, date: { href: dateHref, author: dateText, date: blogDate } },
    title,
    paragraphs,
    features,
    finalParagraph,
    blockquote: { text: blockquoteText, author: blockquoteAuthor },
    comments,
    sidebarData
} = blogDetailsData;

const { categories, tags, recentPosts } = sidebarData;

const BlogDetails = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    
    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://154.26.130.251:3007/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log('Response from API:', result);

            if (response.ok) {
                toast.success('Comment submitted successfully!', { autoClose: 3000 });
                setFormData({ name: '', email: '', message: '' }); // Reset form fields
            } else {
                toast.error(result.message || 'Something went wrong!', { autoClose: 3000 });
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            toast.error('Failed to submit comment. Please try again.', { autoClose: 3000 });
        }
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="blog-details">
            <Container>
                <Row className={`${pathname === "/blog-details" ? "justify-content-center" : "gutter-y-60"}`}>
                    {pathname === "/blog-details-left" && <Col lg={4}><BlogSidebar sidebarData={sidebarData} /></Col>}

                    <Col lg={8}>
                        <div className="blog-details__content">
                            <div className="blog-details__image">
                                <Image src={image} alt="blog" width={700} height={500} style={{ objectFit: "cover" }} />
                            </div>
                            <div className="blog-details__meta">
                                <div className="blog-details__meta__cats">
                                    <Link href={categoryHref}>{categoryText}</Link>
                                </div>
                                <div className="blog-details__meta__date">
                                    <Link href={dateHref}>{dateText}</Link> / {blogDate}
                                </div>
                            </div>
                            <h3 className="blog-details__title">{title}</h3>
                            {paragraphs.map((para, index) => (
                                <p key={index} className="blog-details__text">{para}</p>
                            ))}
                            <Row className="gutter-y-30">
                                {features.map((feature, index) => (
                                    <Col md={6} key={index}>
                                        <div className="blog-details__item">
                                            <div className="blog-details__item__icon">
                                                <span className={feature.icon}></span>
                                            </div>
                                            <h4 className="blog-details__item__title">{feature.title}</h4>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <p className="blog-details__text">{finalParagraph}</p>
                            <blockquote className="blog-details__blockquote">
                                <p className="blog-details__blockquote__text">{blockquoteText}</p>
                                <div className="blog-details__blockquote__meta">
                                    <Image src={blockquoteAuthor.image} alt="author" width={50} height={50} />
                                    <h5 className="blog-details__blockquote__meta__name">
                                        {blockquoteAuthor.name} - <span>{blockquoteAuthor.designation}</span>
                                    </h5>
                                </div>
                            </blockquote>
                        </div>

                        {/* Comment Form */}
                        <div className="comments-form">
                            <h3 className="comments-form__title">Leave a comment</h3>
                            <form onSubmit={handleSubmit} className="comments-form__form form-one">
                                <div className="form-one__group">
                                    <div className="form-one__control">
                                        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                    <div className="form-one__control">
                                        <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <textarea name="message" placeholder="Write a message" value={formData.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="form-one__control form-one__control--full">
                                        <button 
                                            type="submit" 
                                            className="tolak-btn" 
                                            style={{
                                                borderRadius: "50px", 
                                                padding: "10px 30px",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                backgroundColor: "#007bff",
                                                color: "white",
                                                border: "none",
                                                cursor: "pointer",
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            <b>Submit Comment</b>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>

                    {pathname === "/blog-details-right" && <Col lg={4}><BlogSidebar sidebarData={sidebarData} /></Col>}
                </Row>
            </Container>
        </section>
    );
};

export default BlogDetails;
