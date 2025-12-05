import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WaterTracker = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col min-h-screen bg-background-dark">
            <div className="flex items-center p-4 justify-between">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white text-lg font-bold">Theo dõi Nước</h2>
                <span className="material-symbols-outlined text-white">settings</span>
            </div>

            <div className="flex justify-center p-6">
                <div className="relative w-64 h-64 flex items-center justify-center">
                     <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 36 36">
                        <path className="stroke-gray-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="2"></path>
                        <path className="stroke-blue-500" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-blue-500 text-4xl">water_drop</span>
                        <p className="text-4xl font-bold text-white mt-2">1500</p>
                        <p className="text-gray-400">/2000 ml</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 px-4">
                {[200, 350, 500].map(amt => (
                    <button key={amt} className="px-6 py-2 rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-colors">
                        +{amt}ml
                    </button>
                ))}
            </div>

            <div className="p-4 mt-6">
                 <button className="w-full h-14 bg-blue-600 rounded-xl text-white font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">add</span> Thêm tùy chỉnh
                 </button>
            </div>

            <div className="flex-1 bg-surface-dark rounded-t-3xl p-6 mt-4">
                <h3 className="text-white font-bold text-lg mb-4">Lịch sử hôm nay</h3>
                <div className="space-y-3">
                    {[
                        {amt: '500 ml', time: '12:30'},
                        {amt: '350 ml', time: '10:45'},
                        {amt: '200 ml', time: '09:15'}
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-background-dark rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                    <span className="material-symbols-outlined">water_drop</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold">{item.amt}</p>
                                    <p className="text-gray-500 text-xs">Lúc {item.time}</p>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-gray-600">more_vert</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}