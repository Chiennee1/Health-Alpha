
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const WorkoutSetup = () => {
    const navigate = useNavigate();
    const [duration, setDuration] = useState(30);

    return (
        <div className="flex flex-col h-full bg-background-dark relative">
             <div className="flex items-center p-4 justify-between sticky top-0 z-20 bg-background-dark">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined text-white text-2xl">close</span>
                </button>
                <h2 className="text-white font-bold text-lg">Bắt đầu tập luyện</h2>
                <div className="w-10"></div>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto pb-24">
                <div>
                    <h3 className="text-gray-400 font-bold mb-3">Loại hình tập luyện</h3>
                    <div className="grid grid-cols-4 gap-3">
                        {['directions_run', 'directions_walk', 'directions_bike', 'fitness_center'].map((icon, i) => (
                             <button key={i} className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-2 border-2 ${i===0 ? 'bg-primary/20 border-primary text-primary' : 'bg-surface-dark border-transparent text-gray-400'}`}>
                                <span className="material-symbols-outlined text-3xl">{icon}</span>
                                <span className="text-xs font-medium">{['Chạy bộ','Đi bộ','Đạp xe','Gym'][i]}</span>
                             </button>
                        ))}
                    </div>
                </div>

                <div className="bg-surface-dark rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-primary">timer</span>
                        <span className="text-white font-medium">Mục tiêu thời gian</span>
                    </div>
                    <p className="text-5xl font-bold text-white mb-6">{duration}:00</p>
                    <input 
                        type="range" min="5" max="90" step="5" value={duration} 
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                </div>

                <div className="space-y-3">
                     <div className="bg-surface-dark p-4 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-symbols-outlined text-gray-400">music_note</span>
                            <span>Âm nhạc</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Spotify</span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                    <div className="bg-surface-dark p-4 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-3 text-white">
                            <span className="material-symbols-outlined text-gray-400">volume_up</span>
                            <span>Hướng dẫn giọng nói</span>
                        </div>
                         <div className="w-12 h-6 bg-primary rounded-full relative">
                             <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                         </div>
                    </div>
                </div>

                <button 
                    onClick={() => navigate('/workout-active')}
                    className="w-full h-14 bg-primary text-black font-bold rounded-full text-lg shadow-lg mt-auto"
                >
                    Bắt đầu
                </button>
            </div>
        </div>
    )
}
