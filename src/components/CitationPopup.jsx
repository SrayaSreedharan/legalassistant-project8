import React from 'react';

function CitationPopup({ citation, onClose }) {
  if (!citation) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Citation Details</h2>
          <button onClick={onClose} className="text-red-600 font-bold">✖</button>
        </div>

        <div className="p-4 space-y-4 text-sm text-gray-800">
          <p><strong>📄 Case:</strong> {citation.source}</p>
          <p><strong>Quote:</strong> {citation.text}</p>

          <button
            onClick={() => window.open(citation.link, '_blank')}
            className="inline-block mt-2 text-blue-600 underline"
          >
            📥 View Full PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default CitationPopup;
