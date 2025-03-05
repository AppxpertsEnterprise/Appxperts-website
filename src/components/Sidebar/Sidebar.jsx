import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SidebarNewsletter from '../SidebarNewsletter/SidebarNewsletter';

// Add icons to the FontAwesome library
library.add(faFacebookF, faInstagram, faLinkedin, faWhatsapp);

const { logo_light } = headerData;

const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useRootContext();

  return (
    <aside className={`sidebar-one ${openSidebar ? "active" : ""}`}>
      <div onClick={toggleSidebar} className="sidebar-one__overlay"></div>
      <div className="sidebar-one__content">
        <div onClick={toggleSidebar} className="sidebar-one__close">
          <i className="icon-close"></i>
        </div>

        <div className="sidebar-one__logo">
          <Link href="/" aria-label="logo image">
            <Image src={logo_light} alt="Tolak HTML" width={184} />
          </Link>
        </div>

        <h4 className="sidebar-one__title">Contact Info:</h4>

        <ul className="sidebar-one__info">
          <li>
            <span className="fas fa-map-marker-alt"></span>  
            <Link href="https://google/maps" target="_blank">
              India 
            </Link>
          </li>
          <li>
            <span className="fas fa-map-marker-alt"></span>  
            <Link href="https://google/maps/" target="_blank">
              Singapore
            </Link>
          </li>
          <li>
            <span className="fas fa-map-marker-alt"></span>  
            <Link href="https://google/maps" target="_blank">
              Dubai
            </Link>
          </li>

          <li>
            <span className="fas fa-envelope"></span>  
            <Link href="mailto:info@appxes.com">info@appxes.com</Link>
          </li>
        </ul>

        <div className="sidebar-one__social">
          <Link href="https://www.facebook.com/AppXes" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/appxperts.solutions/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://wa.me/+91 8825528905" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link href="https://www.linkedin.com/company/appxperts-enterprise-solutions/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <h4 className="sidebar-one__title">Newsletter:</h4>
        <SidebarNewsletter />
      </div>
    </aside>
  );
};

export default Sidebar;
