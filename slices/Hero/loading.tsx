import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900">
    <div className="w-32 h-16 bg-slate-500 rounded-full mb-4 animate-pulse"></div>
    <p className="text-slate-300 text-xl">Loading...</p>
  </div>
  );
}

export default Loading;
