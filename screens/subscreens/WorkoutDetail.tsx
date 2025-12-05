import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WorkoutDetail = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-screen bg-background-dark">
             <div className="relative h-64 w-full shrink-0">
                 <img src="https://picsum.photos/seed/workout/600/400" className="w-full h-full object-cover" />
                 <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate('/workout');
                    }} 
                    className="absolute top-4 left-4 w-10 h-10 bg-black/50 rounded-lg flex items-center justify-center text-white backdrop-blur-sm z-20 cursor-pointer hover:bg-black/70 transition-colors"
                 >
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                 </button>
                 <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center pointer-events-auto">
                        <span className="material-symbols-outlined text-4xl text-white fill">play_arrow</span>
                    </button>
                 </div>
             </div>

             <div className="flex-1 p-5 flex flex-col overflow-y-auto">
                <h1 className="text-2xl font-bold text-white">Chạy bộ tại chỗ</h1>
                <p className="text-gray-400 mt-1">Cardio, Chân</p>

                <div className="grid grid-cols-3 gap-3 my-6 shrink-0">
                    <div className="bg-surface-dark p-3 rounded-xl text-center">
                        <p className="text-gray-400 text-xs uppercase">Số hiệp</p>
                        <p className="text-white font-bold text-xl">x3</p>
                    </div>
                    <div className="bg-surface-dark p-3 rounded-xl text-center">
                        <p className="text-gray-400 text-xs uppercase">Số lần</p>
                        <p className="text-white font-bold text-xl">x12</p>
                    </div>
                    <div className="bg-surface-dark p-3 rounded-xl text-center">
                        <p className="text-gray-400 text-xs uppercase">Nghỉ</p>
                        <p className="text-white font-bold text-xl">30s</p>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="text-white font-bold mb-2">Hướng dẫn</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Đứng thẳng, hai chân rộng bằng vai. Bắt đầu chạy tại chỗ, nâng cao gối và đánh tay tự nhiên. Giữ nhịp thở đều và duy trì tốc độ ổn định.
                    </p>
                </div>

                <div className="pt-4 pb-6 mt-auto">
                    <button 
                        onClick={() => navigate('/workout-active')}
                        className="w-full h-14 bg-primary text-black font-bold rounded-full text-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
                    >
                        Hoàn thành
                    </button>
                </div>
             </div>
        </div>
    )
}