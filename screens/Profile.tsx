
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingItem = ({ icon, label, value, onClick, isDestructive = false }: any) => (
    <button onClick={onClick} className="flex items-center justify-between w-full p-4 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDestructive ? 'bg-red-500/10 text-red-500' : 'bg-primary/20 text-white'}`}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <span className={`text-base ${isDestructive ? 'text-red-500' : 'text-white'}`}>{label}</span>
        </div>
        <div className="flex items-center gap-2">
            {value && <span className="text-gray-500">{value}</span>}
            {!isDestructive && <span className="material-symbols-outlined text-gray-500">chevron_right</span>}
        </div>
    </button>
)

export const ProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between">
        <span className="material-symbols-outlined text-white">arrow_back_ios_new</span>
        <h2 className="text-white text-lg font-bold">Hồ sơ</h2>
        <span className="text-primary font-bold">Lưu</span>
      </div>

      <div className="flex flex-col items-center py-6">
        <img src="https://picsum.photos/200" className="w-24 h-24 rounded-full border-4 border-surface-dark" />
        <h2 className="text-white text-xl font-bold mt-3">An Nguyễn</h2>
        <button onClick={() => navigate('/edit-profile')} className="text-primary text-sm font-medium mt-1 hover:text-primary/80 transition-colors">
            Chỉnh sửa hồ sơ
        </button>
      </div>

      <div className="px-4 pb-6 space-y-6">
        
        <div>
            <h3 className="text-white font-bold mb-2 ml-1">Thông tin cá nhân</h3>
            <div className="bg-surface-dark rounded-xl overflow-hidden">
                <SettingItem icon="height" label="Chiều cao" value="175 cm" />
                <SettingItem icon="monitor_weight" label="Cân nặng" value="70 kg" />
                <SettingItem icon="cake" label="Tuổi" value="28" />
            </div>
        </div>

        <div>
            <h3 className="text-white font-bold mb-2 ml-1">Cài đặt & Quản lý</h3>
            <div className="bg-surface-dark rounded-xl overflow-hidden">
                <SettingItem icon="notifications" label="Thông báo" onClick={() => navigate('/notification-settings')} />
                <SettingItem icon="watch" label="Thiết bị đã kết nối" onClick={() => navigate('/devices')} />
                <SettingItem icon="language" label="Ngôn ngữ" value="Tiếng Việt" />
            </div>
        </div>

        <div className="bg-surface-dark rounded-xl overflow-hidden">
             <SettingItem icon="logout" label="Đăng xuất" isDestructive={true} onClick={() => navigate('/')} />
        </div>
      </div>
    </div>
  );
};
