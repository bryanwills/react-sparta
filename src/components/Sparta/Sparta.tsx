import React from 'react';

const Sparta: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 border border-zinc-900">
      <div className="max-w-lg mx-auto p-8 mt-8 rounded shadow bg-white">
        <h1 className="text-3xl font-bold mb-6">Sparta Mortgage LLC</h1>
        <p className="mb-4">
          Sparta Mortgage LLC is a single owner, independent mortgage broker licensed in Florida, Georgia, Indiana,
          Kentucky, and South Carolina. Sparta Mortgage formally began in May 2019 and even though very young, the owner
          brings a background in brokering continuously since 2003, knowledge, integrity, and over 700 successful
          transactions. Sparta Mortgage is and will remain very small. Bigger is not better in the mortgage industry.
          Independent mortgage brokers often are small and flourish because clients like yourself see the value in what
          they offer.
        </p>

        <p className="mb-4 font-bold">
          Here is why you should consider working with a broker like Sparta over banks, credit unions, and lenders:
        </p>

        <ul className="list-disc pl-6">
          <li>💵 Extremely competitive interest rates!</li>
          <li>🚫 No fees!</li>
          <li>💵 Very low overhead!</li>
          <li>🌎 Virtually all loan programs!</li>
          <li>💪 Aggressive lending standards!</li>
          <li>👨‍🎓 Licensing required</li>
          <li>💼 Experience</li>
          <li>👓 Specialization</li>
          <li>💡 Problem Solving</li>
          <li>🕔 Accessibility</li>
        </ul>
      </div>
    </div>
  );
};

export default Sparta;
