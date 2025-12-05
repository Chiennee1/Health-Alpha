import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendItem = ({ name, status, steps, avatar, rank }: any) => (
    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-dark/50 mb-2">
        <div className="flex items-center gap-3">
             {rank && (
                 <div className="w-6 h-6 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xs border-2 border-background-dark">{rank}</div>
             )}
            <img src={avatar} className="w-10 h-10 rounded-full object-cover" />
            <div>
                <p className="text-white font-medium">{name}</p>
                <p className={`text-xs ${status.includes('Đang') ? 'text-primary' : 'text-gray-500'}`}>{status}</p>
            </div>
        </div>
        <div className="text-right">
            <p className="text-white font-bold">{steps}</p>
            <p className="text-gray-500 text-xs">bước</p>
        </div>
    </div>
)

export const SocialScreen = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark">
      {/* Calendar Header Part */}
       <div className="p-4 flex justify-between items-center border-b border-gray-800">
         <button className="p-2"><span className="material-symbols-outlined text-white">arrow_back_ios_new</span></button>
         <h1 className="text-white text-xl font-bold">Lịch trình</h1>
         <button className="p-2"><span className="material-symbols-outlined text-white">add</span></button>
      </div>
      
      {/* Calendar Strip (Simplified) */}
      <div className="py-4 border-b border-gray-800">
        <div className="flex justify-between items-center px-4 mb-4">
            <span className="material-symbols-outlined text-white">chevron_left</span>
            <span className="text-white font-semibold">Tháng 10, 2023</span>
            <span className="material-symbols-outlined text-white">chevron_right</span>
        </div>
        <div className="grid grid-cols-7 text-center px-2">
            {['CN','T2','T3','T4','T5','T6','T7'].map(d => <span key={d} className="text-gray-500 text-xs mb-2">{d}</span>)}
            {/* Mock days */}
            {Array.from({length: 7}).map((_, i) => (
                <div key={i} className={`h-8 w-8 mx-auto flex items-center justify-center rounded-full text-sm ${i === 3 ? 'bg-primary text-black font-bold' : 'text-white'}`}>
                    {30 + i > 31 ? i - 1 : 30 + i}
                </div>
            ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-4">Bảng xếp hạng tuần</h3>
        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4">
            {[1, 2, 3].map(i => (
                <div key={i} className="flex flex-col items-center min-w-[100px] bg-surface-dark p-3 rounded-xl">
                    <div className="relative">
                        <img src={`https://picsum.photos/seed/${i}/100`} className={`w-16 h-16 rounded-full border-2 ${i===1 ? 'border-yellow-500' : 'border-gray-500'}`} />
                        <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${i===1 ? 'bg-yellow-500 text-black' : 'bg-gray-500 text-white'}`}>{i}</div>
                    </div>
                    <p className="text-white mt-3 text-sm font-medium">User {i}</p>
                    <p className="text-gray-400 text-xs">12.5k</p>
                </div>
            ))}
        </div>

        <h3 className="text-white font-bold text-lg my-4">Danh sách bạn bè (6)</h3>
        <div className="flex flex-col">
            <FriendItem name="An Nguyen" status="Đang hoạt động" steps="12,500" avatar="https://picsum.photos/seed/u1/100" />
            <FriendItem name="Binh Tran" status="15 phút trước" steps="11,800" avatar="https://picsum.photos/seed/u2/100" />
            <FriendItem name="Chi Le" status="1 giờ trước" steps="10,200" avatar="https://picsum.photos/seed/u3/100" />
        </div>
      </div>
      
       <div className="fixed bottom-24 right-6">
        <button className="bg-primary text-white rounded-full size-14 flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined !text-3xl">add</span>
        </button>
        </div>
    </div>
  );
};