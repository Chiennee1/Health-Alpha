
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CalendarDay = ({ day, date, isActive, hasEvent, onClick }: any) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${isActive ? 'bg-primary text-black shadow-lg scale-105' : 'bg-surface-dark text-gray-400 hover:bg-gray-800'}`}
    >
        <span className="text-xs font-medium mb-1">{day}</span>
        <span className={`text-lg font-bold ${isActive ? 'text-black' : 'text-white'}`}>{date}</span>
        {hasEvent && (
            <div className={`w-1.5 h-1.5 rounded-full mt-1 ${isActive ? 'bg-black' : 'bg-primary'}`}></div>
        )}
    </button>
);

const ScheduleItem = ({ time, title, duration, type, status }: any) => (
    <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2 pt-2">
            <p className="text-gray-400 font-medium text-sm">{time}</p>
            <div className="w-0.5 h-full bg-gray-800 rounded-full relative">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background-dark ${status === 'completed' ? 'bg-primary' : 'bg-gray-600'}`}></div>
            </div>
        </div>
        <div className={`flex-1 p-4 rounded-xl mb-4 ${status === 'completed' ? 'bg-primary/10 border border-primary/20' : 'bg-surface-dark'}`}>
            <div className="flex justify-between items-start mb-2">
                <h4 className={`font-bold ${status === 'completed' ? 'text-primary' : 'text-white'}`}>{title}</h4>
                {status === 'completed' && <span className="material-symbols-outlined text-primary text-sm">check_circle</span>}
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {duration}
                </span>
                <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">fitness_center</span>
                    {type}
                </span>
            </div>
        </div>
    </div>
);

