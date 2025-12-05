import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const DevicePairing = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Intro, 2: Scanning, 3: Success

    useEffect(() => {
        if (step === 2) {
            const timer = setTimeout(() => setStep(3), 3000); // Simulate scanning
            return () => clearTimeout(timer);
        }
    }, [step]);

    return (
        <div className="flex flex-col h-screen bg-background-dark">
             <div className="flex items-center p-4 justify-between">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white font-bold">
                    {step === 1 ? 'Ghép nối Thiết bị Mới' : step === 2 ? 'Kết nối Thiết bị' : 'Xác nhận'}
                </h2>
                {step === 2 && <span className="text-primary font-bold text-sm">Làm mới</span>}
                {step !== 2 && <div className="w-6"></div>}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                {step === 1 && (
                    <>
                        <img src="https://picsum.photos/seed/watch/300" className="w-48 h-48 object-contain mb-8 opacity-80" />
                        <h1 className="text-2xl font-bold text-white mb-6">Hãy kết nối thiết bị Health Anpha</h1>
                        <div className="w-full space-y-4 text-left">
                            <div className="flex gap-4 p-4 bg-surface-dark rounded-xl">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><span className="material-symbols-outlined">power_settings_new</span></div>
                                <div><p className="text-white font-medium">Bước 1: Bật nguồn</p><p className="text-gray-400 text-xs">Đảm bảo thiết bị đã bật.</p></div>
                            </div>
                             <div className="flex gap-4 p-4 bg-surface-dark rounded-xl">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><span className="material-symbols-outlined">bluetooth</span></div>
                                <div><p className="text-white font-medium">Bước 2: Bật Bluetooth</p><p className="text-gray-400 text-xs">Bật Bluetooth trên điện thoại.</p></div>
                            </div>
                        </div>
                        <button onClick={() => setStep(2)} className="w-full bg-primary text-black font-bold h-14 rounded-xl mt-auto mb-4">Bắt đầu</button>
                    </>
                )}

                {step === 2 && (
                    <>
                         <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                             <div className="absolute inset-0 border-4 border-dashed border-primary rounded-full animate-spin-slow"></div>
                             <span className="material-symbols-outlined text-primary text-5xl">bluetooth_searching</span>
                         </div>
                         <h2 className="text-white text-xl font-bold mb-2">Đang tìm kiếm thiết bị...</h2>
                         <p className="text-gray-400 text-sm mb-8">Vui lòng đợi trong giây lát</p>
                         
                         <div className="w-full space-y-3">
                            <div className="bg-surface-dark p-4 rounded-xl flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary"><span className="material-symbols-outlined">watch</span></div>
                                <div className="text-left flex-1">
                                    <p className="text-white font-bold">Anpha Watch 5 Pro</p>
                                    <p className="text-gray-400 text-xs">Đồng hồ thông minh</p>
                                </div>
                                <button onClick={() => setStep(3)} className="bg-primary text-black text-xs font-bold px-4 py-2 rounded-full">Kết nối</button>
                            </div>
                         </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-7xl">check_circle</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Ghép nối thành công!</h1>
                        <p className="text-gray-400 mb-8">Thiết bị đã sẵn sàng sử dụng.</p>
                        
                        <div className="w-full max-w-xs bg-surface-dark border border-white/10 rounded-xl p-4 mb-auto">
                             <p className="text-gray-500 text-xs font-bold uppercase mb-2">Thiết bị đã kết nối</p>
                             <div className="flex items-center gap-3">
                                 <span className="material-symbols-outlined text-primary text-3xl">watch</span>
                                 <span className="text-white font-bold">Anpha Watch 5 Pro</span>
                             </div>
                        </div>

                        <div className="w-full space-y-3">
                             <button onClick={() => navigate('/devices')} className="w-full bg-primary text-black font-bold h-14 rounded-xl">Hoàn tất</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}