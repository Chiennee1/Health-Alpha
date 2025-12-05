import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthScreen = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div className="flex min-h-screen flex-col items-center p-4 pt-16">
      <div className="flex flex-col items-center pb-8 text-center">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary/20 rounded-full">
          <span className="material-symbols-outlined text-primary text-4xl">health_and_safety</span>
        </div>
        <h1 className="text-white tracking-tight text-3xl font-bold leading-tight">
          {mode === 'login' ? 'Chào mừng đến với Health Anpha' : 'Tạo tài khoản của bạn'}
        </h1>
        <p className="text-gray-300 text-base pt-2">Bắt đầu hành trình sức khỏe của bạn</p>
      </div>

      <div className="flex w-full max-w-md py-3">
        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-black/40 p-1">
          <button 
            onClick={() => setMode('login')}
            className={`flex-1 h-full rounded-lg text-sm font-medium transition-all ${mode === 'login' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400'}`}
          >
            Đăng nhập
          </button>
          <button 
            onClick={() => setMode('register')}
            className={`flex-1 h-full rounded-lg text-sm font-medium transition-all ${mode === 'register' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400'}`}
          >
            Đăng ký
          </button>
        </div>
      </div>

      <div className="w-full max-w-md space-y-4 py-3">
        {mode === 'register' && (
           <div className="flex flex-col w-full">
           <p className="text-white text-base font-medium pb-2">Tên người dùng</p>
           <input className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3.5 focus:border-primary focus:outline-none" placeholder="Nhập tên người dùng" />
         </div>
        )}
        <div className="flex flex-col w-full">
          <p className="text-white text-base font-medium pb-2">Email</p>
          <input type="email" className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3.5 focus:border-primary focus:outline-none" placeholder="Nhập email của bạn" />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-white text-base font-medium pb-2">Mật khẩu</p>
          <div className="relative">
            <input type="password" className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white p-3.5 focus:border-primary focus:outline-none" placeholder="Nhập mật khẩu" />
            <button className="absolute right-3 top-3.5 text-gray-400">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
        {mode === 'login' && (
          <div className="flex justify-end w-full pt-1">
            <a href="#" className="text-primary text-sm font-medium hover:underline">Quên mật khẩu?</a>
          </div>
        )}
      </div>

      <div className="w-full max-w-md pt-6 pb-6">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex w-full items-center justify-center rounded-xl bg-primary h-14 text-black text-base font-bold shadow-sm hover:opacity-90 transition-opacity"
        >
          {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
        </button>
      </div>

      <div className="flex w-full max-w-md items-center gap-4 py-3">
        <hr className="flex-1 border-gray-700"/>
        <p className="text-gray-400 text-sm">Hoặc tiếp tục với</p>
        <hr className="flex-1 border-gray-700"/>
      </div>

      <div className="flex w-full max-w-md gap-4 py-3">
        <button className="flex-1 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_2GI7yEGyQDTdH5RWJpRzkMdUS3-60sSA2yq1jdGMsNr5x_c8ZjqKKXalFm9Yw7OriCKEkw03SOtgn3UOUnUHengEr9k8qJEbyNZP38pJUuolgiTYmxn472zWA7WCUXL4VQB-HyhEJZATqiZ2rJ8ERD3Vl5NPu-1GU1UPakuzcCTkElr94Nm_Dzq3vbwYwZi5T_rdNlNOLSnBpBkfRgTVM53_4r0y_-DIPA44CAsFZP6W-YNAewqWkyl3J3MA8PGb_JMjHCHmg" className="w-6 h-6"/>
             <span className="text-white font-medium">Google</span>
        </button>
        <button className="flex-1 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700">
             <span className="material-symbols-outlined text-white">apple</span>
             <span className="text-white font-medium">Apple</span>
        </button>
      </div>
    </div>
  );
};