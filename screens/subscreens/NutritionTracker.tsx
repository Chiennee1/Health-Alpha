import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealCard = ({title, desc, cal, img}: any) => (
    <div className="flex items-center gap-4 bg-surface-dark p-3 rounded-xl mb-2">
        <div className="w-14 h-14 bg-cover bg-center rounded-lg" style={{backgroundImage: `url('${img}')`}}></div>
        <div className="flex-1">
            <p className="text-white font-medium">{title}</p>
            <p className="text-gray-400 text-sm">{desc}</p>
        </div>
        <span className="text-white">{cal}</span>
    </div>
)

export const NutritionTracker = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-background-dark overflow-y-auto pb-20">
             <div className="flex items-center p-4 justify-between sticky top-0 bg-background-dark z-10">
                <button onClick={() => navigate(-1)}><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
                <h2 className="text-white font-bold">Hôm nay</h2>
                <span className="material-symbols-outlined text-white">arrow_forward_ios</span>
            </div>

            <div className="p-4">
                <h1 className="text-white text-2xl font-bold mb-6">Tổng quan dinh dưỡng</h1>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-surface-dark p-4 rounded-xl">
                        <p className="text-white font-medium">Calo</p>
                        <p className="text-2xl font-bold text-white">1500<span className="text-sm font-normal text-gray-400">/2000</span></p>
                        <div className="h-2 bg-gray-700 rounded-full mt-2 w-full"><div className="h-full bg-primary w-3/4 rounded-full"></div></div>
                    </div>
                     <div className="bg-surface-dark p-4 rounded-xl">
                        <p className="text-white font-medium">Protein</p>
                        <p className="text-2xl font-bold text-white">80<span className="text-sm font-normal text-gray-400">/120g</span></p>
                        <div className="h-2 bg-gray-700 rounded-full mt-2 w-full"><div className="h-full bg-blue-500 w-2/3 rounded-full"></div></div>
                    </div>
                </div>

                <h2 className="text-white text-xl font-bold mb-3">Bữa sáng</h2>
                <MealCard title="Phở bò" desc="1 bát" cal="450 kcal" img="https://picsum.photos/seed/pho/100" />
                <MealCard title="Cà phê sữa" desc="1 ly" cal="120 kcal" img="https://picsum.photos/seed/coffee/100" />

                <h2 className="text-white text-xl font-bold mb-3 mt-6">Bữa trưa</h2>
                <MealCard title="Cơm tấm" desc="1 đĩa" cal="600 kcal" img="https://picsum.photos/seed/comtam/100" />

                <h2 className="text-white text-xl font-bold mb-3 mt-6">Bữa tối</h2>
                <div className="bg-surface-dark p-8 rounded-xl flex flex-col items-center justify-center text-center">
                    <span className="material-symbols-outlined text-gray-600 text-5xl mb-2">dinner_dining</span>
                    <p className="text-gray-300 font-medium">Chưa có món ăn nào</p>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-background-dark/90 backdrop-blur border-t border-gray-800 p-4 max-w-md mx-auto">
                 <div className="flex justify-around items-center">
                    <button className="flex flex-col items-center text-primary">
                        <span className="material-symbols-outlined">restaurant_menu</span>
                        <span className="text-xs">Thêm món</span>
                    </button>
                    <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center -mt-8 shadow-lg text-black">
                        <span className="material-symbols-outlined text-3xl">barcode_scanner</span>
                    </button>
                    <button className="flex flex-col items-center text-gray-400">
                        <span className="material-symbols-outlined">add_a_photo</span>
                        <span className="text-xs">Quét ảnh</span>
                    </button>
                 </div>
            </div>
        </div>
    )
}