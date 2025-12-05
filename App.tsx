
import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AuthScreen } from './screens/Auth';
import { DashboardScreen } from './screens/Dashboard';
import { WorkoutScreen } from './screens/Workout';
import { StatsScreen } from './screens/Stats';
import { SocialScreen } from './screens/Social';
import { ProfileScreen } from './screens/Profile';

// Sub-screens
import { WaterTracker } from './screens/subscreens/WaterTracker';
import { NutritionTracker } from './screens/subscreens/NutritionTracker';
import { NotificationList } from './screens/subscreens/NotificationList';
import { WorkoutDetail } from './screens/subscreens/WorkoutDetail';
import { WorkoutSetup } from './screens/subscreens/WorkoutSetup';
import { ActiveWorkout } from './screens/subscreens/ActiveWorkout';
import { ShareAchievement } from './screens/subscreens/ShareAchievement';
import { DevicePairing } from './screens/subscreens/DevicePairing';
import { NotificationSettings } from './screens/subscreens/NotificationSettings';
import { ConnectedDevices } from './screens/subscreens/ConnectedDevices';
import { WorkoutSchedule } from './screens/subscreens/WorkoutSchedule';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Các đường dẫn hiển thị thanh điều hướng
  const showNavPaths = ['/dashboard', '/workout', '/stats', '/social', '/profile'];
  const isVisible = showNavPaths.includes(location.pathname);

  if (!isVisible) return null;

  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ icon, label, path }: { icon: string, label: string, path: string }) => {
    const active = isActive(path);
    return (
      <button 
        onClick={() => navigate(path)}
        className={`flex flex-1 flex-col items-center justify-end gap-1 transition-colors duration-200 ${active ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-[#9db9a6]'}`}
      >
        <div className="flex h-8 items-center justify-center">
          <span className={`material-symbols-outlined text-[28px] ${active ? 'fill' : ''}`}>{icon}</span>
        </div>
        <p className="text-[10px] font-medium leading-normal tracking-[0.015em]">{label}</p>
      </button>
    );
  };

  return (
    <div className="sticky bottom-0 w-full z-50">
      <div className="flex gap-1 border-t border-gray-200 dark:border-[#28392e] bg-background-light/95 dark:bg-[#1c271f]/95 backdrop-blur-md px-2 pb-5 pt-2 shadow-lg">
        <NavItem icon="dashboard" label="Bảng điều khiển" path="/dashboard" />
        <NavItem icon="directions_run" label="Tập luyện" path="/workout" />
        <NavItem icon="bar_chart" label="Tiến trình" path="/stats" />
        <NavItem icon="group" label="Bạn bè" path="/social" />
        <NavItem icon="person" label="Hồ sơ" path="/profile" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="relative flex h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden font-display">
        <div className="flex-1 overflow-y-auto no-scrollbar relative">
          <Routes>
            <Route path="/" element={<AuthScreen />} />
            <Route path="/auth" element={<AuthScreen />} />
            
            {/* Main Tabs */}
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/workout" element={<WorkoutScreen />} />
            <Route path="/stats" element={<StatsScreen />} />
            <Route path="/social" element={<SocialScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

            {/* Sub Screens */}
            <Route path="/water" element={<WaterTracker />} />
            <Route path="/nutrition" element={<NutritionTracker />} />
            <Route path="/notifications" element={<NotificationList />} />
            <Route path="/workout-detail" element={<WorkoutDetail />} />
            <Route path="/workout-setup" element={<WorkoutSetup />} />
            <Route path="/workout-active" element={<ActiveWorkout />} />
            <Route path="/share" element={<ShareAchievement />} />
            <Route path="/device-pairing" element={<DevicePairing />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/devices" element={<ConnectedDevices />} />
            <Route path="/workout-schedule" element={<WorkoutSchedule />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </HashRouter>
  );
}