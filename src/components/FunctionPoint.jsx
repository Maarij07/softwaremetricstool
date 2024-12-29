import React, { useState } from 'react';

const FunctionPoint = () => {
  const [weightingFactor, setWeightingFactor] = useState(1);
  const [inputs, setInputs] = useState({
    userInputs: '',
    userOutputs: '',
    inquiries: '',
    files: '',
    externalInterfaces: '',
  });
  const [ufp, setUfp] = useState(null);
  const [complexityFactors, setComplexityFactors] = useState(0);
  const [functionPoints, setFunctionPoints] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const calculateUFP = () => {
    const weights = {
      1: { input: 3, output: 4, inquiry: 3, file: 7, interface: 5 },
      2: { input: 4, output: 5, inquiry: 4, file: 10, interface: 7 },
      3: { input: 6, output: 7, inquiry: 6, file: 15, interface: 10 },
    };

    const factors = weights[weightingFactor] || weights[1];
    const ufpValue =
      factors.input * Number(inputs.userInputs || 0) +
      factors.output * Number(inputs.userOutputs || 0) +
      factors.inquiry * Number(inputs.inquiries || 0) +
      factors.file * Number(inputs.files || 0) +
      factors.interface * Number(inputs.externalInterfaces || 0);

    setUfp(ufpValue);
  };

  const calculateFP = () => {
    const fp = ufp * (0.65 + 0.01 * complexityFactors);
    setFunctionPoints(fp);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Function Point Analysis</h3>
      {/* Inputs for Function Point */}
      <div className="mt-6">
        <label className="text-white block mb-2">Select Weighting Factor:</label>
        <select
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full"
          value={weightingFactor}
          onChange={(e) => setWeightingFactor(Number(e.target.value))}
        >
          <option value={1}>1. Simple</option>
          <option value={2}>2. Average</option>
          <option value={3}>3. Complex</option>
        </select>

        {['userInputs', 'userOutputs', 'inquiries', 'files', 'externalInterfaces'].map((field, idx) => (
          <div key={idx} className="mt-4">
            <label className="text-white block mb-2 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="number"
              className="bg-gray-800 text-white px-4 py-2 rounded-md w-full"
              placeholder={`Enter ${field}`}
              name={field}
              value={inputs[field]}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 w-full"
          onClick={calculateUFP}
        >
          Calculate UFP
        </button>

        {ufp !== null && (
          <p className="text-white mt-4">
            <strong>UFP:</strong> {ufp}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label className="text-white block mb-2">Enter Complexity Factors:</label>
        <input
          type="number"
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-full"
          value={complexityFactors}
          onChange={(e) => setComplexityFactors(Number(e.target.value))}
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md mt-6 w-full"
          onClick={calculateFP}
        >
          Calculate Function Points
        </button>

        {functionPoints !== null && (
          <p className="text-white mt-4">
            <strong>Function Points:</strong> {functionPoints.toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default FunctionPoint;
