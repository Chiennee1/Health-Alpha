import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeviceItem = ({ icon, name, status, action }: any) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 last:border-0">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <div>
                <p className="text-white font-medium">{name}</p>
                <p className={`text-sm ${status === 'Đã kết nối' ? 'text-primary' : 'text-gray-500'}`}>{status}</p>
            </div>
        </div>
        {action ? (
             <button className="bg-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-bold">Kết nối</button>
        ) : (
             <span className="material-symbols-outlined text-gray-500">chevron_right</span>
        )}
    </div>
)

export const ConnectedDevices = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-background-dark">
             <div className="flex items-center p-4 justify-between">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white font-bold">Thiết bị đã kết nối</h2>
                <button onClick={() => navigate('/device-pairing')}><span className="material-symbols-outlined text-white">add</span></button>
            </div>

            <h3 className="text-white font-bold px-4 mt-4 mb-2">Thiết bị của tôi</h3>
            <div className="mx-4 bg-surface-dark rounded-xl overflow-hidden">
                <DeviceItem icon="watch" name="Alpha Watch S2" status="Đã kết nối" />
                <DeviceItem icon="fitness_center" name="Alpha Band Lite" status="Đã ngắt kết nối" />
            </div>

            <h3 className="text-white font-bold px-4 mt-6 mb-2">Thiết bị khác</h3>
            <div className="mx-4 bg-surface-dark rounded-xl overflow-hidden">
                <DeviceItem icon="scale" name="Cân thông minh Alpha" status="Chưa kết nối" action={true} />
                <DeviceItem icon="blood_pressure" name="Máy đo huyết áp" status="Chưa kết nối" action={true} />
            </div>
        </div>
    )
}