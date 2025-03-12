'use client'
import headerData from '@/data/HeaderData';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { icons } = headerData;

const TopBar = () => {
    return (
        <div style={{ background: '#001f3f', padding: '10px 0',paddingLeft: '25px', color: '#ffffff', width: '100vw' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', maxWidth: '100%', padding: '0 50px' }}>
                {/* Right-aligned: Location, Call, Email */}
                <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {icons.map(({ id, icon, content, subHref, href }) => (
                        <li key={id} style={{ display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={icon} style={{ marginRight: '5px', color: '#ffffff' }} />
                            <Link href={subHref ? `${subHref}:${content}` : href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ffffff' }}>
                                {content}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopBar;
