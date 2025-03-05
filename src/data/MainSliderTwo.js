
import shape from '@/assets/images/shapes/slider-2-shape-1.png'
import shape1 from '@/assets/images/shapes/slider-2-shape-2.png'
import bg from '@/assets/images/shapes/slider-2-bg-1.png'
import bgDark from '@/assets/images/shapes/slider-2-bg-1-dark.png'
import bg1 from '@/assets/images/backgrounds/slider-2-1.jpg'
import bg2 from '@/assets/images/backgrounds/slider-2-2.jpg'
import { faFacebookF, faInstagram, faWhatsapp, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
const mainSliderTwoData = {
    shape,
    bg,
    bgDark,
    text: "Business a soluion and emirate in the Arab known Business \n Solution for luxury city for Company.",
    lists: [
        { id: 1, list: "We provide a revolutionary" },
        { id: 2, list: "This man for it <span>solution.</span>" },
        { id: 3, list: "We provide a revolutionary" },

    ],
    socials: [
       { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram" },
                   { id: 2, icon: faWhatsapp, link: "https://wa.me/+918825528905", name: "WhatsApp" },
                   { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXes", name: "Facebook" },
    ],
    carouselData: [
        { id: 1, shape: shape1, bg: bg1 },
        { id: 2, shape: shape1, bg: bg2 },

    ]
}
export default mainSliderTwoData