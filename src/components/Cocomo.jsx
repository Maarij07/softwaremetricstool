import React, { useState } from 'react';
import FunctionPoint from './FunctionPoint';
import SLOC from './SLOC';
import EffortCostTime from './EffortCostTime';

const Cocomo = () => {
  const [activeTab, setActiveTab] = useState('Function Point');

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Gradient Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-3xl rounded-full absolute top-10 left-20"></div>
        <div className="w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-400 opacity-20 blur-2xl rounded-full absolute bottom-20 right-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-10 px-6">
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            COCOMO-II Simulator
            <span className="block text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Software Estimation Tool
            </span>
          </h2>

          {/* Tabs Section */}
          <div className="mb-6 border-b border-gray-700">
            <ul className="flex justify-around">
              {['Function Point', 'SLOC', 'Effort, Cost & Time'].map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer px-4 py-2 text-lg font-semibold text-white rounded-t-md ${
                    activeTab === tab
                      ? 'bg-pink-600 bg-opacity-90'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Content Section */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-md">
            {activeTab === 'Function Point' && <FunctionPoint />}
            {activeTab === 'SLOC' && <SLOC />}
            {activeTab === 'Effort, Cost & Time' && <EffortCostTime />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocomo;
