import React, { useState, useCallback } from 'react';
import { Schedule, DayOfWeek } from '../types';
import IconPlus from './icons/IconPlus';
import IconTrash from './icons/IconTrash';
import IconSpinner from './icons/IconSpinner';

interface SchedulerProps {
    onSave: () => void;
    isSaving: boolean;
}

const initialSchedule: Schedule = {
    Sunday: { enabled: false, times: [] },
    Monday: { enabled: true, times: ["09:00", "17:00"] },
    Tuesday: { enabled: true, times: ["09:00", "17:00"] },
    Wednesday: { enabled: true, times: ["09:00", "17:00"] },
    Thursday: { enabled: true, times: ["09:00", "17:00"] },
    Friday: { enabled: true, times: ["09:00", "12:00"] },
    Saturday: { enabled: false, times: [] },
};

const DAYS_OF_WEEK: DayOfWeek[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DaySchedule: React.FC<{
    day: DayOfWeek,
    config: { enabled: boolean, times: string[] },
    onToggle: (day: DayOfWeek) => void,
    onAddTime: (day: DayOfWeek, time: string) => void,
    onRemoveTime: (day: DayOfWeek, index: number) => void
}> = React.memo(({ day, config, onToggle, onAddTime, onRemoveTime }) => {
    const [newTime, setNewTime] = useState('10:00');

    const handleAddTime = () => {
        if (newTime && !config.times.includes(newTime)) {
            onAddTime(day, newTime);
        }
    };

    return (
        <div className={`p-4 rounded-md transition-colors ${config.enabled ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800/50'}`}>
            <div className="flex items-center justify-between">
                <label htmlFor={`toggle-${day}`} className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" id={`toggle-${day}`} className="sr-only" checked={config.enabled} onChange={() => onToggle(day)} />
                        <div className={`block w-10 h-6 rounded-full transition-colors ${config.enabled ? 'bg-brand-blue' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${config.enabled ? 'translate-x-4' : ''}`}></div>
                    </div>
                    <div className="ml-3 font-semibold text-gray-700 dark:text-gray-300">{day}</div>
                </label>
            </div>
            {config.enabled && (
                <div className="mt-4 space-y-2 pl-4">
                    {config.times.sort().map((time, index) => (
                        <div key={index} className="flex items-center justify-between bg-white dark:bg-gray-600 p-2 rounded">
                            <span className="text-sm font-mono text-gray-800 dark:text-gray-200">{time}</span>
                            <button onClick={() => onRemoveTime(day, index)} className="text-gray-400 hover:text-red-500">
                                <IconTrash className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                     <div className="flex items-center space-x-2 pt-2">
                        <input 
                            type="time" 
                            value={newTime}
                            onChange={(e) => setNewTime(e.target.value)}
                            className="w-full p-1 border border-gray-300 dark:border-gray-500 rounded-md bg-white dark:bg-gray-600 text-sm"
                        />
                        <button onClick={handleAddTime} className="p-2 bg-brand-blue text-white rounded-md hover:bg-blue-700">
                           <IconPlus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
});

const Scheduler: React.FC<SchedulerProps> = ({ onSave, isSaving }) => {
    const [schedule, setSchedule] = useState<Schedule>(initialSchedule);
    const [timezone, setTimezone] = useState('Asia/Kolkata');

    const handleToggleDay = useCallback((day: DayOfWeek) => {
        setSchedule(prev => ({
            ...prev,
            [day]: { ...prev[day], enabled: !prev[day].enabled }
        }));
    }, []);
    
    const handleAddTime = useCallback((day: DayOfWeek, time: string) => {
        setSchedule(prev => ({
            ...prev,
            [day]: { ...prev[day], times: [...prev[day].times, time] }
        }));
    }, []);

    const handleRemoveTime = useCallback((day: DayOfWeek, timeIndex: number) => {
        setSchedule(prev => ({
            ...prev,
            [day]: { ...prev[day], times: prev[day].times.filter((_, index) => index !== timeIndex) }
        }));
    }, []);


    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scheduling</h2>
            
            <div className="mb-6">
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Timezone</label>
                <select 
                    id="timezone" 
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-brand-purple focus:border-brand-purple sm:text-sm rounded-md"
                >
                    <option>America/New_York (EST)</option>
                    <option>Europe/London (GMT)</option>
                    <option>Asia/Kolkata (IST)</option>
                    <option>Australia/Sydney (AEST)</option>
                </select>
            </div>

            <div className="space-y-4">
               {DAYS_OF_WEEK.map(day => (
                   <DaySchedule
                    key={day}
                    day={day}
                    config={schedule[day]}
                    onToggle={handleToggleDay}
                    onAddTime={handleAddTime}
                    onRemoveTime={handleRemoveTime}
                   />
               ))}
            </div>
             <button 
                onClick={onSave}
                disabled={isSaving}
                className="mt-6 w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple disabled:opacity-75 disabled:cursor-not-allowed"
            >
                {isSaving && <IconSpinner className="w-5 h-5 mr-2" />}
                {isSaving ? 'Saving...' : 'Save Schedule'}
            </button>
        </div>
    );
};

export default Scheduler;