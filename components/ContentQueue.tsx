
import React from 'react';
import { QueuedItem } from '../types';
import IconTrash from './icons/IconTrash';

interface ContentQueueProps {
    items: QueuedItem[];
    onUpdateItem: (item: QueuedItem) => void;
    onRemoveItem: (itemId: string) => void;
}

const QueueItemCard: React.FC<{
    item: QueuedItem;
    onUpdateItem: (item: QueuedItem) => void;
    onRemoveItem: (itemId: string) => void;
}> = ({ item, onUpdateItem, onRemoveItem }) => {
    const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onUpdateItem({ ...item, caption: e.target.value });
    };

    const handleHashtagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateItem({ ...item, hashtags: e.target.value });
    };

    return (
        <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src={item.video.thumbnailUrl} alt={item.video.name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md flex-shrink-0"/>
            <div className="flex-grow">
                <p className="font-semibold text-gray-800 dark:text-white truncate">{item.video.name}</p>
                <div className="mt-2">
                    <label htmlFor={`caption-${item.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Caption</label>
                    <textarea 
                        id={`caption-${item.id}`} 
                        rows={3} 
                        value={item.caption}
                        onChange={handleCaptionChange}
                        className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    ></textarea>
                </div>
                 <div className="mt-2">
                    <label htmlFor={`hashtags-${item.id}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hashtags</label>
                    <input 
                        type="text"
                        id={`hashtags-${item.id}`} 
                        value={item.hashtags}
                        onChange={handleHashtagsChange}
                        className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:ring-brand-purple focus:border-brand-purple text-sm"
                    />
                </div>
            </div>
            <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0">
                <IconTrash className="w-5 h-5" />
            </button>
        </div>
    );
};


const ContentQueue: React.FC<ContentQueueProps> = ({ items, onUpdateItem, onRemoveItem }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Content Queue ({items.length})</h2>
            {items.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400">Your queue is empty.</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">Select videos from Google Drive to add them here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {items.map(item => (
                        <QueueItemCard 
                            key={item.id} 
                            item={item}
                            onUpdateItem={onUpdateItem}
                            onRemoveItem={onRemoveItem}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContentQueue;
