
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToggleItem = ({ label, checked }: any) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 last:border-0">
        <span className="text-white">{label}</span>
        <div className={`w-12 h-7 rounded-full relative transition-colors ${checked ? 'bg-primary' : 'bg-gray-700'}`}>
            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${checked ? 'right-1' : 'left-1'}`}></div>
        </div>
    </div>
)

export const NotificationSettings = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-background-dark">
             <div className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-dark">
                <button onClick={() => navigate('/profile')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-white">arrow_back_ios_new</span>
                </button>
                <h2 className="text-white font-bold">Cài đặt Thông báo</h2>
                <span className="text-primary font-bold cursor-pointer">Lưu</span>
            </div>

            <div className="flex-1 overflow-y-auto">
                <h3 className="text-white font-bold px-4 mt-4 mb-2">Loại thông báo</h3>
                <div className="mx-4 bg-surface-dark rounded-xl overflow-hidden">
                    <ToggleItem label="Lời nhắc tập luyện" checked={true} />
                    <ToggleItem label="Cập nhật bạn bè" checked={true} />
                    <ToggleItem label="Thành tích mới" checked={false} />
                </div>

                <h3 className="text-white font-bold px-4 mt-6 mb-2">Tùy chỉnh</h3>
                 <div className="mx-4 bg-surface-dark rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-gray-800">
                        <span className="text-white">Tần suất</span>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Thường xuyên</span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                     <div className="flex items-center justify-between p-4">
                        <span className="text-white">Âm thanh</span>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Mặc định</span>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
