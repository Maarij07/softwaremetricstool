import React, { useState } from 'react';

function Estimate() {
  const [sloc, setSloc] = useState(0);
  const [kloc, setKloc] = useState(0);
  const [mf, setMf] = useState(1);
  const [effort, setEffort] = useState(0);
  const [time, setTime] = useState(0);
  const [cost, setCost] = useState(0);
  const [laborRate, setLaborRate] = useState(0);
  const [classType, setClassType] = useState('1');

  const handleSlocChange = (e) => {
    setSloc(e.target.value);
  };

  const handleKlocCalculation = () => {
    setKloc(sloc / 1000);
  };

  const handleMfCalculation = () => {
    const mfValue =
      parseFloat(document.getElementById('11').value) *
      parseFloat(document.getElementById('12').value) *
      parseFloat(document.getElementById('13').value) *
      parseFloat(document.getElementById('14').value) *
      parseFloat(document.getElementById('15').value);
    setMf(mfValue);
  };

  const handleEffortCalculation = () => {
    const effortValue = sloc * mf;
    setEffort(effortValue);
    setTime(effortValue / 1000); // Assuming 1000 hours per person-year
    setCost(effortValue * laborRate);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Effort and Time Estimation</h2>
      
      <div className="mb-4">
        <label htmlFor="sloc" className="block font-medium text-gray-300">SLOC (Source Lines of Code):</label>
        <input
          type="number"
          id="sloc"
          value={sloc}
          onChange={handleSlocChange}
          className="mt-2 p-2 w-full border border-gray-500 rounded-lg bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={handleKlocCalculation}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Calculate KLOC
        </button>
        <p className="mt-2 text-gray-300">KLOC: {kloc}</p>
      </div>

      <div className="mb-4">
        <strong>Multiplicative Factor (MF):</strong>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <label htmlFor="11" className="block text-sm font-medium text-gray-300">Product Complexity</label>
            <select id="11" className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white">
              <option value="1.43">Very low</option>
              <option value="1.28">Low</option>
              <option value="1">Nominal</option>
              <option value="0.90">High</option>
              <option value="0.71">Very high</option>
              <option value="0.50">Extremely high</option>
            </select>
          </div>
          <div>
            <label htmlFor="12" className="block text-sm font-medium text-gray-300">Development Method</label>
            <select id="12" className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white">
              <option value="1.43">Very low</option>
              <option value="1.28">Low</option>
              <option value="1">Nominal</option>
              <option value="0.90">High</option>
              <option value="0.71">Very high</option>
              <option value="0.50">Extremely high</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="13" className="block text-sm font-medium text-gray-300">Software Engineering Methods</label>
            <select id="13" className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white">
              <option value="1.28">Very low</option>
              <option value="1.12">Low</option>
              <option value="1">Nominal</option>
              <option value="0.89">High</option>
              <option value="0.71">Very high</option>
              <option value="0.50">Extremely high</option>
            </select>
          </div>
          <div>
            <label htmlFor="14" className="block text-sm font-medium text-gray-300">Programming Tools</label>
            <select id="14" className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white">
              <option value="1.16">Very low</option>
              <option value="1.05">Low</option>
              <option value="1">Nominal</option>
              <option value="0.91">High</option>
              <option value="0.78">Very high</option>
              <option value="0.50">Extremely high</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="15" className="block text-sm font-medium text-gray-300">Schedule Constraints</label>
            <select id="15" className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white">
              <option value="1.43">Very low</option>
              <option value="1.14">Low</option>
              <option value="1">Nominal</option>
              <option value="0.87">High</option>
              <option value="0.71">Very high</option>
              <option value="0.50">Extremely high</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleMfCalculation}
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
        >
          Get MF
        </button>
        <p className="mt-2 text-gray-300">MF: {mf}</p>
      </div>

      <div className="mt-6">
        <strong className="block text-lg">Effort and Time Estimation</strong>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Labor Rate (per hour):</label>
          <input
            type="number"
            value={laborRate}
            onChange={(e) => setLaborRate(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-500 rounded-lg bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Class Type:</label>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white"
          >
            <option value="1">Organic</option>
            <option value="2">Semi-Detached</option>
            <option value="3">Embedded</option>
          </select>
        </div>

        <button
          onClick={handleEffortCalculation}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Calculate Effort and Time
        </button>

        <div className="mt-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-300">Effort:</label>
            <input
              type="text"
              value={effort}
              readOnly
              className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-300">Time:</label>
            <input
              type="text"
              value={time}
              readOnly
              className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-300">Cost:</label>
            <input
              type="text"
              value={cost}
              readOnly
              className="w-full p-2 border border-gray-500 rounded-lg bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
