
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
        <button className="flex-1 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
             </svg>
             <span className="text-white font-medium">Google</span>
        </button>
        <button className="flex-1 h-14 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6 fill-current text-white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
             </svg>
             <span className="text-white font-medium">Apple</span>
        </button>
      </div>
    </div>
  );
};
