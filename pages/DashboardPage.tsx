import React, { useState } from 'react';
import Header from '../components/Header';
import ConnectServices from '../components/ConnectServices';
import VideoPicker from '../components/VideoPicker';
import ContentQueue from '../components/ContentQueue';
import Scheduler from '../components/Scheduler';
import Notification from '../components/Notification';
import { Video, QueuedItem } from '../types';

interface DashboardPageProps {
    onLogout: () => void;
}

type NotificationType = {
    message: string;
    type: 'success' | 'error';
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
    const [isDriveConnected, setIsDriveConnected] = useState(false);
    const [isInstagramConnected, setIsInstagramConnected] = useState(false);
    const [isConnectingDrive, setIsConnectingDrive] = useState(false);
    const [isConnectingInsta, setIsConnectingInsta] = useState(false);
    const [isSavingSchedule, setIsSavingSchedule] = useState(false);
    
    const [queuedItems, setQueuedItems] = useState<QueuedItem[]>([]);
    const [notification, setNotification] = useState<NotificationType | null>(null);

    const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleConnectDrive = () => {
        setIsConnectingDrive(true);
        setTimeout(() => {
            setIsDriveConnected(true);
            setIsConnectingDrive(false);
            showNotification('Google Drive connected successfully!');
        }, 2000);
    };

    const handleConnectInstagram = () => {
        setIsConnectingInsta(true);
        setTimeout(() => {
            setIsInstagramConnected(true);
            setIsConnectingInsta(false);
            showNotification('Instagram connected successfully!');
        }, 2000);
    };

    const handleSaveSchedule = () => {
        setIsSavingSchedule(true);
        setTimeout(() => {
            setIsSavingSchedule(false);
            showNotification('Schedule saved successfully!');
        }, 2000);
    };

    const handleAddToQueue = (video: Video) => {
        if (queuedItems.find(item => item.video.id === video.id)) return;
        
        const newItem: QueuedItem = {
            id: `queue-${Date.now()}`,
            video,
            caption: `My awesome new reel! #${video.name.replace(/\s+/g, '').toLowerCase()}`,
            hashtags: '#reels #awesome #newpost',
        };
        setQueuedItems(prev => [...prev, newItem]);
        showNotification(`${video.name} added to queue.`);
    };

    const handleUpdateQueueItem = (updatedItem: QueuedItem) => {
        setQueuedItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
    };

    const handleRemoveFromQueue = (itemId: string) => {
        setQueuedItems(prev => prev.filter(item => item.id !== itemId));
    };
    
    const allServicesConnected = isDriveConnected && isInstagramConnected;

    return (
        <div className="flex flex-col min-h-screen">
            <Header onLogout={onLogout} />
            {notification && <Notification message={notification.message} type={notification.type} onDismiss={() => setNotification(null)} />}
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
                {!allServicesConnected ? (
                    <ConnectServices
                        isDriveConnected={isDriveConnected}
                        isInstagramConnected={isInstagramConnected}
                        onConnectDrive={handleConnectDrive}
                        onConnectInstagram={handleConnectInstagram}
                        isConnectingDrive={isConnectingDrive}
                        isConnectingInsta={isConnectingInsta}
                    />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
                        <div className="lg:col-span-2 space-y-8">
                            <VideoPicker onAddToQueue={handleAddToQueue} queuedItems={queuedItems} />
                            <ContentQueue 
                                items={queuedItems} 
                                onUpdateItem={handleUpdateQueueItem}
                                onRemoveItem={handleRemoveFromQueue}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            <Scheduler onSave={handleSaveSchedule} isSaving={isSavingSchedule} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default DashboardPage;
