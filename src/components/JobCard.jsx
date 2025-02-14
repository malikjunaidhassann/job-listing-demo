import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
      {/* Match Badge */}
      <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
        100% match
      </span>

      {/* Job Title */}
      <h2 className="text-xl font-semibold mt-2">
        Freelance Marketing Consultant Needed for Strategic Audience Engagement
      </h2>

      {/* Job Details */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-purple-600 font-medium">$50-100/hr</span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md">
          Mid Level
        </span>
        <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md">
          Marketing Consultant
        </span>
      </div>

      {/* Job Type & Contract */}
      <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
        <span>🟢 Ongoing</span>
        <span>• 30h/week</span>
      </div>
      <p className="text-green-600 text-sm mt-1">
        This job could be contract-to-hire
      </p>

      {/* Apply Button & Actions */}
      <div className="flex items-center gap-4 mt-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Apply now
        </button>
        <button className="border p-2 rounded-lg hover:bg-gray-100">⭐</button>
        <button className="border p-2 rounded-lg hover:bg-gray-100">💬</button>
      </div>

      {/* Location & Time */}
      <div className="text-gray-500 text-sm mt-4">
        <p>📍 New York, USA</p>
        <p>⏰ GMT-4</p>
        <p>🌍 English, Spanish</p>
      </div>

      {/* Company Details */}
      <div className="border-t mt-4 pt-4 flex items-center gap-4">
        <div className="bg-gray-800 text-white p-3 rounded-full">D</div>
        <div>
          <h3 className="font-semibold">DevStudio</h3>
          <div className="flex gap-2 mt-1">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md">
              Healthcare
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md">
              E-Commerce
            </span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md">
              Media
            </span>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <p className="text-sm text-gray-600 mt-2">
        ⭐ 100% of company’s hires recommend them
      </p>

      {/* CEO */}
      <div className="flex items-center gap-2 mt-2">
        <img
          src="https://via.placeholder.com/40"
          className="rounded-full"
          alt="CEO"
        />
        <p className="text-gray-700 text-sm">Joe Brown, CEO</p>
      </div>
    </div>
  );
};

export default JobCard;
