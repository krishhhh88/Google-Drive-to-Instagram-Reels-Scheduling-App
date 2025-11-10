import React from 'react';
import IconGoogleDrive from './icons/IconGoogleDrive';
import IconInstagram from './icons/IconInstagram';
import IconExternalLink from './icons/IconExternalLink';
import IconSpinner from './icons/IconSpinner';

interface ConnectServicesProps {
    isDriveConnected: boolean;
    isInstagramConnected: boolean;
    onConnectDrive: () => void;
    onConnectInstagram: () => void;
    isConnectingDrive: boolean;
    isConnectingInsta: boolean;
}

const ServiceCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    isConnected: boolean;
    isConnecting: boolean;
    onConnect: () => void;
    learnMoreLink: string;
}> = ({ icon, title, description, isConnected, isConnecting, onConnect, learnMoreLink }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
                 <a href={learnMoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-brand-blue hover:underline mt-2">
                    Learn more <IconExternalLink className="ml-1 w-3 h-3" />
                </a>
            </div>
            {isConnected ? (
                <div className="flex items-center space-x-2 text-green-500 font-semibold">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Connected</span>
                </div>
            ) : (
                <button
                    onClick={onConnect}
                    disabled={isConnecting}
                    className="flex items-center justify-center w-32 px-6 py-2 bg-brand-blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {isConnecting ? <IconSpinner /> : 'Connect'}
                </button>
            )}
        </div>
    );
};


const ConnectServices: React.FC<ConnectServicesProps> = ({ isDriveConnected, isInstagramConnected, onConnectDrive, onConnectInstagram, isConnectingDrive, isConnectingInsta }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">Setup Your Workflow</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Connect your accounts to get started. We only request permissions to view and download your videos.</p>

            <div className="space-y-6">
                <ServiceCard
                    icon={<IconGoogleDrive className="w-12 h-12"/>}
                    title="Step 1: Connect Google Drive"
                    description="Allow access to view and download video files from your Google Drive."
                    isConnected={isDriveConnected}
                    isConnecting={isConnectingDrive}
                    onConnect={onConnectDrive}
                    learnMoreLink="https://developers.google.com/drive/api/guides/api-specific-auth"
                />
                <ServiceCard
                    icon={<IconInstagram className="w-12 h-12"/>}
                    title="Step 2: Connect Instagram"
                    description="Authorize posting Reels to your Instagram Business or Creator account."
                    isConnected={isInstagramConnected}
                    isConnecting={isConnectingInsta}
                    onConnect={onConnectInstagram}
                    learnMoreLink="https://developers.facebook.com/docs/instagram-api/"
                />
            </div>
        </div>
    );
};

export default ConnectServices;
