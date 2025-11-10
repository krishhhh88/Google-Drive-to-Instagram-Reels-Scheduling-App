import React, { useState, useEffect, useMemo } from 'react';
import { Video, QueuedItem } from '../types';
import IconPlus from './icons/IconPlus';
import VideoCardSkeleton from './VideoCardSkeleton';

interface VideoPickerProps {
    onAddToQueue: (video: Video) => void;
    queuedItems: QueuedItem[];
}

const mockVideos: Video[] = [
    { id: 'vid1', name: 'Summer Vacation Highlights.mp4', thumbnailUrl: 'https://picsum.photos/seed/vid1/400/300', duration: 58 },
    { id: 'vid2', name: 'Mountain Biking Adventure.mov', thumbnailUrl: 'https://picsum.photos/seed/vid2/400/300', duration: 45 },
    { id: 'vid3', name: 'Cooking a new Recipe.mp4', thumbnailUrl: 'https://picsum.photos/seed/vid3/400/300', duration: 33 },
    { id: 'vid4', name: 'My Cat\'s Funniest Moments.mp4', thumbnailUrl: 'https://picsum.photos/seed/vid4/400/300', duration: 25 },
    { id: 'vid5', name: 'City Timelapse.mov', thumbnailUrl: 'https://picsum.photos/seed/vid5/400/300', duration: 60 },
    { id: 'vid6', name: 'Workout Routine.mp4', thumbnailUrl: 'https://picsum.photos/seed/vid6/400/300', duration: 52 },
];

const VideoCard: React.FC<{ video: Video; onAddToQueue: (video: Video) => void; isQueued: boolean; }> = ({ video, onAddToQueue, isQueued }) => {
    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <img src={video.thumbnailUrl} alt={video.name} className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <button 
                    onClick={() => onAddToQueue(video)} 
                    disabled={isQueued}
                    className="flex items-center px-4 py-2 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-gray-600 transition-colors"
                 >
                    {isQueued ? (
                        <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Queued
                        </>
                    ) : (
                        <>
                        <IconPlus className="mr-2" />
                        Add to Queue
                        </>
                    )}
                </button>
            </div>
            <div className="p-3">
                <p className="text-sm font-medium text-gray-800 dark:text-white truncate" title={video.name}>{video.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{Math.floor(video.duration / 60)}m {video.duration % 60}s</p>
            </div>
        </div>
    );
}

const VideoPicker: React.FC<VideoPickerProps> = ({ onAddToQueue, queuedItems }) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const queuedVideoIds = useMemo(() => 
        new Set(queuedItems.map(item => item.video.id)), 
        [queuedItems]
    );

    useEffect(() => {
        setIsLoading(true);
        // Simulate fetching videos from Google Drive API
        const timer = setTimeout(() => {
            setVideos(mockVideos);
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Source: Google Drive</h2>
            <div className="mb-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-300">
                Watching folder: <span className="font-semibold text-brand-blue">/Instagram Reels/</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, index) => <VideoCardSkeleton key={index} />)
                ) : (
                    videos.map(video => (
                        <VideoCard key={video.id} video={video} onAddToQueue={onAddToQueue} isQueued={queuedVideoIds.has(video.id)} />
                    ))
                )}
            </div>
        </div>
    );
};

export default VideoPicker;