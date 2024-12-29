import React, { useState } from "react";

const SLOC = () => {
    const [functionPoints, setFunctionPoints] = useState("");
    const [languageFactor, setLanguageFactor] = useState(null);
    const [sloc, setSloc] = useState(null);

    const calculateSLOC = () => {
        if (functionPoints && languageFactor) {
            setSloc(functionPoints * languageFactor);
        }
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">Source Lines of Code (SLOC) Calculator</h1>

            <p className="mb-4 text-center">
                Source Lines of Code (SLOC) is a software metric used to measure the size of a computer program by counting the number of lines in its source code. Use this tool to calculate SLOC based on Function Points and the language used.
            </p>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Function Points:</label>
                    <input
                        type="number"
                        className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={functionPoints}
                        onChange={(e) => setFunctionPoints(Number(e.target.value))}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Language Used:</label>
                    <select
                        className="w-full p-2 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setLanguageFactor(Number(e.target.value))}
                    >
                        <option value="">Select Language</option>
                        <option value="97">C</option>
                        <option value="53">Java</option>
                        <option value="50">C++</option>
                        <option value="46">J2EE</option>
                        <option value="61">COBOL</option>
                        <option value="54">C#</option>
                        <option value="34">HTML</option>
                        <option value="57">.NET</option>
                        <option value="37">Oracle</option>
                        <option value="21">SQL</option>
                    </select>
                </div>

                <button
                    onClick={calculateSLOC}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Calculate SLOC
                </button>

                {sloc !== null && (
                    <div className="mt-4 p-4 bg-gray-600 rounded">
                        <p className="text-lg font-medium">The SLOC is:</p>
                        <p className="text-xl font-bold">{sloc}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SLOC;