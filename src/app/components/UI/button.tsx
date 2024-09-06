"use client"
import React from 'react';
import { ButtonType } from './uiTypes';

export default function Button({ text, buttonStatus }: ButtonType) {
  // Determine button classes based on buttonStatus
  const buttonClass = buttonStatus === 'primary'
    ? 'text-black font-bold'
    : 'text-black';

  return (
    <div className="overflow-hidden inline-block">
      <button
        className={`relative px-8 py-2 border-gray-500 border-2 bg-white transition duration-300 ease-in-out text-lg ${buttonClass} hover:text-white group`}
        style={{
          background: 'linear-gradient(to right, black 50%, white 50%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '100% 0',
          transition: 'background-position 0.2s ease-in-out, color 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = '0 0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = '100% 0'}
      >
        {text}
      </button>
    </div>
  );
}
