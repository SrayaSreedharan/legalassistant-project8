import React from 'react';

function AnswerCard({ answer, citations, onCitationClick }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* Answer Section */}
      <div className="text-gray-800 space-y-4">
        <p>
          Yes, under Section 166 of the Motor Vehicles Act, 1988, where the deceased was <strong>self-employed</strong> and aged <strong>54–55 years</strong> at the time of death, the claimant is <strong>entitled to an addition towards future prospects</strong>.
        </p>

        <h3 className="font-bold text-lg">Legal Position:</h3>
        <p>
          The <strong>Punjab and Haryana High Court</strong>, in <em>Dani Devi v. Pritam Singh</em>, held:
        </p>
        <blockquote className="pl-4 border-l-4 border-gray-400 italic text-sm text-gray-700">
          “...as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects.”<br />
          [Para 7, citing <em>National Insurance Co. Ltd. v. Pranay Sethi</em> and <em>Sarla Verma v. DTC</em>]
        </blockquote>

        <h3 className="font-bold text-lg">Summary of Entitlement:</h3>
        <ul className="list-disc list-inside text-sm">
          <li><strong>Category:</strong> Self-employed</li>
          <li><strong>Age:</strong> 54–55 years</li>
          <li><strong>Future Prospects Addition:</strong> 10% of the annual income</li>
        </ul>
      </div>

      {/* Citation Card */}
      {citations.map((cite, index) => (
        <div
          key={index}
          className="flex items-start bg-pink-100 border border-pink-300 rounded-md p-3 shadow"
        >
          <div className="flex-grow">
            <p className="font-semibold">📄 Dani Vs Pritam (Future 10% at age 54–55)</p>
            <p className="text-sm text-gray-700">PDF</p>
          </div>
          <button
            onClick={onCitationClick}
            className="ml-4 text-blue-600 underline"
          >
            View PDF
          </button>
        </div>
      ))}
    </div>
  );
}

export default AnswerCard;