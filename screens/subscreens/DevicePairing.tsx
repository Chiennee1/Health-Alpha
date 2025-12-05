
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const DevicePairing = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1); // 1: Intro, 2: Scanning, 3: Success

    useEffect(() => {
        if (step === 2) {
            const timer = setTimeout(() => setStep(3), 4000); // Simulate scanning
            return () => clearTimeout(timer);
        }
    }, [step]);

    return (
        <div className="flex flex-col h-screen bg-background-dark">
             <div className="flex items-center p-4 justify-between sticky top-0 z-50 bg-background-dark">
                {step === 3 ? (
                    <div className="w-10"></div> // Spacer for layout balance
                ) : (
                    <button onClick={() => navigate('/devices')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-white">arrow_back_ios_new</span>
                    </button>
                )}
                <h2 className="text-white font-bold text-lg">
                    {step === 1 ? 'Ghép nối Thiết bị Mới' : step === 2 ? 'Đang tìm kiếm' : ''}
                </h2>
                {step === 2 && <span className="text-primary font-bold text-sm cursor-pointer">Làm mới</span>}
                {step !== 2 && <div className="w-10"></div>}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                {step === 1 && (
                    <div className="flex flex-col h-full w-full">
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="relative mb-10">
                                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                                <img src="https://picsum.photos/seed/watch/300" className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl" />
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-3">Kết nối thiết bị của bạn</h1>
                            <p className="text-gray-400 text-sm max-w-xs">Theo dõi sức khỏe toàn diện với hệ sinh thái Health Anpha.</p>
                        </div>
                        
                        <div className="w-full space-y-3 mb-6">
                            <div className="flex gap-4 p-4 bg-surface-dark border border-gray-800 rounded-xl items-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined text-xl">power_settings_new</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-white text-sm font-bold">Bước 1: Bật nguồn</p>
                                    <p className="text-gray-400 text-xs">Đảm bảo thiết bị đã được bật.</p>
                                </div>
                            </div>
                             <div className="flex gap-4 p-4 bg-surface-dark border border-gray-800 rounded-xl items-center">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined text-xl">bluetooth</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-white text-sm font-bold">Bước 2: Bật Bluetooth</p>
                                    <p className="text-gray-400 text-xs">Bật Bluetooth trên điện thoại của bạn.</p>
                                </div>
                            </div>
                        </div>
                        <button 
                            onClick={() => setStep(2)} 
                            className="w-full bg-primary text-black font-bold h-14 rounded-full shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                        >
                            Bắt đầu quét
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <>
                         <div className="relative w-64 h-64 flex items-center justify-center mb-12">
                             {/* Pulsing Circles */}
                             <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping"></div>
                             <div className="absolute inset-4 bg-primary/10 rounded-full animate-[ping_2s_linear_infinite]"></div>
                             <div className="absolute inset-12 bg-primary/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
                             
                             <div className="relative z-10 bg-background-dark p-4 rounded-full border border-gray-800 shadow-2xl">
                                <span className="material-symbols-outlined text-primary text-5xl">bluetooth_searching</span>
                             </div>
                         </div>
                         
                         <h2 className="text-white text-2xl font-bold mb-2">Đang tìm thiết bị...</h2>
                         <p className="text-gray-400 text-sm mb-10">Vui lòng giữ thiết bị ở gần điện thoại</p>
                         
                         <div className="w-full space-y-3 animate-[fadeIn_0.5s_ease-out]">
                            <p className="text-left text-gray-500 text-xs font-bold uppercase ml-1 mb-2">Thiết bị tìm thấy</p>
                            <div className="bg-surface-dark p-4 rounded-xl flex items-center gap-4 border border-gray-700 shadow-lg cursor-pointer hover:bg-gray-800 transition-colors" onClick={() => setStep(3)}>
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">watch</span>
                                </div>
                                <div className="text-left flex-1">
                                    <p className="text-white font-bold text-lg">Anpha Watch 5 Pro</p>
                                    <p className="text-primary text-xs">Nhấn để kết nối</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-black text-sm">add</span>
                                </div>
                            </div>
                         </div>
                    </>
                )}

                {step === 3 && (
                    <div className="flex flex-col h-full w-full justify-center items-center animate-[fadeIn_0.5s_ease-out]">
                        <div className="mb-8 relative">
                            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center animate-[bounce_1s_infinite]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(19,236,91,0.5)]">
                                    <span className="material-symbols-outlined text-black text-5xl">check</span>
                                </div>
                            </div>
                        </div>
                        
                        <h1 className="text-3xl font-bold text-white mb-3">Kết nối thành công!</h1>
                        <p className="text-gray-400 mb-12 max-w-xs leading-relaxed">
                            <span className="text-white font-bold">Anpha Watch 5 Pro</span> đã sẵn sàng. Dữ liệu của bạn sẽ được đồng bộ tự động.
                        </p>
                        
                        <div className="w-full space-y-4 mt-auto">
                             <button 
                                onClick={() => navigate('/devices')} 
                                className="w-full bg-primary text-black font-bold h-14 rounded-full shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                             >
                                Hoàn tất
                             </button>
                             <button 
                                onClick={() => navigate('/devices')}
                                className="w-full text-gray-400 font-medium text-sm p-2 hover:text-white transition-colors cursor-pointer"
                             >
                                Đi đến Cài đặt
                             </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
