import React, { useEffect, useState } from 'react';
import { CloudRain, Sun } from 'lucide-react';

export default function AnalogWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
  const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  const currentDay = time.getDay();
  const currentDate = time.getDate();
  const currentMonth = months[time.getMonth()];

  return (
    <div className="relative w-[500px] h-[500px] rounded-full bg-[#050505] border-8 border-[#111] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden font-mono">
      {/* Outer Tick Marks */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-full h-full flex justify-center ${i % 5 === 0 ? 'p-2' : 'p-4'}`}
          style={{ transform: `rotate(${i * 6}deg)` }}
        >
          <div className={`rounded-full ${i % 5 === 0 ? 'w-1.5 h-6 bg-[#00ffff] shadow-[0_0_10px_#00ffff]' : 'w-1 h-2 bg-[#00ffff]/50 shadow-[0_0_5px_#00ffff]'}`} />
        </div>
      ))}

      {/* Minute Numbers */}
      {[...Array(12)].map((_, i) => {
        const num = i * 5 === 0 ? 60 : i * 5;
        if (num % 15 === 0) return null; // Skip 15, 30, 45, 60 as they have big numbers
        return (
          <div
            key={i}
            className="absolute w-full h-full flex justify-center p-10 text-[#00ffff]/80 text-sm font-bold drop-shadow-[0_0_5px_#00ffff]"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <span style={{ transform: `rotate(-${i * 30}deg)` }}>
              {num.toString().padStart(2, '0')}
            </span>
          </div>
        );
      })}

      {/* Main Numbers */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-[#00ffff] tracking-wider font-display drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">12</div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-5xl font-bold text-[#00ffff] tracking-wider font-display drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">3</div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-5xl font-bold text-[#00ffff] tracking-wider font-display drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">6</div>
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-5xl font-bold text-[#00ffff] tracking-wider font-display drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">9</div>

      {/* Caffode Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-20 z-0 flex flex-col items-center pointer-events-none select-none opacity-40">
        <div className="text-gray-600 text-4xl md:text-5xl font-bold tracking-[0.4em] font-display ml-3">CAFFODE</div>
        <div className="text-gray-600 text-[10px] tracking-[0.4em] font-bold mt-2 ml-1">CHRONOGRAPH</div>
      </div>

      {/* Left Sub-dial (Weather) */}
      <div className="absolute left-16 w-32 h-32 flex flex-col items-center justify-center z-10">
        <div className="absolute -left-2 text-gray-600 text-[9px] rotate-[-90deg] tracking-widest font-bold">06:48</div>
        <div className="absolute -right-2 text-gray-600 text-[9px] rotate-90 tracking-widest font-bold">18:53</div>
        
        {/* Subtle Arc */}
        <svg className="absolute w-full h-full drop-shadow-[0_0_5px_#00ffff]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#111" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="60 251" strokeDashoffset="120" opacity="0.8" />
        </svg>

        <div className="relative mt-1">
          <Sun className="absolute -top-1 -left-1 w-3 h-3 text-gray-500" />
          <CloudRain className="w-6 h-6 text-gray-400" />
        </div>
        <div className="text-[#00ffff] font-bold text-2xl leading-none mt-2 tracking-tighter drop-shadow-[0_0_5px_#00ffff]">39°</div>
        <div className="text-gray-600 text-[9px] mt-1 tracking-widest font-bold">13 M/H</div>
      </div>

      {/* Right Sub-dial (Date/Day) */}
      <div className="absolute right-16 w-32 h-32 flex items-center justify-center relative z-10">
        {/* Subtle Arc */}
        <svg className="absolute w-full h-full -rotate-180 drop-shadow-[0_0_5px_#00ffff]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#111" strokeWidth="1.5" strokeDasharray="125 251" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#00ffff" strokeWidth="1.5" strokeDasharray="125 251" strokeDashoffset={125 - (125 * (currentDay + 1)) / 7} opacity="0.8" />
        </svg>
        {/* Days Text */}
        <div className="absolute w-full h-full">
          {days.map((day, i) => {
            const angle = -90 + (i * 180 / 6);
            return (
              <div
                key={day}
                className="absolute w-full h-full flex justify-center p-3 text-[8px] font-bold tracking-wider"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <span className={i === currentDay ? 'text-[#00ffff] drop-shadow-[0_0_5px_#00ffff]' : 'text-gray-600'} style={{ transform: `rotate(-${angle}deg)` }}>
                  {day[0]}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center justify-center z-10">
          <div className="text-[#00ffff] font-bold text-3xl leading-none tracking-tighter drop-shadow-[0_0_5px_#00ffff]">{currentDate}</div>
          <div className="text-gray-600 text-[10px] font-bold mt-1 tracking-widest">{currentMonth}</div>
        </div>
      </div>

      {/* Hands */}
      {/* Hour Hand */}
      <div
        className="absolute w-3 h-32 bg-[#00ffff] rounded-full z-20 shadow-[0_0_15px_#00ffff]"
        style={{ 
          bottom: '50%', 
          left: '50%', 
          transformOrigin: 'bottom center',
          transform: `translateX(-50%) rotate(${hourDegrees}deg) translateY(10px)` 
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-16 bg-[#050505] rounded-full" />
      </div>

      {/* Minute Hand */}
      <div
        className="absolute w-2 h-48 bg-[#00ffff] rounded-full z-30 shadow-[0_0_15px_#00ffff]"
        style={{ 
          bottom: '50%', 
          left: '50%', 
          transformOrigin: 'bottom center',
          transform: `translateX(-50%) rotate(${minuteDegrees}deg) translateY(12px)` 
        }}
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1 h-28 bg-[#050505] rounded-full" />
      </div>

      {/* Second Hand */}
      <div
        className="absolute w-1 h-52 bg-[#00ffff] z-40 shadow-[0_0_10px_#00ffff]"
        style={{ 
          bottom: '50%', 
          left: '50%', 
          transformOrigin: 'bottom center',
          transform: `translateX(-50%) rotate(${secondDegrees}deg) translateY(20px)` 
        }}
      />

      {/* Center Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00ffff] rounded-full z-50 shadow-[0_0_20px_#00ffff] border-2 border-[#050505]" />
    </div>
  );
}
