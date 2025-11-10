
import React from 'react';

const IconInstagram: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="instaGradient" cx="0.3" cy="1" r="1">
                <stop offset="0%" stopColor="#F58529"/>
                <stop offset="50%" stopColor="#DD2A7B"/>
                <stop offset="100%" stopColor="#8134AF"/>
            </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instaGradient)"/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5 7.5V7.501" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default IconInstagram;
