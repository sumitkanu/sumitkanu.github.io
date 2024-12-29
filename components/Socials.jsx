import Link from 'next/link';

import { FaLinkedinIn, FaGithub, FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
    {
        icon: <FaLinkedinIn />,
        path: 'https://www.linkedin.com/in/sk131/',
    },
    {
        icon: <FaGithub />,
        path: 'https://www.github.com/sumitkanu',
    },
    {
        icon: <FaGraduationCap />,
        path: 'https://scholar.google.com/citations?user=MSnx15UAAAAJ&hl=en&num=20&oi=sra'
    },
    {
        icon: <MdEmail />,
        path: 'mailto:kanu.s@northeastern.edu'
    }
    // {
    //     icon: <FaYoutube />,
    //     path: 'https://youtube.com/@sumitkanu7893?si=lTGVr6jvha0tVIhG'
    // }
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link 
                        key={index} 
                        href={social.path} 
                        className={iconStyles} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
