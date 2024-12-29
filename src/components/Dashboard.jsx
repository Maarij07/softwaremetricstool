import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LineController,
} from 'chart.js';
import * as acorn from 'acorn';
import { AI_PROMPT } from '../service/prompt';
import { chatSession } from '../service/AIModal';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LineController
);

const Dashboard = () => {
  const [code, setCode] = useState('');
  const [syntaxError, setSyntaxError] = useState('');
  const [metrics, setMetrics] = useState({});
  const [projectData, setProjectData] = useState(null);
  const [calculating, setCalculating] = useState(false);

  const checkSyntax = (codeInput) => {
    try {
      acorn.parse(codeInput, { ecmaVersion: 2020 });
      setSyntaxError('');
      return true;
    } catch (err) {
      setSyntaxError(err.message);
      return false;
    }
  };

  const handleCalculateMetrics = async () => {
    if (!code.trim()) {
      alert('Please paste code to calculate metrics.');
      return;
    }
    if (!checkSyntax(code)) {
      alert('Syntax error detected. Please fix your code.');
      return;
    }

    setCalculating(true);
    try {
      const FINAL_PROMPT = AI_PROMPT.replace('{code}', code);
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const response = await result?.response?.text();
      const responseData = JSON.parse(response);

      if (responseData && responseData.metrics) {
        setMetrics(responseData.metrics);
        setProjectData(true);
      } else {
        alert('Invalid response structure');
      }
    } catch (error) {
      console.error('Error calculating metrics:', error);
      alert('Error calculating metrics');
    }
    setCalculating(false);
  };

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
            Software Metrics Dashboard
            <span className="block text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mt-2">
              Gemini Integrated
            </span>
          </h2>

          {/* Code Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">Code (JS)</h3>
            <textarea
              rows={8}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your code here..."
              className="w-full p-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-900 text-white"
            />
            {syntaxError && (
              <div className="text-red-500 mt-2">Syntax Error: {syntaxError}</div>
            )}
            <button
              onClick={handleCalculateMetrics}
              className="mt-4 w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Calculate Metrics
            </button>
          </div>

          {/* Loading Modal */}
          {calculating && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold text-white">Calculating Metrics...</h3>
              </div>
            </div>
          )}

          {/* Metrics Section */}
          {projectData && (
            <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-white mb-4">Metrics</h3>
              <ul>
                {Object.entries(metrics).map(([key, value]) => (
                  <li key={key} className="py-2 text-white">
                    <strong>{key}:</strong> {typeof value === 'number' ? value.toFixed(2) : value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
