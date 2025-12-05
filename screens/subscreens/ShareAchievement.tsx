import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ShareAchievement = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-screen bg-background-dark">
             <div className="flex items-center p-4 justify-between">
                <button onClick={() => navigate('/dashboard')}><span className="material-symbols-outlined text-white">close</span></button>
                <h2 className="text-white font-bold">Chia sẻ thành tích</h2>
                <span className="text-primary font-bold">Đăng</span>
            </div>

            <div className="flex-1 p-4">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800">
                    <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{backgroundImage: 'url("https://picsum.photos/seed/map/600/800")'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                        <h1 className="text-3xl font-bold text-white mb-4">Hoàn thành Marathon</h1>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                                <p className="text-gray-300 text-xs">Quãng đường</p>
                                <p className="text-white font-bold text-xl">42.1 km</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
                                <p className="text-gray-300 text-xs">Thời gian</p>
                                <p className="text-white font-bold text-xl">04:30:15</p>
                            </div>
                             <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg col-span-2">
                                <p className="text-gray-300 text-xs">Calo</p>
                                <p className="text-white font-bold text-xl">3000 kcal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="material-symbols-outlined text-white">directions_run</span>
                             <span className="text-white font-bold text-sm">Health Anpha</span>
                        </div>
                    </div>
                </div>

                <div className="flex mt-4 gap-3">
                    <img src="https://picsum.photos/100" className="w-10 h-10 rounded-full" />
                    <textarea className="flex-1 bg-surface-dark rounded-xl p-3 text-white text-sm h-20 resize-none border-none focus:ring-1 focus:ring-primary" placeholder="Bạn cảm thấy thế nào về buổi tập này?"></textarea>
                </div>

                <div className="mt-6">
                    <p className="text-gray-400 text-sm mb-3">Chia sẻ lên</p>
                    <div className="flex gap-4">
                        {['chat_bubble', 'facebook', 'send', 'more_horiz'].map((icon, i) => (
                            <button key={i} className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">{icon}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}