import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ActiveWorkout = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(45);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval: any = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(t => t - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            navigate('/share');
        }
        return () => clearInterval(interval);
    }, [isActive, time, navigate]);

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    return (
        <div className="flex flex-col h-screen bg-background-dark items-center justify-between p-6">
            <div className="w-full flex justify-between items-center">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white font-bold">Chạy bộ tại chỗ</h2>
                <span className="material-symbols-outlined text-white">more_horiz</span>
            </div>

            <div className="relative w-64 h-64 flex items-center justify-center">
                 <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="stroke-gray-800" cx="50" cy="50" fill="none" r="45" strokeWidth="6"></circle>
                    <circle 
                        className="stroke-primary transition-all duration-1000 ease-linear" 
                        cx="50" cy="50" 
                        fill="none" 
                        r="45" 
                        strokeDasharray="283" 
                        strokeDashoffset={283 - (283 * time / 45)} 
                        strokeWidth="6" 
                        strokeLinecap="round"
                    ></circle>
                </svg>
                <div className="text-center">
                    <p className="text-gray-400 font-medium">Hiệp 1/3</p>
                    <p className="text-6xl font-bold text-white tracking-tighter">{formatTime(time)}</p>
                </div>
            </div>

            <div className="w-full space-y-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Tiến trình</span>
                    <span className="text-white font-bold">1/4 bài tập</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full">
                    <div className="h-full bg-primary w-1/4 rounded-full"></div>
                </div>

                <div className="bg-surface-dark p-4 rounded-xl flex justify-between items-center">
                    <div>
                        <p className="text-gray-400 text-xs uppercase">Tiếp theo: Nghỉ</p>
                        <p className="text-white font-bold text-lg">30 giây</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">skip_next</span>
                    </button>
                </div>

                <div className="flex justify-center items-center gap-8 pt-4">
                     <button className="w-16 h-16 rounded-full bg-gray-700 text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">stop</span>
                    </button>
                    <button 
                        onClick={() => setIsActive(!isActive)}
                        className="w-20 h-20 rounded-full bg-primary text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                    >
                        <span className={`material-symbols-outlined text-4xl fill`}>{isActive ? 'pause' : 'play_arrow'}</span>
                    </button>
                    <button className="w-16 h-16 rounded-full bg-gray-700 text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">skip_next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}