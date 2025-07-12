import React from 'react';

function AnswerCard({ answer, citations, onCitationClick }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Answer</h2>
      <p className="mb-4 text-gray-800">{answer}</p>
      <div className="border-t pt-3">
        <h3 className="text-md font-medium mb-1">Citations</h3>
        {citations.map((cite, index) => (
          <p
            key={index}
            className="text-blue-600 underline cursor-pointer"
            onClick={onCitationClick}
          >
            {cite.text} (Source: {cite.source})
          </p>
        ))}
      </div>
    </div>
  );
}

export default AnswerCard;