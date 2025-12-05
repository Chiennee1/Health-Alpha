import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotifItem = ({ type, text, time, icon, color, actions }: any) => (
    <div className="flex flex-col gap-2 p-4 border-b border-gray-800 last:border-0">
        <div className="flex gap-4">
             <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: `${color}20`}}>
                 <span className="material-symbols-outlined" style={{color: color}}>{icon}</span>
             </div>
             <div className="flex-1">
                 <p className="text-white text-sm font-medium leading-tight">{text}</p>
                 <p className="text-gray-500 text-xs mt-1">{time}</p>
             </div>
        </div>
        {actions && (
            <div className="flex justify-end gap-3 mt-1">
                <button className="px-4 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-bold">Từ chối</button>
                <button className="px-4 py-1.5 bg-primary text-black rounded-lg text-xs font-bold">Chấp nhận</button>
            </div>
        )}
    </div>
)

export const NotificationList = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-background-dark">
             <div className="flex items-center p-4 justify-between sticky top-0 bg-background-dark z-10">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white font-bold">Thông báo</h2>
                <span className="material-symbols-outlined text-white">settings</span>
            </div>

            <div className="px-4 pb-2">
                <div className="flex bg-gray-800 rounded-lg p-1">
                    <button className="flex-1 py-1.5 bg-gray-700 rounded text-white text-sm font-medium shadow">Tất cả</button>
                    <button className="flex-1 py-1.5 text-gray-400 text-sm font-medium">Chưa đọc</button>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="text-white font-bold px-4 py-2 mt-2">Mới</h3>
                <NotifItem icon="group_add" text="Thanh Mai vừa gửi lời mời kết bạn." time="5 phút trước" color="#13ec5b" actions={true} />
                <NotifItem icon="directions_run" text="Bạn đã hoàn thành mục tiêu số bước!" time="30 phút trước" color="#13ec5b" />
                <NotifItem icon="water_drop" text="Đã đến lúc uống nước!" time="1 giờ trước" color="#3b82f6" />

                <h3 className="text-white font-bold px-4 py-2 mt-4">Tuần này</h3>
                <NotifItem icon="summarize" text="Báo cáo tuần của bạn đã sẵn sàng." time="Hôm qua" color="#eab308" />
            </div>
        </div>
    )
}