import React from 'react';

function AnswerCard({ answer, citations, onCitationClick }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <div className="text-gray-800 whitespace-pre-line">{answer}</div>

      {citations.map((cite, index) => (
        <div
          key={index}
          className="flex items-start bg-pink-100 border border-pink-300 rounded-md p-3 shadow"
        >
          <div className="flex-grow">
            <p className="font-semibold">📄 {cite.source}</p>
            <p className="text-sm text-gray-700">{cite.text}</p>
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