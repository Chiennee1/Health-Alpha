
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EditProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-full bg-background-dark">
            {/* Header */}
            <div className="flex items-center p-4 justify-between border-b border-gray-800 bg-background-dark sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="text-white">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h2 className="text-white font-bold text-lg">Chỉnh sửa hồ sơ</h2>
                <button onClick={() => navigate('/profile')} className="text-primary font-bold">Lưu</button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                {/* Avatar */}
                <div className="flex flex-col items-center mb-8 mt-4">
                    <div className="relative">
                        <img src="https://picsum.photos/200" className="w-28 h-28 rounded-full border-4 border-surface-dark object-cover" />
                        <button className="absolute bottom-0 right-0 bg-primary w-8 h-8 rounded-full flex items-center justify-center text-black border-2 border-background-dark shadow-sm">
                            <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm mt-3">Thay đổi ảnh đại diện</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm font-medium ml-1">Họ và tên</label>
                        <input 
                            type="text" 
                            defaultValue="An Nguyễn" 
                            className="w-full bg-surface-dark border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm font-medium ml-1">Giới thiệu</label>
                        <textarea 
                            rows={3}
                            placeholder="Chia sẻ đôi chút về bản thân..."
                            className="w-full bg-surface-dark border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none resize-none transition-colors"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm font-medium ml-1">Chiều cao (cm)</label>
                            <input 
                                type="number" 
                                defaultValue="175" 
                                className="w-full bg-surface-dark border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm font-medium ml-1">Cân nặng (kg)</label>
                            <input 
                                type="number" 
                                defaultValue="70" 
                                className="w-full bg-surface-dark border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm font-medium ml-1">Tuổi</label>
                            <input 
                                type="number" 
                                defaultValue="28" 
                                className="w-full bg-surface-dark border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-primary focus:outline-none transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-400 text-sm font-medium ml-1">Giới tính</label>
                            <div className="flex bg-surface-dark rounded-xl p-1 border border-gray-700 h-[50px]">
                                <button className="flex-1 rounded-lg bg-gray-600 text-white font-medium text-sm shadow-sm">Nam</button>
                                <button className="flex-1 rounded-lg text-gray-400 font-medium text-sm hover:text-white transition-colors">Nữ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
