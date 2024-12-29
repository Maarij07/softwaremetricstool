import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function LandingPage() {
  const languages = [
    "JavaScript", "TypeScript", "Python", "Java", "C", "C++", "C#", "Ruby", "PHP",
    "HTML", "CSS", "JSON", "XML", "YAML", "Go", "Swift", "Kotlin", "Rust", "Dart",
    "Lua", "Shell Script", "Batch Script", "SQL", "R", "Perl", "Objective-C",
    "Scala", "Visual Basic", "Assembly", "Groovy", "Erlang", "Elixir"
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-24 px-6">
          <h2 className="text-4xl font-bold">Welcome to the Software Metrics Analysis Tool</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Simplify software quality assessment with automated metrics, reports, and insights.
          </p>
          <p className='text-xs font-light pt-2'>~ Maarij Bukhari (221803)</p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all"
            >
              Get Started
            </Link>
            <Link
              to="/cocomo"
              className="ml-4 border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all"
            >
              Cocomo Simulator 1.0
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Key Features</h3>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">Collect Metrics</h4>
              <p className="text-gray-400">Automate the collection of essential software metrics like LOC, complexity, and defect density.</p>
            </div>
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">Analyze Complexity</h4>
              <p className="text-gray-400">Evaluate cyclomatic and cognitive complexities to enhance code maintainability.</p>
            </div>
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">Generate Reports</h4>
              <p className="text-gray-400">Create actionable insights with detailed reports and visualizations.</p>
            </div>
            <div className="bg-gray-900 p-8 shadow-lg rounded-lg text-center">
              <h4 className="text-2xl font-semibold text-white mb-4">Agile Insights</h4>
              <p className="text-gray-400">Track Agile metrics, forecast sprints, and manage scope creep effectively.</p>
            </div>
          </div>
        </section>

        {/* Works For Section */}
        <section className="py-20 bg-gray-700">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Works For</h3>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {languages.map((language, index) => (
              <div key={index} className="bg-gray-900 p-6 shadow-lg rounded-lg text-center">
                <h4 className="text-xl font-semibold text-white">{language}</h4>
                <p className="text-gray-400 mt-2">
                  Comprehensive metrics analysis for {language}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Credits Section */}
        <section className="py-12 bg-gray-800 text-white text-center">
          <p className="text-lg">
            Designed and Developed by <strong>Maarij Bukhari (221803)</strong>
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-6 text-center">
          <p>&copy; 2024 Software Metrics Tool. All rights reserved.</p>
          <p>
            <a href="/help" className="hover:underline text-white">
              Help
            </a>{" "}
            |{" "}
            <a href="/about" className="hover:underline text-white">
              About
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
