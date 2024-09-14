import facebook from "../../../public/Assets/icons/facebook.svg";
import instagram from "../../../public/Assets/icons/instagram.svg";
import twitter from "../../../public/Assets/icons/twitter.svg";
import youtube from "../../../public/Assets/icons/youtube.svg";
import Image from "next/image";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: '/map.svg',
      variant: 'green',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      variant: 'green',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: '/tech.svg',
      variant: 'green',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      variant: 'orange',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Company',
      links: [
        'About RDA',
        'Services',
        'Projects',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Join Our Community', 'Our Newsletter', 'Forum'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Email', value: 'info@royaldigitalagency.com' },
      { label: 'Phone', value: '(323) 487-7979' },
      { label: 'Address', value: '655 N Central Ave, Glendale, CA 91203, USA' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/Assets/icons/facebook.svg',
      '/Assets/icons/instagram.svg',
      '/Assets/icons/twitter.svg',
      '/Assets/icons/youtube.svg',
    
    ],
  };