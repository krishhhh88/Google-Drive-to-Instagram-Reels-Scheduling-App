import React from 'react';

const IconGoogle: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 23.4 172.9 61.9l-76.3 76.3c-24.3-21.5-56.6-34.5-96.6-34.5-74.8 0-136.5 61.7-136.5 137.2s61.7 137.2 136.5 137.2c79.9 0 119.5-57.5 124.1-82.6H248v-95.6h239.9c1.4 12.3 2.1 24.8 2.1 37.8z"></path>
    </svg>
);

export default IconGoogle;
