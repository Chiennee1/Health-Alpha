import React from 'react';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = Array.from({length: 10}, (_, i) => ({
    name: i,
    val: Math.floor(Math.random() * 50) + 50
}));

export const StatsScreen = () => {
  return (
    <div className="flex flex-col h-full bg-background-dark">
      <div className="p-4 flex justify-between items-center sticky top-0 bg-background-dark z-10">
         <h1 className="text-white text-[28px] font-bold">Tiến trình</h1>
         <span className="material-symbols-outlined text-gray-400">calendar_today</span>
      </div>

      <div className="px-4 mb-6">
        <div className="grid grid-cols-4 bg-surface-dark rounded-xl p-1">
            {['Ngày', 'Tuần', 'Tháng', 'Năm'].map((t, i) => (
                <button key={t} className={`py-1.5 rounded-lg text-sm font-medium ${i === 1 ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>{t}</button>
            ))}
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 pb-6">
        {/* Steps */}
        <div className="bg-surface-dark rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
                <span className="material-symbols-outlined text-orange-500">footprint</span>
                <span className="font-medium">Số bước chân</span>
            </div>
            <p className="text-3xl font-bold text-white mb-4">9,250</p>
            <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <Bar dataKey="val" fill="#13ec5b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Calories */}
        <div className="bg-surface-dark rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
                <span className="material-symbols-outlined text-red-500">local_fire_department</span>
                <span className="font-medium">Calo đã đốt</span>
            </div>
            <p className="text-3xl font-bold text-white mb-4">650 kcal</p>
            <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="val" stroke="#ef4444" fillOpacity={1} fill="url(#colorRed)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
        
         {/* Sleep */}
         <div className="bg-surface-dark rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
                <span className="material-symbols-outlined text-purple-500">bedtime</span>
                <span className="font-medium">Giấc ngủ</span>
            </div>
            <p className="text-3xl font-bold text-white mb-2">7h 45m</p>
            <div className="flex h-4 w-full rounded-full overflow-hidden bg-gray-700 mt-4">
                <div className="bg-purple-600 w-1/4"></div>
                <div className="bg-purple-500 w-1/2"></div>
                <div className="bg-purple-400 w-1/4"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-600"></div> Sâu</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-500"></div> Nhẹ</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-400"></div> REM</span>
            </div>
        </div>
      </div>
    </div>
  );
};