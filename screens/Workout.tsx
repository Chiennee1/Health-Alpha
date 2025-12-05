
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlanCard = ({ title, progress, schedule, image, action, color = 'bg-primary' }: any) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col rounded-xl bg-surface-dark overflow-hidden">
            <div className="aspect-video w-full bg-cover bg-center" style={{backgroundImage: `url('${image}')`}}></div>
            <div className="p-4 flex flex-col gap-3">
                <h3 className="text-white text-lg font-bold">{title}</h3>
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Tiến độ</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${color === 'bg-primary' ? 'bg-primary' : 'bg-primary'}`} style={{width: `${progress}%`}}></div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-400 text-sm">{schedule}</span>
                    <button 
                        onClick={() => navigate('/workout-detail')}
                        className={`px-5 py-2 rounded-lg text-sm font-bold ${action === 'Tiếp tục' ? 'bg-primary text-black' : 'bg-primary/20 text-primary'}`}
                    >
                        {action}
                    </button>
                </div>
            </div>
        </div>
    )
}

export const WorkoutScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <div className="sticky top-0 bg-background-dark/90 backdrop-blur-sm p-4 z-10 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold flex-1">Kế hoạch tập luyện</h1>
        <button 
          onClick={() => navigate('/workout-schedule')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
            <span className="material-symbols-outlined">calendar_today</span>
        </button>
      </div>

      <div className="px-4 pb-2">
        <div className="flex bg-gray-800 rounded-lg p-1 mb-4">
            <button className="flex-1 py-1.5 bg-gray-700 rounded text-white text-sm font-medium shadow">Đang diễn ra</button>
            <button className="flex-1 py-1.5 text-gray-400 text-sm font-medium">Của tôi</button>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 pb-6">
        <PlanCard 
            title="Giảm mỡ toàn thân 30 ngày"
            progress={75}
            schedule="4 buổi/tuần"
            action="Tiếp tục"
            image="https://picsum.photos/seed/workout1/400/200"
        />
         <PlanCard 
            title="Xây dựng cơ bắp tại nhà"
            progress={20}
            schedule="5 buổi/tuần"
            action="Bắt đầu tập"
            image="https://picsum.photos/seed/workout2/400/200"
        />
         <PlanCard 
            title="Thử thách Cardio 7 ngày"
            progress={0}
            schedule="Tăng cường sức bền"
            action="Bắt đầu tập"
            image="https://picsum.photos/seed/workout3/400/200"
        />
      </div>
    </div>
  );
};