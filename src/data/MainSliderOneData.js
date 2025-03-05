import shape from '@/assets/images/shapes/slider-1-shape-1.png'

import bg1 from '@/assets/images/backgrounds/slider-1-1.jpg'
import bg2 from '@/assets/images/backgrounds/slider-1-2.jpg'
import bg3 from '@/assets/images/backgrounds/slider-1-3.jpg'
import { faInstagram, faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const mainSliderOneData = [
    {
        id: 1,
        shape,
        bg: bg1,
        subTitle: "Welcome to Appxperts Enterprise Solutions!",
        title: "Innovate Your Business<br> with Our Tech Soluti<span>o</span>ns",
        text: "Empowering enterprises with advanced software development services tailored to meet your business needs.",
        social: [
            { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram" },
            { id: 2, icon: faWhatsapp, link: "https://wa.me/+918825528905", name: "WhatsApp" },
            { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXes", name: "Facebook" },
        ],
        floatingText: "Innovate"
    },
    {
        id: 2,
        shape,
        bg: bg2,
        subTitle: "Welcome to Appxperts Enterprise Solutions!",
        title: "Custom Solutions<br> to Drive Growth",
        text: "Transform your ideas into powerful software solutions that scale with your business.",
        social: [
            { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram" },
            { id: 2, icon: faWhatsapp, link: "https://wa.me/+918825528905", name: "WhatsApp" },
            { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXes", name: "Facebook" },
        ],
        floatingText: "Grow"
    },
    {
        id: 3,
        shape,
        bg: bg3,
        subTitle: "Welcome to Appxperts Enterprise Solutions!",
        title: "End-to-End<br> Software Development",
        text: "Delivering next-generation IT solutions for startups and enterprises with creativity and precision.",
        social: [
            { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram" },
            { id: 2, icon: faWhatsapp, link: "https://wa.me/88255 28905", name: "WhatsApp" },
            { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXe", name: "Facebook" },
        ],
        floatingText: "Build"
    }
]

export default mainSliderOneData;
