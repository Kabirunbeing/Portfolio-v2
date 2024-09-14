import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-16 border-t-4 border-cyan-500 border-solid rounded-full animate-spin"></div>
        <span className="text-neon-green text-xl font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