export const WorkoutSchedule = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(24);
    const [viewMode, setViewMode] = useState<'day' | 'week'>('day');

    const days = [
        { day: 'CN', date: 22, hasEvent: false },
        { day: 'T2', date: 23, hasEvent: true },
        { day: 'T3', date: 24, hasEvent: true },
        { day: 'T4', date: 25, hasEvent: false },
        { day: 'T5', date: 26, hasEvent: true },
        { day: 'T6', date: 27, hasEvent: true },
        { day: 'T7', date: 28, hasEvent: false },
    ];

    const weeklySchedule = [
        { day: 'T2', date: 23, workouts: [{ title: 'Chạy bộ', time: '07:00', type: 'Cardio', status: 'completed' }, { title: 'Gym', time: '17:30', type: 'Strength', status: 'completed' }] },
        { day: 'T3', date: 24, workouts: [{ title: 'Yoga', time: '06:00', type: 'Flexibility', status: 'completed' }] },
        { day: 'T4', date: 25, workouts: [] }, // Rest day
        { day: 'T5', date: 26, workouts: [{ title: 'HIIT', time: '18:00', type: 'Cardio', status: 'pending' }] },
        { day: 'T6', date: 27, workouts: [{ title: 'Chạy bộ', time: '07:00', type: 'Cardio', status: 'pending' }] },
        { day: 'T7', date: 28, workouts: [{ title: 'Full Body', time: '16:00', type: 'Strength', status: 'pending' }] },
        { day: 'CN', date: 29, workouts: [] },
    ];

    return (
        <div className="flex flex-col h-screen bg-background-dark overflow-hidden">
            {/* Header */}
            <div className="flex items-center p-4 justify-between sticky top-0 bg-background-dark z-50">
                <button onClick={() => navigate('/workout')} className="w-10 h-10 flex items-center justify-center hover:bg-surface-dark rounded-full transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-white">arrow_back_ios_new</span>
                </button>
                <h2 className="text-white text-lg font-bold">Lịch tập luyện</h2>
                <button 
                    onClick={() => navigate('/workout-setup')}
                    className="w-10 h-10 flex items-center justify-center bg-surface-dark rounded-full text-white hover:bg-gray-700 transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-xl">add</span>
                </button>
            </div>

            {/* View Toggle */}
            <div className="px-4 pb-4">
                <div className="flex bg-surface-dark rounded-xl p-1">
                    <button 
                        onClick={() => setViewMode('day')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'day' ? 'bg-gray-700 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                    >
                        Ngày
                    </button>
                    <button 
                        onClick={() => setViewMode('week')}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'week' ? 'bg-gray-700 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
                    >
                        Tuần
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar">
                {viewMode === 'day' ? (
                    <>
                        {/* Calendar Strip */}
                        <div className="px-4 pb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-white font-bold text-xl">Tháng 10, 2023</h3>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-dark text-white hover:bg-gray-700">
                                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface-dark text-white hover:bg-gray-700">
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-7 gap-2">
                                {days.map((item, index) => (
                                    <CalendarDay 
                                        key={index}
                                        day={item.day}
                                        date={item.date}
                                        hasEvent={item.hasEvent}
                                        isActive={selectedDate === item.date}
                                        onClick={() => setSelectedDate(item.date)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Schedule List */}
                        <div className="bg-surface-dark/30 rounded-t-3xl p-6 min-h-full">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-bold text-lg">Hôm nay, {selectedDate} Oct</h3>
                                <p className="text-primary text-sm font-medium">2 bài tập</p>
                            </div>

                            <div className="flex flex-col pb-20">
                                <ScheduleItem 
                                    time="07:00"
                                    title="Chạy bộ buổi sáng"
                                    duration="30 phút"
                                    type="Cardio"
                                    status="completed"
                                />
                                <ScheduleItem 
                                    time="17:30"
                                    title="Tập ngực & Tay sau"
                                    duration="45 phút"
                                    type="Gym"
                                    status="pending"
                                />
                                <ScheduleItem 
                                    time="20:00"
                                    title="Yoga giãn cơ"
                                    duration="15 phút"
                                    type="Yoga"
                                    status="pending"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    // Weekly View
                    <div className="px-4 pb-24 space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-white font-bold text-xl">Tuần này</h3>
                            <p className="text-gray-400 text-sm">23 Oct - 29 Oct</p>
                        </div>

                        {weeklySchedule.map((day, idx) => (
                            <div key={idx} className="bg-surface-dark p-4 rounded-xl">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${day.date === 24 ? 'bg-primary text-black' : 'bg-gray-800 text-white'}`}>
                                            {day.date}
                                        </div>
                                        <span className="text-gray-400 font-medium">{day.day}</span>
                                    </div>
                                    {day.workouts.length === 0 ? (
                                         <span className="text-gray-500 text-xs bg-gray-800/50 px-2 py-1 rounded-md">Nghỉ ngơi</span>
                                    ) : (
                                        <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-1 rounded-md">{day.workouts.length} bài tập</span>
                                    )}
                                </div>
                                <div className="space-y-2 pl-11">
                                    {day.workouts.length > 0 ? day.workouts.map((workout, wIdx) => (
                                        <div key={wIdx} className="flex items-center justify-between p-2 rounded-lg bg-background-dark border border-gray-800">
                                            <div>
                                                <p className="text-white text-sm font-medium">{workout.title}</p>
                                                <p className="text-gray-500 text-xs">{workout.time} • {workout.type}</p>
                                            </div>
                                            <div className={`w-2 h-2 rounded-full ${workout.status === 'completed' ? 'bg-primary' : 'bg-gray-600'}`}></div>
                                        </div>
                                    )) : (
                                        <p className="text-gray-600 text-sm italic">Hồi phục cơ bắp & thư giãn</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* FAB (Only visible in Day view or you can keep it in both) */}
            {viewMode === 'day' && (
                <div className="fixed bottom-6 right-6 z-20">
                    <button 
                        onClick={() => navigate('/workout-setup')}
                        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform text-black cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-3xl">add</span>
                    </button>
                </div>
            )}
        </div>
    );
};
