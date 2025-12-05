import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { time: '12AM', val: 30 },
  { time: '3AM', val: 20 },
  { time: '6AM', val: 40 },
  { time: '9AM', val: 70 },
  { time: '12PM', val: 50 },
  { time: '3PM', val: 90 },
  { time: '6PM', val: 60 },
  { time: '9PM', val: 80 },
];

export const DashboardScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark">
      {/* Header */}
      <div className="flex flex-col gap-2 p-4 pb-2">
        <div className="flex items-center h-12 justify-between">
          <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-gray-700" style={{backgroundImage: 'url("https://picsum.photos/100/100")'}}></div>
          <button onClick={() => navigate('/notifications')} className="text-gray-300 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        <p className="text-white text-[28px] font-bold leading-tight">Chào buổi sáng, An!</p>
      </div>

      {/* Daily Goals */}
      <div className="px-4 py-2">
        <h2 className="text-white text-xl font-bold mb-4">Mục tiêu hàng ngày</h2>
        <div className="flex flex-col gap-3">
          {[
            { label: 'Số bước chân', val: '8,520', total: '10,000', unit: 'bước', color: 'text-orange-500', stroke: '#f97316', icon: 'footprint', pct: 85 },
            { label: 'Calo đã đốt', val: '560', total: '800', unit: 'kcal', color: 'text-red-500', stroke: '#ef4444', icon: 'local_fire_department', pct: 72 },
            { label: 'Giấc ngủ', val: '7h 30m', total: '8h', unit: '', color: 'text-purple-500', stroke: '#a855f7', icon: 'bedtime', pct: 94 },
          ].map((item, i) => (
             <div key={i} className="flex items-center gap-4 rounded-xl bg-surface-dark p-3">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 36 36">
                    <path className="stroke-gray-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                    <path stroke={item.stroke} strokeDasharray={`${item.pct}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" strokeLinecap="round"></path>
                  </svg>
                  <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-base font-medium text-white">{item.label}</p>
                    <p className={`text-sm font-medium ${item.color}`}>{item.pct}%</p>
                  </div>
                  <p className="text-sm text-gray-400">{item.val} / {item.total} {item.unit}</p>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 py-6">
        <button onClick={() => navigate('/water')} className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-xl flex flex-col items-start gap-2">
            <span className="material-symbols-outlined text-blue-400 text-3xl">water_drop</span>
            <div className="text-left">
                <p className="text-white font-bold">Nước uống</p>
                <p className="text-blue-400 text-sm">1.5L / 2.0L</p>
            </div>
        </button>
         <button onClick={() => navigate('/nutrition')} className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl flex flex-col items-start gap-2">
            <span className="material-symbols-outlined text-green-400 text-3xl">restaurant</span>
            <div className="text-left">
                <p className="text-white font-bold">Dinh dưỡng</p>
                <p className="text-green-400 text-sm">1,500 kcal</p>
            </div>
        </button>
      </div>

      {/* Overview Chart (Simplified) */}
      <div className="px-4 pb-6">
         <h2 className="text-white text-xl font-bold mb-3">Tổng quan sức khoẻ</h2>
         <div className="bg-surface-dark rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
                 <span className="material-symbols-outlined text-orange-500">footprint</span>
                 <p className="text-gray-400 font-medium">Số bước chân</p>
            </div>
            <p className="text-white text-3xl font-bold">8,520</p>
            <div className="h-32 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#13ec5b" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#13ec5b" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="val" stroke="#13ec5b" fillOpacity={1} fill="url(#colorVal)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
         </div>
      </div>
      
      {/* FAB */}
      <button onClick={() => navigate('/workout-setup')} className="fixed bottom-24 right-4 bg-primary text-black rounded-full h-14 px-6 shadow-lg flex items-center gap-2 font-bold z-10 hover:scale-105 transition-transform">
        <span className="material-symbols-outlined">add</span>
        Bắt đầu tập
      </button>

    </div>
  );
};